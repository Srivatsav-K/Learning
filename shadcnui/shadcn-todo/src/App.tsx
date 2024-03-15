import Navbar from "./components/Navbar";
import AddTask from "./features/tasks/AddTask";
import TasksListing from "./features/tasks/TasksListing";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="flex justify-between space-x-5">
        <div className="flex-1 max-w-screen-lg">
          <TasksListing />
        </div>

        <div className="min-w-[25vw]">
          <AddTask />
        </div>
      </div>
    </div>
  );
};
export default App;
