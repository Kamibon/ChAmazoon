
import React, { ReactNode } from 'react'


export default function  Searchbar
({eventH, search}) {

const categories = ["Tutte","men's clothing", "women's clothing", "jewelery", "electronics"]

  return (
    <div>
    <div className='h-full bg-black flex justify-between p-5 '>
      <button className=' text-white font-extrabold text-3xl hover:border hover:border-white p-1'>Amazoon</button>
      <div>
      <select onChange={eventH} className='bg-gray-300 rounded-md h-[100%] focus:border-4 focus:border-orange-500'>
        <option >Tutte</option>
        <option>men's clothing</option>
        <option>women's clothing</option>
        <option>jewelery</option>
        <option>electronics</option>

      </select>
      <input onChange={search}  className=' rounded-md p-3' placeholder='Cerca qui i prodotti'></input>
      <button className='bg-orange-600 text-white p-3 rounded-md'>Cerca</button>
      </div>
       
      <button  className='text-white hover:border hover:border-white p-4'>Account</button>
      <button className='text-white hover:border hover:border-white p-4'>Ordini</button>
      <button className='text-white hover:border hover:border-white p-4' >Carrello</button>
      

      
    
    </div>
    <div className='bg-gray-500 font-bold '>
            {categories.map(el=><button onClick={eventH} value={el} key={el} className='p-4 m-5 hover:border hover:border-white'>{el}</button>)}
          <h1 className='inline font-extrabold text-white'>Scopri tutte le offerte</h1>
      </div>
    </div>
  )
}
