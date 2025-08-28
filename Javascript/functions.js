function fun(name,callback){
console.log("Name "+ name)
callback("Helll ")
}


const check =()=>{
  console.log("check")
  return "hey"
}


const name = check()

console.log(name)