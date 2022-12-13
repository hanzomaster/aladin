import { useRouter } from "next/router";
import ItemCard from "../components/itemCard";
import NavBar from "../components/navbar";
import { trpc } from "../utils/trpc";
// import data from "./product";

const Products = () => {
  // eslint-disable-next-line
  // const [items, setItems] = React.useState(data);
  const router = useRouter();
  const { name } = router.query;
  const { gender } = router.query;
  const { data } = !name && !gender ? trpc.product.getAll.useQuery() : [];

  // const [name, setName] = useState("");
  if (!gender && name) {
    // const [name, setName] = useState("");
    const { data } = trpc.product.search.useQuery({ name: name as string });

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
      </>
    );
  }
  if (gender) {
    // const [name, setName] = useState("");
    const { data } = trpc.product.getManyWhere.useQuery({
      type: name as string,
      gender: gender === "male" ? "M" : "F",
    });

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

        {data?.map((item) => {
          return <ItemCard key={item.code} item={item} />;
        })}
      </section>
    </>
  );
};

export default Products;
