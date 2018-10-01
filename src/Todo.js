import React from "react";
import "./Todo.css"; 
const Todo = (prop) => (
  <li className={prop.todo.done ? "done": "pending"} onClick={prop.onClick}>{prop.todo.name}</li>
);

export default Todo;
