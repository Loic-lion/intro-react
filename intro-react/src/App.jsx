import React, { useState, useRef } from "react";
import "./App.css";
import ToDoList from "./ToDoList";

function App() {
  const [todos, setTodos] = useState([{ id: 1, name: "Learn React", complete: false}]);
  const todoNameRef = useRef()
  
  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
  }
  
  return (
    <>
      <input ref={todoNameRef} type="text" placeholder="type a new todo" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Completed</button>
      <hr></hr>
      <h2>Todos</h2>
      <div>0 left to do</div>
      <ToDoList todos={todos} />
    </>
  );
}

export default App;
