import React from "react";

import video from "../../assets/video/ato-profetico-pib-pirajui.mp4";
import logo from "../../assets/images/logo.png";

import { WrapperHeader } from "./styles";

interface Props {}

const Home: React.FC<Props> = ({ children }) => {
    return (
        <WrapperHeader>
            <div className="fullscreen">
                <video playsInline autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                </video>
            </div>

            <div className="overlay"></div>

            <div className="content">
                <img src={logo} alt="logo" />

                <div className="wrapper-button">
                    <button> horários dos cultos </button>
                    <button> cultos ao vivo </button>
                </div>
            </div>
        </WrapperHeader>
    );
};

export default Home;
