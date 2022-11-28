const OrderDetail = () => {
  return (
    <div className="py-14 px-4 md:px-6 2xl:container 2xl:mx-auto 2xl:px-20">
      <div className="item-start flex flex-col justify-start space-y-2 ">
        <h1 className="text-3xl font-semibold leading-7 text-gray-800 lg:text-4xl  lg:leading-9">
          Order #13432
        </h1>
        <p className="text-base font-medium leading-6 text-gray-600">21st Mart 2021 at 10:34 PM</p>
      </div>
      <div className="jusitfy-center mt-10 flex w-full flex-col items-stretch  space-y-4 md:space-y-6 xl:flex-row xl:space-x-8 xl:space-y-0">
        <div className="flex w-full flex-col items-start justify-start space-y-4 md:space-y-6 xl:space-y-8">
          <div className="flex w-full flex-col items-start justify-start bg-gray-50 px-4 py-4 md:p-6 md:py-6 xl:p-8">
            <p className="text-lg font-semibold leading-6 text-gray-800 md:text-xl xl:leading-5">
              Customer’s Cart
            </p>
            <div className="mt-4 flex w-full  flex-col items-start justify-start md:mt-6 md:flex-row md:items-center md:space-x-6 xl:space-x-8 ">
              <div className="w-full pb-4 md:w-40 md:pb-8">
                <img
                  className="hidden w-full md:block"
                  src="https://i.ibb.co/84qQR4p/Rectangle-10.png"
                  alt="dress"
                />
                <img
                  className="w-full md:hidden"
                  src="https://i.ibb.co/L039qbN/Rectangle-10.png"
                  alt="dress"
                />
              </div>
              <div className="flex w-full flex-col items-start justify-between space-y-4 border-b border-gray-200  pb-8 md:flex-row md:space-y-0">
                <div className="flex w-full flex-col items-start justify-start space-y-8">
                  <h3 className="text-xl font-semibold leading-6 text-gray-800 xl:text-2xl">
                    Premium Quaility Dress
                  </h3>
                  <div className="flex flex-col items-start justify-start space-y-2">
                    <p className="text-sm leading-none text-gray-800">
                      <span className="text-gray-300">Style: </span> Italic Minimal Design
                    </p>
                    <p className="text-sm leading-none text-gray-800">
                      <span className="text-gray-300">Size: </span> Small
                    </p>
                    <p className="text-sm leading-none text-gray-800">
                      <span className="text-gray-300">Color: </span> Light Blue
                    </p>
                  </div>
                </div>
                <div className="flex w-full items-start justify-between space-x-8">
                  <p className="text-base leading-6 xl:text-lg">
                    $36.00 <span className="text-red-300 line-through"> $45.00</span>
                  </p>
                  <p className="text-base leading-6 text-gray-800 xl:text-lg">01</p>
                  <p className="text-base font-semibold leading-6 text-gray-800 xl:text-lg">
                    $36.00
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex w-full flex-col items-start justify-start  space-y-4 md:mt-0 md:flex-row  md:items-center md:space-x-6 xl:space-x-8 ">
              <div className="w-full md:w-40">
                <img
                  className="hidden w-full md:block"
                  src="https://i.ibb.co/s6snNx0/Rectangle-17.png"
                  alt="dress"
                />
                <img
                  className="w-full md:hidden"
                  src="https://i.ibb.co/BwYWJbJ/Rectangle-10.png"
                  alt="dress"
                />
              </div>
              <div className="  flex w-full flex-col items-start justify-between space-y-4 md:flex-row md:space-y-0  ">
                <div className="flex w-full flex-col items-start justify-start space-y-8">
                  <h3 className="text-xl font-semibold leading-6 text-gray-800 xl:text-2xl">
                    High Quaility Italic Dress
                  </h3>
                  <div className="flex flex-col items-start justify-start space-y-2">
                    <p className="text-sm leading-none text-gray-800">
                      <span className="text-gray-300">Style: </span> Italic Minimal Design
                    </p>
                    <p className="text-sm leading-none text-gray-800">
                      <span className="text-gray-300">Size: </span> Small
                    </p>
                    <p className="text-sm leading-none text-gray-800">
                      <span className="text-gray-300">Color: </span> Light Blue
                    </p>
                  </div>
                </div>
                <div className="flex w-full items-start justify-between space-x-8">
                  <p className="text-base leading-6 xl:text-lg">
                    $20.00 <span className="text-red-300 line-through"> $30.00</span>
                  </p>
                  <p className="text-base leading-6 text-gray-800 xl:text-lg">01</p>
                  <p className="text-base font-semibold leading-6 text-gray-800 xl:text-lg">
                    $20.00
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-stretch justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-6 xl:space-x-8">
            <div className="flex w-full flex-col space-y-6 bg-gray-50 px-4 py-6 md:p-6 xl:p-8   ">
              <h3 className="text-xl font-semibold leading-5 text-gray-800">Summary</h3>
              <div className="flex w-full flex-col items-center justify-center space-y-4 border-b border-gray-200 pb-4">
                <div className="flex w-full  justify-between">
                  <p className="text-base leading-4 text-gray-800">Subtotal</p>
                  <p className="text-base leading-4 text-gray-600">$56.00</p>
                </div>
                <div className="flex w-full items-center justify-between">
                  <p className="text-base leading-4 text-gray-800">
                    Discount{" "}
                    <span className="bg-gray-200 p-1 text-xs font-medium leading-3  text-gray-800">
                      STUDENT
                    </span>
                  </p>
                  <p className="text-base leading-4 text-gray-600">-$28.00 (50%)</p>
                </div>
                <div className="flex w-full items-center justify-between">
                  <p className="text-base leading-4 text-gray-800">Shipping</p>
                  <p className="text-base leading-4 text-gray-600">$8.00</p>
                </div>
              </div>
              <div className="flex w-full items-center justify-between">
                <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                <p className="text-base font-semibold leading-4 text-gray-600">$36.00</p>
              </div>
            </div>
            <div className="flex w-full flex-col justify-center space-y-6 bg-gray-50 px-4 py-6 md:p-6 xl:p-8   ">
              <h3 className="text-xl font-semibold leading-5 text-gray-800">Shipping</h3>
              <div className="flex w-full items-start justify-between">
                <div className="flex items-center justify-center space-x-4">
                  <div className="h-8 w-8">
                    <img
                      className="h-full w-full"
                      alt="logo"
                      src="https://i.ibb.co/L8KSdNQ/image-3.png"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <p className="text-lg font-semibold leading-6 text-gray-800">
                      DPD Delivery
                      <br />
                      <span className="font-normal">Delivery with 24 Hours</span>
                    </p>
                  </div>
                </div>
                <p className="text-lg font-semibold leading-6 text-gray-800">$8.00</p>
              </div>
              <div className="flex w-full items-center justify-center">
                <button className="w-96 bg-gray-800 py-5 text-base font-medium leading-4 text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 md:w-full">
                  View Carrier Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-between bg-gray-50 px-4 py-6 md:items-start md:p-6 xl:w-96 xl:p-8 ">
          <h3 className="text-xl font-semibold leading-5 text-gray-800">Customer</h3>
          <div className="flex  h-full w-full flex-col items-stretch justify-start md:flex-row md:space-x-6 lg:space-x-8 xl:flex-col xl:space-x-0 ">
            <div className="flex flex-shrink-0 flex-col items-start justify-start">
              <div className="flex w-full  items-center  justify-center space-x-4 border-b border-gray-200 py-8 md:justify-start">
                <img src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar" />
                <div className=" flex flex-col items-start justify-start space-y-2">
                  <p className="text-left text-base font-semibold leading-4 text-gray-800">
                    David Kent
                  </p>
                  <p className="text-sm leading-5 text-gray-600">10 Previous Orders</p>
                </div>
              </div>

              <div className="flex w-full  items-center justify-center space-x-4 border-b border-gray-200 py-4 md:justify-start">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 7L12 13L21 7"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="cursor-pointer text-sm leading-5 text-gray-800">david89@gmail.com</p>
              </div>
            </div>
            <div className="mt-6 flex w-full  flex-col items-stretch justify-between md:mt-0 xl:h-full">
              <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:items-start md:justify-start md:space-x-6 md:space-y-0 lg:space-x-8 xl:flex-col  xl:space-x-0 xl:space-y-12 ">
                <div className="flex flex-col items-center  justify-center space-y-4 md:items-start md:justify-start xl:mt-8">
                  <p className="text-center text-base font-semibold leading-4 text-gray-800 md:text-left">
                    Shipping Address
                  </p>
                  <p className="w-48 text-center text-sm leading-5 text-gray-600 md:text-left lg:w-full xl:w-48">
                    180 North King Street, Northhampton MA 1060
                  </p>
                </div>
                <div className="flex flex-col items-center  justify-center space-y-4 md:items-start md:justify-start ">
                  <p className="text-center text-base font-semibold leading-4 text-gray-800 md:text-left">
                    Billing Address
                  </p>
                  <p className="w-48 text-center text-sm leading-5 text-gray-600 md:text-left lg:w-full xl:w-48">
                    180 North King Street, Northhampton MA 1060
                  </p>
                </div>
              </div>
              <div className="flex w-full items-center justify-center md:items-start md:justify-start">
                <button className="mt-6 w-96 border border-gray-800 py-5 text-base font-medium leading-4 text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 md:mt-0 2xl:w-full">
                  Edit Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
