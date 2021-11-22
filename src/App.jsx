/*
* To Do App
*/

import React from "react";
import TodoListContainer from "./modules/TodoListContainer";
import './styles.css';

function App () {
  return (
    <React.StrictMode>
      <div>
        <h1>Todo List</h1>
        <TodoListContainer />
      </div>
    </React.StrictMode>
  );
}

export default App;
