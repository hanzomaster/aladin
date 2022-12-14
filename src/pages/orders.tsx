import { NextPage } from "next";
import Pagination from "../components/Pagination";
import { useEffect, useState } from "react";
import axios from "axios";
import OrdersList from "../components/OrdersList";
export const postsPerPage = 10;

const Orders: NextPage = () => {
  const [ordersData, setOrdersData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // example data
  useEffect(async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );

    setOrdersData(response.data);
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = ordersData.slice(firstPostIndex, lastPostIndex);
  return (
    <div className="h-screen px-5 py-10 md:px-10 lg:px-20">
      <h1 className="text-3xl font-medium text-gray-900 ">Orders</h1>
      <OrdersList ordersData={currentPosts} />
      <Pagination
        totalPosts={ordersData.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};
export default Orders;
