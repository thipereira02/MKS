import styled from "styled-components";

interface ContainerProps {
    display: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: ${props => props.display ? "" : "none"};
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