import React, { useState } from "react";

function TaskManager() {
  const [task, setTask] = useState(""); // input state
  const [tasks, setTasks] = useState([]); // list of tasks

  // Add a new task
  const addTask = (e) => {
    e.preventDefault();
    if (!task.trim()) return; // ignore empty input
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask(""); // clear input
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // Toggle complete
  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>✅ Task Manager</h2>
      {/* Form */}
      <form onSubmit={addTask}>
        <input
          type="text"
          value={task}
          placeholder="Enter task..."
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {/* Task List */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((t) => (
          <li key={t.id} style={{ margin: "8px 0" }}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleTask(t.id)}
            />
            <span
              style={{
                textDecoration: t.completed ? "line-through" : "none",
                marginLeft: "8px",
              }}
            >
              {t.text}
            </span>
            <button
              onClick={() => deleteTask(t.id)}
              style={{ marginLeft: "12px", color: "red" }}
            >
              ❌ Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
