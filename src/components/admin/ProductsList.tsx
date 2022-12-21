import { inferRouterOutputs } from "@trpc/server";
import { AppRouter } from "../../server/trpc/router/_app";
import QuantityProduct from "./QuantityProduct";
const ProductsList = ({
  productsData,
}: {
  productsData: inferRouterOutputs<AppRouter>["product"]["getAll"] | undefined;
}) => {
  return (
    <div className=" p- mb-10 h-full w-full">
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
              Giá &#40;K &#8363;&#41;
            </th>
            <th
              scope="col"
              className="px-2 py-3 text-left text-base font-medium text-gray-900 md:px-6">
              Số lượng
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {productsData?.map((product, index: number) => {
            return (
              <tr
                key={index}
                className="cursor-pointer border-b bg-white text-sm transition duration-300 ease-in-out hover:bg-gray-100 md:text-base">
                <td className="whitespace-nowrap px-2 py-3 md:px-6">{index + 1}</td>
                <td className="whitespace-nowrap px-2 py-3 md:px-6">
                  <a href={"/admin/productDetail/" + product.code}>{product.code}</a>
                </td>
                <td className="whitespace-nowrap px-2 py-3 md:px-6">
                  {product.line?.gender == "M" ? "Nam" : "Nữ"}
                </td>
                <td className="whitespace-nowrap px-2 py-3 md:px-6">{product.line?.type}</td>
                <td className="whitespace-nowrap px-2 py-3 md:px-6">{product.name}</td>

                <td className="whitespace-nowrap px-2 py-3 md:px-6">
                  {product.buyPrice.toString()}
                </td>

                <td className="whitespace-nowrap px-2 py-3 md:px-6">
                  <QuantityProduct productDetail={product.productDetail} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
