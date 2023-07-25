import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos((prevTodos) => [...prevTodos, ...storedTodos]);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }

  function handleCleartodos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  function toggleChecked(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  return (
    <>
      <div className="title">
        <h1>My Todo App</h1>
      </div>
      <input
        className="input__new"
        ref={todoNameRef}
        type="text"
        placeholder="type a new todo"
      />
      <button className="button__new" onClick={handleAddTodo}>
        Add Todo
      </button>
      <hr></hr>
      <div className="container__todos__title">
        <h2>Todos</h2>
        <div>( {todos.filter((todo) => !todo.complete).length} left to do)</div>
      </div>
      <button className="button__new" onClick={handleCleartodos}>
        Clear Completed
      </button>
      <div className="container__todos__new">
      <ToDoList todos={todos} toggleChecked={toggleChecked} />
      </div>
    </>
  );
}

export default App;
