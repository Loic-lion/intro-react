import React from "react";

export default function Todo({ todo, toggleChecked }) {
  function handleTodoClick() {
    toggleChecked(todo.id);
  }
  return (
    <div className="container__todos__new__element">
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={handleTodoClick}
      />
      {todo.name}
    </div>
  );
}
