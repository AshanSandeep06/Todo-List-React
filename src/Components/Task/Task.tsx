import { Button, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Task.css";
import { useState } from "react";

type TaskProps = {
  id: number;
  value: string;
  update: (event: React.MouseEvent<HTMLButtonElement>) => void;
  delete: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Task(props: TaskProps) {
  return (
    <section className="task flex w-full px-[60px]">
      <div className="task-text w-3/4 mr-8">
        <TextField
          className="taskField"
          id={"" + props.id}
          label={"Task-" + props.id}
          variant="filled"
          fullWidth={true}
          focused
          value={props.value}
          InputProps={{
            readOnly: true,
          }}
        />
      </div>

      <div className="buttons flex gap-4 self-center">
        {/* <Button
          className="btnUpdate"
          color="primary"
          variant="contained"
          onClick={props.update}
        >
          Update
        </Button> */}
        <Button
          className="btnRemove"
          color="error"
          variant="contained"
          startIcon={<DeleteIcon />}
          onClick={props.delete}
        >
          Remove
        </Button>
      </div>
    </section>
  );
}
