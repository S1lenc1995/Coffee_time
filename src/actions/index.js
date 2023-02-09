import {createAction, createAsyncThunk} from "@reduxjs/toolkit"
import { sendRequest } from "../../../hw6/src/Helpers/getData"



export const actionToggleModalAddtoBasket = createAction('ACTION_TOGGLE_MODAL_ADD_TO_BASKET')
export const actionToggleModalRemoveFromBasket = createAction('ACTION_TOGGLE_MODAL_REMOVE_FROM_BASKET')
export const actionCurrentMachine = createAction('ACTION_CURENT_MACHINE')
export const actionOrderData = createAction('ACTION_ORDER_DATA')
export const actionOrderProductData = createAction('ACTION_ORDER_PRODUCT_DATA')
export const actionCleanBasketAfterBuy = createAction('ACTION_CLEAN_BASKET_AFTER_BUY') 



export const actionFetchCoffeeMachines = createAsyncThunk("coffeeMachines/fetchData", 
    async ()=>{
       const result = await sendRequest('./data.json')
       return result
})

export const actionFetchBasketPage = createAsyncThunk("basketPage/fetchData", 
    async ()=>{
       const result = await (JSON.parse(localStorage.getItem('basket')) || [])
       return result
})

export const actionFetchFavoritesPage = createAsyncThunk("favoritesPage/fetchData", 
    async ()=>{
       const result = await (JSON.parse(localStorage.getItem('favorites')) || [])
       return result
})



