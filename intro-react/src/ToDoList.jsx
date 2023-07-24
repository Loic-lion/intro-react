import React from "react";
import Todo from "./ToDo";

// export default function ToDoList({ todos }) {
//   return <div>{todos.length}</div>;
// }

export default function ToDoList({ todos }) {
  return todos.map((todo) => {
    return <Todo key={todo.id} todo={todo} />;
  });
}
