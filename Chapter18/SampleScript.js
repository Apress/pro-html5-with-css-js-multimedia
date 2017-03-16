"use strict";

function populateBody() {
    var body = document.getElementsByTagName("body")[0];
    var paragraph = document.createElement("p");
    paragraph.innerHTML = "<strong>Hello</strong> World!";
    body.appendChild(paragraph);

    var p = document.createElement("p");
    p.textContent = "This is a test";
    //var text = document.createTextNode("This is a <em>test</em>");
    //p.appendChild(text);
    body.appendChild(p);
}

function populateBodyJQ() {
    /*
    var paragraph = document.createElement("p");
    paragraph.innerHTML = "<strong>Hello</strong> World!";
    $("body").append(paragraph);
    */

    $("body").append("<p><strong>Hello</strong> World!</p>");
    $("body").append('<p>This is a test</p>');
}

populateBodyJQ();
linkAttrJQ();

function linkAttr() {
    var link = document.getElementsByTagName("link")[0];
    link.id = "myID";
    link.className = "myClass";
    link.lang = "en";
    var attr = link.attributes;
    for (var i = 0; i < attr.length; i++) {
        console.log(attr[i].name + "='" + attr[i].value + "'");
    }
}

function linkAttrJQ() {
    /*
    var link = $("link").get(0);
    link.id = "myID";
    link.className = "myClass";
    link.lang = "en";
    */
    
    var $link = $("link").first();
    $link.attr({
        "id":"myID",
        "class":"myClass",
        "lang":"en"
    });
    
    //var $link = $("link").first();
    $.each($link[0].attributes, function(i, attr) {
        console.log(attr.name + "='" + attr.value + "'");
    });
}

