import styled from "styled-components";

import Header from "../components/Header";

export default function App() {
    return (
        <>
          <Header />
          <Body>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
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

const Card = styled.div`
  height: 285px;
  width: 217.56px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  margin-bottom: 31px;
`;