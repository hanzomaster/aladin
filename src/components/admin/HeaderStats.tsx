import React from "react";

// components

import CardStats from "./Cards/CardStats";

export default function HeaderStats() {
  const datas =[
    {
      statSubtitle:"TRAFFIC",
      statTitle:"350,897",
      statArrow:"up",
      statPercent:"3.48",
      statPercentColor:"text-emerald-500",
      statDescripiron:"Since last month",
      statIconName:"far fa-chart-bar",
      statIconColor:"bg-red-500"
    }, 
    {
      statSubtitle:"NEW USERS",
      statTitle:"2,356",
      statArrow:"down",
      statPercent:"3.48",
      statPercentColor:"text-red-500",
      statDescripiron:"Since last week",
      statIconName:"fas fa-chart-pie",
      statIconColor:"bg-orange-500"
    },
    {
      statSubtitle:"SALES",
      statTitle:"924",
      statArrow:"down",
      statPercent:"1.10",
      statPercentColor:"text-orange-500",
      statDescripiron:"Since yesterday",
      statIconName:"fas fa-users",
      statIconColor:"bg-pink-500"
    },
    {
      statSubtitle:"PERFORMANCE",
      statTitle:"49,65%",
      statArrow:"up",
      statPercent:"12",
      statPercentColor:"text-emerald-500",
      statDescripiron:"Since last month",
      statIconName:"fas fa-percent",
      statIconColor:"bg-lightBlue-500"
    }
  ]

  return (
    <>
      {/* Header */}
      <div className="relative bg-blueGray-800 md:pt-32 mb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
            {datas.map((data)=>{
               return(
                <>
                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                
                  <CardStats
                    statSubtitle={data.statSubtitle}
                    statTitle={data.statTitle}
                    statArrow={data.statArrow}
                    statPercent={data.statPercent}
                    statPercentColor={data.statPercentColor}
                    statDescripiron={data.statDescripiron}
                    statIconName={data.statIconName}
                    statIconColor={data.statIconColor}
                  />
              </div>
              </>
               )   
                
            }     
            )}
              {/* <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                
                <CardStats
                  statSubtitle="TRAFFIC"
                  statTitle="350,897"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="NEW USERS"
                  statTitle="2,356"
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="SALES"
                  statTitle="924"
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="PERFORMANCE"
                  statTitle="49,65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
