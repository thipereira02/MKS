import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QTY, CartActionTypes } from "./types";
import { IProduct } from "../../../types";

export function addToCart(newProduct: IProduct): CartActionTypes {
    return {
        type: ADD_TO_CART,
        payload: newProduct
    }
}

export function removeFromCart(productId: number): CartActionTypes {
    return {
        type: REMOVE_FROM_CART,
        payload: productId
    }
}

export function updateQty(productId: number, qty: number): CartActionTypes {
    return {
        type: UPDATE_QTY,
        id: productId,
        qty
    }
}