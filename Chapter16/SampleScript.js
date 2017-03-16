"use strict";

console.log("Hello World!");
//alert(location);
//location ="http://www.google.com";
//location.search = "?display=true&update=false";

window.onload = function (e) {
    console.log("onload event called");
}
//window.onpopstate = function (e) {
//    console.log("popstate - url: " + location + ", state: " + JSON.stringify(e.state));
//}

/*
console.log("0-length: " + history.length + ", state: " + JSON.stringify(history.state));
history.replaceState({id: 1}, "", location);
history.pushState({id: 2}, "", location);
history.pushState({id: 3}, "", location);
console.log("1-length: " + history.length + ", state: " + JSON.stringify(history.state));
history.go(-1);
history.go(-1);
history.go(1);
history.go(1);
console.log("2-length: " + history.length + ", state: " + JSON.stringify(history.state));
*/

window.status = "Document loaded";

console.info("Formatting: %i, %f, %s, %o", 22.651, Math.PI, "text", screen);

console.time("Stopwatch");
var j = 1;
for (var i = 0; i < 1000; i++) {
    j += j + i;
}
console.info("j = %i", j);
console.timeEnd("Stopwatch");

console.groupCollapsed("Logging a group of records...");
console.log("Log entry #1");
console.log("Log entry #2");
console.log("Log entry #3");
console.groupEnd();

var cache = window.sessionStorage;
cache.clear();
cache.setItem("key1", "This is my saved data");
console.log("Saved data: " + cache.getItem("key1"));
cache.removeItem("key1");
console.log("Saved data: " + cache.getItem("key1"));

function storeCookie(key, value, duration) {
    var expDate = new Date();
    expDate.setTime(expDate.getTime() + duration * 86400000);
    document.cookie = key + "=" + value + ";expires=" + expDate.toUTCString();
}

function removeCookie(key) {
    storeCookie(key, "", 0);
}

function getCookie(key) {
    var cookies = document.cookie.split(';');
    for(var i=0; i<cookies.length; i++) {
        if (cookies[i].trim().indexOf(key + "=") == 0) {
            return cookies[i].trim().substring(key.length + 1);
        }
    }
    return null;
}

storeCookie("Test1", "Test cookie #1", 5);
storeCookie("Test2", "Test cookie #2", 5);
storeCookie("Test3", "Test cookie #3", 5);

console.log(document.cookie);
console.log("Test2:", getCookie("Test2"));
removeCookie("Test2");
console.log("Test2:", getCookie("Test2"));
console.log(document.cookie);

function logMessage() {
    console.log("The timer went off!");
}

var timer = setTimeout(logMessage, 2000);

// Don't call this or the timer will never fire
//clearTimeout(timer);
