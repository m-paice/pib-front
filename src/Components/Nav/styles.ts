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

export const NavWeb = styled.nav`
    @media (max-width: 800px) {
        display: none;
    }

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

    > div.marker {
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

export const NavMobile = styled.nav`
    @media (max-width: 800px) {
        display: flex;
    }

    width: 100%;

    display: none;
    align-items: center;
    justify-content: center;

    > button {
        padding: 15px;

        background: transparent;
        border: none;

        > svg {
            font-size: 48px;
            color: #fff;
        }
    }

    > div.content {
        position: fixed;

        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        background: #fff;
        padding: 20px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        > button {
            padding: 15px;

            background: transparent;
            border: none;

            > svg {
                font-size: 24px;
                color: #000;
            }
        }

        > section {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: column;

            height: 100%;

            > a {
                line-height: 3.3;

                position: relative;
                margin: 0 20px;
                font-size: 2em;
                color: ${(props) => props.theme.colors.primary};
                text-decoration: none;
            }
        }
    }
`;
