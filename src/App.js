import React from "react";
import "./AppStyled.js";
import { AppStyled } from "./AppStyled.js";
import AddToDo from "./components/AddToDo/AddToDo";
import CheckBox from "./components/CheckBox/CheckBox";
import EmptyHome from "./components/EmptyHome/EmptyHome";
import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <AppStyled>
      <CheckBox />
      <AddToDo />
      <TaskList />
      <EmptyHome />
    </AppStyled>
  );
}

export default App;
