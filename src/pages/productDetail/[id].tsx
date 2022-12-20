import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { ClothSize } from "@prisma/client";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import NavBar from "../../components/navbar";
import { useToast } from "../../components/Toast";
import { trpc } from "../../utils/trpc";

const sizeGuideSrc = "https://canifa.com/assets/Women-measurement.png";
// const description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
// };
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type ClothSizeLiteral = `${ClothSize}`;

const ProductDetail: NextPage = () => {
  const [open, setOpen] = useState(false);
  const { add: toast } = useToast();
  const router = useRouter();
  const { id } = router.query;
  const { data: product } = trpc.product.getOneWhere.useQuery({ code: id as string });
  const utils = trpc.useContext();
  const { data: sessionData } = useSession();
  const [selectedColor, setSelectedColor] = useState(product?.productDetail[0]?.colorCode);
  const [selectedSize, setSelectedSize] = useState<ClothSizeLiteral>(ClothSize.L);
  const [selectedImage, setSelectedImage] = useState(product?.productDetail[0]?.image);
  const [selectedId, setSelectedId] = useState(product?.productDetail[0]?.id as string);

  const mutation = trpc.cartItem.updateOrCreate.useMutation({
    onSuccess: () => {
      utils.cart.get.invalidate();
      toast({
        type: "success",
        duration: 2000,
        message: "Thêm vào giỏ hàng thành công",
        position: "topRight",
      });
    },
    onError: () => {
      toast({
        type: "error",
        duration: 10000,
        message: "Lỗi r",
        position: "topRight",
      });
    },
  });

  const handleAddItemToCart = () => {
    console.log(selectedSize.toString());
    debugger;
    sessionData
      ? mutation.mutate({
          productDetailId: (selectedId ? selectedId : product?.productDetail[0]?.id) as string,
          dto: {
            numberOfItems: 1,
            size: selectedSize,
          },
        })
      : toast({
          type: "error",
          duration: 2000,
          message: "Bạn chưa đăng nhập",
          position: "topRight",
        });
  };
  // const sizes:
  const colors: string[] = [];

  const { data: productDetail } = trpc.productDetail.getOneWhereId.useQuery({
    id: (selectedId ? selectedId : product?.productDetail[0]?.id) as string,
  });

  product?.productDetail?.forEach((color) => {
    colors.push(`#${color.colorCode}`);
  });

  // change image when color is selected
  const handleChooseColor = (color: string) => {
    setSelectedColor(color);
    if (product?.productDetail) {
      for (const product1 of product?.productDetail) {
        if (product1.colorCode === color) {
          setSelectedImage(product1.image);
          setSelectedId(product1.id);
        }
      }
    }
  };

  return (
    <>
      <section>
        <NavBar />
      </section>
      <section className=" p- mx-1 gap-5 py-10">
        <div className="inset-0">
          <div className="mx-auto my-0 max-h-full w-3/4 bg-white">
            <div className="mt-10 flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8  sm:px-6 sm:pt-8 md:p-6 lg:p-8">
              <div className="gap-y grid w-full grid-cols-2 items-start gap-x-6 sm:grid-cols-4 lg:gap-x-8">
                <div className=" h-4/5 w-4/5 overflow-hidden rounded-lg bg-gray-100 sm:col-span-2 lg:col-span-2">
                  <div className="relative h-full w-full">
                    <Image
                      src={
                        selectedImage
                          ? selectedImage
                          : product && product.productDetail && product?.productDetail[0]?.image
                          ? product?.productDetail[0]?.image
                          : ""
                      }
                      priority={true}
                      layout="fill"
                      alt="Ảnh sản phẩm"
                      className="object-fit"></Image>
                  </div>
                </div>

                <div className="w-3/4 sm:col-span-2 lg:col-span-2">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product?.name}</h2>

                    <div className="mt-0.5 inline-block">
                      <del className="ml-2 text-lg text-red-700">
                        {product?.buyPrice.toString()}000 &#8363;
                      </del>
                      <small className="mr-3 ml-2  rounded-full bg-red-700 px-2 tracking-widest text-white">
                        -40&#37;
                      </small>
                    </div>
                  </div>

                  <section aria-labelledby="information-heading" className="mt-2">
                    <h3 id="information-heading" className="sr-only">
                      Product information
                    </h3>

                    {/* Price */}
                    <div className="text-3xl font-bold text-black">
                      {((product?.buyPrice as unknown as number) * 0.6).toString()}000 &#8363;
                    </div>

                    {/* Description */}
                    <div className="">
                      <h2 className="mt-5 text-lg font-medium text-gray-900">Mô tả sản phẩm</h2>
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

                      <RadioGroup
                        value={selectedColor ? selectedColor : product?.productDetail[0]?.colorCode}
                        onChange={setSelectedColor}
                        className="mt-4">
                        <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                        <span className="flex items-center space-x-3">
                          {product?.productDetail?.map((item, index) => {
                            return (
                              <RadioGroup.Option
                                key={item.id}
                                value={item.colorCode}
                                className={({ active, checked }) =>
                                  classNames(
                                    "ring-gray-400",
                                    active && checked ? "ring ring-offset-1" : "",
                                    !active && checked ? "ring-2" : "",
                                    "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                                  )
                                }
                                onClick={() => handleChooseColor(item.colorCode)}>
                                <RadioGroup.Label as="span" className="sr-only">
                                  {" "}
                                  {item.colorCode}{" "}
                                </RadioGroup.Label>

                                <span
                                  style={{
                                    background: `${colors[index]}`,
                                  }}
                                  aria-hidden="true"
                                  className={classNames(
                                    "h-8 w-8 rounded-full border border-black border-opacity-10"
                                  )}
                                />
                              </RadioGroup.Option>
                            );
                          })}
                        </span>
                      </RadioGroup>

                      {/* Size */}
                      <div className="mt-10">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-medium text-gray-900">Size</h4>

                          <button
                            type="button"
                            onClick={() => setOpen(true)}
                            className="text-sm font-medium text-gray-700 underline hover:text-gray-500">
                            Size guide
                          </button>

                          <Transition.Root show={open} as={Fragment}>
                            <Dialog as="div" className="z-15 relative mt-5" onClose={setOpen}>
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
                                    <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                                      <div className=" relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                                        <img
                                          src={sizeGuideSrc}
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
                                    </Dialog.Panel>
                                  </Transition.Child>
                                </div>
                              </div>
                            </Dialog>
                          </Transition.Root>
                        </div>

                        <RadioGroup
                          value={selectedSize}
                          // onChange={setSelectedSize}
                          className="mt-4">
                          <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                          <div className="grid w-3/4 grid-cols-5 gap-4">
                            {productDetail?.productInStock?.map((productInStock) => (
                              <RadioGroup.Option
                                key={productInStock.size}
                                value={productInStock.size}
                                disabled={productInStock.quantity <= 0}
                                onClick={() => setSelectedSize(productInStock.size)}
                                className={({ active }) =>
                                  classNames(
                                    productInStock.quantity > 0
                                      ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                      : "cursor-not-allowed bg-gray-50 text-gray-200",
                                    active ? "ring-2 ring-indigo-500" : "",
                                    "relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase focus:outline-none hover:bg-gray-50 sm:flex-1"
                                  )
                                }>
                                {({ active, checked }) => (
                                  <>
                                    <RadioGroup.Label as="span">
                                      {productInStock.size}
                                    </RadioGroup.Label>
                                    {productInStock.quantity > 0 ? (
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
                              Miễn phí giao hàng toàn quốc.
                            </p>
                          </li>
                          <li className="mt-4 flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon className="h-5 w-5 text-[#63b1bc]" aria-hidden="true" />
                            </div>
                            <p className="ml-3 text-base font-semibold text-gray-700">
                              Đổi trả hàng trong vòng 30 ngày nếu không hài lòng.
                            </p>
                          </li>
                        </ul>
                      </div>
                      <button
                        type="submit"
                        onClick={(e) => {
                          e.preventDefault();
                          handleAddItemToCart();
                        }}
                        className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-600 py-3 px-8 text-base font-medium text-white focus:outline-none hover:bg-[#28343a]
              ">
                        Thêm vào giỏ hàng
                      </button>
                    </form>
                  </section>
                </div>
              </div>
            </div>
          </div>

          {/* Transition */}
        </div>
      </section>
      <article>
        <div className="mb-4 flex items-center space-x-4">
          <img
            className="h-10 w-10 rounded-full"
            src="/docs/images/people/profile-picture-5.jpg"
            alt=""
          />
          <div className="space-y-1 font-medium dark:text-white">
            <p>Jese Leos</p>
          </div>
        </div>
        <div className="mb-1 flex items-center">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>First star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>Second star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>Third star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>Fourth star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>Fifth star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
            Thinking to buy another one!
          </h3>
        </div>
        <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
          <p>Reviewed in the United Kingdom on</p>
        </footer>
        <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
          This is my third Invicta Pro Diver. They are just fantastic value for money. This one
          arrived yesterday and the first thing I did was set the time, popped on an identical strap
          from another Invicta and went in the shower with it to test the waterproofing.... No
          problems.
        </p>
        <p className="mb-3 font-light text-gray-500 dark:text-gray-400">
          It is obviously not the same build quality as those very expensive watches. But that is
          like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute
          bargain.
        </p>
        <a
          href="#"
          className="mb-5 block text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
          Read more
        </a>
        <aside>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            19 people found this helpful
          </p>
          <div className="mt-3 flex items-center space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
            <a
              href="#"
              className="rounded-lg border border-gray-300 bg-white px-2 py-1.5 text-xs font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:ring-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-700">
              Helpful
            </a>
            <a
              href="#"
              className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
              Report abuse
            </a>
          </div>
        </aside>
      </article>
    </>
  );
};

// `getStaticPaths` requires using `getStaticProps`

export default ProductDetail;
