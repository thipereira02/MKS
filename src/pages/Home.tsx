import styled from "styled-components";

import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";
import Footer from "../components/Footer";

export default function App() {
    return (
        <>
          <Header />
          <Body>
            <ProductCard />
          </Body>
          <Cart />
          <Footer />
        </>
    );
}

const Body = styled.div`
  margin-top: 217px;
  padding-left: 15%;
  padding-right: 10%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;