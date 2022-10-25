    import styled from "styled-components";

export default function Cart() {
    return(
        <Container>
            <Title>
                <h1>Carrinho<br /> de compras</h1>
                <div>X</div>
            </Title>
            <Product>
                <img src="https://i.imgur.com/7YQ3X2M.png" alt="Produto" />
                <Name>
                    <p>Nome do produto</p>
                </Name>
                <Quantity>
                    Qtd:
                    <Buttons>
                        <p>-</p>
                        <Separator />
                        <p>1</p>
                        <Separator />
                        <p>+</p>
                    </Buttons>
                </Quantity>
                <p>R$5000</p>
            </Product>
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

const Product = styled.div`
    height: 95px;
    margin-right: 60px;
    margin-bottom: 28px;
    border-radius: 8px;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    background-color: #FFF;
    display: flex;
    align-items: center;
    padding-left: 23px;
    padding-right: 30px;

    img{
       height: 61px;
       width: 50px;
       margin-right: 21px;
    }
`;

const Name = styled.div`
    height: 60%;
    width: 113px;
    overflow: hidden;
    display: flex;
    align-items: center;
    margin-right: 9px;


    p{
        font-size: 13px;
        font-weight: 400;
        line-height: 17px;
    }
`;

const Quantity = styled.div`
    height: 60%;
    min-width: 50px;
    margin-right: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 5px;
`;

const Buttons = styled.div`
    margin-top: 5px;
    height: 19px;
    width: 100%;
    border: 0.3px solid #BFBFBF;
    border-radius: 4px;
    display: flex;
    padding: 0 3px;
    justify-content: space-around;
    align-items: center;
    font-size: 8px;
`;

const Separator = styled.div`
    height: 60%;
    border: 0.2px solid #BFBFBF;
`;