import React from 'react'
import { useSelector } from 'react-redux'
import { Link,NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Header() {
  const {cart,totalPrice}=useSelector(state=>state.allcarts)

  return (

    
    <nav className='flex bg-slate-200 justify-between px-4 font-semibold text-xs sm:text-xl rounded-md p-2'>
    <ul className='flex gap-1 justify-center items-center sm:gap-3'>
    
  
        <NavLink to="" ><img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg" alt="" /> </NavLink>
        <NavLink to="EveryThing" style={({ isActive }) => ({
                                color: isActive
                                    ? "orange"
                                    : "black",
                            })}
                                
                            >EveryThing</NavLink>
        <NavLink to="Grocery" style={({isActive})=>({color:isActive ?"orange":"black"})} >Groceries</NavLink>
        <NavLink to="Juice" style={({isActive})=>({color:isActive?"orange":"black"})}>Juice</NavLink>
        
    </ul>  

    <ul className='flex justify-center items-center gap-2 sm:gap-3 px-4'>
        <NavLink to="About" style={({isActive})=>({color:isActive ?"orange":"black"})}>About</NavLink>
        <NavLink to="Contact" style={({isActive})=>({color:isActive?"orange":"black"})}>Contact</NavLink>
        {/* <NavLink >${totalPrice}</NavLink> */}
        <Link to="Cart"  className='flex items-center justify-center'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnYsXr2FjpcioisvUL4qKjzqFLBegzK9xWwQ&s" alt="" style={{width:30,height:30}} className='rounded-md'/>({cart.length})</Link>
        
        {/* <NavLink to="User" style={({isActive})=>({color:isActive?"orange":"black"})}>User</NavLink> */}
        

    </ul>
    </nav>
    
  )
}

export default Header
