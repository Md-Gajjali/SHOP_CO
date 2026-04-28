"use client"
import React, { useEffect, useState } from 'react'
import SubHeader from './SubHeader'
import Card from './Card'
import img from '../Assets/im.png'
import axios from "axios";


const NewArrival = () => {

  const [product,setProduct]=useState([])

  useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:4010/products');
      setProduct(res.data);
    } catch (error) {
      console.error("ডেটা আনতে সমস্যা হয়েছে:", error.message);
    }
  };

    fetchData(); 
  }, []); 


  return (
    <div className='mt-[73px] container'>
      <SubHeader title="NEW ARRIVALS" />
      <div className='flex justify-between flex-wrap mt-5 gap-5'>
        {
          product?.map((item)=>{
            return(
              <Card 
               key={item.id}
               img={img} 
               title={item.title} 
               price={item.discountPrice}  
               discountPrice={item.price} 
               rating={item.rating} 
               disPar={item.discountPercentage} />
            )
          })
        }
      </div>
    </div>
  )
}

export default NewArrival
