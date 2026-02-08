import React from 'react'
import { IoFastFood } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";

function Nav() {
  return (
    <div className='w-full h-25 flex justify-between items-center px-8 '>
      <div className='w-10 h-10 bg-white flex justify-center items-center rounded-md shadow-xl'>
        <IoFastFood className='w-5 h-5 text-green-600'/>
      </div>

      <form className='w-300 h-10 flex gap-5 items-center bg-white rounded-md px-5 shadow-xl'>
        <CiSearch className='text-green-600 w-5 h-5'/>
        <input type="text" placeholder='Search your dish' className='w-full outline-none ' />
      </form>

      <div className='w-10 h-10 bg-white flex justify-center items-center rounded-md shadow-xl relative'>
        <FaCartPlus className='w-5 h-5 text-green-600'/>
        <span className='absolute top-0 right-0 text-green-600 font-bold '>0</span>
      </div>
    </div>
  )
}

export default Nav
