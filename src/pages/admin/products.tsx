import { NextPage } from "next";
import Pagination from "../../components/admin/Pagination";
import { useEffect, useState } from "react";
import { trpc } from "../../utils/trpc";
import { inferRouterOutputs } from "@trpc/server";
import { AppRouter } from "../../server/trpc/router/_app";

import ProductsList from "../../components/admin/ProductsList";
export const postsPerPage = 3;

const Orders: NextPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [search, setSearch] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setSearch(e.target.value);
  };

  useEffect(() => {
    console.log(search);
  }, [search]);

  const { data } = trpc.product.getAll.useQuery();
  const [searchResult, setSearchResult] = useState<
    inferRouterOutputs<AppRouter>["product"]["getAll"] | undefined
  >(data);

  useEffect(() => {
    const results = data?.filter((product) =>
      product.name.toLowerCase().startsWith(search.toLowerCase())
    );
    setSearchResult(results);
  }, [search, data]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts: inferRouterOutputs<AppRouter>["product"]["getAll"] | undefined =
    searchResult?.slice(firstPostIndex, lastPostIndex);
  return (
    <div className="relative h-screen px-5 py-10 md:px-10 lg:px-20">
      <pre>{searchResult?.length}</pre>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      <h1 className="text-3xl font-medium text-gray-900 ">Products</h1>
      <div className="mt-5 flex w-3/4 rounded border border-gray-300 bg-white shadow-sm">
        <input
          type="search"
          placeholder="Tìm kiếm theo tên sản phẩm"
          onChange={handleChange}
          className=" w-full cursor-default rounded py-2 pl-3  pr-10 text-left focus:outline-double  focus:outline-indigo-500  sm:text-sm "
        />
        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      <div className="mt-5">
        <ProductsList productsData={currentPosts} />
      </div>
      <Pagination
        totalPosts={searchResult?.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};
export default Orders;
