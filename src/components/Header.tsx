import styled from "styled-components";

import { FaShoppingCart } from "react-icons/fa";

export default function Header({opened, setOpened}: {opened: boolean, setOpened: Function}) {
    console.log(opened)

    return (
        <Bar>
            <Logo>
                <h1>MKS</h1>
                <h2>Sistemas</h2>
            </Logo>
            <Cart onClick={() => (setOpened(!opened))}>
                <FaShoppingCart />
                <p>0</p>
            </Cart>
        </Bar>
    );
}

const Bar = styled.div`
    background-color: #0F52BA;
    height: 101px;
    width: 100%;
    position: fixed;
    top: 0;
    padding-left: 65px;
    padding-right: 88px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`;

const Logo = styled.div`
    display: flex;
    align-items: end;
    color: #FFF;

    h1 {
        font-size: 40px;
        font-weight: 600;
    }

    h2{
        font-size: 20px;
        font-weight: 300;
        margin-bottom: 6px;
        margin-left: 8px;
    }
`;

const Cart = styled.div`
    width: 90px;
    height: 45px;
    background-color: #FFF;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
    padding-right: 27px;

    p{
        font-size: 18px;
        font-weight: 700;
    }
`;