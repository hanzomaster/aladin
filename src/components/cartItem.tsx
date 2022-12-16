import Image from "next/image";
import { useState } from "react";
import { trpc } from "../utils/trpc";

const CartItem = ({ product }: any) => {
  const [count, setCount] = useState(0);
  const utils = trpc.useContext();

  const mutation = trpc.cartItem.delete.useMutation({
    onSuccess() {
      utils.cart.get.invalidate();
    },
  });

  const [open, setOpen] = useState(false);

  const removeItem = (productDetailId: string) => {
    mutation.mutate({ productDetailId: productDetailId });
  };
  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };
  return (
    <>
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
          <a
            href={"/productDetail/" + product?.productDetail?.product?.code}
            className="flex cursor-pointer justify-between text-base font-medium text-gray-900 hover:text-red-500">
            <h3>
              <p>{product?.productDetail?.product?.name}</p>
            </h3>
            <p className="ml-4">
              {product?.productDetail?.product?.buyPrice.toString()}
              ,000 &#8363;
            </p>
          </a>
          <div className="block inline-block">
            <p
              style={{
                background: `#${product?.productDetail?.colorCode}`,
              }}
              className="mt-1 text-sm text-gray-500">
              {product.productDetail.colorCode}
            </p>
            <p className="mt-1 ml-1 text-sm text-gray-500">Size: {product?.size}</p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="block inline-block text-gray-500">
            SL:
            <div className="inline-block">
              <button
                className="mx-1 h-5 w-5 items-center justify-center justify-items-center rounded-full border-black bg-green-200 text-center"
                onClick={dec}>
                -
              </button>
              {count + product?.numberOfItems}
              <button
                className="mx-1 h-5 w-5 items-center justify-center justify-items-center rounded-full border-black bg-green-200"
                onClick={inc}>
                +
              </button>
            </div>
          </div>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={() => removeItem(product?.productDetail.id)}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartItem;
