import styled from "styled-components";

interface CartContainerProps {
    display: boolean;
}

export const Container = styled.div<CartContainerProps>`
    display: ${props => props.display ? "" : "none"};
    height: 100vh;
    width: 486px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #0F52BA;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
    padding-top: 36px;
    position: fixed;
    top: 0;
    right: 0;
    animation: fadeIn 1.5s;
    -webkit-animation: fadeIn 1.5s;
    -moz-animation: fadeIn 1.5s;
    -o-animation: fadeIn 1.5s;
    -ms-animation: fadeIn 1.5s;

    @keyframes fadeIn {
        0% { transform: translateX(100%); }
    }

    @-webkit-keyframes fadeIn {
        0% { transform: translateX(100%); }
    }

    @-moz-keyframes fadeIn {
        0% { transform: translateX(100%); }
    }

    @-o-keyframes fadeIn {
        0% { transform: translateX(100%); }
    }

    @-ms-keyframes fadeIn {
        0% { transform: translateX(100%); }
    }
`;