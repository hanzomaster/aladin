import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const maleData = ["Coat", "Hoodie", "Jeans", "Pants", "Pj", "Polo", "Shirt", "Shorts", "Sweater", "T-shirt"];
const femaleData = ["Coat", "Hoodie", "Jeans", "Pants", "Pj", "Polo", "Shirt", "Shorts", "Sweater", "T-shirt"];
const menuData = ["Sign in", "Sign up"]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function menuName(name : string) {
  if(name === "menu") {
    return (
      <>
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
      </>
    )
  } else if (name === "")
  return null;
}

function getMenuData(type:string)  {
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
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  {content}
                </a>
              )}
                  </Menu.Item>
                </>
              )
            })}
        </>
      )
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
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  {content}
                </a>
              )}
                  </Menu.Item>
                </>
              )
            })}
        </>
      )
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
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  {content}
                </a>
              )}
                  </Menu.Item>
                </>
              )
            })}
        </>
      )
    }

}

export default function DropdownComponent({title, type}) {
  
  return (
    <Menu as="div" className=" relative inline-block text-left">
      <div>
        <Menu.Button className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-gray-700 mr-2">
          {title}
          {menuName(type)}
        
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >



        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {/* {menuData.map((content) => {
              return (
                <>
                  <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  {content}
                </a>
              )}
                  </Menu.Item>
                </>
              )
            })} */}
            {getMenuData(type)}
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}