import store from "../store/store";
import { addToCart, removeFromCart, updateQty } from "../store/modules/cart/actions";

const product = {
	id: 1,
	name: "Test",
	brand: "Test",
	price: "10.00",
	photo: "test.jpg",
	qty: 0,
	description: "Test",
	createdAt: "2020-01-01",
	updatedAt: "2020-01-01"
};


test("Empty cart on initial state", () => {
	const state = store.getState();
	expect(state.cart.products.length).toBe(0);
});

test("Add to cart", () => {
	store.dispatch(addToCart(product));
	const state = store.getState();
	expect(state.cart.products.length).toBe(1);
	expect(state.cart.products[0].qty).toBe(1);
	expect(state.cart.products[0].name).toBe("Test");
});

test("Add to cart twice", () => {
	store.dispatch(addToCart(product));
	store.dispatch(addToCart(product));
	const state = store.getState();
	expect(state.cart.products.length).toBe(1);
	expect(state.cart.products[0].qty).toBe(3);
});

test("Remove from cart", () => {
	store.dispatch(addToCart(product));
	store.dispatch(addToCart(product));
	store.dispatch(removeFromCart(product.id));
	const state = store.getState();
	expect(state.cart.products.length).toBe(0);
});

test("Update qty", () => {
	store.dispatch(addToCart(product));
	store.dispatch(updateQty(product.id, 5));
	const state = store.getState();
	expect(state.cart.products.length).toBe(1);
	expect(state.cart.products[0].qty).toBe(5);
});

export {};