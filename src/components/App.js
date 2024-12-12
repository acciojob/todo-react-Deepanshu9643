import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [tasks, setTasks] = useState([]); // Array to store tasks
  const [inputValue, setInputValue] = useState(""); // Input field value

  // Function to add a new task
  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]); // Add the new task to the list
      setInputValue(""); // Clear the input field
    }
  };

  // Function to delete a task
  const deleteTodo = (index) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index); // Remove the task
    setTasks(updatedTasks);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>To-Do List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Update input value
        placeholder="Enter a task"
      />
      <button onClick={addTodo} style={{ marginLeft: "10px" }}>
        Add Todo
      </button>
      <ul style={{ listStyleType: "none", padding: 0, marginTop: "20px" }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <span style={{ marginRight: "10px" }}>{task}</span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

