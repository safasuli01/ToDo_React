import React from 'react';
import './ToDoItem.css'

export default function ToDoItem({ task, index, toggleTask, deleteTask }) {
  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleTask(index)}>
        {task.text}
      </span>
      <button onClick={() => deleteTask(index)}>
        Delete
      </button>
    </li>
  );
}
