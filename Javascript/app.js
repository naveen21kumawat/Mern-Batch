// ====================
// Day 1 - JS Basics
// ====================

// 1. VARIABLES (var, let, const)
console.log("==== VARIABLES ====");

var v1 = "I am var"; 
var v1 = "Re-declared var"; // allowed
console.log("var:", v1);

let v2 = "I am let";
// let v2 = "Re-declared let"; // ❌ Not allowed
v2 = "Re-assigned let"; // allowed
console.log("let:", v2);

const v3 = "I am const";
// v3 = "Change const"; // ❌ Not allowed
console.log("const:", v3);

// 2. DATA TYPES
console.log("\n==== DATA TYPES ====");

let str = "Hello";           // String
let num = 123;               // Number
let bool = true;             // Boolean
let nothing = null;          // Null
let undef;                   // Undefined
let sym = Symbol("id");      // Symbol
let big = 12345678901234567890n; // BigInt

let arr = [1, 2, ];         // Array
let obj = {name: "Naveen"};  // Object
let fun = function() { return "I am function"; };

console.log(typeof str, str);
console.log(typeof num, num);
console.log(typeof bool, bool);
console.log(typeof nothing, nothing); // object (special case)
console.log(typeof undef, undef);
console.log(typeof sym, sym);
console.log(typeof big, big);

console.log(typeof arr, arr); // object
console.log(typeof obj, obj);
console.log(typeof fun, fun());

// 3. LOOPS
console.log("\n==== LOOPS ====");

// for loop
for (let i = 1; i <= 3; i++) {
  if(i === 2) continue;

  console.log("for loop:", i);
}

// while loop
let j = 1;
while (j <= 3) {
  console.log("while loop:", j);
  j++;
}

// do...while loop
let k = 1;
do {
  console.log("do...while loop:", k);
  k++;
} while (k <= 3);

// for...of loop
let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
  console.log("for...of:", fruit);
}

// loop control
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skip
  if (i === 5) break;    // stop
  console.log("loop control value:", i);
}

// 4. FUNCTIONS
console.log("\n==== FUNCTIONS ====");

// Function Declaration
function add(x, y) {
  return x + y;
}
console.log("add:", add(5, 3));

// Function Expression
const subtract = function(x, y) {
  return x - y;
};
console.log("subtract:", subtract(10, 4));

// Arrow Function
const multiply = (x, y) => x * y;
console.log("multiply:", multiply(6, 7));

// Scope Example
let globalVar = "Global";
function scopeExample() {
  let localVar = "Local";
  console.log("Inside function:", globalVar, localVar);
}
scopeExample();
// console.log(localVar); ❌ not accessible here

// 5. MINI CALCULATOR
console.log("\n==== MINI CALCULATOR ====");

function calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case '+': result = num1 + num2; break;
    case '-': result = num1 - num2; break;
    case '*': result = num1 * num2; break;
    case '/': result = num2 !== 0 ? num1 / num2 : "Error: divide by zero"; break;
    default: result = "Invalid operator";
  }
  return result;
}

console.log("10 + 5 =", calculator(10, 5, "+"));
console.log("10 - 5 =", calculator(10, 5, "-"));
console.log("10 * 5 =", calculator(10, 5, "*"));
console.log("10 / 5 =", calculator(10, 5, "/"));
console.log("10 / 0 =", calculator(10, 0, "/"));

// 6. INTERVIEW Qs
console.log("\n==== INTERVIEW Qs ====");

// var, let, const difference
console.log("var is function-scoped, let & const are block-scoped");

// Data types
console.log("Primitive: String, Number, Boolean, Null, Undefined, Symbol, BigInt");
console.log("Non-primitive: Object, Array, Function");

// typeof
console.log("typeof 123:", typeof 123);

// == vs ===
console.log("5 == '5':", 5 == "5");   // true
console.log("5 === '5':", 5 === "5"); // false

// Loop usage
console.log("Use for when known iterations, while when condition-based, do...while when must run at least once, for...of for arrays");

// Break and continue example
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Breaking at:", i);
    break;
  }
  console.log("Loop value:", i);
}

// Function declaration vs expression
function decl() { return "I am declaration"; }
const expr = function() { return "I am expression"; };
console.log(decl());
console.log(expr());

// Returning values
function square(n) { return n * n; }
console.log("Square of 4:", square(4));

// Scope
let outer = "Outer";
function scopeTest() {
  let inner = "Inner";
  console.log("Accessible inside:", outer, inner);
}
scopeTest();

// Calling with arguments
function greet(name) {
  console.log("Hello", name);
}
greet("Naveen");
