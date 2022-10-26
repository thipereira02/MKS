import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        isEmpty: true
    },
    reducers: {
        changeCart(state , { payload }) {
            return {...state, isEmpty: false, cart: payload }
        },
        finishPurchase(state) {
            return {...state, isEmpty: true, cart: []}
        }
    }
})

export const { changeCart, finishPurchase } = slice.actions;

export const selectCart = (state: any) => state.cart.cart;

export default slice.reducer;