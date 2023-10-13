// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.

var age = 21;
alert("I am " + age + " years old");

// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

var times = 14;
alert("You have visit this site " + times + " times");

// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

var birthYear = 2002;
document.write("<h1>My Birth Year is " + birthYear + "</h1>");

// VARIABLES FOR NUMBERS | JAVASCRIPT

// Page 2 of 3

// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name

var visitorName = "Ali";

// b. Product title
var product = "J. Jeans";
// c. Quantity i.e. how many products a visitor wants to
// order

var quantity = 5;

// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

document.write(
  "<p><b>" +
    visitorName +
    "</b> ordered <b>" +
    quantity +
    " " +
    product +
    "</b> on XYZ Clothing store<p>"
);
