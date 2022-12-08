import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import CheckIcon from "@heroicons/react/24/outline/CheckIcon";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { trpc } from "../../utils/trpc";

// const product = {
//   name: "Basic Tee 6-Pack ",
//   price: "192.000",
//
//   imageAlt: "Two each of gray, white, and black shirts arranged on table.",
//
//
//   ],
//   sizeGuideSrc: "https://canifa.com/assets/Women-measurement.png",
//   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// };

const sizes = [
  { name: "S", inStock: true },
  { name: "M", inStock: true },
  { name: "L", inStock: true },
  { name: "XL", inStock: true },
  { name: "XXL", inStock: false },
];
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const ProductDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: product } = trpc.product.getOneWhere.useQuery({ code: id as string });
  const [open, setOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product?.productDetail[0]?.colorCode);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedImage, setSelectedImage] = useState(product?.productDetail[0]?.image);
  // const colors = [
  //       {product?.productDetail[0]?.colorCode}

  //       { name: "#d2d6d7", class: "bg-[#d2d6d7]", selectedClass: "ring-gray-400" },
  //       { name: "#ad2134", class: "bg-[#ad2134]", selectedClass: "ring-gray-400" },
  //       { name: "#201f24", class: "bg-[#201f24]", selectedClass: "ring-gray-900" },
  //     ],
  // const imageSrc: {
  //           "#d2d6d7": "https://canifa.com/img/1000/1500/resize/6/i/6it22w004-sa432-m-1.webp",
  //           "#ad2134": "https://canifa.com/img/1000/1500/resize/6/i/6it22w004-sr014-m-1.webp",
  //           "#201f24": "https://canifa.com/img/1000/1500/resize/6/i/6it22w004-sk010-m-1.webp",
  //         },

  // change image when color is selected
  const handleChooseColor = (index: number) => {
    setSelectedColor(product?.productDetail[index]?.colorCode);
    setSelectedImage(product?.productDetail[index]?.image);
  };

  return (
    <>
      <div className="mx-auto my-0 max-h-full w-3/4 bg-white">
        <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8  sm:px-6 sm:pt-8 md:p-6 lg:p-8">
          <div className="gap-y grid w-full grid-cols-1 items-start gap-x-6 sm:grid-cols-12 lg:gap-x-8">
            <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
              <img
                src={product?.productDetail[0]?.image}
                alt="Ảnh sản phẩm"
                className="object-cover object-center"
              />
            </div>

            <div className="w-3/4 sm:col-span-8 lg:col-span-7">
              <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product?.name}</h2>

              <section aria-labelledby="information-heading" className="mt-2">
                <h3 id="information-heading" className="sr-only">
                  Product information
                </h3>

                {/* Price */}
                <p className="text-2xl text-gray-900">{product?.buyPrice.toString()}000 &#8363;</p>

                {/* Description */}
                <div className="">
                  <h2 className="mt-10 text-lg font-medium text-gray-900">Description</h2>
                  <p className="mt-4 text-base text-gray-500">{product?.description}</p>
                </div>
              </section>

              <section className="mt-10" aria-labelledby="option-heading">
                <h3 className="sr-only" id="options-heading">
                  Product options
                </h3>

                <form action="">
                  {/* Color */}
                  <h4 className="text-lg font-semibold text-gray-900">Color</h4>

                  <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                    <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                    <span className="flex items-center space-x-3">
                      {product?.productDetail?.map((item, index) => (
                        <RadioGroup.Option
                          key={item.colorCode + item.image}
                          value={`#${item.colorCode}`}
                          className={({ active, checked }) =>
                            classNames(
                              "ring-gray-400",
                              active && checked ? "ring ring-offset-1" : "",
                              !active && checked ? "ring-2" : "",
                              "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                            )
                          }
                          onClick={() => handleChooseColor(index)}>
                          <RadioGroup.Label as="span" className="sr-only">
                            {"Hahahaha"}
                            {item.colorCode}{" "}
                          </RadioGroup.Label>

                          <span
                            aria-hidden="true"
                            className={classNames(
                              "bg-[#" + item.colorCode + "]",
                              "h-8 w-8 rounded-full border border-black border-opacity-10"
                            )}
                          />
                          {/* <h4 className={"text-[#" + item.colorCode + "]"}>{item.colorCode}</h4> */}
                        </RadioGroup.Option>
                      ))}
                    </span>
                  </RadioGroup>

                  {/* Size */}
                  <div className="mt-10">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-medium text-gray-900">Size </h4>

                      <button
                        type="button"
                        onClick={() => setOpen(true)}
                        className="text-sm font-medium text-gray-700 underline hover:text-gray-500">
                        Size guide
                      </button>

                      <Transition.Root show={open} as={Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={setOpen}>
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0">
                            <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
                          </Transition.Child>

                          <div className="fixed inset-0 z-10 overflow-y-auto">
                            <div className="flex max-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                              <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                                enterTo="opacity-100 translate-y-0 md:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 md:scale-100"
                                leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95">
                                {/* <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                                  <div className=" relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                                    <img
                                      src={product.sizeGuideSrc}
                                      alt="size guide"
                                      className="w-5/6 object-cover object-center"
                                    />
                                    <button
                                      type="button"
                                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                                      onClick={() => setOpen(false)}>
                                      <span className="sr-only">Close</span>
                                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                  </div>
                                  <div className=""></div>
                                </Dialog.Panel> */}
                              </Transition.Child>
                            </div>
                          </div>
                        </Dialog>
                      </Transition.Root>
                    </div>

                    <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                      <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                      <div className="grid w-3/4 grid-cols-5 gap-4">
                        {sizes.map((size) => (
                          <RadioGroup.Option
                            key={size.name}
                            value={size}
                            disabled={!size.inStock}
                            className={({ active }) =>
                              classNames(
                                size.inStock
                                  ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                  : "cursor-not-allowed bg-gray-50 text-gray-200",
                                active ? "ring-2 ring-indigo-500" : "",
                                "relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase focus:outline-none hover:bg-gray-50 sm:flex-1"
                              )
                            }>
                            {({ active, checked }) => (
                              <>
                                <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                {size.inStock ? (
                                  <span
                                    className={classNames(
                                      active ? "border" : "border-2",
                                      checked ? "border-indigo-500" : "border-transparent",
                                      "pointer-events-none absolute -inset-px rounded-md border-2 border-gray-300"
                                    )}
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                                    <svg
                                      className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                      viewBox="0 0 100 100"
                                      preserveAspectRatio="none"
                                      stroke="currentColor">
                                      <line
                                        x1={0}
                                        y1={100}
                                        x2={100}
                                        y2={0}
                                        vectorEffect="non-scaling-stroke"
                                      />
                                    </svg>
                                  </span>
                                )}
                              </>
                            )}
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Service */}
                  <div className="mt-10">
                    <ul>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <CheckIcon className="h-5 w-5 text-[#63b1bc]" aria-hidden="true" />
                        </div>
                        <p className="ml-3 text-base font-semibold text-gray-700">
                          Free shipping on all continental US orders.
                        </p>
                      </li>
                      <li className="mt-4 flex items-start">
                        <div className="flex-shrink-0">
                          <CheckIcon className="h-5 w-5 text-[#63b1bc]" aria-hidden="true" />
                        </div>
                        <p className="ml-3 text-base font-semibold text-gray-700">
                          30-day money-back guarantee.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <button
                    type="submit"
                    className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-[#333f48] py-3 px-8 text-base font-medium text-white focus:outline-none hover:bg-[#28343a]
              ">
                    Add to cart
                  </button>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Transition */}
    </>
  );
};
export default ProductDetail;
