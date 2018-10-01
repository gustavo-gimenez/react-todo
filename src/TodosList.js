import React from "react";
import Todo from "./Todo.js";

const listTodo = (todos, onClick) => {
    return todos.map((todo) => (
      <Todo key={todo.id} todo={todo} onClick={() => {onClick(todo.id)}}/>
    ));
};
const TodosList = (props) => (
  <ul>
    {listTodo(props.todos, props.onClick)}
  </ul>
);

export default TodosList;
