import {configureStore }from "@reduxjs/toolkit"
import CartSliceReducer from "../Feature/CartSlice"

export const store=configureStore({
    reducer:{
        allcarts:CartSliceReducer
    },
})

