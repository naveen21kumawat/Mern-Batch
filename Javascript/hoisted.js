console.log(x)

var x = 10;
// console.log(x)
var x=20;
console.log(x)

let y = 20;
console.log(y)

 y = 30;
console.log(y)

const max = 20;

// max = 30;  // not allowed
console.log(max)

let Yes = true;

let sym = Symbol(max);
console.log(sym)

console.log(Yes, typeof(Yes))

let sym1 = Symbol("id");
let sym2 = Symbol("id");

console.log(sym1 === sym2); 

const emp = {
  name: 1,
  name: "1John"
};



console.log(emp,typeof(emp.name));



let id1 = Symbol("id");
let id2 = Symbol("id");

emp[id1] = 1;
emp[id2] = 2;

console.log("User",emp); 
// { name: "John", [Symbol(id)]: 1, [Symbol(id)]: 2 }


const u = {
  name: "John",
}

var var1 = "Hello"
var var2 = 1098888888888887;

console.log(var2, typeof(var2))