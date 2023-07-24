import React from "react";

export default function Todo({ todo, toggleChecked }) {
  function handleTodoClick() {
    toggleChecked(todo.id);
  }
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleTodoClick}
        />
        {todo.name}
      </label>
    </div>
  );
}
