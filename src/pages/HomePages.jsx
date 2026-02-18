import { image } from '@heroui/react';
import './HPage.css'
import React, { useState } from 'react'
export default function HomePages() {
  const [products, setProducts] = useState([
  {id: 1 , first:"Market Price", name:"Squid", price: " £ 250 " , kilo: " / kg" , image: "./src/images/squid.jpg"},
  {id: 2 , first:"Market Price", name: "Salmon", price: " £ 500 ", kilo: " / kg", image:"./src/images/salmon.webp"},
  {id: 3 , first:"Market Price", name: "snake.webp", price: " £ 800 ", kilo: " / kg", image:"./src/images/snake.webp"},
  {id: 4 , first:"Market Price", name: "Crab", price: " £ 400 ", kilo: " / kg", image:"./src/images/crap.jpg"},
  {id: 5 , first:"Market Price", name: "Jumbo shrimp", price: " £ 1000 ", kilo: " / kg", image:"./src/images/jamposhrimp.jpg"}, 
  {id: 6 , first:"Market Price", name: "Tilapia fish", price: " £ 70 ", kilo: " / kg", image:"./src/images/Tilapia fish.jpg"}   


  ]);
  return (
    <div className='HomePages  h-auto bg-[#0a1628] text-white items-center '>
      <div className='flex justify-start items-center p-10'>
        <p className='text-xl'>Daily Market Prices</p>
      </div>
      <div className='flex justify-center items-center p-10'>
      <div className=' grid sm:grid-cols-1 grid-cols-1 lg:grid-cols-3  gap-4 h-auto w-full'>
        {products.map((product) => (
          <div key={product.id} className='flex flex-col border border-[#d4af37] bg-[#0a1628] rounded-2xl  justify-center  p-5 border-b '>
            <div>
              <img src={product.image} alt={product.name} loading="lazy" className='w-full h-70 object-cover rounded-lg' />
            </div>
            <div className='mt-10 pb-10 bg-[#0a1628] rounded-lg p-5 flex flex-col h-auto justify-start'>
            <div className='pt-5'>
              <p className='text-2xl font-bold'>{product.name}</p>
            <p className='text-2xl'>{product.first}</p>
            <div className='flex gap-2 items-center'>
            <p className='text-3xl text-[#d4af37]'>{product.price}</p>
            <p className='text-2xl'>{product.kilo}</p>
            </div>
            </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      <div className='flex justify-center items-center content-center mt-10 bg-[#25282d] w-auto p-5 '>
        <div className=''>
        <p>All seafood is sustainably sourced and certified fresh daily. Prices subject to market availability.</p>
        </div>
      </div>
      <div className='mt-10'>
        <p className='text-4xl text-center'>Premium Services</p>
              <div className=' mt-10 grid sm:grid-cols-1 grid-cols-1 lg:grid-cols-3  gap-4 h-auto w-full'>
          <div className='flex flex-col border  items-center border-[#d4af37] bg-[#0a1628] rounded-2xl  justify-center  p-5 border-b '>
            <div className='mt-10 pb-10 bg-[#0a1628] rounded-lg p-5 flex flex-col h-auto text-center'>
            <div className='pt-5'>
              <p className='text-2xl font-bold'>Professional Cleaning</p>
            <p className='text-2xl'>Expert preparation and cleaning of all seafood</p>
            <div className='flex gap-2 mt-10 items-center'>
            <ul className='list-disc text-left'>
              <li>
                <p>Scaled & Gutted</p>
              </li>
              <li>
                <p>Filleted to Order</p>  
              </li>
              <li>
                <p>Ready to Cook</p>
              </li>
            </ul>
            </div>
            </div>
            </div>
          </div>
      </div>

      </div>
    </div>
  )
}
