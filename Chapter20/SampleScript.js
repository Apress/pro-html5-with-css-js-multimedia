"use strict";

function someAction(e) {
    console.log(e.type);
    console.log(e.target);
    console.log(e.currentTarget);
    //alert("Taking some action...");
}

var div = document.getElementById("div2");
div.addEventListener("click", someAction);
//div.addEventListener("click", someAction, true);
//div.onclick = someAction;

var button = document.getElementById("removeHandlers");
button.addEventListener("click", removeHandlers, false);

/*
var captureCount = 0;
var bubbleCount = 0;

function incrementCapture() {
    captureCount++;    
}
function incrementBubble() {
    bubbleCount++;
}
function clearCounts() { // called on window capture
    captureCount = 1; // include this event in the count
    bubbleCount = 0;
}
function reportCounts() { // called on window bubble
    bubbleCount++;  // include this event in the count
    alert("Capture: " + captureCount + ", Bubble: " + bubbleCount);
}

var elements = document.querySelectorAll("*");
for (var i = 0; i < elements.length; i++ ) {
    elements[i].addEventListener("click", incrementCapture, true);
    elements[i].addEventListener("click", incrementBubble, false);
}

document.addEventListener("click", incrementCapture, true);
document.addEventListener("click", incrementBubble, false);

window.addEventListener("click", clearCounts, true);
window.addEventListener("click", reportCounts, false);
*/

function removeHandlers() {
    var div = document.getElementById("div2");
    div.removeEventListener("click", someAction);
}