import { useState } from "react";
import { Address } from "../types";

interface Props {
  name: string;
  phone: string;
  address: Address;
  default: boolean;
}
function AddressItem(props: Props) {
  const [isDefault, setIsDefault] = useState(props.default);
  const handleSetDefault = () => {
    setIsDefault(true);
  };
  return (
    <div className="my-5 flex justify-between border-b-2 pb-4">
      <div className="flex-[3] lg:flex-[4]">
        <header className="flex">
          <h1 className="mr-4 font-semibold">{props.name}</h1>
          <p className="border-l-2 pl-1">{props.phone}</p>
        </header>
        <main className="mb-1">
          <p>{props.address.detail}</p>
          <p>
            {props.address.neighborhood}, {props.address.district}, {props.address.province}
          </p>
        </main>
        {props.default && (
          <span className="border-[1px] border-[#da291c] px-[0.1rem] text-[#da291c]">Mặc định</span>
        )}
      </div>

      <div className="flex-1">
        <div className="mb-2 flex w-full justify-between text-[#0070f3] ">
          <button className="hover:text-[#0070f3]/80">Cập nhật</button>
          <button className="hover:text-[#0070f3]/80">Xóa</button>
        </div>

        {!props.default && (
          <button className="w-full border-2 p-1 hover:bg-slate-200" onClick={handleSetDefault}>
            Thiết lập mặc định
          </button>
        )}
      </div>
    </div>
  );
}
export default AddressItem;
