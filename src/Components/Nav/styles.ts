import styled from "styled-components";

export const WrapperNav = styled.div`
    position: absolute;
    top: 0;

    width: 100%;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 9;
`;

export const Nav = styled.nav`
    display: flex;
    position: relative;

    z-index: 9;

    > a {
        position: relative;
        margin: 0 20px;
        font-size: 2em;
        color: #fff;
        text-decoration: none;
    }

    > div#marker {
        position: absolute;
        height: 4px;
        width: 0;
        left: 0;
        bottom: -8px;
        background: ${(props) => props.theme.colors.primary};
        transition: 0.5s;
        border-radius: 4px;

        z-index: 9;
    }
`;
