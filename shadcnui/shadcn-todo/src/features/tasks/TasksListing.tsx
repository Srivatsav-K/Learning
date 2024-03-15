import { useAppSelector } from "@/app/hooks";
import { TypographyH2, TypographyP } from "@/components/ui/typography";
import TaskItem from "./TaskItem";

const TasksListing = () => {
  const tasks = useAppSelector((state) => state.tasks);

  return (
    <div className="space-y-4">
      <TypographyH2>Tasks</TypographyH2>

      <TypographyP>
        {tasks.length ? `Listing tasks - ${tasks.length}` : "You have no tasks"}
      </TypographyP>

      <div className="max-h-[75vh] overflow-y-auto space-y-4">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};
export default TasksListing;
