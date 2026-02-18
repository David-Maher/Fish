import React from 'react'
export default function Header() {
  return (
    <div className='Header bg-[#0a1628] h-auto'>
      <div className="navbar flex justify-center text-white shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-32 p-2 shadow">
        <li>
          <a>Parent</a>
          <ul className="p-2 text-black">
      <li><a>Home</a></li>
      <li><a>Fresh Market</a></li>
      <li><a>Menu</a></li>
      <li><a>Contact Us</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn text-[#d4af37] btn-ghost text-2xl">Caviar</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal text-[15px] px-1">
      <li><a className='  hover:text-orange-400 decoration-1 text-'>Home</a></li>
      <li><a className='  hover:text-orange-400 decoration-1 text-'>Fresh Market</a></li>
      <li><a className='  hover:text-orange-400 decoration-1 text-'>Menu</a></li>
      <li><a className='  hover:text-orange-400 decoration-1 text-'>Contact Us</a></li>
    </ul>
  </div>
</div>
    </div>
  )
}
