import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Paper, TextField } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Task from "./Components/Task";
import $ from "jquery";
import { log } from "console";
import ReactDOM from "react-dom/client";

export default function App() {
  type TaskDetails = {
    id: number;
    value: string;
  };

  const [tasks, setTasks] = useState<TaskDetails[]>([]);
  const [value, setValue] = useState("");
  const [state, setState] = useState(0);

  const handleAddTask = (): void => {
    if (value !== "") {
      let task: TaskDetails = {
        id: state + 1,
        value: value,
      };
      setTasks([...tasks, task]);
      setState(state + 1);
      setValue("");
    }
  };

  const handleDeleteTask = (task: TaskDetails): void => {
    const filteredTasks: TaskDetails[] = tasks.filter((t) => t.id !== task.id);
    setTasks(filteredTasks);
  };

  const handleUpdateTask = (task: TaskDetails, newText: string): void => {
    // if (document.querySelectorAll("Button")[1].textContent == "Update") {
    //   $(".btnUpdate").text("Save");
    //   $(".taskField").removeAttr("readonly");
    //   console.log("Hi Hello..!");
    //   $(".taskField").focus();
    // } else {
    //   $(".btnUpdate").text("Update");
    //   $(".taskField").attr("readonly", "readonly");
    // }

    const updatedTasks: TaskDetails[] = tasks.map((t) =>
      t.id === task.id ? { ...t, value: newText } : t
    );
    setTasks(updatedTasks);
  };

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
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>

            <div className="flex gap-8 justify-center">
              <Button
                id="btnAddTask"
                type="button"
                fullWidth
                color="success"
                variant="contained"
                onClick={handleAddTask}
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

          <div
            id="taskContainer"
            className="w-full px-[60px]n flex flex-col gap-5 overflow-y-auto h-[298px]"
          >
            {tasks.map((task: TaskDetails) => (
              <Task
                {...{
                  id: task.id,
                  key: task.id,
                  value: task.value,
                  update: () => handleUpdateTask(task, ""),
                  delete: () => handleDeleteTask(task),
                }}
              ></Task>
            ))}
          </div>
        </form>
      </Paper>
    </div>
  );
}
