"use client"
import React from 'react'
import SubHeader from './SubHeader'
import { useSelector } from 'react-redux'
import Card from './Card'
import { Button } from './Button'

const TopSelling = () => {
    const allProducts = useSelector((state) => state.AllProduct.value);
  return (
    <section className='mt-[64px]'>
      <div className="container">
        <SubHeader title='top selling '/>
        <div className="grid  grid-cols-4 mt-20">
          {
            allProducts.slice(4,8).map((item)=>{
              return(
                <Card 
                  key={item.id}
                  img={item.image_url}
                  title={item.name}
                  price={Math.round(item.price - (item.price * item.discount) /100)}
                  discountPrice={item.price}
                  rating={item.rating}
                  disPar={item.discount}
                />
              )
            })
          }
        </div>
        <div className='flex justify-center items-center mt-[36px]'>
          <Button variant='link' size='md'>View All</Button>
        </div>
      </div>
    </section>
  )
}

export default TopSelling
