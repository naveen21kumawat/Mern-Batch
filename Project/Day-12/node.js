/**
 * =============================
 * 📖 Day - 4: Node.js Basics
 * Topics: Node.js, npm, Modules, fs, path
 * =============================
 *
 * 1. Node.js Introduction
 * -----------------------
 * - JS runtime built on Chrome's V8 engine
 * - Runs JavaScript outside the browser
 * - Event-driven, non-blocking I/O
 * - Ideal for server-side apps
 *
 * Example: Hello World server
 */
// const http = require('http');
// const server = http.createServer((req, res) => {
//   res.end('Hello World from Node.js!');
// });
// server.listen(3000, () => {
//   console.log('🌍 Server running on http://localhost:3000');
// });

/**
 * 2. npm (Node Package Manager)
 * -----------------------------
 * - Default package manager for Node.js
 * - Used to install/manage libraries
 *
 * Commands:
 * npm init -y
 * npm install <package>
 * npm install -g <package>
 * npm run <script>
 *
 * package.json → project info, dependencies, scripts
 */

/**
 * 3. Modules in Node.js
 * ---------------------
 * - Built-in (fs, path, http, os, etc.)
 * - Custom (create your own)
 * - Third-party (via npm)
 */

// Custom module example (inline)
// function add(a, b) {
//   return a + b;
// }
// console.log("➕ Custom Module Add(2,3):", add(2, 3));

/**
 * 4. fs (File System) Module
 * --------------------------
 * Provides API for file operations
 * - readFile / readFileSync
 * - writeFile / appendFile
 * - rename
 * - delete
 */
const fs = require('fs');
const path = require('path');

// File path using path module (cross-platform safe)
const filePath = path.join(__dirname, 'exampl.txt');

// 1. Create & Write
fs.writeFileSync(filePath, 'Hello, this is my file.');

// 2. Read
console.log('📄 File content:', fs.readFileSync(filePath, 'utf8'));

// 3. Append
// fs.appendFileSync(filePath, '\nAdding more content.');

// 4. Rename

// const newFilePath = path.join(__dirname, 'renamed.txt');
// fs.renameSync(filePath, newFilePath);

// 5. Delete
// fs.unlinkSync(newFilePath);
// console.log('✅ File operations completed successfully.');

/**
 * 5. path Module
 * --------------
 * Provides utilities for file/directory paths
 */
// const demoPath = path.join(__dirname, 'folder', 'file.txt');
// console.log('📂 Joined path:', demoPath);
// console.log('📛 Basename:', path.basename(demoPath));
// console.log('📁 Dirname:', path.dirname(demoPath));
// console.log('📑 Extension:', path.extname(demoPath));
// console.log('📍 Absolute Path:', path.resolve('file.txt'));

/**
 * =============================
 * ✅ Interview Questions (with Short Answers)
 * =============================
 *
 * Q1. What is Node.js and how is it different from browser JS?
 * A. Node.js executes JS outside browser, used for backend, has fs, http modules.
 *
 * Q2. What is npm?
 * A. Package manager for Node.js, manages dependencies and scripts.
 *
 * Q3. What is package.json?
 * A. Defines project info, dependencies, scripts.
 *
 * Q4. What are modules in Node.js?
 * A. Reusable chunks of code. Built-in, custom, third-party.
 *
 * Q5. require() vs import?
 * A. require → CommonJS, import → ES Modules (modern JS).
 *
 * Q6. fs module use?
 * A. File operations (read/write/append/rename/delete).
 *
 * Q7. readFile vs readFileSync?
 * A. readFile → async (non-blocking), readFileSync → sync (blocking).
 *
 * Q8. path module use?
 * A. Handle file paths safely across OS.
 *
 * Q9. How to ensure cross-platform file paths?
 * A. Use path.join() or path.resolve().
 *
 * Example:
 * const filePath = path.join(__dirname, 'folder', 'file.txt');
 *
 */
