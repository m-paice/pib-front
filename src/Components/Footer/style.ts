import styled from "styled-components";

export const Container = styled.footer`
    position: relative;
    width: 100%;
    height: auto;
    padding: 50px 100px;
    background: #111;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.primary};

    @media (max-width: 700px) {
        padding: 20px;

        div.container .sec {
            margin: 20px 0;
        }
    }

    div.container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        flex-direction: row;
    }

    div.container .sec.aboutus {
        width: 50%;
    }

    div.container .sec h2 {
        position: relative;

        font-weight: 500;
        margin-bottom: 15px;
    }

    div.container .sec h2:before {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 50px;
        height: 2px;
        background: ${(props) => props.theme.colors.backgroud};
    }

    div.container .sec.aboutus p {
    }

    div.container .sec.aboutus ul {
        display: flex;
        margin-top: 20px;
    }

    div.container .sec ul li {
        list-style: none;
    }

    div.container .sec.aboutus ul li a {
        width: 40px;
        height: 40px;
        background: #222;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        text-decoration: none;
        border-radius: 4px;
    }

    div.container .sec.aboutus ul li a:hover {
        background: ${(props) => props.theme.colors.primary};
        border: ${(props) => `1px solid ${props.theme.colors.backgroud}`};
    }

    div.container .sec.aboutus ul li a .fa {
        color: #fff;
        font-size: 20px;
    }

    div.container .sec.contact ul li {
        display: flex;
        margin: 15px 0;
    }

    div.container .sec.contact ul li span {
        margin-right: 15px;
    }

    div.container .sec.contact ul li span .fa {
        color: ${(props) => props.theme.colors.backgroud};
    }

    div.container .sec.contact ul li p {
    }

    div.container .sec.contact ul li p a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.text};
    }
`;

export const CopyrightText = styled.div`
    p {
        width: 100%;
        background: #181818;
        padding: 8px 100px;
        text-align: center;
    }
`;
