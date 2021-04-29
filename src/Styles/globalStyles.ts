import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    scroll-behavior: smooth;

    font-family: 'Montserrat';
  }

  body {
    background: ${(props) => props.theme.colors.backgroud};
    font-size: 14px;
    color: ${(props) => props.theme.colors.text};
    font-family: 'Montserrat';
    transition: all 0.50s linear;

    
  }
`;
