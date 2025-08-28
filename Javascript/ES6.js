// ✅ Day 6 - Modern JavaScript (ES6+ Features)

// 1. let & const usage
const students = [
  { name: "Naveen", marks: 85, subject: "Math" },
  { name: "Priya", marks: 45, subject: "Science" },
  { name: "Amit", marks: 72, subject: "English" },
  { name: "Sara", marks: 90, subject: "History" }
];

let passingMarks = 50; // let → reassignable

// 2. Arrow function + map()
// Create an array of formatted student details
const studentDetails = students.map(
  s => `${s.name} scored ${s.marks} in ${s.subject}`
);
console.log("📝 Student Details:", studentDetails);

// 3. filter()
// Filter students who passed
const passedStudents = students.filter(s => s.marks >= passingMarks);
console.log("✅ Passed Students:", passedStudents);

// 4. Destructuring
const [firstStudent] = students; // Array destructuring
const { name, marks, subject } = firstStudent; // Object destructuring
console.log(`🎓 First Student: ${name}, Marks: ${marks}, Subject: ${subject}`);

// 5. Spread operator
// Clone students array
const clonedStudents = [...students];

// Add new students using spread
const moreStudents = [
  ...clonedStudents,
  { name: "John", marks: 60, subject: "Geography" }
];
console.log("👨‍🎓 All Students:", moreStudents);

// Merge objects with spread
const extraInfo = { school: "Green Valley High", year: 2025 };
const studentWithInfo = { ...students[0], ...extraInfo };
console.log("📘 Student With Extra Info:", studentWithInfo);

// 6. map() + filter() together
const highScorers = students
  .filter(s => s.marks >= 70)
  .map(s => `${s.name} is a high scorer with ${s.marks}`);
console.log("🏆 High Scorers:", highScorers);

