import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Paper, TextField } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Task from "./Components/Task";

export default function App() {
  return (
    <div className="App w-screen h-screen flex justify-center items-center">
      <Paper id="taskListContainer" className="w-3/4 h-3/4" elevation={6}>
        <form className="flex items-center flex-col px-5 py-4 gap-5">
          <div className="text-[28px] font-semibold">
            <h1>
              To-Do List <AssignmentIcon className="mb-[2px]" />
            </h1>
          </div>

          <div className="flex w-full gap-[45px] px-12">
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
                color="success"
                variant="contained"
                sx={{ mt: 1, mb: 1 }}
              >
                Add Task
              </Button>
            </div>
          </div>

          <div className="text-[22px] font-semibold self-start mt-2 mb-1">
            <h1>
              Today Tasks <TaskAltIcon className="mb-[2px]" />
            </h1>
          </div>

          <div className="w-full px-[60px]n flex flex-col gap-5">
            <Task />
            <Task />
            <Task />
            <Task />
          </div>
        </form>
      </Paper>
    </div>
  );
}
