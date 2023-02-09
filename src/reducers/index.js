import { createReducer, isAsyncThunkAction } from "@reduxjs/toolkit"
import * as actions from "../actions"

const initialState = {
    coffeeMachines: [],
    basket: JSON.parse(localStorage.getItem('basket')) || [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    currentMachine: {},
    loading: true,
    modalAddtoBasket: false,
    modalRemoveFromBasket: false,
    orderData: {
        name: '',
        lastName: '',
        age: '',
        deliveryAddress: '',
        mobileNumber: '',
        products: []
    }

}



export default createReducer(initialState, buider => {
    buider

    .addCase(actions.actionOrderData, (state, {payload}) => {
        state.orderData = {...payload}
    })
    .addCase(actions.actionOrderProductData, (state, {payload}) => {
        state.orderData.products = {...payload}
    })
    .addCase(actions.actionCleanBasketAfterBuy, (state) => {
         localStorage.removeItem('basket') 
         state.basket = []
    })

    

    
    .addCase(actions.actionCurrentMachine, (state, {payload}) => {
        state.currentMachine = {...payload}
        
    })


        .addCase(actions.actionToggleModalAddtoBasket, (state) => {
            state.modalAddtoBasket = !state.modalAddtoBasket
            console.log(state.modalAddtoBasket)
        })
        .addCase(actions.actionToggleModalRemoveFromBasket, (state) => {
            state.modalRemoveFromBasket = !state.modalRemoveFromBasket
        })

        .addMatcher(isAsyncThunkAction(actions.actionFetchCoffeeMachines), (state, { payload, meta }) => {
            if (meta.requestStatus === 'fulfilled') {
                state.coffeeMachines = [...payload]
                state.loading = false
            } else {
                state.loading = true
            }


        })

        .addMatcher(isAsyncThunkAction(actions.actionFetchBasketPage), (state, { payload, meta }) => {
            if (meta.requestStatus === 'fulfilled') {
                state.basket = [...payload]
                state.loading = false
            } else {
                state.loading = true
            }
        })

        .addMatcher(isAsyncThunkAction(actions.actionFetchFavoritesPage), (state, { payload, meta }) => {
            if (meta.requestStatus === 'fulfilled') {
                state.favorites = [...payload]
                state.loading = false
            } else {
                state.loading = true
            }
        })
})