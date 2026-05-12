"use client"
import React from 'react'
import img from '../Assets/a.png'
import Image from 'next/image'
import { Button2 } from './Button2'
import { motion } from 'framer-motion'


const HeroSection = () => {
  return (
    <section className='Hero_section bg-[#F2F0F1]'>
      <div className="container ">
        <div className='flex items-center '>
          <div>
            <motion.h1 
            initial={{ opacity: 0, x: -200 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: false }} 
            transition={{
              duration: 0.8,
              delay: 0.19,
              ease: "easeInOut"
            }}
              className='text-[64px] font-bold w-[577px]'>
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </motion.h1>

            <motion.div 
            initial={{ opacity: 0, y: 200 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: false }} 
            transition={{
              duration: 0.8,
              delay: 0.19,
              ease: "easeInOut"
            }}>
              <p className='w-[545px] text-gray-500 mt-[32px]'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
              <Button2 variant='destructive' size="lg" className="mt-[28px] mb-2 ">Click</Button2>

            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, x: 300 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{
            duration: 0.8,
            delay: 0.19,
            ease: "easeInOut"
          }} className='hidden mt-30 lg:mt-10 lg:flex'>
            <Image src={img} height={1440} alt='image' />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
