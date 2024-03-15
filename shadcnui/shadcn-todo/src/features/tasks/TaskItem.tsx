import { useAppDispatch } from "@/app/hooks";
import EditIcon from "@/components/icons/EditIcon";
import TrashIcon from "@/components/icons/TrashIcon";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { Task } from "./TaskForm";
import UpdateTask from "./UpdateTask";
import { removeTask } from "./tasksSlice";

const TaskItem = ({ task }: { task: Task }) => {
  const dispatch = useAppDispatch();
  const [toggleEdit, setToggleEdit] = useState(false);

  const handleEditToggle = () => {
    setToggleEdit(!toggleEdit);
  };

  return toggleEdit ? (
    <UpdateTask task={task} handleEditToggle={handleEditToggle} />
  ) : (
    <Card>
      <CardHeader>
        <CardTitle className={`${task.completed ? "line-through" : ""}`}>
          {task.title}
        </CardTitle>
        <CardDescription>{task.description}</CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-end space-x-2">
        <Button variant={"ghost"} onClick={handleEditToggle}>
          <EditIcon />
        </Button>

        <Button variant={"ghost"} onClick={() => dispatch(removeTask(task.id))}>
          <TrashIcon />
        </Button>
      </CardFooter>
    </Card>
  );
};
export default TaskItem;
