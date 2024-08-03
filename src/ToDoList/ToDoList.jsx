import React from 'react';
import './ToDoList.css';
import ToDoItem from '../ToDoItem/ToDoItem';

export default function ToDoList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <ToDoItem key={index} task={task} index={index} toggleTask={toggleTask} deleteTask={deleteTask} />
      ))}
    </ul>
  );
}

