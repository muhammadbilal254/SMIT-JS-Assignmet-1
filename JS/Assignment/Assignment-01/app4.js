// 1. Declare 3 variables in one statement.

var name, age, education;

// 2. Declare 5 legal & 5 illegal variable names.

// 5 legal ✅

var firsName;
var last_name;
var _password;
var textField2;
var $my_1stVariable;

// 5 Illegal ❌

// var 12textfeild ❌
// var first name ❌
// var @education ❌
// var #javascript ❌
// var no-OF-JS ❌

// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”

document.write("<h1>Rules for naming JS variables</h1>");

// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable

document.write(
  "<p>Variable names can only contain $, _ (underscore), letters  and number For example $my_1stVariable</p>"
);

// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name

document.write(
  "<p>Variables must begin with a letter, underscore ( _ ) or $ sign. For example $name, _name or name</p>"
);

// d) Variable names are case _________
document.write("<p>Variable names are case sensitive</p>");

// e) Variable names should not be JS _________

document.write("<p>Variable names should not be JS keyword</p>");
