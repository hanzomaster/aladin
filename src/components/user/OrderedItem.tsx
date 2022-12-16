import Link from "next/link";

function OrderedItem() {
  return (
    <Link href="/orderdetail">
      <div className=" m d:px-4 relative my-4 h-full w-full cursor-pointer bg-gray-50 px-2 pb-2 hover:bg-gray-100">
        <header className="flex justify-between border-b-2 py-4">
          <h1 className="  text-base font-semibold text-gray-800 sm:text-lg md:text-xl">#1234</h1>
          <div className="flex flex-col items-center text-xs sm:flex-row sm:text-base md:text-lg">
            <p className="mr-2 sm:mr-4">5/12/2022</p>
            <p className="text-[#0070f3]">Đang giao</p>
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
}
export default OrderedItem;
