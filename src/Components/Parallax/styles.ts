import styled from "styled-components";

interface Props {
    src: string;
}

export const Container = styled.div<Props>`
    background: ${(props) => `url(${props.src}) no-repeat center`};
    background-size: cover;
    background-attachment: fixed;
    height: 400px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 20px;
`;
