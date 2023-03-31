import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Paper } from "@mui/material";

export default function App() {
  return (
    <div className="App w-screen h-screen flex justify-center items-center">
      <Paper id="taskListContainer" className="w-3/4 h-3/4" elevation={6}>
        <form>
          <h1>To Do List</h1>
        </form>
      </Paper>
    </div>
  );
}
