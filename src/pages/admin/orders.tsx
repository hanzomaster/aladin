import { NextPage } from "next";
import Pagination from "../../components/admin/Pagination";
import { useEffect, useState } from "react";
import OrdersList from "../../components/admin/OrdersList";
import { trpc } from "../../utils/trpc";
import { inferRouterOutputs } from "@trpc/server";
import { AppRouter } from "../../server/trpc/router/_app";
export const postsPerPage = 10;

const Orders: NextPage = () => {
  const [ordersData, setOrdersData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // example data

  const { data } = trpc.order.getAll.useQuery();

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts: inferRouterOutputs<AppRouter>["order"]["getAll"] = data?.slice(
    firstPostIndex,
    lastPostIndex
  );
  return (
    <div className="relative h-screen px-5 py-10 md:px-10 lg:px-20">
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <h1 className="text-3xl font-medium text-gray-900 ">Orders</h1>
      <OrdersList ordersData={currentPosts} />
      <Pagination
        totalPosts={data?.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};
export default Orders;
