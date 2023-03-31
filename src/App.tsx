import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Paper, TextField } from "@mui/material";

export default function App() {
  return (
    <div className="App w-screen h-screen flex justify-center items-center">
      <Paper id="taskListContainer" className="w-3/4 h-3/4" elevation={6}>
        <form className="flex items-center flex-col">
          <div>
            <h1>To Do List</h1>
          </div>

          <div className="flex w-3/4">
            <div className="w-3/4">
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

            <div className="flex gap-8 justify-center">
              <Button
                type="button"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 1 }}
              >
                Add Task
              </Button>
            </div>
          </div>
        </form>
      </Paper>
    </div>
  );
}
