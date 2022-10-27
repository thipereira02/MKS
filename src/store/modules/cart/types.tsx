import { IProduct } from "../../../types";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_QTY = "UPDATE_QTY";

export interface ICartState {
    products: IProduct[];
}

interface AddToCartAction {
    type: typeof ADD_TO_CART;
    payload: IProduct;
}

interface RemoveFromCartAction {
    type: typeof REMOVE_FROM_CART;
    payload: number;
}

interface UpdateQtyAction {
    type: typeof UPDATE_QTY;
    id: number;
    qty: number;
}

export type CartActionTypes = AddToCartAction | RemoveFromCartAction | UpdateQtyAction;