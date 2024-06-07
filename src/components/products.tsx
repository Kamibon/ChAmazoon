import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'

type Product = {
    id:Number,
    title:String,
    price:Number
    description :string,
    category:string,
    image:string,
    rating: {
        rate: number,
        count:Number
    }
}


export default function Products() {

    useEffect(()=>{
          fetch('https://fakestoreapi.com/products').then((res)=>res.json()).then((data)=>setProd(data))


    }, [])


   const [prod, setProd] = useState<Product[]>()  


  return (
    <div className='grid grid-cols-4 m-auto '>
      {prod?.map(el=><div className=' size-[50%] m-[10%]'>
            <img className=' size-[88%]' src={el.image}></img>
            <button className='text-black hover:text-orange-500 font-bold'>{el.title.toUpperCase()}</button>
            <div className=' overflow-clip h-[15%]'>{el.description}</div>
            <div>{el.rating.rate} <span className='text-blue-500'>{el.rating.count.toString()}</span></div>
            <div className='text-black font-extrabold'>{el.price.toString()} € </div>

      </div>   )}

    </div>
  )
}
