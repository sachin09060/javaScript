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
