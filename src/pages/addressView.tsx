import { NextPage } from "next";
import AddressItem from "../components/AddressItems";
import SidebarAccount from "../components/SidebarAccount";
import { Address } from "../types";

const AddressView: NextPage = () => {
  const expAddress: Address = {
    detail: "62 Trần Thái Tông",
    neighborhood: "Dịch Vọng Hậu",
    district: "Cầu Giấy",
    province: "Hà Nội",
  };
  return (
    <div className="h-[100vh] w-full text-sm md:text-base ">
      {/* Navbar */}

      {/* Content */}
      <div>
        <div className="mt-32 flex h-[40em] border-4 px-4 lg:px-10">
          <SidebarAccount />
          {/* main */}
          <div className="w-full lg:w-[70%]">
            <header className="flex h-20 w-full items-center justify-between border-b-2 pl-5">
              <h1 className="text-2xl font-normal md:text-3xl">Địa chỉ của tôi</h1>
              <button className="flex h-12 w-36 items-center bg-[#da291c] text-lg text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                </svg>
                Thêm địa chỉ
              </button>
            </header>

            <main className=" pl-10 pr-[5rem]  md:pl-10 lg:pl-32 ">
              <div className="flex flex-col">
                <AddressItem
                  name={"Huyền"}
                  phone={"12345678"}
                  address={expAddress}
                  default={true}
                />
                <AddressItem
                  name={"Nguyễn Thanh Huyền"}
                  phone={"12345678"}
                  address={expAddress}
                  default={false}
                />
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
};
export default AddressView;
