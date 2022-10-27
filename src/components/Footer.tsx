import React from "react";
import styled from "styled-components";

export default function Footer(){
	return(
		<Container>
			<h1>MKS sistemas © Todos os direitos reservados</h1>
		</Container>
	);
}

const Container = styled.div`
    height: 34px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #EEE;
    margin-top: 170px;
    
    h1{
        font-size: 12px;
        font-weight: 400;
    }
`;