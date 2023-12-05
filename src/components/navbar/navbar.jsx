import Dropdown from '../dropdown/dropdown'
import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
         {/* <!-- NAVBAR  --> */}
  <nav class="bg-gradient-to-r from-black  via-fuchsia-950 to-black md:pr-[40px] border-b border-fuchsia-800 dark:bg-gray-900"> 
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
    <Link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center md:text-4xl text-2xl text-fuchsia-300 font-semibold whitespace-nowrap dark:text-white">Know<span className="text-neutral-300">Share</span></span>
    </Link>
    <div class="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
       
        <Dropdown/> 
        

        <button data-collapse-toggle="navbar-language" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-language" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
    </div>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
      <ul class="flex flex-col align-middle items-center w-[100%] font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:bg-inherit bg-fuchsia-100 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-fuchsia dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
       

      <li class="hover:w-[100%]">
          <Link to="/resources" className="block py-2 px-3 text-left md:p-0 md:text-fuchsia-200 text-black rounded hover:bg-fuchsia-300  md:hover:bg-transparent md:hover:text-fuchsia-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Resources</Link>
     </li>

        <li class="hover:w-[100%]">
          <Link to="/services" className="block py-2 px-3 md:p-0 md:text-fuchsia-200 text-black rounded hover:bg-fuchsia-300 md:hover:bg-transparent md:hover:text-fuchsia-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
        </li>

        <li class="hover:w-[100%]">
          <Link to="/pricing" className="block py-2 px-3 md:p-0 md:text-fuchsia-200 text-black rounded hover:bg-fuchsia-300 md:hover:bg-transparent md:hover:text-fuchsia-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</Link>
        </li>

        <li>
        <Link to="/signup"><button type="button" class="ml-[10px] block md:bg-fuchsia-300 bg-fuchsia-500 md:hover:border-2 md:hover:border-solid md:hover:border-fuchsia-50  md:hover:text-fuchsia-50 md:hover:bg-transparent rounded-[10px] text-[14px] w-[75px] h-[30px] text-black  mt-[5px] md:mt-0">Sign Up</button></Link>
        </li> 
    
        <li>
        <Link to="/login"><button type="button" class="ml-[10px] block md:bg-fuchsia-300 bg-fuchsia-500 md:hover:border-2 md:hover:border-solid md: hover:border-fuchsia-50 md:hover:text-fuchsia-50 md:hover:bg-transparent rounded-[10px] text-[14px] w-[70px] h-[30px] text-black  mt-[10px] md:mt-0">Login</button></Link>
        </li>

      </ul>



     
                            
    </div>
    </div>
  </nav>

  
  <Outlet />
    </>
  )
}

export default Navbar