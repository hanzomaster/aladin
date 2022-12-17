import { NextPage } from "next";
import Link from "next/link";
import NavBar from "../components/navbar";
import SidebarAccount from "../components/SidebarAccount";
import { trpc } from "../utils/trpc";

const Purchase: NextPage = () => {
  const { data: orders } = trpc.order.getAllOfUser.useQuery();
  return (
    <div className="h-full w-full text-sm md:text-base">
      {/* Navbar */}
      <NavBar />
      {/* Content */}
      <div className="p- mx-1 py-10">
        <div className="mt-10 flex h-full border-4 px-4 pb-20 lg:px-10">
          <SidebarAccount />
          {/* main */}
          <div className="w-[80%] xl:w-[60%]">
            <header className="w-full border-b-2 py-5 pl-2 sm:pl-5 ">
              <h1 className="text-2xl font-semibold text-gray-800 md:text-3xl ">Tất cả đơn hàng</h1>
            </header>
            <main className="pl-5 md:pl-10 lg:pl-32">
              {orders?.map((item) => {
                return (
                  <Link key={item.orderNumber} href="/orderdetail">
                    <div className=" m d:px-4 relative my-4 h-full w-full cursor-pointer bg-gray-50 px-2 pb-2 hover:bg-gray-100">
                      <header className="flex justify-between border-b-2 py-4">
                        <h1 className="  text-base font-semibold text-gray-800 sm:text-lg md:text-xl">
                          #1234
                        </h1>
                        <div className="flex flex-col items-center text-xs sm:flex-row sm:text-base md:text-lg">
                          <p className="mr-2 sm:mr-4">{item.orderDate.toDateString()}</p>
                          <p className="text-[#0070f3]">{item.status}</p>
                        </div>
                      </header>
                      <main className="w-full">
                        <div className="mt-4 flex">
                          <div className="w-12 pb-4 sm:w-16 md:w-20">
                            <img
                              className="w-full md:block"
                              src="https://i.ibb.co/84qQR4p/Rectangle-10.png"
                              alt="dress"
                            />
                          </div>
                          <div className="flex w-full flex-col justify-between px-2 md:px-10">
                            <div className="flex w-full justify-between">
                              <h1 className="text-sm font-medium text-gray-800 sm:text-base md:text-lg">
                                Premium Quaility Dress
                              </h1>
                              <div className="flex flex-col md:flex-row">
                                <p className="text-sm leading-6 sm:text-base xl:text-lg">$36.00</p>
                                <span className="text-sm text-red-300 line-through sm:text-base xl:text-lg">
                                  {" "}
                                  $45.00
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="absolute right-0 bottom-0 mb-2 pr-4 ">
                          <span className="text-xs sm:text-sm md:text-base">Tổng số tiền: </span>
                          <span className="text-sm font-medium text-gray-800 sm:text-lg md:text-xl">
                            179.000đ
                          </span>
                        </div>
                      </main>
                    </div>
                  </Link>
                );
              })}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Purchase;
