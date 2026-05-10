import React from 'react'
import Breadcrums from '../Componets/Breadcrums'
import { Arrow, Category, UpArrow } from '../Icons'
import PriceRange from '../Componets/Range'

const page = () => {

  return (
    <>
      <Breadcrums />
      <div className="container grid grid-cols-12 mt-6 ">
        <div className="col-span-4 py-5 px-6 border rounded-[20px] border-[#E7E7E7]">
          <div className='flex justify-between'>
            <h2 className='font-bold text-[20px] '>Filter</h2>
            <Category/>
          </div>
          <hr  className='border-[#E7E7E7] border  mt-6 '/>
          <ul className='py-6'>
            <li className='flex justify-between text-[16px] text-[#8C8C8C] items-center pb-[20px]'>Tshirts <Arrow/> </li>
            <li className='flex justify-between text-[16px] text-[#8C8C8C] items-center pb-[20px]'>Tshirts <Arrow/> </li>
            <li className='flex justify-between text-[16px] text-[#8C8C8C] items-center pb-[20px]'>Tshirts <Arrow/> </li>
            <li className='flex justify-between text-[16px] text-[#8C8C8C] items-center pb-[20px]'>Tshirts <Arrow/> </li>
            <li className='flex justify-between text-[16px] text-[#8C8C8C] items-center pb-[20px]'>Tshirts <Arrow/> </li>
          </ul>
          <hr  className='border-[#E7E7E7] border '/>

          <div className='flex justify-between items-center mt-[29.25px]'>
            <h2 className='font-bold text-[20px]'>Price </h2>
            <UpArrow />
          </div>
          <div>
            <PriceRange/>
          </div>
        </div>
        <div className="col-span-8">
        </div>
      </div>
    </>
  )
}

export default page
