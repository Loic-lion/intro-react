import { useState } from "react";
import "./App.css";
import React from "react";
import ToDoList from "./ToDoList";

function App() {
  return (
    <>
      <ToDoList />
      <input type="text" placeholder="type a new todo" />
      <button>Add Todo</button>
      <button>Clear Completed Todos</button>
      <hr></hr>
      <h2>Todos</h2>
      <div>0 left to do</div>
    </>
  );
}

export default App;
