import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
      <div className="App">
        <header className="App-header">
          <h1>Task Manager</h1>
          <div className="task-input">
            <input
                type="text"
                placeholder="Enter task"
                value={newTask}
                onChange={handleInputChange}
            />
            <button onClick={handleAddTask}>Add Task</button>
          </div>
          <ul className="task-list">
            {tasks.map((task, index) => (
                <li key={index}>
                  {task}
                  <button onClick={() => handleDeleteTask(index)}>Delete</button>
                </li>
            ))}
          </ul>
        </header>
      </div>
  );
}

export default App;
