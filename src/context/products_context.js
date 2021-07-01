import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import { products_url as url } from '../utils/constants'
// Nesse projeto decidido deixar todas as ações já pré-programadas como de ver abaixo. Apenas uma facilitada para adiantar na produção, mas poderia no dispatch e em type usar string diretamente que nao haveria problema
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const initialState = {
  isSidebarOpen:false
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  // Considerando a grandeza desse projeto, foi decidido usar o usereducer para facilitar o crescimento do projeto. 
  const [state, dispatch] = useReducer(reducer, initialState)

  const openSidebar = () =>{
    dispatch({type:SIDEBAR_OPEN})
  }
  const closeSidebar = () =>{
    dispatch({type:SIDEBAR_CLOSE})
  }

  return (
    <ProductsContext.Provider value={{...state, openSidebar, closeSidebar}}>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
