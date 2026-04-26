import React from 'react'
import { CartIcon, Search } from '../Icons'
import ManIcon from '../Icons/ManIcon'

const Navbar = () => {
  return (
    <nav className='py-6.5'>
        <div className='container'>
            <div className='flex items-center justify-between gap-10' >
                <div className='flex gap-10 items-center'>
                    <h2 className='text-[32px] font-bold'>SHOP.CO</h2>
                    <ul className='flex  gap-6'>
                        <li>Shop</li>
                        <li>On Sale</li>
                        <li>New Arrivals</li>
                        <li>Brands</li>
                    </ul>
                </div>
                <div className='flex items-center gap-10'>
                    <div className='relative'>
                        <input type="search" name="" id="" className='w-[599px] px-15 py-3 bg-[#F0F0F0] rounded-[62px] border-none ' placeholder='Search for products...' />
                        <Search className='absolute top-3 left-5' color='black'/>
                    </div>
                    <div className='flex gap-[14px]'>
                        <CartIcon />
                        <ManIcon />
                    </div>
                </div>

            </div>
        </div>
    </nav>
  )
}

export default Navbar
