import React from "react";
import { trpc } from "../utils/trpc";
// import { BsHeart } from 'react-icons/bs'
import data from ".//product";
import Footer from "./component/footer";
import NavBar from "./component/navbar";

const Products = () => {
  // eslint-disable-next-line
  const [items, setItems] = React.useState(data);
  const { data: trpcData } = trpc.product.getAll.useQuery();

  return (
    <>
      <section>
        <NavBar />
      </section>

      <section className=" p- mx-1 grid gap-5 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:px-20">
        <img
          className="col-span-6 row-span-1 mt-10 hidden sm:block"
          src="banner.jpg"
          alt="Quảng cáo"></img>
        <div className="col-span-6 block">
          <p className="text-xl font-bold sm:text-3xl">Sản phẩm nổi bật</p>
        </div>
      </section>

      <section className=" p- mx-1 grid gap-5 py-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:px-20">
        {/* <img className='col-span-6 row-span-1' src="banner.jpg" alt='Quảng cáo'></img> */}

        {items.map((item) => {
          const { id, image, title, desc, category, type, price } = item;

          return (
            //       <div key={id} className="bg-pink-50 border-black-50 items-center">

            //         <img src={image} alt={title} className="rounded-t-lg bg-center" />

            //         <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            //   <button className="bg-black text-white py-2 px-5">Add to cart</button>
            // </div>
            //         <div className="flex items-center justify-between">
            //           <div className="px-5">
            //             <h2 className="font-bold mt-5">{title}</h2>
            //           </div>

            //           {/* <div className="px-5">
            //             <BsHeart title="Add to Wishlist" className="cursor-pointer" />
            //           </div> */}
            //         </div>
            //         <div className="my-2 px-5">
            //           <small className="bg-green-500  rounded-full px-2 text-white tracking-widest mr-3">
            //             {category}
            //           </small>
            //           <small className="bg-green-500  rounded-full px-2 text-white tracking-widest mr-3">
            //             {type}
            //           </small>
            //         </div>
            //         <p className="text-2xl px-5 pb-6">$ {price}</p>
            //       </div>
            <div
              key={id}
              className=" border-black-50 text-md group col-span-1 row-span-1 h-fit items-center rounded-lg bg-pink-50 font-bold drop-shadow-md">
              <div className=" relative overflow-hidden">
                {/* <Image
              src={image}
              layout = "fill"
              className="object-cover"
              ></Image> */}
                <img
                  className="h-96 w-full object-cover"
                  src={trpcData[0]?.productDetail[0]?.image}
                  alt=""
                />
                <div className="absolute -bottom-10 flex h-full w-full items-center justify-center bg-black/20 opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
                  <button className="rounded-lg bg-gray-100 py-2 px-5 text-black hover:bg-slate-500 hover:text-white">
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
              <h2 className="mt-3 ml-2 text-xl text-2xl capitalize hover:text-red-500">
                {trpcData[0]?.name}
              </h2>
              <del className="ml-2 text-lg text-red-700">{trpcData[0]?.buyPrice}vnd</del>
              <p className="mt-2 ml-1 inline-block text-xl">$3</p>
            </div>
          );
        })}
      </section>

      <Footer />
    </>
  );
};

export default Products;
