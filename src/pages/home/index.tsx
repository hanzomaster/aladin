import ItemCard from "../../components/itemCard";
import NavBar from "../../components/navbar";
import { trpc } from "../../utils/trpc";
// import data from "./product";

const Products = () => {
  // eslint-disable-next-line
  // const [items, setItems] = React.useState(data);
  // const router = useRouter();
  // const {name} = router.query;

  // const [name, setName] = useState("");
  const { data } = trpc.product.getAll.useQuery();

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
