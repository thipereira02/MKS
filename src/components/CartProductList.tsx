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
    })),
    total: state.cart.products.reduce((acc, p) => {
        return acc + parseFloat(p.price) * p.qty;
    }, 0)
});

type Props = ReturnType<typeof mapStateToProps> & DispatchProp;

function CartProductList(props: Props) {
    const { products, dispatch, total } = props;

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
                <Product>
                    <img src={p.photo} alt={p.name} />
                    <Name>
                        <p>{p.name}</p>
                    </Name>
                    <Quantity>
                        Qtd:
                        <Buttons>
                            <p onClick={() => decrementProduct(p)}>-</p>
                            <Separator />
                            <p>{p.qty}</p>
                            <Separator />
                            <p onClick={() => incrementProduct(p)}>+</p>
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