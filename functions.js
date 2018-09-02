// contents
// 1. Hoisting
// 2. recursive
// 3. functiona as values

// A function is a group of reusable code which can be called anywhere in your
// program. This eliminates the need of writing the same code again and again. It
// helps programmers in writing modular codes. Functions allow a programmer to
// divide a big program into a number of small and manageable functions.
// Like any other advanced programming language, JavaScript also supports all the
// features necessary to write modular code using functions. You must have seen
// functions like alert() and write() in the earlier chapters. We were using these
// functions again and again, but they had been written in core JavaScript only
// once.
function calculateAge(yearOfBirth){
  var age = 2018 - yearOfBirth;
  return age;
}

function yearsUntilRetirement(name, year){
  var age = calculateAge(year);
  var retirement = 65 - age;
  console.log('Name : '+name + ' Retires In :' +retirement+' Age :' + age)
}



// Hoisting
// So trying to use the variable before declaring it
calculateAgeNew(1953);
function calculateAgeNew(year){
  console.log(2016 - year);
}

// Print the name and value of each property of o. Return undefined.
function printprops(o) {
for(var p in o)
console.log(p + ": " + o[p] + "\n");
}
// Compute the distance between Cartesian points (x1,y1) and (x2,y2).
function distance(x1, y1, x2, y2) {
var dx = x2 - x1;
var dy = y2 - y1;
return console.log(Math.sqrt(dx*dx + dy*dy));
}
// A recursive function (one that calls itself) that computes factorials
// Recall that x! is the product of x and all positive integers less than it.
var factorial = function(number) {
  if (number <= 0) { // terminal case
    return 1;
  } else { // block to execute
    return (number * factorial(number - 1));
  }
};
// This function expression defines a function that squares its argument.
// Note that we assign it to a variable
var square = function(x) { return console.log(x*x); }
// Function expressions can include names, which is useful for recursion.
var f = function fact(x) { if (x <= 1) return 1; else return (x*fact(x-1))};
// Function expressions can also be used as arguments to other functions:

// Function expressions are sometimes defined and immediately invoked:
var tensquared = function qube(x) {return x*x*x;};

// nested function
function hypotenuse(a, b) {
  function square(x) { return x*x; }
  return console.log( Math.sqrt(square(a) + square(b)));
}


//invocations
yearsUntilRetirement('John', '1980')
hypotenuse(9, 25)
square(9)
console.log(f(10))
console.log(tensquared(2))
console.log(factorial(8))
