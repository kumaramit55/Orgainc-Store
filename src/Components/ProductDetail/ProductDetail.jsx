import React from 'react'
import { data } from '../../Data/Data'
import { NavLink, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Feature/CartSlice'

function ProductDetail() 
{    
   
   const dispatch=useDispatch()  
    const {ProductId}=useParams()

    
   
    const product=data.find((p)=>p.id==ProductId)
    
  return (
    <div className='bg-slate-300 p-10'>
    <section className='flex flex-col justify-center items-center gap-4 sm:flex-row p-2 sm:p-20' key={product.id}>
        <div className=' w-1/2 h-1/2 border-2 border-blue-300 flex justify-center'>
        <img src={product.pimg} alt=""  className='rounded-md' style={{widows:400,height:300}}/>
        </div>
        <div className='w-11/12 sm:1/2 flex flex-col gap-3'>
        <div>
            <h1 className='text-4xl  font-bold '>{product.pname}</h1>
            <h2 className='text-2xl font-medium'>{product.pprice}+<span>Free Shipping</span></h2>
            <p className='text-xl font-bold'>{product.pdetail}</p>
         </div>

         <div className='flex gap-3'>
            <button className='bg-green-500 px-10 py-1 rounded-md text-white font-bold text-xl' type='submit'
              onClick={()=>dispatch(addToCart(product))}
           >Add To Cart</button>
         </div>

         <hr  className='bg-green-400 h-1 w-11/12'/>
        </div>

    </section>
   <hr  className='bg-black h-1'/>
    <section className='flex justify-center text-xl sm:text-2xl font-medium '>
         <div className='p-5'>
          <h1 className='text-center my-3 font-medium text-3xl'>Reviews</h1>
           <form action="" className="flex flex-col gap-2 border-2 w-auto justify-center items-center p-3 ">
            <h1 className='text-left border-3  text-purple-700'>Be the first to review “Assorted Coffee”</h1>
            <h1>Your email address will not be published. Required fields are marked *</h1>
            <h1>Your rating *</h1>
             <h2>Your review *</h2>
             <textarea cols={30} rows={3}></textarea>

             <h2>Name</h2>
             <input type="text" />

             <h2>Email</h2>
             <input type="text" />
             <button className='bg-green-400 w-1/3 px-2 py-1 rounded-md mt-2 mx-auto'>Submit</button>

         </form>
         </div>
        
    </section>
    <section>
        <h1 className='text-3xl font-bold'>Related Products</h1>
        <div className='flex flex-wrap  justify-center items-center gap-4' >
          {
            data.map((x) => {
              if(x.ptype=="Grocerices"){
              if (x.id<4) 
                {
                return (
                  <>
                  <NavLink to="/ProductDetail" key={x.id}>
                    <div className='flex flex-col items-center justify-center gap-2 bg-gray-200 rounded-md p-5' key={x.id}>
                      <img src={x.pimg} alt=""  className='' style={{width:300,height:300}}/>
                      <h1 className='font-medium text-xl sm:text-2xl'>{x.ptype}</h1>
                      <h3 className='text-xs font-bold sm:text-xl'>{x.pname}</h3>
                      <h3 className='text-xs font-bold sm:text-x'>{x.prate}</h3>
                      <h2 className='font-bold'>{x.pprice}</h2>
                    </div>
                    </NavLink>
                  </>



                )

              }
            }
            
           

            })
          }

        </div>

        

    </section>


    </div>
   
   
  )
}

export default ProductDetail