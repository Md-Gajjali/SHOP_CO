"use client"
import React, { useEffect, useState } from 'react'
import SubHeader from './SubHeader'
import Card from './Card'
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { GetProducts } from '../ProductSlice';
import { Button } from './Button';

const NewArrival = () => {
  const dispacth = useDispatch()

  // const [product, setProduct] = useState([])

    const {value : data } = useSelector((state) => state.AllProduct);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:4010/products');
        //  setProduct(dispacth(res.data));
        dispacth(GetProducts(res.data))
      } catch (error) {
        console.error("ডেটা আনতে  সমস্যা হয়েছে:", error.message);
      }
    };
    fetchData();
  }, []);


  return (
    <div className='mt-[73px] container'>
      <SubHeader title="NEW ARRIVALS" />
      <div className='flex justify-between flex-wrap mt-12 gap-5'>
        {
          data?.slice(0, 4).map((item) => {
            return (
              <Card
                key={item.id}
                img={item.image_url}
                title={item.name}
                price={Math.round(item.price - (item.price * item.discount) /100)}
                discountPrice={item.price}
                rating={item.rating}
                disPar={item.discount || 0} />
            )
          })
        }
      </div>
        <div className='flex justify-center items-center mt-[46px]'>
            <Button variant='link' size='md'>View All</Button>
        </div>
        <hr className=' border-[#aba8a7] w-full mt-10' />
    </div>
  )
}

export default NewArrival
