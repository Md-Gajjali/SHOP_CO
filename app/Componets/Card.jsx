import Image from 'next/image'
import React from 'react'
import { Rate } from 'antd';


const Card = ({ img, title, discountPrice, review, price, rating, disPar }) => {
  return (
    <div className='w-[295px] group '>

      <div className='relative group overflow-hidden rounded-[20px]'>
        <div className='overflow-hidden'>
          <Image
            src={img}
            width={295}
            height={298}
            alt='image'
            className='rounded-[20px] cursor-pointer transition-transform duration-300 group-hover:scale-105'
          />
        </div>
        <button className='absolute bottom-0 left-0  w-full bg-black text-white px-5 py-4 translate-y-full cursor-pointer transition-all duration-300 ease-in-out group-hover:translate-y-0 '>Add to cart</button>
      </div>

      <div>
        <h2 className='font-bold text-[20px] mt-4'>{title}</h2>
        <div>
          <div className='flex items-center gap-1 py-2 w-[226px]'>
            <Rate allowHalf defaultValue={rating} /> /5
          </div>
          <div className='gap-2.5 flex items-center w-[200px]'>
            <span className='font-bold text-2xl'>${discountPrice}</span>
            <span className='line-through font-bold text-[#8a8686] text-2xl'>${price}</span>
            <span className='bg-[#FFEBEB] text-[#FF3333] font-bold py-[6px] px-[14px] rounded-[62px] '>-{disPar}%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
