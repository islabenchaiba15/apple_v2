import React, { useState } from 'react';
import { navLists } from '../constants';
import { appleImg, bagImg, searchImg } from '../utils';
import Sidebar from './SideBar';

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className='flex justify-between items-center sm:px-10 px-5 py-5 w-full mw-auto relative mx-auto max-w-[1200px]'>
        <button 
          onClick={toggleSidebar}
          className="sm:hidden text-white text-2xl"
        >
          ☰
        </button>
        <img src={appleImg} alt={'logo'} width={14} height={18} className="hidden sm:block" />
        <div className="flex gap-8 items-center justify-between max-sm:hidden">
          {navLists.map((nav, index) => (
            <div key={index} className="px-2 text-sm cursor-pointer text-gray-400 hover:text-white">{nav}</div>
          ))}
        </div>
        <div className="flex items-center justify-between gap-7">
          <img src={searchImg} alt={'search'} width={18} height={18} />
          <img src={bagImg} alt={'bag'} width={14} height={18} />
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
}

export default Navbar;