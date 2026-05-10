"use client"
import React, { useState } from 'react'
import { CartIcon, Search } from '../Icons'
import ManIcon from '../Icons/ManIcon'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import Link from 'next/link'


const Navbar = () => {

    const [show,setShow] = useState(false)

    const handleClick = () => {
        setShow(!show)
    }


  return (
    <nav className='py-6.5 relative'>
        <div className='container'>
            <div className='flex items-center justify-between gap-10' >
                    <div className=' flex items-center gap-5 '>
                        <FaBars className='w-[30] xl:hidden' onClick={handleClick}/>
                    <h2 className='text-[32px] font-bold'>SHOP.CO</h2>
                    </div>
                <div className=''>
                    <ul className='xl:flex items-center hidden gap-6'>
                        <li><Link href="/shop">Shop</Link> </li>
                        <li>On Sale</li>
                        <li>New Arrivals</li>
                        <li>Brands</li>
                    </ul>
                </div>
                <div className='xl:flex items-center gap-10 hidden'>
                    <div className='relative'>
                        <input type="search" name="" id="" className='lg:w-[550px] px-15 py-3 bg-[#F0F0F0] rounded-[62px] border-none ' placeholder='Search for products...' />
                        <Search className='absolute top-3 left-5' color='black'/>
                    </div>
                </div>
                    <div className='flex items-center gap-[14px]'>
                        <FaMagnifyingGlass className='xl:hidden'/>
                        <CartIcon />
                        <ManIcon />
                    </div>
            </div>
            {/* mobile-menu */}
            <div className={` lg:hidden absolute top-full left-0 w-full mx-auto items-center justify-center flex bg-white shadow-md transition-all  duration-300 ${show ? "max-h-96 py-5" : "max-h-0 overflow-hidden"}`}>
                    <ul className='xl:flex   leading-10  gap-6'>
                        <li>Shop</li>
                        <li>On Sale</li>
                        <li>New Arrivals</li>
                        <li>Brands</li>
                    </ul>
                </div>
            {/* mobile-menu */}
        </div>
    </nav>
  )
}

export default Navbar
