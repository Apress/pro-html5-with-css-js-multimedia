"use strict";

window.name = "Chapter17";
//var popup = window.open("PopUp2.html", "popup", "height=300,width=400,left=400,top=150,location,toolbar,menubar,scrollbars");

var i = 1;
//var timer = window.setInterval(adjustWindow, 2000);

function adjustWindow() {

    if (i > 9) {
        clearInterval(timer);
    }
    else {
        console.log("outerH: %i, outerW: %i, innerH: %i, innerW: %i, screenX: %i, screenY: %i, scrollX: %i, scrollY: %i",
            popup.outerHeight, popup.outerWidth, popup.innerHeight, popup.innerWidth, popup.screenX, popup.screenY, 
            popup.scrollX, popup.scrollY);        
    }

    switch (i) {
        case 1:
            popup.scrollBy(50, 30);
            break;
        case 2:
            popup.moveBy(50, 50);
            break;
        case 3:
            popup.moveTo(200, 100);
            break;
        case 4:
            popup.resizeBy(50, 50);
            break;
        case 5:
            popup.resizeTo(700, 500);
            break;
        case 6:
            popup.scrollByLines(5);
            break;
        case 7:
            popup.scrollByPages(1);
            break;
        case 8:
            popup.sizeToContent();
            break;
        case 9:
            popup.close();
            break;
    }
    i++;
}

/*
window.alert("This is an alert box.\nThis is a second line");

if (window.confirm("Is it OK to proceed?")) {
    var answer = window.prompt("How many pets do you have?", 0);
    console.log("%i pets were entered.", answer);
}
else {
    console.log("Confirmation failed");
}
*/

// Hold the result from the dialog box
var result = 0;

function showDialog() {
    var dialog = document.getElementById("glass");
    dialog.style.visibility = "visible";
}
function closeDialog() {
    var dialog = document.getElementById("glass");
    dialog.style.visibility = "hidden";
   
}
function OK() {
    var input = document.getElementById("numPets");
    result = input.value;
    closeDialog();

    console.log("#Pets: " + result);
}

// Make sure the dialog starts closed
closeDialog();