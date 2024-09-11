import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
    <div className='flex flex-wrap-reverse p-5 justify-center bg-black'>
      <div className='w-11/12 sm:w-1/2 text-white p-6'>
       <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg" alt=""  className='text-white'/>
       <p className='text-xl'>Maecenas mi justo, interdum at consectetur vel, tristique et arcu. Ut quis eros blandit, ultrices diam in, elementum ex. Suspendisse quis faucibus urna. Suspendisse pellentesque.</p>
      </div>
      <div className='bg-black text-white p-5 flex  flex-col  gap-3 font-bold'>
        <h1 className='text-2xl'>Quick Links</h1>
        <ul className='flex flex-col gap-2 text-xl'>
        <NavLink to="">Home</NavLink>
        <NavLink to="EveryThing">EveryThing</NavLink>
        <NavLink to="Grocery">Grocery</NavLink>
        <NavLink to="Juice">Juice</NavLink>
        <NavLink to="About">About</NavLink>
        <NavLink to="Contact">Contact</NavLink>
        </ul>
        
      </div>

     
    </div>

    <h1 className='bg-green-500 text-white text-center p-3 font-extrabold text-xl' >All Rights Are Reserved</h1>
    </div>
  )
}
