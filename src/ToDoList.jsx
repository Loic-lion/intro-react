import React from "react";
import Todo from "./ToDo";


export default function ToDoList({ todos, toggleChecked }) {
  return todos.map((todo) => {
    return <Todo key={todo.id} toggleChecked={toggleChecked} todo={todo} />;
  });
}
