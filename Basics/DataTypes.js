// Data Types
// JavaScript has several types of data that you can work with. They are divided into "primitive types" and "reference types".
// 1. Primitive Data Types:
// Number: Numeric values (both integers and floating-point numbers).
console.log("Number type examples!");
var a = 20;
let b = 30;
const c = 40;

console.log("a = " + a + ", " + "b = " + b + ", " + "c = " + c);
// String: A sequence of characters.
console.log("String type examples!");
var str1 = "Sachin";
let str2 = "Rashmi";
const str3 = "Chethan";

console.log(
  "string1 = " + str1 + ", " + "string2 = " + str2 + ", " + "string3 = " + str3
);

// Boolean: A value representing true or false.
console.log("Boolean type examples!");

var isActive1 = true;
let isActive2 = false;
const isActive3 = true;

console.log(
  "isActive1 = " +
    isActive1 +
    ", " +
    "isActive2 = " +
    isActive2 +
    ", " +
    "isActive3 = " +
    isActive3
);

// Undefined: A variable that has been declared but has not been assigned a value
console.log("Undefined Type example!");
let q;
console.log("undefined type = " + q);

// Null: Represents the intentional absence of a value.
console.log("Null type example!");

let data = null;
console.log("Null data type = " + data);

// Symbol: Represents a unique identifier.
console.log("Symbol Data type!");
let sym = Symbol("description");
console.log(sym);

// BigInt: A numeric value larger than the Number type can hold.
console.log("BigInt data type");
let bigNumber = 1234567890123456789012345678901234567890n;
console.log("BigInt = " + bigNumber);

// 2. Reference Data Types:
// These types are more complex and refer to objects in memory.
// Object: A collection of key-value pairs (properties and methods).

console.log("Reffrence Data type : 'Object'");
let person = {
  name: "Sachin",
  age: 24,
  address: "Mysore",
  gender: "Male",
};

console.log("Personal Data : " + person);

// Array: A special type of object used for storing multiple values in a single variable.
console.log("Array type");
let colors = ["red", "green", "blue"];
console.log("Array of Colors : " + colors);

// Function: A block of code designed to perform a particular task.
console.log("Functions!");

function greet(name) {
  console.log("Good Morning " + name + "!");
}

greet(str2);

// 3. Type Conversion and Type Coercion:-
// JavaScript often automatically converts between types (this is called type coercion).
// You can also manually convert types when necessary.
// Converting between types:
// To String: Use String() or .toString().

console.log("Number type before consversion!");
let number = 123;
console.log("Number = " + number);
console.log("String type after type consversion!");
let string = String(123);
console.log("String = " + string);
console.log("Type is: " + typeof string);

// To Number: Use Number() or parseInt()/parseFloat().
console.log("String type before consversion!");
let str4 = "123";
console.log("String= " + str4);
console.log("Type is: " + typeof str4);
console.log("Number type After consversion!");
let num = Number(str4);
console.log("Number= " + num);
console.log("Type is: " + typeof num);
