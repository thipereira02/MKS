import React from "react";
import { connect, DispatchProp } from "react-redux";

import { 
	Container, 
	EmptyCart, 
	Product, 
	Name, 
	Quantity, 
	Buttons, 
	Separator, 
	Price, 
	RemoveButton
} from "../layouts/ProductCartStyle";
import { RootState } from "../store/modules/rootReducer";
import { IProduct } from "../types/ProductInterface";
import * as CartActions from "../store/modules/cart/actions";

const mapStateToProps = (state: RootState) => ({
	products: state.cart.products.map(p => ({
		...p,
		subtotal: parseFloat(p.price) * p.qty
	}))
});

type Props = ReturnType<typeof mapStateToProps> & DispatchProp;

function CartProductList(props: Props) {
	const { products, dispatch } = props;

	function incrementProduct(product: IProduct){
		dispatch(CartActions.updateQty(product.id, product.qty + 1));
	}

	function decrementProduct(product: IProduct){
		dispatch(CartActions.updateQty(product.id, product.qty - 1));
	}

	return(
		<Container>
			{products.length === 0 && <EmptyCart>Seu carrinho está vazio :( <br/> Por enquanto...</EmptyCart>}
			{products.map(p => (
				<Product key={p.id}>
					<img src={p.photo} alt={p.name} />
					<Name>
						<p>{p.name}</p>
					</Name>
					<Quantity>
                        Qtd:
						<Buttons>
							<span onClick={() => decrementProduct(p)}>-</span>
							<Separator />
							<p>{p.qty}</p>
							<Separator />
							<span onClick={() => incrementProduct(p)}>+</span>
						</Buttons>
					</Quantity>
					<Price>R${p.price.slice(0,-3)}</Price>
					<RemoveButton onClick={() => dispatch(CartActions.removeFromCart(p.id))}>
                        X
					</RemoveButton>
				</Product>
			))}
		</Container>
	);
}

export default connect(mapStateToProps)(CartProductList);