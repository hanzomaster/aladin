import React from 'react'
// import { BsHeart } from 'react-icons/bs'
import data from './/product'
import NavBar from './component/navbar'


const Products = () => {
  // eslint-disable-next-line
  const [items, setItems] = React.useState(data)
  
  return (
    <>
      <section>
        <NavBar/>
      </section>

      <section className=" p- grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 2xl:px-20 py-10 mx-1">
      <img className='col-span-6 row-span-1 mt-10 ' src="banner.jpg" alt='Quảng cáo'></img>
      <div className='block col-span-6'>
      <p className='text-xl font-bold sm:text-3xl'>Sản phẩm nổi bật:</p>
      </div>
      </section>
      
      
      <section className=" p- grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 2xl:px-20 py-5 mx-1">

        {/* <img className='col-span-6 row-span-1' src="banner.jpg" alt='Quảng cáo'></img> */}

        {items.map((item) => {
          const { id, image, title, desc, category, type, price } = item

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
      <div key={id} className=" h-fit group border-black-50 bg-pink-50 items-center drop-shadow-md rounded-lg col-span-1 row-span-1 text-md font-bold">
            <div className=" relative overflow-hidden">
              {/* <Image
              src={image}
              layout = "fill"
              className="object-cover"
              ></Image> */}
            <img className="h-96 w-full object-cover" src={image} alt=""/>
            <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button className="bg-gray-100 text-black py-2 px-5 rounded-lg hover:text-white hover:bg-slate-500">Thêm vào giỏ hàng</button>
            </div>
      </div>
          <h2 className="mt-3 ml-2 text-xl capitalize hover:text-red-500 text-2xl">{title}</h2>
          <del className="text-red-700 text-lg ml-2">${price}</del>
          <p className="text-xl mt-2 ml-1 inline-block">$3</p>
      </div>
          )
        })}
      </section>
    </>
  )
}

export default Products