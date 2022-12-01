import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const maleData = [
  "Coat",
  "Hoodie",
  "Jeans",
  "Pants",
  "Pj",
  "Polo",
  "Shirt",
  "Shorts",
  "Sweater",
  "T-shirt",
];
const femaleData = [
  "Coat",
  "Hoodie",
  "Jeans",
  "Pants",
  "Pj",
  "Polo",
  "Shirt",
  "Shorts",
  "Sweater",
  "T-shirt",
];
const userFunc = ["Quản lý tài khoản", "Quản lý đơn hàng", "Đăng xuất"];
const menuData = ["Sign in", "Sign up"];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function menuName(name: string) {
  if (name === "menu") {
    return (
      <>
        <div>
          <Menu.Button className="mt-4 mr-1 block rounded px-4 py-2 hover:bg-gray-700 hover:text-white lg:mt-0 lg:inline-block">
            <svg
              className="h-3 w-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </Menu.Button>
        </div>
      </>
    );
  } else if (name === "user") {
    return (
      <div>
        <Menu.Button className="mt-4 mr-1 ml-4 block rounded-full hover:bg-gray-700 hover:text-white lg:mt-0 lg:inline-block">
          <div className="relative h-7 w-7 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
            <svg
              className="text-black-400 absolute -left-1 h-9 w-9"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"></path>
            </svg>
          </div>
        </Menu.Button>
      </div>
    );
  } else {
    return (
      <>
        <div>
          <Menu.Button className="mt-4 mr-1 block rounded px-4 py-2 hover:bg-gray-700 hover:text-white lg:mt-0 lg:inline-block">
            {name}
          </Menu.Button>
        </div>
      </>
    );
  }
}

function getMenuData(type: string) {
  if (type === "male") {
    return (
      <>
        {maleData.map((content) => {
          return (
            <>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}>
                    {content}
                  </a>
                )}
              </Menu.Item>
            </>
          );
        })}
      </>
    );
  } else if (type === "female") {
    return (
      <>
        {femaleData.map((content) => {
          return (
            <>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}>
                    {content}
                  </a>
                )}
              </Menu.Item>
            </>
          );
        })}
      </>
    );
  } else if (type === "user") {
    return (
      <>
        {userFunc.map((content) => {
          return (
            <>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}>
                    {content}
                  </a>
                )}
              </Menu.Item>
            </>
          );
        })}
      </>
    );
  } else {
    return (
      <>
        {menuData.map((content) => {
          return (
            <>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}>
                    {content}
                  </a>
                )}
              </Menu.Item>
            </>
          );
        })}
      </>
    );
  }
}

export default function DropdownComponent({
  title,
  type,
  data,
}: {
  title: any;
  type: any;
  data: string[];
}) {
  console.log(data);
  return (
    <Menu as="div" className=" relative inline-block text-left">
      {menuName(title)}
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {data?.map((content) => {
              return (
                <>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}>
                        {content}
                      </a>
                    )}
                  </Menu.Item>
                </>
              );
            })}
            {/* {getMenuData(type)} */}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
