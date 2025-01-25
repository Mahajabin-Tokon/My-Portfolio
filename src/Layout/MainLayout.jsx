import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-1">
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
