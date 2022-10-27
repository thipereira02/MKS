import { useContext } from "react";
import styled from "styled-components";

import { Container } from "../layouts/CartContainerStyle";
import CartProductList from "./CartProductList";
import ActiveCartContext from "../contexts/ActiveCartContext";

export default function Cart() {
    const { isActive, setIsActive } = useContext(ActiveCartContext);
    
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
                    <FinalPrice>
                        <p>Total:</p>
                        <p>R$798</p>
                    </FinalPrice>
                    <Finish>
                        <p>Finalizar compra</p>
                    </Finish>
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

const Finish = styled.div`
    height: 97px;
    width: 100%;
    background-color: #000;
    color: #FFF;
    font-size: 28px;
    font-weight: 700;
    display: flex; 
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;