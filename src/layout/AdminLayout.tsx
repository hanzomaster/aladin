import React from "react";
// components

import AdminNavbar from "../components/admin/AdminNavbar";
import Sidebar from "../components/admin/SlideBar";
import HeaderStats from "../components/admin/HeaderStats";

const AdminLayout = ({children}:any) => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
        </div>
      </div>
    </>
  )
}

export default AdminLayout;
