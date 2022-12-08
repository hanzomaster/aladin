import { trpc } from "../../utils/trpc";
// import { BsHeart } from 'react-icons/bs'
// import data from ".//product";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import NavBar from "../component/navbar";
// import data from "./product";

const SearchPage = () => {
  const router = useRouter();
  const { name } = router.query;

  // const [name, setName] = useState("");
  const { data } = trpc.product.search.useQuery({ name: name as string });

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
        {/* <img
          className="col-span-6 row-span-1 mt-10 hidden sm:block"
          src="/banner.jpg"
          alt="Quảng cáo"></img> */}
        <div className="col-span-6 block">
          <p className=" mt-10 text-xl font-bold sm:text-3xl">Kết quả cho: {name}</p>
        </div>
      </section>

      <section className=" p- -z-10 mx-1 grid gap-5 py-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:px-20">
        {/* <img className='col-span-6 row-span-1' src="banner.jpg" alt='Quảng cáo'></img> */}

        {data?.map((item) => {
          // if (item.name.toLowerCase().includes(name)) {
          return (
            <div
              key={item.code}
              className=" border-black-50 text-md group col-span-1 row-span-1 h-fit items-center rounded-lg bg-pink-50 font-bold drop-shadow-md">
              <div className=" relative overflow-hidden">
                {/* {getImage(item.productDetail[0]?.image)} */}
                <div className="h-96 w-full">
                  <Image
                    src={
                      item.productDetail[0]?.image
                        ? item.productDetail[0]?.image
                        : "https://drive.google.com/uc?id=1VOlbk8vSr-e0Gdt7Pd_Cs-0TN0EZXFjs"
                    }
                    layout="fill"
                    className="object-cover"
                    alt="Image"
                    priority></Image>
                </div>

                {/* <img
                  className="h-96 w-full object-cover"
                  src={item.productDetail[0]?.image}
                  alt=""
                /> */}
                <div className="absolute -bottom-10 flex h-full w-full items-center justify-center bg-black/20 opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
                  <button className="rounded-lg bg-gray-100 py-2 px-5 text-black hover:bg-slate-500 hover:text-white">
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
              <h2 className="mt-3 ml-2 text-xl text-2xl capitalize hover:text-red-500">
                <Link href={"/productDetail/" + item.code}>
                  {item.name} &#40;{item.line.gender}&#41;
                </Link>
              </h2>
              <div className="inline-block">
                <del className="ml-2 text-lg text-red-700">
                  {item.buyPrice.toString()}000 &#8363;
                </del>
                <small className="mr-3 ml-2  rounded-full bg-red-700 px-2 tracking-widest text-white">
                  -40&#37;
                </small>
              </div>

              <br />
              <span className="mt-2 ml-1 inline-block text-xl">
                {(item.buyPrice * 0.6).toString()}000 &#8363;
              </span>
            </div>
          );
          // }
        })}
      </section>
    </>
  );
};

export default SearchPage;
