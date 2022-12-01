import Link from "next/link";
import SidebarItems from "./SidebarItems";

function SidebarAccount() {
  return (
    <div className="align-center flex w-1/5 flex-col border-r-2 pt-24">
      {/* sidebar */}
      {SidebarItems.map((item) => {
        return (
          <div key={item.name} className=" my-3 flex items-center text-xl hover:text-gray-500">
            <i className="mr-2">{item.icon}</i>
            <Link href={item.link}>{item.name}</Link>
          </div>
        );
      })}
    </div>
  );
}
export default SidebarAccount;
