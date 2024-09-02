import React from 'react'
import '../../styles/styles.css'
import { Dropdown } from 'flowbite-react';
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { Avatar } from 'flowbite-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faChevronDown } from '@fortawesome/free-solid-svg-icons';

// import { IconButton, ForumIcon, NotificationsActiveIcon, ExpandMoreIcon } from  "react-icons";
// import { Avatar } from "react-icons/md";
// import { FaEllipsis } from "react-icons/fa";
// import { FaBeer } from "react-icons/fa";
// import { FaBeer } from "react-icons/fa";
// import { FaBeer } from "react-icons/fa";
// import { FaBeer } from "react-icons/fa";

function Header() {
  return (
    <div className='header h-[70px]  flex py-[15px] px-[20px] border-b-2 border-fuchsia-700 justify-between sticky bg-white z-[2] top-0 items-center'>

        <div className="header-left flex justify-evenly">
            <div className="logo h-[45px] w-[45px] bg-fuchsia-500 text-center rounded-[50%]">
                <span className='text-black font-bold text-[30px]'>K</span>
            </div>

            <div className='input flex align-middle p-[13px] h-[47px] ml-[10px] rounded-[30px] bg-[#ceced0] '>
               <FaSearch className='text-[24px]'/> 
               <input type="text" name="" id="" className='h-[40px] mt-[-5px] rounded-[20px] focus:ring-0 ring-0 focus:border-none border-none outline-0 bg-transparent'/>
            </div>
        </div>


 
        <div className="header-middle flex  justify-center items-center h-[59px]">
            <div aria-activedescendant='border-b-4 border-fuchsia-500' className='header_option flex align-middle py-[10px] px-[30px] pointer hover:bg-slate-200 hover:border-b-4 hover:border-fuchsia-500'>
               <FaHome  className='headerIcon text-[30px] text-neutral-600 hover:text-fuchsia-600'/> 
            </div>

            <div className='header_option flex align-middle py-[10px] px-[30px] pointer  hover:bg-slate-200 hover:border-b-4 hover:border-fuchsia-500'>
               <FaUser className='headerIcon text-[30px] text-neutral-600 hover:text-fuchsia-600'/> 
            </div>

            <div className='header_option flex align-middle py-[10px] px-[30px] pointer  hover:bg-slate-200 hover:border-b-4 hover:border-fuchsia-500'>
               <FaFlag className='headerIcon text-[30px] text-neutral-600 hover:text-fuchsia-600'/> 
            </div>

            <div className='header_option flex align-middle py-[10px] px-[30px] pointer  hover:bg-slate-200 hover:border-b-4 hover:border-fuchsia-500'>
               <FaVideo className='headerIcon text-[30px] text-neutral-600 hover:text-fuchsia-600'/> 
            </div>

            <div className='header_option flex align-middle py-[10px] px-[30px] pointer  hover:bg-slate-200 hover:border-b-4 hover:border-fuchsia-500'>
               <FaVideo className='headerIcon text-[30px] text-neutral-600 hover:text-fuchsia-600'/> 
            </div>
        </div>


        <div className="header-right flex">
           
                  <Dropdown
               arrowIcon={false}
               className='border-fuchsia-800 border rounded-[10px]'
               inline
               label={
                  <Avatar rounded alt="User settings" className='border-2 border-fuchsia-700 rounded-[50%]' />  
               }
            >
               <Dropdown.Header className=''>
                  <span className="block text-sm text-black font-bold">Emmanuel Bassey</span>
                  <span className="block truncate text-sm font-medium">bassey214@gmail.com</span>
               </Dropdown.Header>
               <Dropdown.Item>Edit Profile</Dropdown.Item>
               <Dropdown.Item>Settings & Privacy</Dropdown.Item>
               <Dropdown.Item>Help Center</Dropdown.Item>
               <Dropdown.Divider />
               <Dropdown.Item className=''>Switch Account</Dropdown.Item>
            </Dropdown>
        </div>





    <div className='h-fit'>
        <button>
        <FontAwesomeIcon icon={faPlus} className=''/>
        </button> &nbsp;  &nbsp;

        <button>
        <FontAwesomeIcon icon={faHome} />
        </button> &nbsp;  &nbsp;

        <button>
        <FontAwesomeIcon icon={faChevronDown} />
        </button>
    </div>

           

    </div>
  )
}

export default Header