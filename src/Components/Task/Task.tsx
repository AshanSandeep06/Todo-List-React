import { Button, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Task.css";

type TaskProps = {
  id: number;
  value: string;
  update: (event: React.MouseEvent<HTMLButtonElement>) => void;
  delete: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

type TaskState = {};

export default function Task(props: TaskProps) {
  return (
    <section className="task flex w-full px-[60px]">
      <div className="task-text w-3/4 mr-8">
        <TextField
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
        <Button color="primary" variant="contained" onClick={props.update}>
          Update
        </Button>
        <Button
          color="error"
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={props.delete}
        >
          Remove
        </Button>
      </div>
    </section>
  );
}
