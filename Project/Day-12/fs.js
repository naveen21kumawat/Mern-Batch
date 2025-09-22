const fs = require('fs');
const path = require('path');
const os = require('os');
const http = require('http');




// Read file asynchronously with callback
// let data =fs.readFileSync('exampl.txt', 'utf8')
// console.log(data)







// fs.readFile('exampl.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }
//   console.log('File content:', data);
// });



// Synchronous read
// console.log("Start reading file...");
// const data =fs.readFileSync("example.txt", "utf8"); // Waits until file is read
// console.log(data);
// console.log("End of program");





// fs.readFile('example.txt', 'utf8', (err, data) => {
//    console.log(data)
// })





fs.writeFileSync('exampl.txt','Hello World')


// For binary data (like images), omit the encoding
// fs.readFile('image.png', (err, data) => {
//   if (err) throw err;
//   console.log('Image size:', data.length, 'bytes');
// });


// const filePath = path.join(__dirname, 'example3.txt');

// 1. Create & Write
// fs.writeFileSync(filePath, 'Hello, this is my file.');


fs.appendFileSync("example3.txt", "\nThis is new line!", "utf8");

console.log(os.platform())
console.log(os.homedir())
console.log(os.hostname())
console.log(os.networkInterfaces())
console.log(os)
 

// console.log('📄 File content:', fs.readFileSync(filePath, 'utf8'));


