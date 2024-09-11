import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreseitem, increaseItem, removeItem,getTotal} from '../../Feature/CartSlice'

function Cart() {
  const {cart,totalQuantity,totalPrice}=useSelector(state=>state.allcarts)
  const dispatch=useDispatch()

  useEffect(()=>{dispatch(getTotal())},[cart])
  console.log(cart)
  return (
    <div  className='flex flex-col sm:flex-row  w-full justify-around  bg-slate-300  p-5'>
    <div className=' w-full h-auto flex  flex-col  gap-4 justify-around items-center'>  
      {
         cart.map((item)=>{
          return(
            <>
             
            <div className='flex w-11/12  bg-slate-200  gap-4 px-2 py-10 rounded-md items-center justify-between sm:w-3/4'>
              <img src={item.pimg} alt=""  style={{width:70,height:70}}/>
              <h1  className='text-xs text-green-400 font-medium sm:text-2xl'>{item.pname}</h1>
              <h1  className='text-xs text-green-400 font-medium sm:text-2xl'>{item.pprice}</h1>
              <div className='flex gap-2'>
              <button className='bg-green-400 text-white px-3 py-1 font-bold text-xl rounded-md text-center sm:text-2xl' onClick={()=>dispatch(decreseitem(item.id))}>-</button>
              <input type="number" name="" id=""  className='border-2  border-black w-12 rounded-md px-1 font-medium text-xl' value={item.Quantity}  onChange={()=>null} />
              <button className='bg-green-400 text-white px-3 py-1 font-bold text-xl rounded-md' onClick={()=>dispatch((increaseItem(item.id)))}>+</button>
               

                          
             </div>
             <button className='bg-green-400 text-white p-2 rounded-md 'onClick={()=>dispatch(removeItem(item.id))}>Remove</button>
            </div>
            </>
          )
         })
      }

     
     
      
    </div>
     
  
    <div className='bg-black text-white p-10 rounded-md w-1/3  h-1/4 flex flex-col gap-3 border-2  border-red-300'>
        <h1 className='text-2xl font-bold flex justify-between'>TotalQuantity:<span>{totalQuantity}</span></h1> 
        <h1 className='text-2xl font-bold flex justify-between'>TotalPrice<span>${totalPrice}</span></h1>
    </div>

    </div>
  )
}

export default Cart
