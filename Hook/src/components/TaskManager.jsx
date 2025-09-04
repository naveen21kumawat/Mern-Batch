import { useState } from 'react';
import './TaskManager.css';

const TaskManager = () => {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskInput.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: taskInput.trim(),
        completed: false
      };
      setTasks([...tasks, newTask]);
      setTaskInput('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  const completedCount = tasks.filter(task => task.completed).length;
  const totalCount = tasks.length;

  return (
    <div className="task-manager-container">
      <div className="task-manager-card">
        <div className="header">
          <h1 className="title">📝 Task Manager</h1>
          <p className="subtitle">Stay organized and productive</p>
        </div>

        {/* Add Task Form */}
        <form onSubmit={handleSubmit} className="task-form">
          <div className="input-group">
            <input
              type="text"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              placeholder="Enter a new task..."
              className="task-input"
            />
            <button type="submit" className="add-btn">
              Add Task
            </button>
          </div>
        </form>

        {/* Task Statistics */}
        {totalCount > 0 && (
          <div className="task-stats">
            <div className="stats-item">
              <span className="stats-number">{totalCount}</span>
              <span className="stats-label">Total</span>
            </div>
            <div className="stats-item">
              <span className="stats-number">{totalCount - completedCount}</span>
              <span className="stats-label">Pending</span>
            </div>
            <div className="stats-item">
              <span className="stats-number">{completedCount}</span>
              <span className="stats-label">Completed</span>
            </div>
          </div>
        )}

        {/* Task List */}
        <div className="task-list">
          {tasks.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📋</div>
              <h3>No tasks yet</h3>
              <p>Add your first task above to get started!</p>
            </div>
          ) : (
            <>
              {tasks.map(task => (
                <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                  <div className="task-content">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleComplete(task.id)}
                      className="task-checkbox"
                    />
                    <span className={`task-text ${task.completed ? 'strike-through' : ''}`}>
                      {task.text}
                    </span>
                  </div>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="delete-btn"
                    title="Delete task"
                  >
                    🗑️
                  </button>
                </div>
              ))}
              
              {/* Clear Completed Button */}
              {completedCount > 0 && (
                <div className="actions">
                  <button onClick={clearCompleted} className="clear-btn">
                    Clear Completed ({completedCount})
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
