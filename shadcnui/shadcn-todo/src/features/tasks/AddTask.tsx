import { TypographyH2 } from "@/components/ui/typography";
import { TaskForm } from "./TaskForm";
import { addTask } from "./tasksSlice";
import { useAppDispatch } from "@/app/hooks";

const AddTask = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="space-y-10">
      <TypographyH2>Add a new task</TypographyH2>
      <TaskForm onComplete={(data) => dispatch(addTask(data))} />
    </div>
  );
};
export default AddTask;
