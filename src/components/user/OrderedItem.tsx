import Image from "next/image";

function OrderedItem({ item }: { item: any }) {
  return (
    <div className="mt-4 flex w-full flex-col items-start justify-start md:mt-6 md:flex-row md:items-center md:space-x-6 xl:space-x-8 ">
      <div className=" relative h-32 w-28 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <div className="relative h-full w-full"></div>
        <Image
          src={item.productDetail.image ? item.productDetail.image : ""}
          layout="fill"
          alt="Ảnh sản phẩm"
          priority={true}
          className="object-cover object-center"></Image>
        {/* <img
              className="w-full md:block"
              src="https://i.ibb.co/84qQR4p/Rectangle-10.png"
              alt="dress"
            /> */}
      </div>
      <div className="flex w-full flex-col items-start justify-between space-y-4 border-b border-gray-200  pb-8 md:flex-row md:space-y-0">
        <div className="flex w-full flex-col items-start justify-start space-y-8">
          <h3 className="text-xl font-semibold leading-6 text-gray-800 xl:text-2xl">
            {item.productDetail.product.name}
          </h3>
          <div className="flex flex-col items-start justify-start space-y-2">
            <p className="text-sm leading-none text-gray-800">
              <span className="text-gray-600">Size: </span> {item.size}
            </p>
            <p className="text-sm leading-none text-gray-800">
              <span className="text-gray-600">Color: </span>{" "}
              <span
                style={{
                  background: `#${item.productDetail.colorCode}`,
                }}>
                {item.productDetail.colorCode}
              </span>
            </p>
          </div>
        </div>
        <div className="flex w-full items-start justify-between space-x-8">
          <p className="text-base leading-6 xl:text-lg">
            {item.priceEach * 0.6},000 &#8363;{" "}
            <span className="text-red-300 line-through">
              {" "}
              {item.priceEach.toString()},000 &#8363;
            </span>
          </p>
          <p className="text-base leading-6 text-gray-800 xl:text-lg">{item.quantityInOrdered}</p>
          <p className="text-base font-semibold leading-6 text-gray-800 xl:text-lg">
            {item.priceEach * item.quantityInOrdered}000&#8363;
          </p>
        </div>
      </div>
    </div>
  );
}
export default OrderedItem;
