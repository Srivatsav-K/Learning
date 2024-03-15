import { useAppDispatch } from "@/app/hooks";
import { Task, TaskForm } from "./TaskForm";
import { updateTask } from "./tasksSlice";
import { Button } from "@/components/ui/button";

const UpdateTask = ({
  task,
  handleEditToggle,
}: {
  task: Task;
  handleEditToggle: () => void;
}) => {
  const dispatch = useAppDispatch();

  const handleTaskUpdate = (data: Task) => {
    dispatch(updateTask(data));
    handleEditToggle();
  };

  return (
    <>
      <TaskForm initialValues={task} onComplete={handleTaskUpdate} />
      <Button className="w-full" onClick={handleEditToggle}>
        Cancel
      </Button>
    </>
  );
};
export default UpdateTask;
