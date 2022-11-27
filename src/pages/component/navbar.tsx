import { useState } from "react";
import ProductCart from "./cart";
import DropdownComponent from "./dropdownmenu";

const NavBar = () => {
    
  const [open, setOpen] = useState(0)
  function addCart() {
    console.log("huhuhu")
    // eslint-disable-next-line react-hooks/rules-of-hooks
    if (open === 0) {
        setOpen(open + 1);
    } else {
        setOpen(open - 1)
    }
    } 

  return(
    <>
      {Array.from({length: open}).map(() => <ProductCart key={open}/>)}
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
      />
      <header className='sticky z-30'>
     <nav
        className="fixed w-full flex items-center justify-between flex-wrap bg-[#eff6ff] py-4  lg:px-12 shadow border-solid border-t-2 border-gray-700">
        <div className=" relative flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
            <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
                <span className="font-semibold text-xl tracking-tight">Aladin</span>
            </div>
            <div className="block lg:hidden ">
                <DropdownComponent title="" type="menu"/>

                {/* <button
                    id="nav"
                    
                    className="flex items-center px-3 py-2 border-2 rounded text-white-700 border-white-700 hover:text-gray-700 hover:border-gray-700">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button> */}
            </div>  
        </div>
    
        <div className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8 hidden">
            <div className="text-md font-bold text-gray-700 lg:flex-grow">
                
                  <DropdownComponent title="Nam" type="" />

                  <DropdownComponent title="Nữ" type="" />
                  
            </div>
          
            <div className="relative mx-auto text-gray-600 lg:block hidden">
                <input
                    className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                    type="search" name="search" placeholder="Search"/>
                <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
                    <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                         version="1.1" id="Capa_1" x="0px" y="0px"
                         viewBox="0 0 56.966 56.966"
                         xmlSpace="preserve"
                         width="512px" height="512px">
                <path
                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
              </svg>
                </button>
            </div>
            <div className="flex " onClick={addCart}>
                <a href="#"
                   className="block text-md px-4 py-2 rounded text-gray-700 ml-2 font-bold hover:text-white mt-4 hover:bg-gray-700 lg:mt-0">Sign
                    in</a>
    
                <a href="#"
                   className=" block text-md px-4  ml-2 py-2 rounded text-gray-700 font-bold hover:text-white mt-4 hover:bg-gray-700 lg:mt-0">Sign up</a>
            </div>
            <div className="flex justify-center md:block px-4">
        <a
           className="
                  relative
                  text-gray-700
                  dark:text-gray-200
                  hover:text-gray-600
                  dark:hover:text-gray-300
                  "
           href="#"
           >
          <i className="fas fa-shopping-cart" onClick={addCart}></i>

          <span
                className="
                       absolute
                       top-0
                       left-0
                       p-1
                       text-xs text-white
                       bg-indigo-500
                       rounded-full
                       "
                ></span>
        </a>
      </div>
        </div>
    
    </nav>
    </header>
    </>
  )
}

export default NavBar;
