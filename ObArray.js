const ob ={
  name: "suraj",
  age: 20,
  salary: 20000,
  
  
}

console.log(ob);
console.log(ob.name);
console.log(ob.age);
console.log(ob.salary);

console.log(Object.keys(ob));
console.log(Object.values(ob));
console.log(Object.entries(ob));

for ( let [ value, key] of  Object.entries(ob)){
  console.log(value);
}



let user = {
  name: "Asha",
  greet: function(){
    console.log("Hi, I am " + this.name);
  }
};

user.greet();
