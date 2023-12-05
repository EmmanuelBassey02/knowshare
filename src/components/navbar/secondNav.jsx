
// 'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import emm2 from '../../assets/emm2.jpg' 

function SecondNavbar() {
  return (
    <Navbar fluid className='bg-gradient-to-r from-black  via-fuchsia-950 to-black'>
      <Navbar.Brand Link to='/mainhomepage'>
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="" />
        <span className="self-center whitespace-nowrap md:text-4xl text-2xl text-fuchsia-300 font-semibold dark:text-white">Know<span className="text-neutral-300">Share</span></span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          className='border-fuchsia-800 border rounded-[10px]'
          inline
          label={
            <Avatar alt="User settings"  rounded />  
          }
        >
          <Dropdown.Header className=''>
            <span className="block text-sm text-black font-bold">Emmanuel Bassey</span>
            <span className="block truncate text-sm font-medium">bassey214@gmail.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item className=''>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" className='font-bold text-[16px] block py-2 px-3 md:p-0 md:text-fuchsia-200 text-black rounded hover:bg-fuchsia-300 md:hover:bg-transparent md:hover:text-fuchsia-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>Home</Navbar.Link>
        <Navbar.Link href="#" className='font-bold text-[16px] block py-2 px-3 md:p-0 md:text-fuchsia-200 text-black rounded hover:bg-fuchsia-300 md:hover:bg-transparent md:hover:text-fuchsia-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>Videos</Navbar.Link>
        <Navbar.Link href="#" className='font-bold text-[16px] block py-2 px-3 md:p-0 md:text-fuchsia-200 text-black rounded hover:bg-fuchsia-300 md:hover:bg-transparent md:hover:text-fuchsia-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>Chat</Navbar.Link>
        <Navbar.Link href="#" className='font-bold text-[16px] block py-2 px-3 md:p-0 md:text-fuchsia-200 text-black rounded hover:bg-fuchsia-300 md:hover:bg-transparent md:hover:text-fuchsia-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>Post</Navbar.Link>
        <Navbar.Link href="#" className='font-bold text-[16px]  block py-2 px-3 md:p-0 md:text-fuchsia-200 text-black rounded hover:bg-fuchsia-300 md:hover:bg-transparent md:hover:text-fuchsia-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>Notification</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default SecondNavbar

