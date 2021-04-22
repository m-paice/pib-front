import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    padding: 20px;

    > section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 700px) {
        display: flex;
        flex-direction: column-reverse;
    }
`;
