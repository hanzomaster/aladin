import * as React from "react";

// components

import CardLineChart from "../../components/admin/Cards/CardLineChart";
// import CardBarChart from "../../components/admin/Cards/CardBarChart";
import CardPageVisits from "../../components/admin/Cards/CardPageVisits";
import CardSocialTraffic from "../../components/admin/Cards/CardSocialTraffic";

// layout for page

import AdminLayout from "../../layout/AdminLayout";

export default function Dashboard() {
  return (
    
    <>
    <AdminLayout>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          {/* <CardBarChart /> */}
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </AdminLayout>
    </>
  );
}


