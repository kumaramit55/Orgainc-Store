import { createSlice } from "@reduxjs/toolkit";

let initialState={
    cart:[],
    totalQuantity:0,
    totalPrice:0

}

export const CartSlice=createSlice({
    name:'item',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            let find = state.cart.findIndex((item) => item.id === action.payload.id)
            if (find >= 0) {
                state.cart[find].Quantity += 1
            }

            else {
                state.cart.push(action.payload)
            }
        },
            
           
       
        
        increaseItem:(state,action)=>{
          state.cart=state.cart.map((item)=>{

            if(item.id==action.payload){
                return{...item,Quantity:item.Quantity+1};
            }
            return item;
          })

},

        decreseitem:(state,action)=>{
           state.cart= state.cart.map((item)=>{
             if(item.id==action.payload && item.Quantity>1){
                return{...item,Quantity:item.Quantity-1}
             }
             return item

             
           })
           


            },

        removeItem:(state,action)=>{
            state.cart=state.cart.filter((item)=>item.id != action.payload)
        }   ,

        getTotal:(state)=>
            {
             let totalPrice=0
             let totalQuantity=0
             state.cart.map((item)=>
            {
                totalPrice=totalPrice+(item.Quantity*Number(item.pprice))
                totalQuantity=totalQuantity+item.Quantity

             })
             
             state.totalPrice=totalPrice
             state.totalQuantity=totalQuantity
             


            },
             
          
},
    
})


export  const {addToCart,increaseItem,decreseitem,removeItem,getTotal}=CartSlice.actions
export default CartSlice.reducer

