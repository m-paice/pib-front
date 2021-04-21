import styled from "styled-components";

export const WrapperNav = styled.nav`
    position: absolute;
    top: 0;

    width: 100%;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 9;

    > ul {
        width: 100%;
        max-width: 500px;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    > ul > li {
        list-style: none;
        font-size: 16px;
        padding: 10px 25px;
        color: #fff;
        font-weight: 500;
        cursor: pointer;
    }
`;
