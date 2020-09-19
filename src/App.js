import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodosContainer from "./Components/TodosContainer";

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>Todo List</h1>
      </div>
      <TodosContainer />
    </div>
  );
}

export default App;
