import React from 'react'
import { Link } from 'react-router-dom';
// import SidebarRow from './sidebarRow';
import { FaHome, FaRegCalendarPlus } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCog, faChalkboardUser, faUsersRectangle, faCompass } from '@fortawesome/free-solid-svg-icons';
import { Avatar } from 'flowbite-react';

function Sidebar() {
  return (
    <div className='sidebar p-[25px] py-[10px] flex-[0.33]'>

        <Link to="/" class="flex items-center font-mono space-x-3 rtl:space-x-reverse pt-[20px]">
            <span class="self-center md:text-4xl text-2xl text-fuchsia-600 font-semibold whitespace-nowrap dark:text-white">Know<span className="text-neutral-600">Share</span></span>
        </Link> <br />

          <div className='sideBar_row  flex item-center border-[1px] items-center  border-neutral-400 p-[10px] cursor-pointer hover:bg-neutral-100 rounded-[10px]'>
                <Avatar rounded className='text-[24px] text-fuchsia-700 border-2 border-fuchsia-600 rounded-[50%]'/>
                <p className='ml-[20px] font-bold text-[14px]'>Emmanuel Bassey</p>
            </div> <br />

            <div className='sideBar_row flex align-middle p-[10px] cursor-pointer hover:bg-neutral-100 rounded-[10px]'>
                <FaHome className='text-[28px] text-fuchsia-700'/>
                <p className='ml-[20px] font-bold'>Home</p>
            </div>


            <div className='sideBar_row flex align-middle p-[10px] cursor-pointer hover:bg-neutral-100 rounded-[10px]'>
                <FontAwesomeIcon icon={faCirclePlus} className='text-[28px] text-fuchsia-700'/>
                <p className='ml-[20px] font-bold'>Create</p>
            </div>


            <div className='sideBar_row flex align-middle p-[10px] cursor-pointer hover:bg-neutral-100 rounded-[10px]'>
                <FontAwesomeIcon icon={faChalkboardUser} className='text-[28px] text-fuchsia-700'/>
                <p className='ml-[20px] font-bold'>My Learning</p>
            </div>

            <div className='sideBar_row flex align-middle p-[10px] cursor-pointer hover:bg-neutral-100 rounded-[10px]'>
                <FaUsers className='text-[28px] text-fuchsia-700'/>
                <p className='ml-[20px] font-bold'>Friends</p>
            </div>

            <div className='sideBar_row flex align-middle p-[10px] cursor-pointer hover:bg-neutral-100 rounded-[10px]'>
                <FontAwesomeIcon icon={faUsersRectangle} className='text-[28px] text-fuchsia-700'/>
                <p className='ml-[20px] font-bold'>Groups</p>
            </div>

            <div className='sideBar_row flex align-middle p-[10px] cursor-pointer hover:bg-neutral-100 rounded-[10px]'>
                <FaRegCalendarPlus className='text-[28px] text-fuchsia-700'/>
                <p className='ml-[20px] font-bold'>Events</p>
            </div>

            <div className='sideBar_row flex align-middle p-[10px] cursor-pointer hover:bg-neutral-100 rounded-[10px]'>
                <FontAwesomeIcon icon={faCompass} className='text-[28px] text-fuchsia-700'/>
                <p className='ml-[20px] font-bold'>Discover</p>
            </div>

            <div className='sideBar_row flex align-middle p-[10px] cursor-pointer hover:bg-neutral-100 rounded-[10px]'>
                <FontAwesomeIcon icon={faCog} className='text-[28px] text-fuchsia-700'/>
                <p className='ml-[20px] font-bold'>Settings</p>
            </div>
       
    </div>
  )
}

export default Sidebar;