import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div className='bg-slate-100 '>
      {/* first section */}
    <section className='flex flex-wrap sm:flex-nowrap justify-around items-center p-5 sm:p-10'>
      <div className='flex justify-center items-center'><img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/organic-products-hero.png" alt=""  className='w-1/2 h-1/2'/></div>
      <div className='p-10 w-full sm:w-1/2 relative'>
        <img src="../src/Images/logo-leaf-new.png" alt=""  className="absolute bottom-10 right-10 -z-0" style={{width:100,height:200}} />
        <img src="../src/Images/logo-leaf-new.pn" alt="" />
        <h4 className='font-medium text-xl'>Best Quality Products</h4>
        <h1 className='font-semibold text-2xl'>Join The Organic</h1>
        <h1 className='font-semibold text-2xl'>Movement!</h1>
        <p className='font-light text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <button className='text-white font-medium bg-green-400 px-3 py-2 rounded-md mt-8'>ShopNow</button>
      </div>

    </section>
    {/* offers */}
    <section className='bg-black text-white flex flex-wrap  h-3/4 sm:flex-nowrap justify-center items-center gap-2 px-6 py-20 '>
     <div className= 'bg-slate-500 px-6 py-6 w-full rounded-sm sm:w-1/3 sm:h-1/2 box-border'>
      <h1 className='text-2xl font-medium'>Free Shipping </h1>
      <h2>Above $5 Only</h2>
     </div>
     <div className='bg-slate-500 px-10 py-6 w-full rounded-sm sm:w-1/3 sm:h-1/2 box-content'>
     <h1 className='text-2xl font-medium'>Certified Orgainc </h1>
     <h2>100% Gurantee</h2>
     </div>
     <div className='bg-slate-500 px-10 py-6 w-full rounded-sm sm:w-1/3 sm:h-1/2'>
     <h1 className='text-2xl font-medium'>Huge Saving </h1>
     <h2>At Lower Price</h2>
     </div>
     <div className='bg-slate-500 px-10 py-6 w-full rounded-sm sm:w-1/3 sm:h-1/2'>
     <h1 className='text-2xl font-medium'>Easy Returns</h1>
     <h2>No Question Asked</h2>
     </div>
    </section>
      {/* Products */}
    <section className='flex justify-center items-center flex-col'>
      <div className='flex flex-col justify-center items-center'>
      <h1 className='text-black font-bold text-4xl mt-10'>Best Selling Products</h1>
      <img src="../src/Images/logo-leaf-new.png" alt="" className="" />
      </div>
       <section className='flex gap-2 justify-center items-center flex-wrap sm:flex-wrap my-10'>
        <div className='flex  flex-col items-center justify-center gap-1'>
          <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-300x300.jpg" alt="" />
          <h1 className='font-medium text-2xl'>Groceries</h1>
          <h3 className='text-xl font-bold'>Rating</h3>
          <h2 className='font-semibold'>$35.00</h2>
        </div>
        <div className='flex  flex-col  items-center justify-center gap-2'>
          <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/sanitizer-300x300.jpg" alt="" />
          <h1 className='font-medium text-2xl'>Groceries</h1>
          <h3 className='text-xl font-bold'>Rating</h3>
          <h2 className='font-semibold'>$35.00</h2>
        </div>
        <div className='flex  flex-col  items-center justify-center gap-2'>
          <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies-300x300.jpg" alt="" />
          <h1 className='font-medium text-2xl'>Groceries</h1>
          <h3 className='text-xl font-bold'>Rating</h3>
          <h2 className='font-semibold'>$35.00</h2>
        </div>
        <div className='flex  flex-col  items-center justify-center gap-2'>
          <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/edible-oil-300x300.jpg`" alt="" />
          <h1 className='font-medium text-2xl'>Groceries</h1>
          <h3 className='text-xl font-bold'>Rating</h3>
          <h2 className='font-semibold'>$35.00</h2>
        </div>
        
       </section>
    </section>
    {/* variations */}
    <section className='bg-slate-200 px-4 py-8'>
      <div className='flex justify-center'>
      <img src="../src/Images/basil-leaf.png" alt="" />
      </div>
     <section className='flex flex-wrap md:flex-nowrap gap-4 px-3 py-5'>
      <div className="bg-white w-full rounded-md px-10 py-16 relative z-50 md:w-1/3">
        
        <img src="../src/Images/lemon.jpeg" alt="" className='absolute right-6 bottom-2 w-36 h-44'/>
       
         <div className='relative z-0'>
         <h1 className='font-extrabold text-3xl'>Farm Fresh Fruits</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, facilis.</p>
        <button className='bg-green-600 text-white px-4 py-3 rounded-md mt-5 font-medium'>Shop Now</button>
         </div>
        
      </div>

      <div className="bg-white w-full md:w-1/3 rounded-md px-10 py-16 relative z-50">
        
        <img src="../src/Images/veg.jpeg" alt="" className='absolute right-6 bottom-2 w-36 h-44'/>
       
         <div className='relative z-0'>
         <h1 className='font-extrabold text-3xl'>Farm Fresh Vegitables</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, facilis.</p>
        <button className='bg-green-600 text-white px-4 py-3 rounded-md mt-5 font-medium'>Shop Now</button>
         </div>
        
      </div>
      <div className="bg-white w-full md:w-1/3 rounded-md px-10 py-16 relative z-50">
        
        <img src="../src/Images/legume.jpeg" alt="" className='absolute right-6 bottom-2 w-36 h-44'/>
       
         <div className='relative z-0'>
         <h1 className='font-extrabold text-3xl'>Farm Leagume</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, facilis.</p>
        <button className='bg-green-600 text-white px-4 py-3 rounded-md mt-5 font-medium '>Shop Now</button>
         </div>
        
      </div>
    
     </section>

    </section>

    {/* registation */}

    <section className='bg-slate-100 text-white py-8 rounded-md '>
      <div className='flex flex-wrap justify-around items-center bg-black py-10'>
      <h1 className='text-2xl font-bold  text-center'>Get 25% off on First Order</h1>
      <button className='bg-green-600 text-white px-2 py-2 rounded-md mt-5 font-medium '>Shop Now</button>
      </div>
     
     <h1 className='text-center text-4xl  text-black py-10 rounded-md font-bold'>Try It For Free. No Registration Needed</h1>
    </section>
    {/* Customer review */}
    <section>
      <div className='flex flex-col justify-center items-center gap-3'>
      <h1 className='text-5xl font-bold text-center'>Customer Reviews</h1>
      <img src="../src/Images/logo-leaf-new.png" alt="" />
      </div>
      <section className='flex flex-wrap justify-center items-center md:flex-nowrap gap-5 py-8 px-4'>
        <div className='p-10 sm:p-20 w-11/12 sm:w-3/4 bg-white rounded-md flex flex-col items-center box-border'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, error laudantium. Ullam laudantium iste repudiandae.</p>
          <img src="../src/Images/client02-free-img.png" alt="" />
          <h1>Mia Kunils</h1>
        </div>
        <div className=' w-11/12 sm:w-3/4 bg-white rounded-md relative'>
          <img src="../src/Images/vegs.jpeg" alt=""  className="w-full h-full absolute top-0 left-0 -z-0 opacity-90 drop-shadow-md brightness-50 hover:brightness-75"/>
          <div className='relative z-0 text-white flex flex-col justify-center items-center p-10 '>
            <h1 className='text-3xl font-bold'>Deal Of The Day</h1>
            <h1 className='text-3xl font-bold'>15% Off On All</h1>
            <h1 className='text-3xl font-bold'>Vegitables</h1>
            <p className='text-xl font-medium' >I am text block. Click edit button to change this tex em ips.</p>
            <button className='text-2xl font-bold bg-green-400 px-3 py-2 rounded-md mt-2'>Shop Now</button>
          </div>
        </div>
        <div className='p-20 w-11/12 sm:w-3/4 bg-white rounded-md flex flex-col items-center'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, error laudantium. Ullam laudantium iste repudiandae.</p>
          <img src="../src/Images/client01-free-img.png" alt="" />
          <h1>Kunal Pandey</h1>
        </div>


        
      </section>

    </section>
    </div>
  )
}
