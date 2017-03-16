"use strict";

// setup namespaces
(function () {
    window.mySample = window.mySample || {};

    // Add some other nodes in the hierarchy
    window.mySample.things = window.mySample.things || {};
    window.mySample.things.helpers = window.mySample.things.helpers || {};
    window.mySample.otherThings = window.mySample.otherThings || {};

    // Setup a shortcut
    window.helpers = window.mySample.things.helpers;

    // Now add some members
    window.mySample.things.count = window.mySample.things.count || 0;
    window.mySample.things.helpers.logger = function (msg) {
        console.log(msg);
    }
})();

var redObject = new Object();
redObject.color = "Red";
redObject.count = 5;
redObject.log = function() {
    console.log("Quantity: " + this.count + ", Color: " + this.color);
}
redObject.log();

/*
function Item(color, count){
    this.color = color;
    this.count = count;
    
    // Handle missing parameters
    if (color == undefined){this.color = "Black";}
    if (count == undefined){this.count = 0;}

    this.log = function () {
        console.log("Quantity: " + this.count + ", Color: " + this.color);
    };
}

Item.prototype.isAvailable = true;
Item.prototype.add = function(n){this.count += n;};

var blueObject = new Item("Blue", 3);
if (blueObject.isAvailable){
    console.log("The blue object is available");
}

function SpecialItem(name, color, count) {
    Item.call(this, color, count);
    this.name = name;
    this.describe = function() {
       console.log(this.name + ": color=" + this.color);  
    };
}

// Setup the inheritance using prototypical inheritance
//SpecialItem.prototype = new Item();

// Setup the inheritance using classical inheritance
SpecialItem.prototype = Object.create(Item.prototype);
SpecialItem.prototype.constructor = SpecialItem;
*/

// Use the new class, constructor, extends, and super keywords
class Item {
    constructor(color, count) {
        this.color = color;
        this.count = count;
        this.log = function () {
            console.log("Quantity: " + this.count + ", Color: " + this.color);
        };
    }
}

class SpecialItem extends Item {
    constructor(name, color, count) {
        super(color, count);
        this.name = name;
        this.describe = function () {
            console.log(this.name + ": color=" + this.color);
        }
    }
};

Item.prototype.isAvailable = true;
Item.prototype.add = function(n){this.count += n;};

var special = new SpecialItem("Widget", "Purple", 4);
special.log();
special.describe();
console.log(special);

// Properties
var test = "Some string";
console.log(test + ': ' + isNaN(test));
test = 5;
console.log(test + ': ' + isNaN(test));

// Attributes
var redObject = new Item("Red", 5);
console.log(Object.getOwnPropertyDescriptor(redObject, "color"));

Object.defineProperty(redObject, "color", { writable: false });

// Special Types
var x = null;
var y;
console.log(typeof x);
console.log(typeof y);

var myEnum = {1: "Red", 2: "Green", 3: "Blue"};
console.log(myEnum[2]);

// Variable Scope
function testScope(){
    var localScope = 5;
    if (localScope > 3){
        var localScope2 = 7;
        let blockScope = 4;
        console.log(localScope2 + blockScope); // logs 11
    }
    console.log(localScope2); // logs 7
    //console.log(blockScope);  // this will fail
}

testScope();

var x = 1; // global scope

function testX(x1){
    var x = 2;  // local scope
    console.log("original x value passed in: " + x1);
    console.log("local-scoped x: " + x);
}

testX(x);
console.log("global-scoped x: " + x);

// Strict Mode
var myIntervalCounter = 0;

for (var i=0; i < 10; i++)
{
    if (i % 2 == 0) { myIntervalCounter = i * 2; } // error in strict mode
}

console.log(myIntervalCounter);

// Functions

var functionA = function(){
    var x = 1;
    var functionB = function(){
        var y = 2;
        var functionC = function(){
            var z = 3;
            console.log(x+y+z);
        }
        functionC();
    }
    functionB();
}

functionA();

