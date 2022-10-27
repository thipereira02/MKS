import produce from "immer";
import { CartActionTypes, ICartState } from "./types";

const initialState: ICartState = { products: [] };

export default function cartReducer(
    state: typeof initialState,
    action: CartActionTypes
): ICartState {
    switch (action.type) {
        case "ADD_TO_CART":
            return produce<ICartState>(state, (draft) => {
                const productIndex = draft.products.findIndex(
                    (p) => p.id === action.payload.id
                );
                if (productIndex >= 0) {
                    draft.products[productIndex].qty++;
                } else {
                    draft.products.push({ ...action.payload, qty: 1 });
                }
            });

        case "REMOVE_FROM_CART":
            return produce<ICartState>(state, (draft) => {
                const productIndex = draft.products.findIndex(
                    (p) => p.id === action.payload
                );
                if (productIndex >= 0) {
                    draft.products.splice(productIndex, 1);
                }
            });

        case "UPDATE_QTY":
            if (action.qty <= 0) {
                return state;
            }
            return produce<ICartState>(state, (draft) => {
                const productIndex = draft.products.findIndex(
                    (p) => p.id === action.id
                );
                if (productIndex >= 0) {
                    draft.products[productIndex].qty = Number(action.qty);
                }
            });

        default:
            return state;

    }
}