import styled from "styled-components";

export const Container = styled.ul`
    height: 100%;
    list-style-type: none;
    overflow: scroll;
    overflow-x: hidden;
    padding-top: 10px;

    :hover::-webkit-scrollbar-thumb {
        background-color: #BFBFBF;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background: #0F52BA;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 20px;
        border: 1px solid #0F52BA;
    }
`;

export const EmptyCart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    line-height: 30px;
`;

export const Product = styled.div`
    height: 95px;
    margin-right: 60px;
    margin-bottom: 28px;
    border-radius: 8px;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    background-color: #FFF;
    display: flex;
    align-items: center;
    margin-left: 47px;
    padding-left: 23px;
    padding-right: 30px;
    position: relative;

img{
    height: 61px;
    width: 50px;
    margin-right: 21px;
}
`;

export const Name = styled.div`
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

export const Quantity = styled.div`
    height: 60%;
    min-width: 50px;
    margin-right: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 5px;
`;

export const Buttons = styled.div`
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

    span{
        height: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
`;

export const Separator = styled.div`
    height: 60%;
    border: 0.2px solid #BFBFBF;
`;

export const Price = styled.p`
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
`;

export const RemoveButton = styled.div`
    width: 18px;
    height: 18px;
    background-color: #000;
    border-radius: 50%;
    color: #FFF;
    font-size: 12px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -6px;
    right: -6px;
    cursor: pointer;
`;