"use strict";

// Get the canvas context
var chessCanvas = document.getElementById("board");
var chessContext = chessCanvas.getContext("2d");
    
var moves = [
    { id: 1, start: "e2", end: "e3" },
    { id: 2, start: "e7", end: "e5" },
    { id: 3, start: "f1", end: "c4" },
    { id: 4, start: "h7", end: "h6" },
    { id: 5, start: "d1", end: "f3" },
    { id: 6, start: "g7", end: "g6" },
    { id: 7, start: "f3", end: "f7" }
];

var moveNumber = 1;
var timer;

drawBoard();

var dbEng = window.indexedDB ||
            window.webkitIndexedDB || // Chrome
            window.mozIndexedDB ||    // Firefox
            window.msIndexedDB;       // IE

var db;  // This is a handle to the database

if (!dbEng)
    alert("IndexedDB is not supported on this browser");
else {
    var request = dbEng.open("Chess", 2);

    request.onsuccess = function (event) {
        db = event.target.result;

        // Add the pieces to the board
        resetBoard();

        // Draw the pieces in their initial positions
        drawAllPieces();

        // Start the animation
        timer = setInterval(makeNextMove, 2000);
    }

    request.onerror = function (event) {
        alert("Please allow the browser to open the database");
    }

    request.onupgradeneeded = function (event) {
        configureDatabase(event);
    }
}

function drawBoard() {
    chessContext.clearRect(0, 0, 600, 600);

    var gradient = chessContext.createLinearGradient(0, 600, 600, 0);
    gradient.addColorStop(0, "#D50005");
    gradient.addColorStop(0.5, "#E27883");
    gradient.addColorStop(1, "#FFDDDD");

    chessContext.fillStyle = gradient;
    chessContext.strokeStyle = "red";

    // Draw the alternating squares
    for (var x = 0; x < 8; x++) {
        for (var y = 0; y < 8; y++) {
            if ((x + y) % 2) {
                chessContext.fillRect(75 * x, 75 * y, 75, 75);
            }
        }
    }

    // Add a border around the entire board
    chessContext.strokeRect(0, 0, 600, 600);
}

function configureDatabase(e) {
    alert("Configuring database - current version is " + e.oldVersion +
          ", requested version is " + e.newVersion);

    db = e.currentTarget.result;

    // Remove all existing data stores
    var storeList = db.objectStoreNames;
    for (var i = 0; i < storeList.length; i++) {
        db.deleteObjectStore(storeList[i]);
    }

    // Store the piece types
    var typeStore = db.createObjectStore
        ("pieceType", { keyPath: "name" });
    
    for (var i in pieceTypes){
        typeStore.add(pieceTypes[i]);
    }

    // Create the piece data store (you'll add
    // the data later)
    var pieceStore = db.createObjectStore
        ("piece", { autoIncrement: true });

    pieceStore.createIndex
        ("piecePosition", "pos", { unique: true });
    
    // Store the moves
    var moveStore = db.createObjectStore
        ("move", { keyPath: "id" });
    
    for (var i in moves) {
        moveStore.add(moves[i]);
    }
}

function resetBoard() {
    var xact = db.transaction(["piece"], "readwrite");
    var pieceStore = xact.objectStore("piece");
    var request = pieceStore.clear();
    request.onsuccess = function(event) {
        for (var i in pieces) {
            pieceStore.put(pieces[i]);
        }
    }
 }

 function drawAllPieces() {
    var xact = db.transaction(["piece", "pieceType"]);

    var pieceStore = xact.objectStore("piece");
    var cursor = pieceStore.openCursor();
    cursor.onsuccess = function (event) {
        var item = event.target.result;
        if (item) {
            if (!item.value.killed) {
                drawPiece(item.value.type,
                          item.value.color,
                          item.value.row,
                          item.value.column,
                          xact);
            }
            item.continue();
        }
    }
}

function drawPiece(type, color, row, column, xact) {
    var typeStore = xact.objectStore("pieceType");
    var request = typeStore.get(type);
    request.onsuccess = function (event) {
        var img;

        if (color === "black") {
            img = images[event.target.result.blackImage];
        }
        else {
            img = images[event.target.result.whiteImage];
        }

        chessContext.drawImage(img,
                     (75 - event.target.result.width) / 2 + (75 * column),
                     73 - event.target.result.height + (75 * row),
                     event.target.result.width,
                     event.target.result.height);
    }
}

function computeRowColumn(oStart, end) {
    oStart.pos = end;
    switch (end.substring(0, 1)) {
        case "a": oStart.column = 0; break;
        case "b": oStart.column = 1; break;
        case "c": oStart.column = 2; break;
        case "d": oStart.column = 3; break;
        case "e": oStart.column = 4; break;
        case "f": oStart.column = 5; break;
        case "g": oStart.column = 6; break;
        case "h": oStart.column = 7; break;
    }

    oStart.row = 8 - parseInt(end.substr(1, 1));
}

function makeNextMove() {

    var xact = db.transaction(["move", "piece"], "readwrite");
    var moveStore = xact.objectStore("move");

    moveStore.get(moveNumber).onsuccess = function (e1) {
        var startPos = e1.target.result.start;
        var endPos = e1.target.result.end;
        var startKey = null;
        var oStart = null;

        var pieceStore = xact.objectStore("piece");
        var index = pieceStore.index("piecePosition");

        index.getKey(startPos).onsuccess = function (e2) {
            startKey = e2.target.result;

            index.get(startPos).onsuccess = function (e3) {
                oStart = e3.target.result;

                // If there is a piece at the ending location, we'll
                // need to update it to prevent a duplicate pos index
                removePiece(endPos, oStart, startKey, pieceStore);
            }
        }
    }
}

function removePiece(endPos, oStart, startKey, pieceStore) {
    var index = pieceStore.index("piecePosition");
    index.getKey(endPos).onsuccess = function (e4) {
        var endKey = e4.target.result;
        if (endKey) {
            //pieceStore.delete(endKey).onsuccess = function (e5) {
            //    movePiece(oStart, startKey, endPos, pieceStore)
            //}
            index.get(endPos).onsuccess = function (e5) {
                var oEnd = e5.target.result;
                oEnd.pos = 'x' + endKey;
                oEnd.killed = true;
                pieceStore.put(oEnd, endKey).onsuccess = function (e6) {
                    movePiece(oStart, startKey, endPos, pieceStore)
                }
            }
        }
        else {
            movePiece(oStart, startKey, endPos, pieceStore);
        }
    }
}

function movePiece(oStart, startID, end, pieceStore) {
    computeRowColumn(oStart, end);

    var startUpdateReq = pieceStore.put(oStart, startID);
    startUpdateReq.onsuccess = function (event) {

        moveNumber++;

        drawBoard();
        drawAllPieces();

        if (moveNumber > 7) {
            clearInterval(timer);
            chessContext.font = "30pt Arial";
            chessContext.fillStyle = "black";
            chessContext.fillText("Checkmate!", 200, 220);
            displayCapturedPieces();
        }
    }
}

function displayCapturedPieces() {
    var xact = db.transaction(["piece"]);
    var textOut = "";

    var pieceStore = xact.objectStore("piece");
    var index = pieceStore.index("piecePosition");

    var keyRange = IDBKeyRange.lowerBound("x");
    var cursor = index.openCursor(keyRange);

    cursor.onsuccess = function (event) {
        var item = event.target.result;
        if (item) {
            textOut += " - " + item.value.color + " " +
                               item.value.type + "\r\n";
            item.continue();
        }
        else if (textOut.length > 0)
            alert("The following pieces were captured:\r\n" + textOut);
    }
}

