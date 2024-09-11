import React, { useContext } from 'react'
import { createContext } from 'react'

export const ItemContext=createContext()
export const ItemContextProvider=ItemContext.Provider

export default function useItemContext(){
     return(useContext(ItemContext))
}