import { Outlet } from "react-router-dom";
import SideNav from "../SideNav";

const DashboardLayout = () => {
  return (
    <div className="flex">
      {/* Left Sidebar */}
      <SideNav />

      {/* Right Content Area */}
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <Outlet/>
      </div>
    </div>
  );
};

export default DashboardLayout;