// import { BsHeart } from 'react-icons/bs'
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import Select from "react-select";
import useLocationForm from "../constants/useLocationForm";
import { trpc } from "../utils/trpc";

// const products = [
//   {
//     id: 1,
//     name: "Throwback Hip Bag",
//     href: "#",
//     color: "Salmon",
//     price: "$90.00",
//     quantity: 1,
//     imageSrc: "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
//     imageAlt:
//       "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
//   },
//   {
//     id: 2,
//     name: "Medium Stuff Satchel",
//     href: "#",
//     color: "Blue",
//     price: "$32.00",
//     quantity: 1,
//     imageSrc: "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
//     imageAlt:
//       "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
//   },
//   {
//     id: 2,
//     name: "Medium Stuff Satchel",
//     href: "#",
//     color: "Blue",
//     price: "$32.00",
//     quantity: 1,
//     imageSrc: "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
//     imageAlt:
//       "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
//   },
//   {
//     id: 2,
//     name: "Medium Stuff Satchel",
//     href: "#",
//     color: "Blue",
//     price: "$32.000000",
//     quantity: 1,
//     imageSrc: "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
//     imageAlt:
//       "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
//   },
// More products...
// ];
const CheckOut = () => {
  const { state, onCitySelect, onDistrictSelect, onWardSelect, onSubmit } = useLocationForm(false);
  const { data: sessionData } = useSession();
  const [disable, setDiable] = useState(true);
  const { data: cartData } = trpc.cart.get.useQuery();
  const mutation = trpc.order.create.useMutation();
  let total = 0;
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (event: any) => {
    setPhone(event.target.value);
  };

  const [name, setName] = useState("");

  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };

  const handleCheckOutBtnClicked = () => {
    mutation.mutate({ comment: "" });
  };
  const {
    cityOptions,
    districtOptions,
    wardOptions,
    selectedCity,
    selectedDistrict,
    selectedWard,
  } = state;
  return (
    <>
      <div className="mt-0">
        {/* <NavBar /> */}
        <section className="">
          <h1 className="text-md flex items-center justify-center font-bold text-gray-600 lg:text-3xl">
            Thanh toán
          </h1>
        </section>
        <div className="container mx-auto p-12">
          <div className="mx-auto flex w-full flex-col px-0 md:flex-row">
            <div className="flex flex-col md:w-full">
              <h2 className="text-heading mb-4 font-bold md:text-xl ">Địa chỉ giao hàng:</h2>
              <form className="mx-auto w-full justify-center" method="post">
                <div className="">
                  <div className="space-x-0 lg:flex lg:space-x-4">
                    <div className="w-full lg:w-full">
                      <label
                        htmlFor="firstName"
                        className="mb-3 block text-sm font-semibold text-gray-500">
                        Họ và tên:
                      </label>
                      <input
                        name="firstName"
                        value={name === "" ? sessionData?.user?.name : name}
                        onChange={handleNameChange}
                        type="text"
                        placeholder="Họ"
                        className="w-full rounded border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 lg:text-sm"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-full">
                      <label
                        htmlFor="Email"
                        className="mb-3 block text-sm font-semibold text-gray-500">
                        Số điện thoại:
                      </label>
                      <input
                        name="Last Name"
                        value={phone}
                        onChange={handlePhoneChange}
                        type="text"
                        placeholder="Số điện thoại"
                        className="w-full rounded border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 lg:text-sm"
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col gap-5">
                    <label
                      htmlFor="Email"
                      className="mb-3 block text-sm font-semibold text-gray-500">
                      Địa chỉ:
                    </label>
                    <Select
                      name="cityId"
                      key={`cityId_${selectedCity?.value}`}
                      isDisabled={cityOptions.length === 0}
                      options={cityOptions}
                      onChange={(option) => {
                        if (option) {
                          onCitySelect({
                            value: option.value,
                            label: option.label,
                          });
                        }
                      }}
                      placeholder="Tỉnh/Thành"
                      className=""
                      defaultValue={selectedCity}
                    />

                    <Select
                      name="districtId"
                      key={`districtId_${selectedDistrict?.value}`}
                      isDisabled={districtOptions.length === 0}
                      options={districtOptions}
                      onChange={(option) => {
                        if (option)
                          onDistrictSelect({
                            value: option.value,
                            label: option.label,
                          });
                      }}
                      placeholder="Quận/Huyện"
                      className="z-5"
                      defaultValue={selectedDistrict}
                    />

                    <Select
                      name="wardId"
                      key={`wardId_${selectedWard?.value}`}
                      isDisabled={wardOptions.length === 0}
                      options={wardOptions}
                      placeholder="Phường/Xã"
                      className="z-5"
                      onChange={(option) => {
                        if (option) {
                          setDiable(false);
                          onWardSelect({
                            value: option.value,
                            label: option.label,
                          });
                        }
                      }}
                      defaultValue={selectedWard}
                    />
                  </div>
                  <div className="mt-4">
                    <div className="w-full">
                      <label
                        htmlFor="Detail Adress"
                        className="mb-3 block text-sm font-semibold text-gray-500">
                        Địa chỉ chi tiết:
                      </label>
                      <input
                        name="Last Name"
                        type="text"
                        placeholder=""
                        className="w-full rounded border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 lg:text-sm"
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex items-center">
                    <label className="text-heading group flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="h-5 w-5 rounded border border-gray-300 focus:outline-none focus:ring-1"
                      />
                      <span className="ml-2">Lưu địa chỉ</span>
                    </label>
                  </div>
                  <div className="relative pt-3 xl:pt-6">
                    <label
                      htmlFor="note"
                      className="mb-3 block text-sm font-semibold text-gray-500">
                      {" "}
                      Ghi chú(Nếu có)
                    </label>
                    <textarea
                      name="note"
                      className="focus:ring-black-600 flex w-full items-center rounded border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-1"
                      placeholder="Notes for delivery"></textarea>
                  </div>
                  <div className="mt-4">
                    <button
                      className="text-black-200 w-full rounded-lg bg-gray-300 px-6 py-2 font-bold enabled:hover:bg-gray-900 enabled:hover:text-white "
                      disabled={disable || phone === "" || name === ""}>
                      Xác nhận thanh toán
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="ml-0 flex w-full flex-col lg:ml-12 lg:w-2/5">
              <div className="2xl:ps-4 pt-12 md:pt-0">
                <h2 className="text-xl font-bold">Đơn hàng</h2>
                <div className="mt-8 ">
                  <div className="flex h-80 w-auto flex-col space-y-4 overflow-y-scroll border-black scrollbar-thin scrollbar-none ">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                      {cartData?.cartItem?.map((product) => {
                        total =
                          total +
                          parseFloat(
                            (
                              product.productDetail.product.buyPrice * product.numberOfItems
                            ).toString()
                          );
                        return (
                          <li
                            key={product.productDetailId}
                            className="flex rounded-lg bg-slate-50 py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <div className="relative h-full w-full">
                                <Image
                                  src={product?.productDetail?.image}
                                  layout="fill"
                                  alt="Ảnh sản phẩm"
                                  className=" object-cover object-center"></Image>
                              </div>
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <p>{product?.productDetail?.product?.name}</p>
                                  </h3>
                                  <p className="ml-4">
                                    {product?.productDetail?.product?.buyPrice.toString()}
                                    ,000 &#8363;
                                  </p>
                                </div>
                                <div className="block inline-block">
                                  <p
                                    style={{
                                      background: `#${product?.productDetail?.colorCode}`,
                                    }}
                                    className="mt-1 text-sm text-gray-500">
                                    {product.productDetail.colorCode}
                                  </p>
                                  <p className="mt-1 ml-1 text-sm text-gray-500">
                                    Size: {product?.size}
                                  </p>
                                </div>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <div className="block inline-block text-gray-500">
                                  SL:
                                  <div className="inline-block">{product?.numberOfItems}</div>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="mt-4 flex p-4">
                  <h2 className="text-xl font-bold">
                    Số lượng sản phẩm: {cartData?.cartItem.length}
                  </h2>
                </div>
                <div className="text-heading flex w-full items-center border-b border-gray-300 py-4 text-sm font-semibold last:border-b-0 last:pb-0 last:text-base lg:py-5 lg:px-3">
                  Giá đơn hàng<span className="ml-2">{total},000&#8363;</span>
                </div>
                <div className="text-heading flex w-full items-center border-b border-gray-300 py-4 text-sm font-semibold last:border-b-0 last:pb-0 last:text-base lg:py-5 lg:px-3">
                  Phí ship<span className="ml-2">0&#8363;</span>
                </div>
                <div className="text-heading flex w-full items-center border-b border-gray-300 py-4 text-sm font-semibold last:border-b-0 last:pb-0 last:text-base lg:py-5 lg:px-3">
                  Tổng<span className="ml-2">{total},000&#8363;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CheckOut;
