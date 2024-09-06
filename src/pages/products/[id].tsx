import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout'


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

export default  function ProductDetails(props) {
  
const [id, setId] = useState(props.params.id)
if(id!= props.params.id)
setId(props.params.id)
console.log('param:'+props.params.id + 'stateId: ' + id)
  useEffect( ()=>{
   
fetch('https://fakestoreapi.com/products/'+ id).then(res=>res.json()).then(json=>{
  
  setDetails( json)
 console.log(id)

})

  }, [id])

  

  
 const [details, setDetails] = useState<Product>() 
 const [similar, setSimilar] = useState<Product[]>()
 //
 
 useEffect(()=>{ fetch('https://fakestoreapi.com/products').then(res=>res.json()).then((jsons:Product[])=> {setSimilar( jsons.filter(el=>el.category===details?.category && el.id !=details.id))
  
 })}, [details])

    return (
      <Layout>
      
    <div className='flex   m-[3%]'>
        <img className=' size-[30%] hover:size-[50%]' src = {details?.image}></img> 
        
        <div className='m-[4%]'>
        <h1 className=' font-bold text-4xl'>{details?.title.toUpperCase()}</h1>
        <div className='text-2xl'>Recensioni: {details?.rating.rate}<span className='text-blue-500'> {details?.rating.count.toString()} voti</span></div>
        <strong>Informazioni su questo articolo</strong>
        <p> {details?.description}</p>
        </div>

        <div className='m-[4%] flex flex-col  items-center'>
          <strong className='text-3xl'>{details?.price.toString()} E</strong>
          <button className='rounded-xl bg-orange-500 hover:bg-orange-600 text-black m-3 px-4'> Aggiungi al carrello</button>
          <button className='rounded-xl bg-orange-600 hover:bg-orange-700 text-black m-3 px-4' > Acquista ora</button>

        </div>


    
    
    </div>
    <h1 className='text-3xl font-bold'>Altri utenti hanno acquistato anche </h1>
    <div className='grid grid-cols-4  h-[70%] overflow-clip'>
      {similar?similar?.map(el=><div key={el.id.toString()} className='size-[50%]'>
       
        <img className=' h-[85%] w-[90%]' src={el.image}></img>
        
          <Link   className=' no-underline text-blue-500 hover:text-orange-500' aria-label={'/products/'+el.id} to={'/products/'+el.id}>{el.title}</Link>  
      </div>): <h2>Attendi, stiamo cercando i prodotti per te...</h2>}
      </div>
      
   
    </Layout>
  )
}
