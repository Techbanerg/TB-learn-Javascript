// What is an Operator?
// Let us take a simple expression 4 + 5 is equal to 9. Here 4 and 5 are called
// operands and ‘+’ is called the operator. JavaScript supports the following
// types of operators.
// Arithmetic Operators
// Comparison Operators
// Logical (or Relational) Operators
// Assignment Operators
// Conditional (or ternary) Operators
// Let’s have a look at all the operators one by one
var A = 30;
var B = 5;

console.info('Addition:', A+B);
console.info('Substraction:', A-B);
console.info('Multiplication:', A*B);
console.info('Disvision:', A/B);
console.info('Modulus:', A % B);
console.info('Increment:', A++);
console.info('Decrement:', B--);

// Comparison Operators
// JavaScript supports the following comparison operators:
// Conditions
console.log('Comparison Equals:', (A==B))
console.log('Comparison NotEquals:', (A!=B))
console.log('Comparison GreaterthanEquals:', (A>=B))
console.log('Comparison LessThanEquals:', (A<=B))

// Logical Operators
// JavaScript supports the following logical operators:
console.log('Logical And operator:', (A && B > 0))
console.log('Logical Or operator:', (A || B > 5) )
console.log('Logical Not operator:', (A && B != 0))
//Ternary operator
// We will discuss two operators here that are quite useful in JavaScript: the
// conditional operator (? :) and the typeof operator.
// Conditional Operator (? :)
// The conditional operator first evaluates an expression for a true or false value
// and then executes one of the two given statements depending upon the result of
// the evaluation.
var result = '';
result = (A < B) ? 10 : 20;
console.log('result:' ,result)

// Typeof Operator
// The typeof operator is a unary operator that is placed before its single operand,
// which can be of any type. Its value is a string indicating the data type of the
// operand.
// The typeof operator evaluates to "number", "string", or "boolean" if its operand
// is a number, string, or boolean value and returns true or false based on the
// evaluation.
// Here is a list of the return values for the typeof Operator
var result2 = '';
result2 = (typeof A == "string" ? "B is String" : "B is Numeric");
console.log(result2)
