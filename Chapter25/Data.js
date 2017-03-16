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

// Specify the source for each image
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

// Define an array of Image objects
var images = [
        imgPawn ,
        imgRook ,
        imgKnight ,
        imgBishop ,
        imgQueen ,
        imgKing ,
        imgPawnW ,
        imgRookW ,
        imgKnightW ,
        imgBishopW ,
        imgQueenW ,
        imgKingW 
];

// PieceTypes
var pieceTypes = [
    { name: "pawn", height: "50", width: "28", blackImage: 0, whiteImage: 6 },
    { name: "rook", height: "60", width: "36", blackImage: 1, whiteImage: 7 },
    { name: "knight", height: "60", width: "36", blackImage: 2, whiteImage: 8 },
    { name: "bishop", height: "65", width: "30", blackImage: 3, whiteImage: 9 },
    { name: "queen", height: "70", width: "32", blackImage: 4, whiteImage: 10 },
    { name: "king", height: "70", width: "28", blackImage: 5, whiteImage: 11 }
];

// Pieces
var pieces = [
    { type: "pawn", color: "white", row: 6, column: 0, pos: "a2", killed: false },
    { type: "pawn", color: "white", row: 6, column: 1, pos: "b2", killed: false },
    { type: "pawn", color: "white", row: 6, column: 2, pos: "c2", killed: false },
    { type: "pawn", color: "white", row: 6, column: 3, pos: "d2", killed: false },
    { type: "pawn", color: "white", row: 6, column: 4, pos: "e2", killed: false },
    { type: "pawn", color: "white", row: 6, column: 5, pos: "f2", killed: false },
    { type: "pawn", color: "white", row: 6, column: 6, pos: "g2", killed: false },
    { type: "pawn", color: "white", row: 6, column: 7, pos: "h2", killed: false },
    { type: "rook", color: "white", row: 7, column: 0, pos: "a1", killed: false },
    { type: "rook", color: "white", row: 7, column: 7, pos: "h1", killed: false },
    { type: "knight", color: "white", row: 7, column: 1, pos: "b12", killed: false },
    { type: "knight", color: "white", row: 7, column: 6, pos: "g1", killed: false },
    { type: "bishop", color: "white", row: 7, column: 2, pos: "c1", killed: false },
    { type: "bishop", color: "white", row: 7, column: 5, pos: "f1", killed: false },
    { type: "queen", color: "white", row: 7, column: 3, pos: "d1", killed: false },
    { type: "king", color: "white", row: 7, column: 4, pos: "e1", killed: false },
    { type: "pawn", color: "black", row: 1, column: 0, pos: "a7", killed: false },
    { type: "pawn", color: "black", row: 1, column: 1, pos: "b7", killed: false },
    { type: "pawn", color: "black", row: 1, column: 2, pos: "c7", killed: false },
    { type: "pawn", color: "black", row: 1, column: 3, pos: "d7", killed: false },
    { type: "pawn", color: "black", row: 1, column: 4, pos: "e7", killed: false },
    { type: "pawn", color: "black", row: 1, column: 5, pos: "f7", killed: false },
    { type: "pawn", color: "black", row: 1, column: 6, pos: "g7", killed: false },
    { type: "pawn", color: "black", row: 1, column: 7, pos: "h7", killed: false },
    { type: "rook", color: "black", row: 0, column: 0, pos: "a8", killed: false },
    { type: "rook", color: "black", row: 0, column: 7, pos: "h8", killed: false },
    { type: "knight", color: "black", row: 0, column: 1, pos: "b8", killed: false },
    { type: "knight", color: "black", row: 0, column: 6, pos: "g8", killed: false },
    { type: "bishop", color: "black", row: 0, column: 2, pos: "c8", killed: false },
    { type: "bishop", color: "black", row: 0, column: 5, pos: "f8", killed: false },
    { type: "queen", color: "black", row: 0, column: 3, pos: "d8", killed: false },
    { type: "king", color: "black", row: 0, column: 4, pos: "e8", killed: false }
];
