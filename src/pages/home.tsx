import { Product } from "@prisma/client";
import { inferRouterOutputs } from "@trpc/server";
import { useRouter } from "next/router";
import { useState } from "react";
import ItemCard from "../components/itemCard";
import NavBar from "../components/navbar";
import Pagination from "../components/Pagination";
import { AppRouter } from "../server/trpc/router/_app";
import { trpc } from "../utils/trpc";
// import data from "./product";
export const postsPerPage = 20;

const Products = () => {
  // eslint-disable-next-line
  // const [items, setItems] = React.useState(data);
  const router = useRouter();
  const { name } = router.query;
  const { gender } = router.query;
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  // const [searchResult, setSearchResult] = useState<
  //   inferRouterOutputs<AppRouter>["product"]["getAll"] | undefined
  // >(data);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  // useEffect(() => {
  //   const results = data?.filter((product) =>
  //     product.name.toLowerCase().startsWith(search.toLowerCase())
  //   );
  //   setSearchResult(results);
  // }, [search, data]);

  // const [name, setName] = useState("");
  if (!gender && name) {
    // const [name, setName] = useState("");
    const { data } = trpc.product.search.useQuery({ name: name as string });
    const currentPosts: inferRouterOutputs<AppRouter>["product"]["getAll"] | undefined =
      data?.slice(firstPostIndex, lastPostIndex);
    return (
      <>
        <section>
          <NavBar />
        </section>
        <section className=" p- mx-1 grid gap-5 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:px-20">
          <div className="col-span-6 block">
            <p className=" mt-10 text-xl font-bold sm:text-3xl">Kết quả cho: {name}</p>
          </div>
        </section>

        <section className=" p- -z-10 mx-1 grid gap-5 py-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:px-20">
          {data?.map((item) => {
            return <ItemCard key={item.code} item={item} />;
          })}
        </section>
        <Pagination
          totalPosts={data?.length ?? 0}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </>
    );
  }
  if (gender) {
    // const [name, setName] = useState("");
    const { data } = trpc.product.getManyWhere.useQuery({
      type: name as string,
      gender: gender === "male" ? "M" : "F",
    });
    const currentPosts: inferRouterOutputs<AppRouter>["product"]["getAll"] | undefined =
      data?.slice(firstPostIndex, lastPostIndex);
    return (
      <>
        <section>
          <NavBar />
        </section>
        <section className=" p- mx-1 grid gap-5 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:px-20">
          <div className="col-span-6 block">
            <p className=" mt-10 text-xl font-bold sm:text-3xl">
              Kết quả cho: {name} - Giới tính: {gender === "male" ? "Nam" : "Nữ"}
            </p>
          </div>
        </section>

        <section className=" p- -z-10 mx-1 grid gap-5 py-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:px-20">
          {data?.map((item) => {
            return <ItemCard key={item.code} item={item} />;
            // }
          })}
        </section>
        <Pagination
          totalPosts={data?.length ?? 0}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </>
    );
  }
  // const { data: cartData } = trpc.cart.get.useQuery();

  // check undefined
  // function searchButtonClicked() {
  //   // let search : string
  //   if (document.getElementById("searchInput")?.textContent) {
  //     setName(document.getElementById("searchInput")?.textContent);
  //   }
  // }
  if (!gender && !name) {
    const { data } = trpc.product.getAll.useQuery();

    const currentPosts: inferRouterOutputs<AppRouter>["product"]["getAll"] | undefined =
      data?.slice(firstPostIndex, lastPostIndex);

    return (
      <>
        <section>
          <NavBar />
        </section>

        <section className=" p- mx-1 grid gap-5 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:px-20">
          <img
            className="col-span-6 row-span-1 mt-10 hidden sm:block"
            src="/banner.jpg"
            alt="Quảng cáo"></img>
          <div className="col-span-6 block">
            <p className="text-xl font-bold sm:text-3xl">Sản phẩm nổi bật</p>
          </div>
        </section>

        <section className=" p- -z-10 mx-1 grid gap-5 py-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:px-20">
          {/* <img className='col-span-6 row-span-1' src="banner.jpg" alt='Quảng cáo'></img> */}

          {currentPosts?.map((item: Product) => {
            return <ItemCard key={item.code} item={item} />;
          })}
        </section>
        <Pagination
          totalPosts={data?.length ?? 0}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </>
    );
  }
};

export default Products;
