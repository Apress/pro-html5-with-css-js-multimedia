function createPieces() {
    var piece;

    // Black pawns
    for (var i = 0; i < 8; i++) {
        piece = new ChessPiece();
        piece.image = imgPawn,
        piece.x = i;
        piece.y = 1;
        piece.height = 50;
        piece.width = 28;

        pieces[i] = piece;
    }

    // Black rooks
    piece = new ChessPiece();
    piece.image = imgRook;
    piece.x = 0;
    piece.y = 0;
    piece.height = 60;
    piece.width = 36;
    pieces[8] = piece;

    piece = new ChessPiece();
    piece.image = imgRook;
    piece.x = 7;
    piece.y = 0;
    piece.height = 60;
    piece.width = 36;
    pieces[9] = piece;

    // Black knights
    piece = new ChessPiece();
    piece.image = imgKnight;
    piece.x = 1;
    piece.y = 0;
    piece.height = 60;
    piece.width = 36;
    pieces[10] = piece;

    piece = new ChessPiece();
    piece.image = imgKnight;
    piece.x = 6;
    piece.y = 0;
    piece.height = 60;
    piece.width = 36;
    pieces[11] = piece;

    // Black bishops
    piece = new ChessPiece();
    piece.image = imgBishop;
    piece.x = 2;
    piece.y = 0;
    piece.height = 65;
    piece.width = 30;
    pieces[12] = piece;

    piece = new ChessPiece();
    piece.image = imgBishop;
    piece.x = 5;
    piece.y = 0;
    piece.height = 65;
    piece.width = 30;
    pieces[13] = piece;

    // Black queen
    piece = new ChessPiece();
    piece.image = imgQueen;
    piece.x = 3;
    piece.y = 0;
    piece.height = 70;
    piece.width = 32;
    pieces[14] = piece;

    // Black king
    piece = new ChessPiece();
    piece.image = imgKing;
    piece.x = 4;
    piece.y = 0;
    piece.height = 70;
    piece.width = 28;
    pieces[15] = piece;

    // White pawns
    for (var i = 0; i < 8; i++) {
        piece = new ChessPiece();
        piece.image = imgPawnW,
        piece.x = i;
        piece.y = 6;
        piece.height = 50;
        piece.width = 28;

        pieces[16 + i] = piece;
    }

    // White rooks
    piece = new ChessPiece();
    piece.image = imgRookW;
    piece.x = 0;
    piece.y = 7;
    piece.height = 60;
    piece.width = 36;
    pieces[24] = piece;

    piece = new ChessPiece();
    piece.image = imgRookW;
    piece.x = 7;
    piece.y = 7;
    piece.height = 60;
    piece.width = 36;
    pieces[25] = piece;

    // White knights
    piece = new ChessPiece();
    piece.image = imgKnightW;
    piece.x = 1;
    piece.y = 7;
    piece.height = 60;
    piece.width = 36;
    pieces[26] = piece;

    piece = new ChessPiece();
    piece.image = imgKnightW;
    piece.x = 6;
    piece.y = 7;
    piece.height = 60;
    piece.width = 36;
    pieces[27] = piece;

    // White bishops
    piece = new ChessPiece();
    piece.image = imgBishopW;
    piece.x = 2;
    piece.y = 7;
    piece.height = 65;
    piece.width = 30;
    pieces[28] = piece;

    piece = new ChessPiece();
    piece.image = imgBishopW;
    piece.x = 5;
    piece.y = 7;
    piece.height = 65;
    piece.width = 30;
    pieces[29] = piece;

    // White queen
    piece = new ChessPiece();
    piece.image = imgQueenW;
    piece.x = 3;
    piece.y = 7;
    piece.height = 70;
    piece.width = 32;
    pieces[30] = piece;

    // White king
    piece = new ChessPiece();
    piece.image = imgKingW;
    piece.x = 4;
    piece.y = 7;
    piece.height = 70;
    piece.width = 28;
    pieces[31] = piece;
}
