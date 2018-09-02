// This tutorial is about javascript variables//
// One of the most fundamental characteristics of a programming language is the
// set of data types it supports. These are the type of values that can be
// represented and manipulated in a programming language.
// JavaScript allows you to work with three primitive data types:
// Numbers, e.g., 123, 120.50 etc.
// Strings of text, e.g. "This text string" etc.
// Boolean, e.g. true or false.
// JavaScript also defines two trivial data types, null and undefined, each of
// which defines only a single value. In addition to these primitive data types,
// JavaScript supports a composite data type known as object

var name = "Shaun is a wonderful person";
var money;
money = 2000.50;
console.log('Salary:', money);
console.info(name);

//JavaScript Variable Scope
//The scope of a variable is the region of your program in which it is defined.
//JavaScript variables have only two scopes.
//Global Variables: A global variable has global scope which means it can
//be defined anywhere in your JavaScript code.
//Local Variables: A local variable will be visible only within a function
//where it is defined. Function parameters are always local to that function

var myVar = "global"; // Declare a global variable
function checkscope( ) {
  var myVar = "local"; // Declare a local variable
  console.info(myVar);
}
checkscope()

//JavaScript Variable Names
// While naming your variables in JavaScript, keep the following rules in mind.
// You should not use any of the JavaScript reserved keywords as a variable
// name. These keywords are mentioned in the next section. For example,
// break or boolean variable names are not valid.
// JavaScript variable names should not start with a numeral (0-9). They
// must begin with a letter or an underscore character. For
// example, 123test is an invalid variable name but _123test is a valid one.
// JavaScript variable names are case-sensitive. For example, Name and
// name are two different variables.
