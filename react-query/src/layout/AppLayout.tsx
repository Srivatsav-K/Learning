import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="max-w-screen-md mx-auto">
      <Outlet />
    </div>
  );
};
export default AppLayout;
