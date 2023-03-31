import { Button, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Task() {
  return (
    <section className="task flex w-full px-[60px]">
      <div className="task-text w-3/4 mr-5">
        <TextField
          id="filled-basic"
          label="Task-01"
          variant="filled"
          fullWidth={true}
        />
      </div>

      <div className="buttons flex h-1/2 self-center">
        <Button color="primary" variant="contained">
          Update
        </Button>
        <Button color="error" variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
      </div>
    </section>
  );
}
