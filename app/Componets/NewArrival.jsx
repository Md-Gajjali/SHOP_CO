import React from 'react'
import SubHeader from './SubHeader'
import Card from './Card'
import img from '../Assets/im.png'

const NewArrival = () => {
  return (
    <div className='mt-[73px] container'>
      <SubHeader title="NEW ARRIVALS" />
      <div className='grid col-end-4 gap-5'>
        <Card img={img} title='T-SHIRT WITH TAPE DETAILS' price='200'  review={"4.5"} discountPrice='175' rating="3.5" disPar='20'/>
      </div>
    </div>
  )
}

export default NewArrival
