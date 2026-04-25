import React from 'react'
import { X } from '../Icons'

const Header = () => {
    return (
        <div className='bg-black text-white'>
            <div className="container py-2.5 ">
                <div className='flex items-center justify-between'>
                    <div className='flex gap-3 mx-auto'>
                        <p>Sign up and get 20% off to your first order</p>
                        <span className='border-b-2'>Sign Up Now</span>
                    </div>
                    <X  color='white'/>
                </div>

            </div>
        </div>
    )
}

export default Header
