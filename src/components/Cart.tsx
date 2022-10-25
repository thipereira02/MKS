import styled from "styled-components";

import CartProduct from "./CartProduct";
import { Container } from "../layouts/Styles";

export default function Cart({opened, setOpened}: {opened: boolean, setOpened: Function}) {
    return(
        <Container display={opened}>
            <Title>
                <h1>Carrinho<br /> de compras</h1>
                <div onClick={() => setOpened(!opened)}>X</div>
            </Title>
            <CartProduct />
        </Container>
    );
}

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
        cursor: pointer;
    }
`;