import { NextPage } from "next";
import SidebarAdmin from "../components/SidebarAdmin";
import extractColors from "extract-colors";
import getPixels from "get-pixels";
import Colors from "get-image-colors";
import Table from "../components/Table";
import DropDownItem from "../components/DropDownItem";
// import { test } from "../utils/test";
const NewProduct: NextPage = () => {
  // console.log(test);
  return (
    <div className="flex w-full">
      <SidebarAdmin></SidebarAdmin>
      <main className="w-full px-5 pt-10 md:px-10">
        <div className="my-5 flex justify-between pr-20 lg:w-[60%]">
          <div className="flex items-center">
            <label
              className="my-5 mr-10 text-sm font-semibold text-gray-500 md:text-base"
              htmlFor="email">
              Giới tính
            </label>
            <DropDownItem title="Giới tính" list={["Nam", "Nữ"]} />
          </div>

          <div className="flex items-center">
            <label
              className="my-5 mr-10 text-sm font-semibold text-gray-500 md:text-base"
              htmlFor="email">
              Loai sản phẩm
            </label>
            <DropDownItem title="Loại sản phẩm" list={["Áo", "Quần", "Giày"]} />
          </div>
        </div>
        <div className="my-5 lg:w-[60%]">
          <label className="my-5 text-sm font-semibold text-gray-500 md:text-base" htmlFor="name">
            Tên sản phẩm
          </label>
          <input
            className="w-full rounded border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 md:text-base"
            type="text"
            autoFocus
          />
        </div>

        <div className="my-5 lg:w-[60%]">
          <label
            className="my-5 text-sm font-semibold text-gray-500 md:text-base"
            htmlFor="description">
            Mô tả
          </label>
          <textarea
            className="w-full rounded border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 md:text-base"
            autoFocus
          />
        </div>
        <div className="my-5 lg:w-[60%]">
          <label className="my-5 text-sm font-semibold text-gray-500 md:text-base" htmlFor="email">
            Giá
          </label>
          <input
            className="w-full rounded border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 md:text-base"
            type="text"
            autoFocus
          />
        </div>

        <div className="my-5">
          <label className="my-5 text-sm font-semibold text-gray-500 md:text-base" htmlFor="email">
            Chi tiết
          </label>

          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <Table />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default NewProduct;
