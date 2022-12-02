import Link from "next/link";
import SidebarItems from "./SidebarItems";

function SidebarAccount() {
  return (
    <div className="align-center flex w-1/4 flex-col border-r-2 pt-24 lg:w-1/6">
      {/* sidebar */}
      {SidebarItems.map((item) => {
        return (
          <div
            key={item.name}
            className=" my-3 flex items-center text-lg hover:text-gray-500 md:text-xl">
            <i className="mr-2">{item.icon}</i>
            <Link href={item.link}>{item.name}</Link>
          </div>
        );
      })}
    </div>
  );
}
export default SidebarAccount;
