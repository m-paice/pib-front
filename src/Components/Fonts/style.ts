import styled from "styled-components";

interface Props {
    center?: boolean;
}

export const Title = styled.h1<Props>`
    font-size: 35px;
    margin-bottom: 20px;
    max-width: 910px;

    text-align: ${(props) => (props.center ? "center" : "unset")};

    color: ${(props) => props.theme.colors.text};
`;
export const SubTitle = styled.h3<Props>`
    font-size: 25px;
    margin-bottom: 20px;
    max-width: 910px;

    text-align: ${(props) => (props.center ? "center" : "unset")};

    color: #fff;
`;
export const Text = styled.p<Props>`
    font-size: 17px;
    line-height: 2;
    max-width: 910px;

    text-align: ${(props) => (props.center ? "center" : "unset")};

    color: ${(props) => props.theme.colors.text};
`;
