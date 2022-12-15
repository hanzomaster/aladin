import { Dialog, Transition } from "@headlessui/react";
import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Fragment, useState } from "react";
import { trpc } from "../utils/trpc";
import DropdownComponent from "./dropdownmenu";

const NavBar = () => {
  const products = [
    {
      id: 1,
      name: "Throwback Hip Bag",
      href: "#",
      color: "Salmon",
      price: "$90.00",
      quantity: 1,
      imageSrc: "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
      imageAlt:
        "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
    },
    {
      id: 2,
      name: "Medium Stuff Satchel",
      href: "#",
      color: "Blue",
      price: "$32.00",
      quantity: 1,
      imageSrc: "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
      imageAlt:
        "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
    },
    // More products...
  ];

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

  const { data: sessionData } = useSession();

  const { data: cartData } = trpc.cart.getAll.useQuery();

  const [open, setOpen] = useState(false);

  const AuthShowcase: React.FC = () => {
    const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery();

    return (
      <>
        {!sessionData && (
          <div className="flex ">
            <button
              className="text-md ml-2 mt-4 block rounded px-4 py-2 font-bold text-gray-700 hover:bg-gray-700 hover:text-white lg:mt-0"
              onClick={sessionData ? () => signOut() : () => signIn()}>
              Sign in
            </button>

            <button className=" text-md ml-2 mt-4  block rounded px-4 py-2 font-bold text-gray-700 hover:bg-gray-700 hover:text-white lg:mt-0">
              Sign up
            </button>
          </div>
        )}
        {sessionData && <DropdownComponent title="user" type="user" data={userFunc} />}
      </>
    );
  };

  function addCart() {
    open ? setOpen(false) : setOpen(true);
  }

  const [message, setMessage] = useState("");

  const handleChange = (event: any) => {
    setMessage(event.target.value);
  };

  return (
    <>
      {/* Cart here  */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full">
                  <div className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Shopping cart
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => {
                                setOpen(false);
                              }}>
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                              {/* Code here */}
                              {products.map((product) => (
                                <li key={product.id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={product.imageSrc}
                                      alt={product.imageAlt}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <a href={product.href}>{product.name}</a>
                                        </h3>
                                        <p className="ml-4">{product.price}</p>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p className="text-gray-500">Qty {product.quantity}</p>

                                      <div className="flex">
                                        <button
                                          type="button"
                                          className="font-medium text-indigo-600 hover:text-indigo-500">
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>$262.00</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6">
                          <a
                            href="checkout"
                            className="flex items-center justify-center rounded-md border border-transparent bg-gray-300 px-6 py-3 text-base font-medium text-black shadow-sm hover:bg-gray-900 hover:text-white">
                            Checkout
                          </a>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            or
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => {
                                setOpen(false);
                              }}>
                              Continue Shopping
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Navbar here */}
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
      <header className="sticky z-[10]">
        <nav className="fixed mt-0 flex w-full flex-wrap items-center justify-between border-t-2  border-solid border-gray-700 bg-[#eff6ff] py-4 shadow lg:px-12">
          <div className=" relative flex w-full justify-between border-b-2 border-solid border-gray-300 pl-6 pr-2 pb-5 lg:w-auto lg:border-b-0 lg:pb-0">
            <Link href="/home" className="mr-16 flex flex-shrink-0 items-center text-gray-800">
              <span className="cursor-pointer text-xl font-semibold tracking-tight">Aladin</span>
            </Link>
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
                id="searchBar"
                className="h-10 rounded-lg border-2 border-gray-300 bg-white pl-2 pr-8 text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search"
                onChange={handleChange}
              />
              <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
                <Link href={"/home/" + message}>
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
                </Link>
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
            <AuthShowcase />
            <div className="flex justify-center px-4 md:block">
              <button
                className="
                  relative
                  text-gray-700
                  hover:text-gray-600
                  dark:text-gray-200
                  dark:hover:text-gray-300
                  "
                onClick={addCart}>
                <i className="fas fa-shopping-cart"></i>

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
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
