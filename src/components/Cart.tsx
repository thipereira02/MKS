import { useContext } from "react";
import styled from "styled-components";
import { RootState } from "../store/modules/rootReducer";
import { connect, DispatchProp } from "react-redux";

import { Container } from "../layouts/CartContainerStyle";
import CartProductList from "./CartProductList";
import ActiveCartContext from "../contexts/ActiveCartContext";

const mapStateToProps = (state: RootState) => ({
    total: state.cart.products.reduce((acc, p) => {
        return acc + parseFloat(p.price) * p.qty;
    }, 0)
});

type Props = ReturnType<typeof mapStateToProps> & DispatchProp;

interface FinishButtonProps {
    disabled: boolean;
}

function Cart(props: Props) {
    const { isActive, setIsActive } = useContext(ActiveCartContext);
    const { total } = props;
    
    return(
        <>
            <Container display={isActive}>
                <Title>
                    <h1>Carrinho<br /> de compras</h1>
                    <div onClick={() => setIsActive(false)}>
                        X
                    </div>
                </Title>
                <CartProductList />
                <CartTotal>
                    {total > 0 &&
                        <FinalPrice>
                            <p>Total:</p>
                            <p>R${total}</p>
                        </FinalPrice>
                    }
                    <FinishButton disabled={total > 0 ? false : true}>
                        <p>Finalizar compra</p>
                    </FinishButton>
                </CartTotal>
            </Container>
        </>
    );
}

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 22px;
    padding-left: 47px;
    margin-bottom: 60px;

    h1{
        font-size: 27px;
        font-weight: 700;
        line-height: 33px;
        color: #FFF;
    }

    div{
        width: 38px;
        height: 38px;
        background-color: #000;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFF;
        font-size: 22px;
        font-weight: 400;
        cursor: pointer;
    }
`;

const CartTotal = styled.div`
    padding-top: 20px;
`;

const FinalPrice = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 60px;
    padding-left: 47px;
    color: #FFF;
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 42px;    
`;

const FinishButton = styled.div<FinishButtonProps>`
    height: 97px;
    width: 100%;
    background-color: #000;
    opacity: ${props => props.disabled ? 0.7 : 1};
    color: #FFF;
    font-size: 28px;
    font-weight: 700;
    display: flex; 
    justify-content: center;
    align-items: center;
    cursor: ${props => props.disabled ? "inherit": "pointer"};
`;

export default connect(mapStateToProps)(Cart);