import styled from "styled-components";

import Header from "../components/Header";
import Card from "../components/Card";

export default function App() {
    return (
        <>
          <Header />
          <Body>
            <Card />
          </Body>
        </>
    );
}

const Body = styled.div`
  margin-top: 217px;
  padding-left: 247px;
  padding-right: 255px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;