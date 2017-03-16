"use strict";

function toggleSS() {
    for (var i = 0; i < document.styleSheets.length; i++ ) {
        if ((document.styleSheets[i].href &&
             document.styleSheets[i].href.includes("Sample")) ||
            document.styleSheets[i].title == "Shared") {
            document.styleSheets[i].disabled = !document.styleSheets[i].disabled;
            break;
        }
    }
}

function disableAll() {
    for (var i = 0; i < document.styleSheets.length; i++ ) {
        if (!(document.styleSheets[i].href && 
              document.styleSheets[i].href.includes("Sample")) &&
             document.styleSheets[i].title != "Shared") {
            document.styleSheets[i].disabled = true;
        }
    }
}

function enable(color) {
    for (var i = 0; i < document.styleSheets.length; i++ ) {
        if ((document.styleSheets[i].href &&
             document.styleSheets[i].href.includes(color)) ||
            document.styleSheets[i].title == color) {
            document.styleSheets[i].disabled = false;
        }
        else if (!(document.styleSheets[i].href &&
                   document.styleSheets[i].href.includes("Sample")) &&
                  document.styleSheets[i].title != "Shared") {
            document.styleSheets[i].disabled = true;
        }
    }
}

var newRuleIndex = -1;

function toggleRule() {
    if (newRuleIndex == -1) {
        newRuleIndex = document.styleSheets[0].insertRule("p {border: 1px solid black;}", 1)
    }
    else {
        document.styleSheets[0].deleteRule(newRuleIndex);
        newRuleIndex = -1;
    }
}

function toggleClass() {
    var paragraph = document.querySelector("p");
    if (paragraph) {
        if (paragraph.classList.contains("special")) {
            paragraph.classList.remove("special");
        }
        else {
            paragraph.classList.add("special");
        }

        // This could also be done with the following
        //paragraph.classList.toggle("special");
    }
}

function toggleBackground() {
    var p = document.querySelector("p");
    console.log("Initial style = " + p.style.cssText);

    if (p.style.length == 0) {
        p.style.setProperty("background-color", "yellow", "important");
        console.log("Value: " + p.style.getPropertyValue("background-color"));
        console.log("Priority: " + p.style.getPropertyPriority("background-color"));
    }
    else {
        p.style.removeProperty("background-color");
    }
    console.log("Updated style = " + p.style.cssText);
}

disableAll();
