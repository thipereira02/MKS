import React, { useEffect, useState } from "react";
import { connect, DispatchProp } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import { FiShoppingBag } from "react-icons/fi";
import { toast } from "react-toastify";

import SkeletonCard from "./SkeletonCard";
import { IProduct } from "../types/ProductInterface";
import { RootState } from "../store/modules/rootReducer";
import * as CartActions from "../store/modules/cart/actions";

// eslint-disable-next-line
type qtyProduct = { [key: number]: any };
const qtyObject: qtyProduct = {};
const mapStateToProps = (state: RootState) => ({
	cart: state.cart.products,
	qty: state.cart.products.reduce((quantity, currentValue) => {
		quantity[currentValue.id] = currentValue.qty;
		return quantity;
	}, qtyObject)
});

type Props = ReturnType<typeof mapStateToProps> & DispatchProp;

function ProductCard(props: Props) {
	const [products, setProducts] = useState<IProduct[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		axios.get("https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=50&sortBy=id&orderBy=DESC")
			.then((response) => {
				setLoading(true);
				const timing = setTimeout(() => {
					setProducts(response.data.products);
					setLoading(false);
				}, 3000);
				return () => clearTimeout(timing);
			});
	}, []);

	function addProductToCart(product: IProduct){
		const { dispatch } = props;
		dispatch(
			CartActions.addToCart({
				...product
			})
		);
		toast.success("Produto adicionado ao carrinho!");
	}

	return(
		<>
			{loading && <SkeletonCard />}
			{!loading && products.map((p,i) => (
				<Container key={i}>
					<img src={p.photo} alt={p.name} />
					<NameAndPrice>
						<h3>{p.name}</h3>
						<div>
                        R${p.price.slice(0,-3)}
						</div>
					</NameAndPrice>
					<p>{p.description}</p>
					<Button onClick={() => {addProductToCart(p);}}>
						<FiShoppingBag color='#FFF' size={"15px"}/>
						<h1>COMPRAR</h1>
					</Button>
				</Container>
			))}
		</>
	);
}

const Container = styled.div`
    max-height: 285px;
    max-width: 217.56px;
    border-radius: 8px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    background-color: #FFF;
    margin-bottom: 31px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 18px;

    img{
        height: 138px;
        width: 111px;
    }

    p{
        margin-top: 8px;
        font-weight: 300;
        font-size: 10px;
        line-height: 12px;
        color: #2C2C2C;
        padding-left: 14px;
        padding-right: 12px;
    }
`;

const NameAndPrice = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-left: 14px;
    padding-right: 12px;
    margin-top: 14px;

    h3{
        font-size: 16px;
        font-weight: 400;
        color: #2C2C2C;
        line-height: 19px;
    }

    div{
        height: 26px;
        width: 64px;
        background-color: #373737;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFF;
        font-size: 13px;
        font-weight: 700;
        line-height: 15px;
    }
`;

const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 100%;
    background-color: #0F52BA;
    border-radius: 0 0 8px 8px;
    cursor: pointer;

    h1{
        font-size: 14px;
        font-weight: 600;
        line-height: 18px;
        color: #FFF;
        margin-left: 14px;
    }
`;

export default connect(mapStateToProps)(ProductCard);