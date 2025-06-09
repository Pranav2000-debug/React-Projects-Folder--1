import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className='w-full bg-[#27213C] text-lg sticky top-0 text-white'>
      <nav className='flex justify-between px-8 mx-4 py-6 items-center'>
        <div className='font-bold text-2xl'>My Site</div>
        <ul className='flex gap-x-6 text-[1.2rem] font-semibold'>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar