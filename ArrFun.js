let colors = [1,2,3,3,4,5,5,6,6,6,6]
// colors[0] = "Orange"

// console.log(colors)

// colors.push("yellow")

// console.log(colors)
// colors.pop()
// console.log(colors)

// colors.shift()
// console.log(colors)
// colors.unshift("orange",'A')
// console.log(colors)
// colors.unshift()
// console.log(colors)

let N = colors.forEach(n => n*2)
console.log(N)

let A = colors.map(a => console.log(a))
console.log(A)


let fil = colors.filter(n =>   n!==5)
console.log(fil)

let  fact = [1,2,3,4,5]

// let sl = fact.slice(2,5)
// console.log(sl)

let spl = fact.splice(2,3,"Orange","Yellow")
console.log(spl)

console.log(fact)

// let factVal = fact.reduce((a,b) => a*b,2)
// console.log(factVal)




