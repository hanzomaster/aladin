import { NextPage } from "next";
import SidebarAdmin from "../components/SidebarAdmin";

const Admin: NextPage = () => {
  return (
    <div className="h-full w-full text-sm md:text-base">
      <SidebarAdmin />
    </div>
  );
};
export default Admin;
