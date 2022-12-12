import { trpc } from "../../utils/trpc";

import { useRouter } from "next/router";
import ItemCard from "../../components/itemCard";
import NavBar from "../../components/navbar";

const SearchPage = () => {
  const router = useRouter();
  const { name } = router.query;
  const { gender } = router.query;

  if (!gender) {
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
};

export default SearchPage;
