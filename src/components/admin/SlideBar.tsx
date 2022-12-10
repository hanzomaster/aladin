import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import NotificationDropdown from "./Dropdowns/NotificationDropdown";
import UserDropdown from "./Dropdowns/UserDropdown";

export default function Sidebar() {
  const items = [{
    href: "/admins/dashboard",
    name: "Dashboard"
  },
  {
    href: "/admins/products",
    name: "Products"
  }, 
  {
    href: "/admins/orders",
    name: "Orders"
  }
]
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-[#63b1bc] flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-white opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"> 
            </i>
          </button>
          {/* Brand */}
          <Link href="/login">
            <a
              href="#pablo"
              className="md:block text-left text-3xl md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-white uppercase font-bold p-4 px-0"
            >
              ALADIN
            </a>
          </Link>

          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              {items.map(item =>{
                return (
                  <>
                    <li className="items-center">
                      <Link href={item.href}>
                        <a
                          href="#pablo"
                          className={
                            "text-lg uppercase py-3 font-bold block " +
                            (router.pathname.indexOf(item.href) !== -1
                              ? "text-gray-800 hover:text-gray-500"
                              : "text-white hover:text-gray-500")
                          }
                        >
                          <i
                            className={
                              "fas fa-tv mr-2 text-sm " +
                              (router.pathname.indexOf(item.href) !== -1
                                ? "opacity-75"
                                : "text-blueGray-300")
                            }
                          ></i>{" "}
                          {item.name}
                        </a>
                      </Link>
                    </li>
                  </>
                )
              })}
              {/* <li className="items-center">
                <Link href="/admins/dashboard">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admins/dashboard") !== -1
                        ? "text-gray-500 hover:text-gray-800"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-tv mr-2 text-sm " +
                        (router.pathname.indexOf("/admins/dashboard") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Dashboard
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admins/products">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admins/products") !== -1
                        ? "text-white hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-tools mr-2 text-sm " +
                        (router.pathname.indexOf("/admins/products") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Products
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admins/orders">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admins/orders") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-table mr-2 text-sm " +
                        (router.pathname.indexOf("/admins/orders") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Orders
                  </a>
                </Link>
              </li> */}


            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
