import { Order } from "@prisma/client";
import React from "react";
import { inferRouterOutputs } from "@trpc/server";
import { AppRouter } from "../server/trpc/router/_app";
const OrdersList = ({
  ordersData,
}: {
  ordersData: inferRouterOutputs<AppRouter>["order"]["getAll"];
}) => {
  return (
    <div className=" mb-10 w-full">
      <table className="w-full">
        <thead className="border-b bg-white">
          <tr>
            <th
              scope="col"
              className="px-2 py-3 text-left text-sm font-medium text-gray-900 md:px-6 md:text-base">
              #
            </th>
            <th
              scope="col"
              className="px-2 py-3 text-left text-base font-medium text-gray-900 md:px-6">
              Mã đơn hàng
            </th>
            <th
              scope="col"
              className="px-2 py-3 text-left text-base font-medium text-gray-900 md:px-6">
              Khách hàng
            </th>
            <th
              scope="col"
              className="px-2 py-3 text-left text-base font-medium text-gray-900 md:px-6">
              Ngày đặt hàng
            </th>
            <th
              scope="col"
              className="px-2 py-3 text-left text-base font-medium text-gray-900 md:px-6">
              Sản phẩm
            </th>
            <th
              scope="col"
              className="px-2 py-3 text-left text-base font-medium text-gray-900 md:px-6">
              Hóa đơn
            </th>

            <th
              scope="col"
              className="px-2 py-3 text-left text-base font-medium text-gray-900 md:px-6">
              Trạng thái
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {ordersData?.map((order: Order, index: number) => {
            return (
              <tr
                key={index}
                className="border-b bg-white text-sm transition duration-300 ease-in-out hover:bg-gray-100 md:text-base">
                <td className="whitespace-nowrap px-2 py-3 md:px-6">{index + 1}</td>
                <td className="whitespace-nowrap px-2 py-3 md:px-6">{order.orderNumber}</td>
                <td className="whitespace-nowrap px-2 py-3 md:px-6">{order.customerNumber}</td>
                <td className="whitespace-nowrap px-2 py-3 md:px-6">
                  {order.orderDate.toString()}
                </td>
                {/* <td className="whitespace-nowrap px-2 py-3 md:px-6">{
                order.}</td> */}
                {/* <td className="whitespace-nowrap px-2 py-3 md:px-6">{order.current_price}</td> */}
                <td className="whitespace-nowrap px-2 py-3 md:px-6">{order.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersList;
