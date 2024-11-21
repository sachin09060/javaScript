// Variables in JavaScript
// In JavaScript, you can declare variables using three main keywords: var, let, and const.
// var (Old way, now less recommended): var can be used to declare a variable, but it has function-level scope, which can lead to confusion.

var greet = "Good Morning";
var person = "Sachin";
console.log(greet + ", " + person);

// let (Recommended for most cases): let is block-scoped, meaning it is confined to the block (like a loop or conditional) where it is defined. This makes it more predictable and safer to use.

let person1 = "Rashmi";
console.log(greet + ", " + person1);

if (true) {
  console.log(greet + ", " + person + " and " + person1);
}

// const (Used for constants): const is used to declare variables that should not be reassigned after their initial value. It is also block-scoped.

const age = 24;

if (true) {
  console.log(
    greet +
      ", " +
      person +
      " and " +
      person1 +
      " " +
      "You both completed " +
      age +
      "years old!"
  );
}

// Variable Hoisting in JavaScript
// In JavaScript, hoisting refers to the behavior where variable and function declarations are moved to the top of their containing scope
// (e.g., function or global scope) during the execution phase, before any code is actually executed.

// How Hoisting Works:
// Hoisting applies to:
// Variable declarations (but not initializations)
// Function declarations

// Hoisting with var, let, and const,
// 1. Hoisting with var

console.log(
  "The variable x is hoisted to the top of the code, console.log(x) undefined"
);
console.log(x);
console.log("The variable x delcaration");
var x = 20;
console.log("After the initialization, the second console.log(x) prints 10");
console.log(x);

// 2. Hoisting with "let" and "const":
// let and const are block-scoped, and while they are hoisted, they behave differently from var.
// Both are hoisted to the top of the block (or function), but they remain in a "temporal dead zone" until the code execution reaches the line where they are defined.

// This means you cannot access a "let" or "const" variable before its declaration.

console.log(
  "Hosting variable y before initializing, which shows error Cannot access 'y' before initialization"
);
console.log(y);
let y = 50;

console.log(
  "Hosting variable z before initializing, which shows error Cannot access 'z' before initialization"
);
console.log(z);
const z = 50;
