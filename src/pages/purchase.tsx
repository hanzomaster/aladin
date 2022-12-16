import { NextPage } from "next";
import OrderedItem from "../components/user/OrderedItem";
import SidebarAccount from "../components/user/SidebarAccount";

const Purchase: NextPage = () => {
  return (
    <div className="h-full w-full text-sm md:text-base">
      <h1>Purchase</h1>
      {/* Navbar */}
      {/* <NavBar /> */}
      {/* Content */}

      <div className="mt-[calc(100%-)] flex h-full border-4 px-4 pb-20 lg:px-10">
        <SidebarAccount />
        {/* main */}
        <div className="w-[80%] xl:w-[60%]">
          <header className="w-full border-b-2 py-5 pl-2 sm:pl-5 ">
            <h1 className="text-2xl font-semibold text-gray-800 md:text-3xl ">Tất cả đơn hàng</h1>
          </header>
          <main className="pl-5 md:pl-10 lg:pl-32">
            <OrderedItem />
            <OrderedItem />
          </main>
        </div>
      </div>
    </div>
  );
};
export default Purchase;
