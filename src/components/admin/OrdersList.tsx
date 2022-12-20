import { OrderDetail } from "@prisma/client";
import { inferRouterOutputs } from "@trpc/server";
import { AppRouter } from "../../server/trpc/router/_app";

export function getAmountOrder(orderdetail: OrderDetail[]) {
  let sum = 0;
  orderdetail?.map((item) => {
    sum += item?.quantityInOrdered * (item?.priceEach as any);
  });
  return sum;
}

function convertDate(inputFormat: Date) {
  function pad(s: number) {
    return s < 10 ? "0" + s : s;
  }
  const d = new Date(inputFormat);
  return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("/");
}

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
          {ordersData?.map((order, index: number) => {
            return (
              <tr
                key={index}
                className="cursor-pointer border-b bg-white text-sm transition duration-300 ease-in-out hover:bg-gray-100 md:text-base"
                onClick={() => {
                  window.location.href = "/orderdetail/" + order.orderNumber;
                }}>
                <td className="whitespace-nowrap px-2 py-3 md:px-6">{index + 1}</td>
                <td className="whitespace-nowrap px-2 py-3 md:px-6">{order.orderNumber}</td>
                <td className="whitespace-nowrap px-2 py-3 md:px-6">{order.customerNumber}</td>
                <td className="whitespace-nowrap px-2 py-3 md:px-6">
                  {`${convertDate(
                    order.orderDate
                  )} ${order.orderDate.getHours()}h:${order.orderDate.getMinutes()}m:${order.orderDate.getSeconds()}s`}
                </td>

                <td className="whitespace-nowrap px-2 py-3 md:px-6">
                  {getAmountOrder(order?.orderdetail)}
                </td>

                {/* order status */}
                {order.status == "INPROCESS" && (
                  <td className="whitespace-nowrap px-2 py-3 md:px-6">
                    <span className="rounded-full bg-yellow-100 px-3 pt-1 pb-2 text-base font-medium text-yellow-700 ">
                      Đang giao
                    </span>
                  </td>
                )}
                {order.status == "CANCELLED" && (
                  <td className="whitespace-nowrap px-2 py-3 md:px-6">
                    <span className="rounded-full bg-red-100 px-3 pt-1 pb-2 text-base font-medium text-red-700 ">
                      Đã hủy
                    </span>
                  </td>
                )}
                {order.status == "SHIPPED" && (
                  <td className="whitespace-nowrap px-2 py-3 md:px-6 ">
                    <span className="rounded-full bg-green-100 px-3 pt-1 pb-2 text-base font-medium text-green-700 ">
                      Đã giao
                    </span>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersList;
