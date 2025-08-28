// Store tasks in an array
let tasks = [];

// Select elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Function to render tasks in the DOM
function renderTasks() {
  taskList.innerHTML = ""; // Clear old tasks

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    // Delete button
    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "❌";
    deleteBtn.addEventListener("click", () => {
      removeTask(index);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

// Function to add task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  tasks.push(taskText); // Add to array
  taskInput.value = ""; // Clear input
  renderTasks(); // Update DOM
}

// Function to remove task
function removeTask(index) {
  tasks.splice(index, 1); // Remove from array
  renderTasks();
}

// Event listener
addBtn.addEventListener("click", addTask);

// Allow pressing Enter key to add task
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
