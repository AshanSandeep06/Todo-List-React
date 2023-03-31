import { TextField } from "@mui/material";

export default function Task() {
  return (
    <section className="task flex border-2 border-black">
      <div className="task-text">
        <TextField id="filled-basic" label="Task-01" variant="filled" />
      </div>

      <div className="buttons">
        <button>Update</button>
        <button>Remove</button>
      </div>
    </section>
  );
}
