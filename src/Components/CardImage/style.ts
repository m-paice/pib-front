import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    max-width: 300px;
    height: 245px;

    background: #fff;
    margin: 30px 10px;
    padding: 20px 15px;

    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    transition: 0.3s ease-in-out;

    border-radius: 4px;

    :hover {
        height: 420px;
    }

    div.imgBx {
        position: relative;
        width: 260px;
        height: 260px;

        top: -60px;
        left: 5px;
        z-index: 1;

        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    }

    div.imgBx img {
        max-width: 100%;
        border-radius: 4px;
    }

    div.content {
        position: relative;
        margin-top: -140px;
        padding: 10px 15px;
        text-align: center;
        color: #0b0b0b;
        visibility: hidden;
        opacity: 0;
        transition: 0.3s ease-in-out;
    }

    :hover .content {
        visibility: visible;
        opacity: 1;
        margin-top: -40px;
        transition-delay: 0.3s;
    }
`;