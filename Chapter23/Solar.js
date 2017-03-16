"use strict";

// Get the canvas context
var solarCanvas = document.getElementById("solarSystem");
var solarContext = solarCanvas.getContext("2d");

function animateSS() {
    var ss = document.getElementById('solarSystem')
    var ssContext = ss.getContext('2d');

    // Clear the canvas and draw the background
    ssContext.clearRect(0, 0, 450, 400); 
    ssContext.fillStyle = "#2F1D92";
    ssContext.fillRect(0, 0, 450, 400);

    ssContext.save();

    // Draw the sun
    ssContext.translate(220, 200);
    ssContext.fillStyle = "yellow";
    ssContext.beginPath();
    ssContext.arc(0, 0, 15, 0, Math.PI * 2, true);
    ssContext.fill();

    // Draw the earth orbit
    ssContext.scale(1.1, 1);
    ssContext.strokeStyle = "black";
    ssContext.beginPath();
    ssContext.arc(0, 0, 150, 0, Math.PI * 2); 
    ssContext.stroke();

    // Compute the current time in seconds (use the milliseconds
    // to allow for fractional parts).
    var now = new Date();
    var seconds = ((now.getSeconds() * 1000) + now.getMilliseconds()) / 1000;

    //---------------------------------------------
    // Earth
    //---------------------------------------------
    // Rotate the context once every 60 seconds
    var anglePerSecond = ((Math.PI * 2) / 60);
    ssContext.rotate(anglePerSecond * seconds);
    ssContext.translate(150, 0);

    // Draw the earth
    ssContext.fillStyle = "green";
    ssContext.beginPath();
    ssContext.arc(0, 0, 10, 0, Math.PI * 2, true);
    ssContext.fill();

    //---------------------------------------------
    // Moon
    //---------------------------------------------
    // Rotate the context 12 times for every earth revolution
    anglePerSecond = 12 * ((Math.PI * 2) / 60);
    ssContext.rotate(anglePerSecond * seconds);
    ssContext.translate(0, 35);

    // draw the moon
    ssContext.fillStyle = "white";
    ssContext.beginPath();
    ssContext.arc(0, 0, 5, 0, Math.PI * 2, true);
    ssContext.fill();

    ssContext.restore()
}

setInterval(animateSS, 100);
