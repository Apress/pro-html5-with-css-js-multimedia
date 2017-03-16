"use strict";

// Get the canvas context
var chessCanvas = document.getElementById("board");
var chessContext = chessCanvas.getContext("2d");

// Define the chess piece images
var imgPawn = new Image();
var imgRook = new Image();
var imgKnight = new Image();
var imgBishop = new Image();
var imgQueen = new Image();
var imgKing = new Image();
var imgPawnW = new Image();
var imgRookW = new Image();
var imgKnightW = new Image();
var imgBishopW = new Image();
var imgQueenW = new Image();
var imgKingW = new Image();

// Define an array to store 32 pieces
var pieces = new Array(32);
var moveNumber = -1;
var timer;

// Draw the chess board
function drawBoard() {

    chessContext.clearRect(0, 0, 600, 600);

    var gradient = chessContext.createLinearGradient(0, 600, 600, 0);
    gradient.addColorStop(0.0, "#D50005");
    gradient.addColorStop(0.5, "#E27883");
    gradient.addColorStop(1.0, "#FFDDDD");

    // Clip the path
    chessContext.beginPath();
    chessContext.arc(300, 300, 300, 0, (Math.PI * 2), true);
    chessContext.clip();

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

    drawAllPieces();
}

loadImages();
createPieces();
setTimeout(drawBoard, 1000);
timer = setInterval(makeNextMove(), 2000);

function loadImages() {
    imgPawn.src = "Images/pawn.png";
    imgRook.src = "Images/rook.png";
    imgKnight.src = "Images/knight.png";
    imgBishop.src = "Images/bishop.png";
    imgQueen.src = "Images/queen.png";
    imgKing.src = "Images/king.png";
    imgPawnW.src = "Images/wpawn.png";
    imgRookW.src = "Images/wrook.png";
    imgKnightW.src = "Images/wknight.png";
    imgBishopW.src = "Images/wbishop.png";
    imgQueenW.src = "Images/wqueen.png";
    imgKingW.src = "Images/wking.png";
}

// Define a class to store the piece properties
function ChessPiece() {
    this.image = null;
    this.x = 0;
    this.y = 0;
    this.height = 0;
    this.width = 0;
    this.killed = false;
}

// Draw a chess piece
function drawPiece(p) {
    if (!p.killed)
        chessContext.drawImage(p.image,
                               (75 - p.width) / 2 + (75 * p.x),
                               73 - p.height + (75 * p.y),
                               p.width,
                               p.height);
}

// Draw all of the chess pieces
function drawAllPieces() {
    for (var i = 0; i < 32; i++) {
        if (pieces[i] != null) {
            drawPiece(pieces[i]);
        }
    }
}

function makeNextMove() {
    function inner() {
        if (moveNumber === 1) {
            pieces[20].y--;
        }
        if (moveNumber === 2) {
            pieces[4].y += 2;
        }
        if (moveNumber === 3) {
            pieces[29].y = 4;
            pieces[29].x = 2;
        }
        if (moveNumber === 4) {
            pieces[6].y++;
        }
        if (moveNumber === 5) {
            pieces[30].x = 5;
            pieces[30].y = 5;
        }
        if (moveNumber === 6) {
            pieces[7].y++;
        }
        if (moveNumber === 7) {
            pieces[30].x = 5;
            pieces[30].y = 1;
            pieces[5].killed = true;
            clearInterval(timer);
        }

        moveNumber++;

        drawBoard();
        drawAllPieces();

        if (moveNumber > 7) {
            chessContext.font = "30pt Arial";
            chessContext.fillStyle = "black";
            chessContext.fillText("Checkmate!", 200, 220);
        }
    }

    return inner;
}

  

