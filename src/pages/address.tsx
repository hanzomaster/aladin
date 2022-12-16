import { NextPage } from "next";
import { useState } from "react";
import AddressItem from "../components/AddressItem";
import Navbar from "../components/navbar";
import SidebarAccount from "../components/SidebarAccount";
import { Address } from "../types";

const expAddress: Address = {
  detail: "62 Trần Thái Tông",
  neighborhood: "Dịch Vọng Hậu",
  district: "Cầu Giấy",
  province: "Hà Nội",
};

const expAddressList = [
  {
    name: "Huyền",
    phone: "12345678",
    address: expAddress,
    default: true,
  },
  {
    name: "Nguyễn Thanh Huyền",
    phone: "12345678",
    address: expAddress,
    default: false,
  },
  {
    name: "Nguyễn Thanh Huyền",
    phone: "12345678",
    address: expAddress,
    default: false,
  },
];

const AddressView: NextPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [addressList, setAddressList] = useState(expAddressList);

  const handleDeleteAddress = (index: number) => {
    const newAddressList = [...addressList];
    newAddressList.splice(index, 1);
    setAddressList(newAddressList);
  };

  return (
    <div className="h-full w-full text-sm md:text-base ">
      {/* Navbar */}
      <Navbar />
      {/* Content */}
      <div className="p- mx-1 py-10">
        <div className="mt-10 flex h-full w-full border-b-4 px-2 sm:px-4 lg:px-10">
          <SidebarAccount />
          {/* main */}
          <div className="w-full lg:w-[70%]">
            <header className="flex h-20 w-full flex-col border-b-2 px-2 sm:flex-row sm:items-center sm:justify-between md:px-5">
              <h1 className="mb-2 text-xl font-normal sm:text-2xl md:text-3xl">Địa chỉ của tôi</h1>
              <button className="flex h-8 w-24 items-center bg-[#da291c] text-xs text-white sm:h-12 sm:text-lg md:w-36">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4 sm:h-6 sm:w-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                </svg>
                Thêm địa chỉ
              </button>
            </header>

            <main className=" pl-10 pr-[5rem]  md:pl-10 lg:pl-32 ">
              <div className="flex flex-col">
                {addressList.map((address, index) => (
                  <AddressItem
                    key={index}
                    name={address.name}
                    phone={address.phone}
                    address={address.address}
                    default={selectedIndex === index && true}
                    setDefault={() => setSelectedIndex(index)}
                    deleteAddress={() => handleDeleteAddress(index)}
                  />
                ))}
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
