import styled from "styled-components";

export const WrapperHeader = styled.header`
    height: calc(100vh - 200px);

    display: flex;
    align-items: center;

    position: relative;

    div.fullscreen {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: calc(100vh - 200px);
        overflow: hidden;
    }

    div.fullscreen video {
        min-width: 100%;
        min-height: 100%;
    }

    div.overlay {
        width: 100%;
        height: calc(100vh - 200px);
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(121, 9, 17, 1) 45%, rgba(0, 212, 255, 1) 100%);
        z-index: 1;
        opacity: 0.25;
    }

    div.content {
        width: 100%;

        padding: 0 20px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        z-index: 3;

        position: absolute;
        bottom: 50px;
    }

    div.content .wrapper-button {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
    }

    div.content .wrapper-button button {
        width: 250px;
        height: 46px;

        font-size: 15px;
        padding: 5px;

        text-transform: uppercase;

        background: transparent;
        border: 2px solid #fff;
        color: #fff;
    }

    @media (max-width: 700px) {
        div.content {
            bottom: 0px;
        }

        div.content .wrapper-button {
            width: 100%;

            display: flex;
            flex-direction: column;
        }

        div.content .wrapper-button button {
            width: 100%;
        }
    }
`;
