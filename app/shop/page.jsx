"use client"
import Breadcrums from '../Componets/Breadcrums'
import { Arrow, Category, UpArrow } from '../Icons'
import PriceRange from '../Componets/Range'
import ColorPicker from '../Componets/Colors'
import { Button2 } from '../Componets/Button2'
import DropDownMini from '../Componets/DropDownMini'
// import CounterSlice from '../Componets/UseCounterStore'

const page = () => {



  return (
    <>
      <Breadcrums />
      <div className="container grid grid-cols-12 mt-6 gap-5">
        <div className="col-span-4 py-5 px-6 border rounded-[20px] border-[#E7E7E7] w-[295px] ">
          <div className='flex justify-between '>
            <h2 className='font-bold text-[20px] '>Filter</h2>
            <Category />
          </div>
          <hr className='border-[#E7E7E7] border  mt-6 ' />
          <ul className='py-6'>
            <li className='flex justify-between text-[16px] text-[#8C8C8C] items-center pb-[20px]'>Tshirts <Arrow /> </li>
            <li className='flex justify-between text-[16px] text-[#8C8C8C] items-center pb-[20px]'>Tshirts <Arrow /> </li>
            <li className='flex justify-between text-[16px] text-[#8C8C8C] items-center pb-[20px]'>Tshirts <Arrow /> </li>
            <li className='flex justify-between text-[16px] text-[#8C8C8C] items-center pb-[20px]'>Tshirts <Arrow /> </li>
            <li className='flex justify-between text-[16px] text-[#8C8C8C] items-center pb-[20px]'>Tshirts <Arrow /> </li>
          </ul>
          <hr className='border-[#E7E7E7] border ' />

          <div className='flex justify-between items-center mt-[29.25px]'>
            <h2 className='font-bold text-[20px]'>Price </h2>
            <UpArrow />
          </div>

          <div>
            <PriceRange />
          </div>

          <hr className='border-[#E7E7E7] border  mt-20 ' />

          <div>
            <div className='flex justify-between items-center mt-10'>
              <span className='font-bold text-[20px]'>Color </span>
              <UpArrow />
            </div>

            <div>
              <ColorPicker />
            </div>

            <hr className='border-[#E7E7E7] border  mt-10' />



            <div>
              <div className='flex justify-between items-center mt-10'>
                <span className='font-bold text-[20px]'>Size </span>
                <UpArrow />
              </div>
              <ul className='py-6'>
                <li className='flex justify-between text-[16px] text-[#8C8C8C] items-center pb-[20px]'>XX-Small <Arrow /> </li>
                <li className='flex justify-between text-[16px] text-[#8C8C8C] items-center pb-[20px]'>Small <Arrow /> </li>
                <li className='flex justify-between text-[16px] text-[#8C8C8C] items-center pb-[20px]'>Medium <Arrow /> </li>
                <li className='flex justify-between text-[16px] text-[#8C8C8C] items-center pb-[20px]'>Large <Arrow /> </li>
                <li className='flex justify-between text-[16px] text-[#8C8C8C] items-center pb-[20px]'>X-Large <Arrow /> </li>
                <li className='flex justify-between text-[16px] text-[#8C8C8C] items-center pb-[20px]'>XX-Large <Arrow /> </li>
                <li className='flex justify-between text-[16px] text-[#8C8C8C] items-center pb-[20px]'>3X-Large<Arrow /> </li>
              </ul>
            </div>

            <hr className='border-[#E7E7E7] border  mt-4' />


            <div>
              <div className='flex justify-between items-center mt-10'>
                <span className='font-bold text-[20px]'>Dress Style </span>
                <UpArrow />
              </div>
              <ul className='py-6'>
                <li className='flex justify-between text-[16px] text-[#8C8C8C] items-center pb-[20px]'>Casual <Arrow /> </li>
                <li className='flex justify-between text-[16px] text-[#8C8C8C] items-center pb-[20px]'>Formal <Arrow /> </li>
                <li className='flex justify-between text-[16px] text-[#8C8C8C] items-center pb-[20px]'>Party <Arrow /> </li>
                <li className='flex justify-between text-[16px] text-[#8C8C8C] items-center pb-[20px]'>Gym <Arrow /> </li>
              </ul>

              <Button2 variant="ghost" size='lg' className='w-full'>Apply</Button2>
            </div>


          </div>
        </div>

        <div className="col-span-8 mt-2">
          <div className='flex justify-between '>
            <h1 className='font-bold text-[20px]'>Casual</h1>
            <div>
              <span>Showing 1-10 of 100 Products</span>
              <DropDownMini />
            </div>
          </div>
         

         {/* <CounterSlice/> */}
          
        </div>
      </div>
    </>
  )
}

export default page
