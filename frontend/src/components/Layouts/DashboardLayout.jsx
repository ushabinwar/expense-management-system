import { Outlet } from "react-router-dom";
import SideNav from "../SideNav";
import Nav from "../Nav";

const DashboardLayout = () => {
  return (
    <div className="flex">
      {/* Left Sidebar */}
      <SideNav />

      {/* Right Content Area */}
      <div className="flex-1 px-4 py-2  bg-gray-100 max-h-screen overflow-x-auto">
        <Nav/>
        <Outlet/>
      </div>
    </div>
  );
};

export default DashboardLayout;