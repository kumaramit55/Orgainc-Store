import React from 'react'

export default function About() {
  return ( 
    <div className='bg-slate-300 relative  z-0'>
      <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/basil-leaf.png" alt=""  className='absolute bottom-0 right-2 -z-0 opacity-80' style={{width:200,height:200}}/>
      <h1 className='text-4xl  text-center font-bold  py-10'>
        About Us
      </h1>
      <div className='flex  flex-wrap justify-center items-center py-8'>
        <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/basil-leaf.png" alt="" />
      </div>
      <div className='flex flex-wrap sm:flex-nowrap gap-3 bg-blue-600'>
        <div  className='flex flex-col gap-8 w-11/12 sm:w-2/5'>
          <h1 className='text-3xl font-bold '>We Are Your Favourite Store.</h1>
          <p className='text-xl text-justify font-normal'>
            Tuas quisquam quo gravida proident harum, aptent ligula anim consequuntur, ultrices mauris, nunc voluptates lobortis, varius, potenti placeat! Fuga omnis. Cubilia congue. Recusandae. Vero penatibus quasi! Nostra tenetur dignissimos ultrices natus distinctio ultrices consequuntur numqu.

            Officiis fuga harum porro et? Similique rhoncus atque! Netus blanditiis provident nunc posuere. Rem sequi, commodo, lorem tellus elit, hic sem tenetur anim amet quas, malesuada proident platea corrupti expedita.
          </p>
        </div>
        <div className=''>
          <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2020/01/banner-01.jpg" alt="" />
        </div>
      </div>

      <div className='bg-black text-white flex justify-between  items-center py-14 px-4'>
        <div>
          <h1 className='text-4xl font-bold'>Numbers Speak </h1>
          <h1 className='text-4xl font-bold'>For Themselves!</h1>
        </div>

        <div>
          <h1 className='text-4xl font-bold'>5000+</h1>
          <h2 className='text-2xl font-bold'>Curated Products</h2>
        </div>

        <div>
          <h1 className='text-4xl font-bold'>900+</h1>
          <h2 className='text-2xl font-bold'>Curated Products</h2>
        </div>

        <div>
          <h1 className='text-4xl font-bold'>40+</h1>
          <h2 className='text-2xl font-bold'>Products Categories</h2>
        </div>
      </div>

      <div className='flex  justify-around p-10'>

        <div id='left' className=' w-2/5 border-2 border-black flex flex-col gap-4 p-5'>
          <div className='bg-slate-200 flex  items-baseline justify-center p-4'>
            <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/elementor/thumbs/image-01-ok9t8tqfmw86q6a5qjwdw95uon8m0ro8dme893gop4.jpg" alt="" />
            </div>

          <div>
            <p className='text-xl font-medium'>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

            <div className='flex  justify-center items-center mt-4'>
              <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/client02-free-img.png" alt="" />
              <h1 className='text-xl font-bold'>Mila Kunit</h1>
            
            </div>
           
            </div>  
        
        </div>
        <div id='right w-2/5 bo'>
          <div className='flex gap-2'>
            <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-badge-freeimg.png" alt="" style={{width:100,height:100}}/>
            <div>
              <h1 className='text-2xl font-bold'>Certified Products</h1>
              <p className='text-xl font-normal'>Click edit button to change this text. Lorem ipsum dolor sit amet  </p>
              
              </div>
          </div>

          <div>
            <h1 className='text-3xl font-bold my-4'>We Deal With Various Quality Organic Products!</h1>
          </div>

          <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png" alt="" />

          <div className='grid grid-cols-2 gap-4 mt-5 text-xl font-medium'>
          <h4>Fresh Fruits</h4>
          <h4>Dry Fruits</h4>
          <h4>Beauty Products</h4>
          <h4>Milk Products</h4>
          <h4>Fresh Vegitables</h4>
          <h4>Organic Honey</h4>
          <h4>Dried Vegitables</h4>
          <h4>Orgainc Tea</h4>

          </div>

          <button className='text-xl bg-green-400 px-2 py-2 rounded-md mt-10'>Start Shopping</button>
         
        </div>
      </div>


    </div>
  )
}
