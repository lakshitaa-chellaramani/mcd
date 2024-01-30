import React from 'react'
import { productsdata } from './CardData'
import CardGenerator from './CardGenerator'
const Cards = () => {
  return (
    <div className='flex justify-center '>
    <div className='grid -mr-14 grid-cols-1 gap-4 lg:grid-cols-2'>
     {productsdata?.map((data,indexes)=>(
        <CardGenerator key={indexes} {...data}/>

     ))}
    </div>
    </div>
    
  )
}

export default Cards
