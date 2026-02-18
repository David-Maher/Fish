import React from 'react'
import './Hero.css'
export default function HeroPage() {
  return (
    <div className='HeroPage'>
      <div className="hero">
  <div className="hero-overlay">
  <div className="hero-content text-neutral-content flex flex-col justify-center text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Experience Luxury <span className='text-[#d4af37]'>From the Sea</span></h1>
      <p className="mb-5">
Premium seafood, expertly sourced and prepared. Where sophistication meets the ocean's finest offerings.
      </p>
    </div>
<div className='p-10 Box h-100 w-auto border w- border-[#d4af37] rounded-2xl bg-blur bg-[#0a1628]  flex flex-col text-center justify-center'>
  <h1 className='text-2xl font-bold text-white'>Reserve Your Experience</h1>
  <p className='text-white mt-5'>Indulge in an unforgettable dining experience</p>
  <button className='bg-[#d4af37] text-black px-6 py-2 rounded-lg mt-4'>Book A Table</button>
  <p className='text-[#d4af37] mt-4'>Explore Our Market →</p>
</div>
  </div>
  </div>
</div>
</div>
  )
}
