import Image from 'next/image'
import React from 'react'
import casual from "../Assets/casual.png"
import formal from "../Assets/formal.png"
import SubHeader from './SubHeader'

const DressStyle = () => {
  return (
    <section className='dress_style bg-[#F0F0F0] py-[70px] px-[64px] mt-20'>
        <div className="container">
            <SubHeader title='BROWSE BY dress STYLE' />
            <div className="grid grid-cols-12 gap-4 mt-10">
            <div className="col-span-4">
                <Image src={casual} width={410} height={290} alt='casual image' layout="responsive" />
            </div>

            <div className="col-span-7">
                <Image src={formal} width={644} height={289} alt='formal image' layout="responsive" />
            </div>
        </div>
        </div>
    </section>
  )
}

export default DressStyle