var functionA = function(){
    var x = 1;
    var functionB = function(){
        var y = 2;
        var functionC = function(){
            var z = 3;
            console.log(x+y+z);
        }
        return functionC;
    }
    return functionB();
}

var closure = functionA();
closure();

// Context
function Vehicle(weight, cost) {
    this.weight = weight;
    this.cost = cost;
}

function Truck(weight, cost, axles, length) {
    Vehicle.call(this, weight, cost)
    this.axles = axles;
    this.length = length;
}

var tonka = new Truck(5, 25, 3, 15);
console.log(tonka);

// Using Namespaces
mySample.things.helpers.logger("some text");
helpers.logger("some more text");

// Exception
try {
    var x = 5;
    var y = 0;
    if (y == 0) {
        throw("Can't divide by zero")
    }
    console.log(x/y);        
}
catch(e) {
    console.log("Error: " + e);
}
finally {
    console.log("Finally block executed");
}

// Promises
function getNumber(bEven) {
    return new Promise(function (fulfill, reject) {
        // perform some long running task
        window.setTimeout(
            function () {
                var i = Math.round((Math.random() * 100),0);
                if ((i % 2 != 0 && bEven) ||
                    (i % 2 == 0 && !bEven)) {
                    reject(i);
                }
                else {
                    fulfill(i);
                }
            }, 2000);
    });
}

var p = getNumber(true);

p.then 
    (
    function (i) { console.log("Promise fulfilled, i = " + i); }, 
    function (i) { console.log("Promise rejected, i = " + i);  }
    );

/*
p.then
    (
    function (i) { console.log("Promise fulfilled, i = " + i);}
    )
.catch
    (
    function (i) { console.log("Promise rejected, i = " + i); }
    );
*/
console.log("Promise made...");

// Array Methods
// Accessing Elements
var arr = ["red", "green", "blue", "yellow", "orange", "purple"];

arr.unshift("white");
arr.push("black");

var numberOfElements = arr.length;

// Outputting an Array
console.log(arr);
console.log(arr.valueOf());
console.log(arr.toString());
console.log(arr.join());

// Manipulating Elements
var arr1 = ["a", "b", "c"];
var arr2 = ["x", "y", "z"];
var combined = arr1.concat(arr2);

arr.splice(2, 1);                 // removes one element at index 2
arr.splice(2, 0, "teal", "pink"); // adds two elements at index 2
arr.splice(2, 1, "teal", "pink"); // removes 1 element and inserts 2

function numericSort(a, b){
    if(isNaN(a) || isNaN(b)) return 0; // Can't compare if not numeric
    if(a == b) return 0;
    if(a < b) return -1;
    if(a > b) return 1;
}

var numbers = [1, 33, 7, 12, 5];
numbers.sort(numericSort);
console.log(numbers);

var numbers = [1, 2, 3];
numbers.reverse();
console.log(numbers);

// Searching
var arr = ["red", "green", "blue", "yellow", "blue", "purple"];
arr.indexOf("blue");          // return 2
arr.lastIndexOf("blue");      // returns 4
arr.indexOf("blue", 3);       // returns 4
arr.lastIndexOf("blue", -3);  // returns 2

function isPrimary(color, index, array) {
    if (color == "red" || color == "blue" || color == "yellow"){
        return true;
    }
    return false;
}

console.log(arr.find(isPrimary));

// Creating Subsets
var subset = arr.filter(isPrimary);
console.log(subset);

function isOdd(element, index, array){
    if (isNaN(element)) {return false;}
    if (element % 2 != 0) {return true;}
    return false;
}

var boolArray = numbers.map(isOdd);
console.log(boolArray);

console.log(numbers.some(isOdd));  // returns true
console.log(numbers.every(isOdd)); // returns false

// Processing
function process(item, index, array) {
    console.log("[" + index + "]: " + item + ", in array ", array.toString());
}

arr.forEach(process);

function sumArray(total, item, index, array) {
    return total + item;
}

console.log(numbers);
var sum = numbers.reduce(sumArray, 0);
console.log(sum);


