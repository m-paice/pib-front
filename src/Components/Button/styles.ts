import styled from "styled-components";

export const Button = styled.button`
    width: 100%;
    max-width: 500px;

    padding: 15px;

    font-size: 24px;
    color: ${(props) => props.theme.colors.backgroud};
    background-color: ${(props) => props.theme.colors.text};
    border: 2px solid;
    cursor: pointer;
    border-radius: 5px;
`;
