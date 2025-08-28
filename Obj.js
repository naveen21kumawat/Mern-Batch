const ob = {
  name : "Naveen",
  age : 23
}


console.log(ob.name);
console.log(ob.age)

const Obj1 = Object()
const Obj = Object({
  name : "Naveen",
  age : 23
})
Obj.name = "Kumar" //modify name
Obj['H']= "HHH"
console.log(Obj['name']);
console.log(Obj.age)

Obj.address = "Bangalore"
console.log(Obj.name);
console.log(Obj.age)
console.log(Obj)

console.log(Object.keys(Obj))
console.log(Object.values(Obj))
console.log(Object.entries(Obj))


for (let [key, value] of Object.entries(Obj)) {
  console.log(`${key}: ${value}`);
  
  
}

let student = {
  name: "Rahul",
  marks: 85,
  greet: function() {
    console.log(`Hi, I am ${this.name} and I scored ${this.marks}`);
  }
};

student.greet();
let name = "Naveen"
let user = {
  name: "Asha",
  greet: () => {
    console.log("Hi, I am " + this.name);
  },
  skills : {
    tech :{

    }  }
};

user.greet();
// Output: "Hi, I am undefined"
// 👉 here, `this` is NOT the user object
// it’s taken from the outer scope (global in this case)

let user11 = {
  name: "Naveen",
  hobbies: ["coding", "music"],
  showHobbies: function () {
    this.hobbies.forEach(hobby => {
      console.log(this.name + " likes " + hobby);
    });
  }
};

user11.showHobbies();


// let newar = [ 2]
let newarr1 = Array(3)
newarr1[0] = " Naveen"
newarr1[1] = " Naveen1"
newarr1[2] = " Naveen3"
newarr1[3] = " Naveen4"
newarr1.push("kumawat")
newarr1.push("A")

// console.log(newar)
console.log(newarr1)
