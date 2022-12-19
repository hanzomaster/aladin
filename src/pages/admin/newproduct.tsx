import { NextPage } from "next";
import { useState } from "react";
import DropDownItem from "../../components/admin/DropDownItem";
import NavbarAdmin from "../../components/admin/NavbarAdmin";
import CardProfile from "../../components/admin/UploadImage";
// import { test } from "../utils/test";
const NewProduct: NextPage = () => {
  const [productDetailList, setProductDetailList] = useState<
    { colorCode: string; image: any; numS: number; numM: number; numL: number; numXL: number }[]
  >([]);

  const onDeleteItem = (idx: number) => {
    setProductDetailList(productDetailList.filter((a, index) => index !== idx));
  };
  const onCreateNewClick = () => {
    const tempArr = [...productDetailList];
    tempArr.push({ colorCode: "", image: null, numS: 0, numM: 0, numL: 0, numXL: 0 });
    setProductDetailList(tempArr);
  };

  const onColorCodeChange = (index: number) => (e: any) => {
    const tempArr = [...productDetailList];
    if (tempArr[index] !== null) {
      tempArr[index]!.colorCode = e.target.value;
    }
    setProductDetailList(tempArr);
  };
  const onImageChange = (index: number) => (e: any) => {
    const tempArr = [...productDetailList];
    tempArr[index]!.image = e.target.value;
    setProductDetailList(tempArr);
  };
  const onNumSChange = (index: number) => (e: any) => {
    const tempArr = [...productDetailList];
    tempArr[index]!.numS = e.target.value;
    setProductDetailList(tempArr);
  };
  const onNumMChange = (index: number) => (e: any) => {
    const tempArr = [...productDetailList];
    tempArr[index]!.numM = e.target.value;
    setProductDetailList(tempArr);
  };
  const onNumLChange = (index: number) => (e: any) => {
    const tempArr = [...productDetailList];
    tempArr[index]!.numL = e.target.value;
    setProductDetailList(tempArr);
  };

  const onNumXLChange = (index: number) => (e: any) => {
    const tempArr = [...productDetailList];
    tempArr[index]!.numXL = e.target.value;
    setProductDetailList(tempArr);
  };
  // console.log(test);
  return (
    <div className="h-full w-full text-sm md:text-base">
      <NavbarAdmin />
      {productDetailList.map((item) => {
        return (
          <>
            <p>{item.colorCode}</p>
            <p>{item.image}</p>
            <p>{item.numS}</p>
            <p>{item.numM}</p>
            <p>{item.numL}</p>
            <p>{item.numXL}</p>
            <p>---------------------</p>
          </>
        );
      })}
      <form className="w-full px-10 pt-10 md:px-28">
        <div className="my-5 flex flex-col lg:w-[60%] lg:flex-row lg:justify-between">
          <div className="flex items-center md:flex-row">
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
          <textarea className="w-full rounded border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 md:text-base" />
        </div>
        <div className="my-5 lg:w-[60%]">
          <label className="my-5 text-sm font-semibold text-gray-500 md:text-base" htmlFor="email">
            Giá
          </label>
          <input
            className="w-full rounded border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 md:text-base"
            type="text"
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
                  <div>
                    <table className="w-full">
                      <thead className="border-b bg-white">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-4 text-left text-base font-medium text-gray-900">
                            #
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-4 text-left text-base font-medium text-gray-900">
                            Mã màu
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-4 text-left text-base font-medium text-gray-900">
                            Ảnh
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-4 text-left text-base font-medium text-gray-900">
                            S
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-4 text-left text-base font-medium text-gray-900">
                            M
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-4 text-left text-base font-medium text-gray-900">
                            L
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-4 text-left text-base font-medium text-gray-900">
                            XL
                          </th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {productDetailList.map((item, index) => (
                          <tr
                            className="border-b bg-white transition duration-300 ease-in-out hover:bg-gray-100"
                            key={index}>
                            <td className="whitespace-nowrap px-6 py-4 text-base font-light text-gray-900">
                              {index + 1}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-base font-light text-gray-900">
                              <input
                                className="h-8 w-16 rounded-sm bg-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-600 hover:bg-white "
                                type="text"
                                name="name"
                                value={item.colorCode}
                                onChange={onColorCodeChange(index)}
                              />
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-base font-light text-gray-900">
                              {/* <DragImage
                    accept="image/png, image/jpg, image/jpeg, image/pdf"
                    multiple
                    name="pictures"
                  /> */}
                              <CardProfile />
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-base font-light text-gray-900">
                              <input
                                className="h-8 w-16 rounded-sm bg-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-600 hover:bg-white "
                                type="number"
                                name="s"
                                value={item.numS}
                                onChange={onNumSChange(index)}
                              />
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-base font-light text-gray-900">
                              <input
                                className="h-8 w-16 rounded-sm bg-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-600 hover:bg-white "
                                type="number"
                                name="m"
                                value={item.numM}
                                onChange={onNumMChange(index)}
                              />
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-base font-light text-gray-900">
                              <input
                                className="h-8 w-16 rounded-sm bg-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-600 hover:bg-white "
                                type="number"
                                name="l"
                                value={item.numL}
                                onChange={onNumLChange(index)}
                              />
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-base font-light text-gray-900">
                              <input
                                className="h-8 w-16 rounded-sm bg-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-600 hover:bg-white  "
                                type="number"
                                name="xl"
                                value={item.numXL}
                                onChange={onNumXLChange(index)}
                              />
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-base font-light text-gray-900">
                              <button
                                className="btn btn-outline-danger btn-sm rounded-sm bg-red-500"
                                onClick={() => onDeleteItem(index)}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="white"
                                  className="h-5 w-5">
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                  />
                                </svg>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        onCreateNewClick();
                      }}
                      className="btn btn-primary mt-3 flex text-gray-900 hover:text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-6 w-6">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="ml-2 text-base font-medium ">Thêm màu</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default NewProduct;
