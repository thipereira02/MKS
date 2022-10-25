import styled from "styled-components";

import CartProduct from "./CartProduct";

export default function Cart() {
    return(
        <Container>
            <Title>
                <h1>Carrinho<br /> de compras</h1>
                <div>X</div>
            </Title>
            <CartProduct />
        </Container>
    );
}

const Container = styled.div`
    height: 100vh;
    width: 486px;
    background-color: #0F52BA;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
    padding-top: 36px;
    padding-left: 47px;
    position: fixed;
    top: 0;
    right: 0;
`;

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 22px;
    margin-bottom: 70px;

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
    }
`;