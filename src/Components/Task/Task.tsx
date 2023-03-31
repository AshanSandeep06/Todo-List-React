import { TextField } from "@mui/material";

export default function Task() {
  return (
    <section className="task flex w-full px-10">
      <div className="task-text w-3/4">
        <TextField
          id="filled-basic"
          label="Task-01"
          variant="filled"
          fullWidth={true}
        />
      </div>

      <div className="buttons">
        <button>Update</button>
        <button>Remove</button>
      </div>
    </section>
  );
}
