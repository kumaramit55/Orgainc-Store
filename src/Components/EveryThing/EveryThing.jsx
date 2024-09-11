import React, { useState } from 'react'
import { data } from '../../Data/Data'
import { Link, NavLink, useParams } from 'react-router-dom'
import User from '../User/User'


function EveryThing() {
  let [page, Setpage] = useState(1)
  let [productid,setproductid]=useState(0)
  let [pricemax,setpricemax]=useState()
 
 
  function Previousage() {
    if (page > 1) 
      {   
         page=page-1
         productid=productid-10
         Setpage(page)
         setproductid(productid) 
    }
  }

  function NextPage() {
    if (page >= 1) 
      {   
         page=page+1
         Setpage(page)
         productid=productid+10
         setproductid(productid)
   
        
      }   
     
      
         
  }
 
  
  return (
    <div className='bg-slate-300 flex justify-center gap-4 p-5'>
      {/* seachbox */}
      <section id="seachbox" className='px-8 py-5 hidden sm:block'>
        <div className='flex gap-2'>
          <input type="text" className='border-2 border-black rounded-md' />
          <button className='bg-green-500 p-2 rounded-md text-white font-bold'>Serach</button>
        </div>
        <div className='mt-8'>
          <h1 className='text-3xl font-bold'>Filter By Price</h1>
          <input type="range" name="" id="" className='text-black bg-gray-600' max={1000} min={0} onChange={(e)=>{setpricemax(e.target.value)}} />
          <div className='flex gap-5 justify-start'>
            {/* <div className='text-xl font-bold border-2 border-black px-2 py-1 rounded-md'>${s}</div> */}
            <div className='text-xl font-bold border-2 border-black px-2 py-1 rounded-md'>${pricemax}</div>
          </div>

        </div>

          

        <div className='flex flex-col gap-4 mt-10 '>
        {
            data.map((x) => {
              
              if (x.id<4) 
                {
                return (
                  <>
                  <Link to={`/${x.id}`} key={x.id} >
                  <div className='p-10 bg-white rounded-md flex flex-col items-center gap-3'>
                   <img src={x.pimg} alt=""  style={{width:200 ,height:200}}/>
                      <h1 className='font-medium text-2xl'>{x.ptype}</h1>
                      <h3 className='text-xl font-bold'>{x.pname}</h3>
                      <h3 className='text-xl font-bold'>{x.prate}</h3>
                      <h2 className='font-bold'>{x.pprice}</h2>
                   </div>
                  </Link>
                  
                 
                  </>



                )

              }
            
           

            })
          }

              
          
          
        </div>

      </section>
      {/* products */}
      <section id="products" className='border-2 w-11/12'>
        <h1 className='text-green-400 text-4xl font-bold'>Shop</h1>
        <h1>Showing result {productid}-{productid+9} of {data.length}</h1>
        <div className='flex flex-wrap gap-4 justify-center items-center sm:nowrap mt-5 p-1'>
          {
            data.map((x) => {
              
              if (x.id>=0+productid && x.id <10+productid) 
                {
                return (
                  <>
                  <NavLink to={`/${x.id}`} key={x.id}>
                    <div className='flex  flex-col w-11/12 bg-blue-400 items-center justify-center gap-2 rounded-md p-5' key={x.id}>
                      <img src={x.pimg} alt="" style={{width:200, height:200}} />
                      <h1 className='font-medium text-2xl'>{x.ptype}</h1>
                      <h3 className='text-xs text-left font-bold'>{x.pname}</h3>
                      <h3 className='text-xl font-bold'>{x.prate}</h3>
                      <h2 className='font-bold'>${x.pprice}</h2>
                    </div>
                  </NavLink>
                  </>



                )

              }
        })
          }

        </div>

        <div className='flex justify-center items-center gap-5'>
          <button className='bg-green-500 px-2 py-1 rounded-md font-bold text-white' onClick={Previousage}>Previous</button>
          <h1 className='bg-green-500 px-2 py-1 rounded-md font-bold text-white'>{page}</h1>
          <button className='bg-green-500 px-2 py-1 rounded-md font-bold text-white' onClick={NextPage}>Next</button>
        </div>
      </section>
    </div>
  )
}

export default EveryThing
