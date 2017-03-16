"use strict";

var lbl = document.getElementById("lbl");
var latitude = 37.810579;
var longitude = -122.410546;

var restrooms = [
    { lat: 37.810079, long: -122.410806 },
    { lat: 37.809579, long: -122.410206 },
    { lat: 37.811279, long: -122.410446 }
];

if (navigator.geolocation) {
    navigator.geolocation
        .getCurrentPosition(showLocation,
                            errorHandler,
                            {
                                maximumAge: 100,
                                timeout: 6000,
                                enableHighAccuracy: true
                            });
}
else {
    alert("Geolocation not suported");
}

function showLocation(pos) {
    // Save teh coordintes for later
    latitude = pos.coords.latitude;
    longitude = pos.coords.logitude;

    lbl.innerHTML =
        "Your latitude: " + pos.coords.latitude +
        " and longitude: " + pos.coords.longitude +
        " (Accuracy of: " +  pos.coords.accuracy + " meters)";
}

function errorHandler(e) {
    if (e.code === 1) { // PERMISSION_DENIED
        lbl.innerHTML = "Permission denied. - " + e.message;
    } else if (e.code === 2) { //POSITION_UNAVAILABLE
        lbl.innerHTML = "Make sure your network connection is active and " +
            "try this again. - " + e.message;
    } else if (e.code === 3) { //TIMEOUT
        lbl.innerHTML = "A timeout ocurred; try again. - " + e.message;
    }
}

function DisplayMap() {
    // Override these for testing purposes
    latitude = 37.810579;
    longitude = -122.410546;

    var map = new Microsoft.Maps.Map(document.getElementById('map'), 
        {
        credentials: '<Your Bing Key>',
        center: new Microsoft.Maps.Location(latitude, longitude),
        mapTypeId: Microsoft.Maps.MapTypeId.aerial,
        zoom: 20
        });

    var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), { 
        color: 'orange',
        text: 'X',
        title: 'You are here'
    });
    map.entities.push(pushpin);

    // Display the restroom locations
    markRestrooms(map);
}

function markRestrooms(map) {
    for (var i in restrooms) {
        markRestroom(map, restrooms[i].lat, restrooms[i].long);
    }
}

function markRestroom(map, lat, long) {
    var pushpinOptions = { icon: 'restroom.gif', width: 35, height: 35 };
    var pushpin = new Microsoft.Maps.Pushpin
        (new Microsoft.Maps.Location(lat, long), pushpinOptions);
    map.entities.push(pushpin);
}
