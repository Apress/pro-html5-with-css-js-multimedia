var map = document.getElementById("map");

for (var i=0; i<States.length; i++) {
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.id = States[i].StateCode;
    path.setAttribute("class", States[i].StateName)
    path.setAttribute("d", States[i].Path);
    map.appendChild(path);
}

function adjustStates() {
    var paths = document.getElementsByTagName("path");
    for (var i = 0; i < paths.length; i++) {
        paths[i].setAttribute("fill", "khaki");
        paths[i].addEventListener("mouseover", hoverState, true);
        paths[i].addEventListener("mouseout", unhoverState, true);
        paths[i].addEventListener("click", selectState, true);
    }

    var path = document.getElementById("VA");
    path.setAttribute("fill", "teal");
}

function hoverState(e) {
    var event = e || window.event;
    var state = event.target.getAttribute("id");
    var path = document.getElementById(state);
    path.setAttribute("fill-opacity", "0.5");
}

function unhoverState(e) {
    var event = e || window.event;
    var state = event.target.getAttribute("id");
    var path = document.getElementById(state);
    path.setAttribute("fill-opacity", "1.0");
}

adjustStates();

// Setup some global variables
var timer;
var stateCode;
var stateName;
var animate;
var angle;

function selectState(e) {
    var event = e || window.event;

    // Get the state code and state name
    stateCode = event.target.getAttribute("id");
    stateName = event.target.getAttribute("class");

    // Get the selected path element and then make a copy of it
    var path = document.getElementById(stateCode);
    animate = path.cloneNode(false);

    // Set some display properties and add the copy to the document
    animate.setAttribute("fill-opacity", "1.0");
    animate.setAttribute("stroke-width", "3");
    document.getElementById("map").appendChild(animate);

    angle = 0;

    // Setup a timer to run every 10 msec
    timer = setInterval(function () { animateState(); }, 10);
}

function animateState() {
    angle += 1;

    // If we’ve rotated 360 degress, stop the timer, destroy the copy
    // of the element, and show an alert
    if (angle > 360) {
        clearInterval(timer);
        animate.setAttribute("visibility", "hidden");
        var old = document.getElementById("map").removeChild(animate);

        alert(stateCode + " - " + stateName);

        return;
    }

    // Change the image rotation
    //animate.style.webkitTransform = "rotateY(" + Math.round(angle) + "deg)";
    animate.style.transform = "rotateY(" + Math.round(angle) + "deg)";
}

