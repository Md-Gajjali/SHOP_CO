"useClient"
import React from 'react'
import img from '../Assets/a.png'
import Image from 'next/image'
// import { Button } from './Button'
import {Button2} from './Button2'

const HeroSection = () => {
  return (
    <section className='Hero_section bg-[#F2F0F1] py-3.5'>
        <div className="container ">
          <div className='flex items-center '>
            <div className=''>
                <h1 className='text-[64px] font-bold w-[577px]'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p className='w-[545px] text-gray-500 mt-[32px]'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                {/* <Button variant='default'>Click</Button> */}
                <Button2 variant='destructive' size="lg">Click</Button2>
            </div>
            <div>
              <Image src={img} height={1440} alt='image'/>
            </div>
          </div>
        </div>
    </section>
  )
}

export default HeroSection
