import React, { useContext } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { FaShoppingCart } from "react-icons/fa";
import { RootState } from "../store/modules/rootReducer";
import ActiveCartContext from "../contexts/ActiveCartContext";

const mapStateToProps = (state: RootState) => ({
	cartQuantity: state.cart.products.length
});

function Header({cartQuantity}: ReturnType<typeof mapStateToProps>){
	const { setIsActive } = useContext(ActiveCartContext);

	return (
		<Bar>
			<Logo>
				<h1>MKS</h1>
				<h2>Sistemas</h2>
			</Logo>
			<Cart onClick={() => setIsActive(true)}>
				<FaShoppingCart />
				<p>{cartQuantity}</p>
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
    cursor: pointer;

    p{
        font-size: 18px;
        font-weight: 700;
    }
`;

export default connect(mapStateToProps)(Header);