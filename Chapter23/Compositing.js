"use strict";

for (var i = 1; i <= 11; i++) {
    var c = document.getElementById("composting" + i);
    var cContext = c.getContext("2d");

    cContext.fillStyle = "red";
    cContext.fillRect(10, 20, 80, 80);

    switch (i) {
        case 1: cContext.globalCompositeOperation = "source-over"; break;
        case 2: cContext.globalCompositeOperation = "destination-over"; break;
        case 3: cContext.globalCompositeOperation = "source-in"; break;
        case 4: cContext.globalCompositeOperation = "destination-in"; break;
        case 5: cContext.globalCompositeOperation = "source-out"; break;
        case 6: cContext.globalCompositeOperation = "destination-out"; break;
        case 7: cContext.globalCompositeOperation = "source-atop"; break;
        case 8: cContext.globalCompositeOperation = "destination-atop"; break;
        case 9: cContext.globalCompositeOperation = "xor"; break;
        case 10: cContext.globalCompositeOperation = "copy"; break;
        case 11: cContext.globalCompositeOperation = "lighter"; break;
    }

    cContext.fillStyle = "blue";
    cContext.beginPath();
    cContext.arc(65, 75, 40, 0, (Math.PI * 2), true);
    cContext.fill();
}
