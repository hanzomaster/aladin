import { useState } from "react";
import ProductCart from "./cart";
import DropdownComponent from "./dropdownmenu";

const NavBar = () => {
  const maleData = [
    "Coat",
    "Hoodie",
    "Jeans",
    "Pants",
    "Pj",
    "Polo",
    "Shirt",
    "Shorts",
    "Sweater",
    "T-shirt",
  ];

  const femaleData = [
    "Coat",
    "Hoodie",
    "Jeans",
    "Pants",
    "Pj",
    "Polo",
    "Shirt",
    "Shorts",
    "Sweater",
    "T-shirt",
  ];
  const userFunc = ["Quản lý tài khoản", "Quản lý đơn hàng", "Đăng xuất"];
  const menuData = ["Sign in", "Sign up"];

  function test() {
    console.log(123);
  }
  const [open, setOpen] = useState(0);
  function isLogin(isLogin: boolean) {
    if (!isLogin) {
      return (
        <>
          <div className="flex " onClick={addCart}>
            <a
              href="#"
              className="text-md ml-2 mt-4 block rounded px-4 py-2 font-bold text-gray-700 hover:bg-gray-700 hover:text-white lg:mt-0">
              Sign in
            </a>

            <a
              href="#"
              className=" text-md ml-2 mt-4  block rounded px-4 py-2 font-bold text-gray-700 hover:bg-gray-700 hover:text-white lg:mt-0">
              Sign up
            </a>
          </div>
        </>
      );
    } else if (isLogin) {
      return (
        <>
          <DropdownComponent title="user" type="user" data={userFunc} />
        </>
      );
    }
  }
  function addCart() {
    console.log("huhuhu");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    if (open === 0) {
      setOpen(open + 1);
    } else {
      setOpen(open - 1);
    }
  }

  return (
    <>
      {Array.from({ length: open }).map(() => (
        <ProductCart key={open} />
      ))}
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
      <header className="sticky z-30">
        <nav className="fixed flex w-full flex-wrap items-center justify-between border-t-2 border-solid  border-gray-700 bg-[#eff6ff] py-4 shadow lg:px-12">
          <div className=" relative flex w-full justify-between border-b-2 border-solid border-gray-300 pl-6 pr-2 pb-5 lg:w-auto lg:border-b-0 lg:pb-0">
            <div className="mr-16 flex flex-shrink-0 items-center text-gray-800">
              <span className="text-xl font-semibold tracking-tight">Aladin</span>
            </div>
            <div className="block lg:hidden ">
              <DropdownComponent title="menu" type="menu" data={menuData} />

              {/* <button
                    id="nav"
                    
                    className="flex items-center px-3 py-2 border-2 rounded text-white-700 border-white-700 hover:text-gray-700 hover:border-gray-700">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button> */}
            </div>
          </div>

          <div className="menu hidden w-full flex-grow px-8 lg:block lg:flex lg:w-auto lg:items-center lg:px-3">
            <div className="text-md font-bold text-gray-700 lg:flex-grow">
              <DropdownComponent title="Nam" type="male" data={maleData} />

              <DropdownComponent title="Nữ" type="female" data={femaleData} />
            </div>

            <div className="relative mx-auto hidden text-gray-600 lg:block">
              <input
                className="h-10 rounded-lg border-2 border-gray-300 bg-white pl-2 pr-8 text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search"
              />
              <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
                <svg
                  className="h-4 w-4 fill-current text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  xmlSpace="preserve"
                  width="512px"
                  height="512px">
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
            {/* <div className="flex " onClick={addCart}>
              <a
                href="#"
                className="text-md ml-2 mt-4 block rounded px-4 py-2 font-bold text-gray-700 hover:bg-gray-700 hover:text-white lg:mt-0">
                Sign in
              </a>

              <a
                href="#"
                className=" text-md ml-2 mt-4  block rounded px-4 py-2 font-bold text-gray-700 hover:bg-gray-700 hover:text-white lg:mt-0">
                Sign up
              </a>
            </div> */}
            {isLogin(true)}
            <div className="flex justify-center px-4 md:block">
              <a
                className="
                  relative
                  text-gray-700
                  hover:text-gray-600
                  dark:text-gray-200
                  dark:hover:text-gray-300
                  "
                href="#">
                <i className="fas fa-shopping-cart" onClick={addCart}></i>

                <span
                  className="
                       absolute
                       top-0
                       left-0
                       rounded-full
                       bg-indigo-500 p-1
                       text-xs
                       text-white
                       "></span>
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
