import { Product } from "@prisma/client";
import React from "react";
import { inferRouterOutputs } from "@trpc/server";
import { AppRouter } from "../server/trpc/router/_app";
import { trpc } from "../utils/trpc";
const OrdersList = ({
  productsData,
}: {
  productsData: inferRouterOutputs<AppRouter>["product"]["getAll"] | undefined;
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
              Mã sản phẩm
            </th>
            <th
              scope="col"
              className="px-2 py-3 text-left text-base font-medium text-gray-900 md:px-6">
              Giới tính
            </th>
            <th
              scope="col"
              className="px-2 py-3 text-left text-base font-medium text-gray-900 md:px-6">
              Dòng sản phẩm
            </th>
            <th
              scope="col"
              className="px-2 py-3 text-left text-base font-medium text-gray-900 md:px-6">
              Tên sản phẩm
            </th>
            <th
              scope="col"
              className="px-2 py-3 text-left text-base font-medium text-gray-900 md:px-6">
              Màu sắc
            </th>
            <th
              scope="col"
              className="px-2 py-3 text-left text-base font-medium text-gray-900 md:px-6">
              Giá
            </th>
            <th
              scope="col"
              className="px-2 py-3 text-left text-base font-medium text-gray-900 md:px-6">
              S
            </th>
            <th
              scope="col"
              className="px-2 py-3 text-left text-base font-medium text-gray-900 md:px-6">
              M
            </th>

            <th
              scope="col"
              className="px-2 py-3 text-left text-base font-medium text-gray-900 md:px-6">
              L
            </th>
            <th
              scope="col"
              className="px-2 py-3 text-left text-base font-medium text-gray-900 md:px-6">
              XL
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {productsData?.map((product, index: number) => {
            return (
              <tr
                key={index}
                className="border-b bg-white text-sm transition duration-300 ease-in-out hover:bg-gray-100 md:text-base">
                <td className="whitespace-nowrap px-2 py-3 md:px-6">{index + 1}</td>
                <td className="whitespace-nowrap px-2 py-3 md:px-6">{product.code}</td>
                <td className="whitespace-nowrap px-2 py-3 md:px-6">
                  {product.line?.gender == "M" ? "Nam" : "Nữ"}
                </td>
                <td className="whitespace-nowrap px-2 py-3 md:px-6">{product.line?.type}</td>
                <td className="whitespace-nowrap px-2 py-3 md:px-6">{product.name}</td>
                <td className="whitespace-nowrap px-2 py-3 md:px-6">
                  {product.productDetail?.[0]?.colorCode}
                </td>
                <td className="whitespace-nowrap px-2 py-3 md:px-6">
                  {product.buyPrice.toString()}
                </td>
                <td className="whitespace-nowrap px-2 py-3 md:px-6">
                  {product.productDetail?.[0]?.productInStock[0]?.quantity}
                </td>
                <td className="whitespace-nowrap px-2 py-3 md:px-6">
                  {product.productDetail?.[0]?.productInStock[1]?.quantity}
                </td>
                <td className="whitespace-nowrap px-2 py-3 md:px-6">
                  {product.productDetail?.[0]?.productInStock[2]?.quantity}
                </td>
                <td className="whitespace-nowrap px-2 py-3 md:px-6">
                  {product.productDetail?.[0]?.productInStock[3]?.quantity}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersList;
