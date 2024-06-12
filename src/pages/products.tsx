
import React, { ReactEventHandler, useEffect, useState } from 'react'
import Seo from '../components/seo'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Searchbar from '../components/searchbar'
import IndexPage from '.'

type Product = {
    id:Number,
    title:string,
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

  const categories = ["Tutte","men's clothing", "women's clothing", "jewelery", "electronics"]
  
    useEffect(()=>{
          fetch('https://fakestoreapi.com/products').then((res)=>res.json()).then((data)=>setProd(data))


    }, [])

   const [filter, setFilter] = useState("Tutte");
   const [prod, setProd] = useState<Product[]>()  
   const [search, setSearch] = useState("")


function filtering(event ){
  setFilter(event.target.value)
  
}

function searching(event){
  setSearch(event.target.value)
}

  return (
   <>
   <Searchbar search={searching} eventH={filtering}></Searchbar>
    <div className='grid grid-cols-4 m-auto overflow-scroll '>
      {filter ==="Tutte" && prod?.filter(el=>el.title.includes(search)).map(el=><div key={el.id.toString()} className=' h-[40%] w-[60%] mx-2 mt-[8%] mb-[5%]'>
            <img alt={el.title} className=' size-[91%]' src={el.image}></img>
            <Link aria-label={el.description} to={'/products/'+el.id} className='text-black hover:text-orange-500 font-bold'>{el.title.toUpperCase()}</Link>
            <div className=' overflow-clip h-[15%]'>{el.description}</div>
            <div>{el.rating.rate} <span className='text-blue-500'>{el.rating.count.toString()}</span></div>
            <div className='text-black font-extrabold'>{el.price.toString()} € </div>

      </div>   )}
      {filter!== "Tutte" && prod?.filter(el=>el.category === filter && el.title.includes(search)).map(el=><div key={el.id.toString()} className=' h-[40%] w-[60%] m-[7%]'>
            <img alt={el.title} className=' size-[91%]' src={el.image}></img>
            <Link to={'/products/'+el.id} className='text-black hover:text-orange-500 font-bold'>{el.title.toUpperCase()}</Link>
            <div className=' overflow-clip h-[15%]'>{el.description}</div>
            <div>{el.rating.rate} <span className='text-blue-500'>{el.rating.count.toString()}</span></div>
            <div className='text-black font-extrabold'>{el.price.toString()} € </div>

      </div>)}

    </div>
    </>
  )
}

