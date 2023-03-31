import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Paper, TextField } from "@mui/material";

export default function App() {
  return (
    <div className="App w-screen h-screen flex justify-center items-center">
      <Paper id="taskListContainer" className="w-3/4 h-3/4" elevation={6}>
        <form>
          <div>
            <h1>To Do List</h1>
          </div>

          <div className="w-3/4 mb-5">
            <TextField
              id="txtAddTaskField"
              label="Task Bar"
              type="text"
              variant="outlined"
              placeholder="What are your plans today .?"
              fullWidth={true}
              autoFocus
            />
          </div>

          <div className="flex gap-8 justify-center w-full">
            <button
              id="btnGeneratePassword"
              type="button"
              className="mt-2 bg-blue-900 text-white py-[10px] px-[18px] rounded-lg font-medium"
            >
              Generate Password
            </button>
          </div>
        </form>
      </Paper>
    </div>
  );
}
