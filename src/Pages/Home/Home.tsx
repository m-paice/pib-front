import React from "react";

import video from "../../assets/video/ato-profetico-pib-pirajui.mp4";
import logo from "../../assets/images/logo.png";
import img01 from "../../assets/images/img01.png";

import { WrapperHeader, WrapperContent, WrapperCard } from "./styles";

import { Title, SubTitle, Text } from "../../Components/Fonts/style";

import Parallax from "../../Components/Parallax";
import ImageContext from "../../Components/ImageContent";
import Carousel from "../../Components/Carousel";
import CardImage from "../../Components/CardImage";
import Footer from "../../Components/Footer";
import Nav from "../../Components/Nav";

interface Props {}

const Home: React.FC<Props> = ({ children }) => {
    return (
        <>
            <WrapperHeader>
                <Nav />
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
            <WrapperContent>
                <ImageContext image={logo}>
                    <Title> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, est ea. </Title>

                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, fuga. Nobis earum inventore
                        maxime vel nemo mollitia, magni odit iusto illum explicabo repellendus sit quis, accusantium
                        voluptate? Error, reprehenderit possimus!
                    </Text>
                </ImageContext>
                <Parallax src={img01}>
                    <SubTitle center>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quasi labore deserunt
                        voluptatem explicabo.
                    </SubTitle>
                </Parallax>
                <ImageContext id="conhecer" image={logo}>
                    <Title> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, est ea. </Title>

                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, fuga. Nobis earum inventore
                        maxime vel nemo mollitia, magni odit iusto illum explicabo repellendus sit quis, accusantium
                        voluptate? Error, reprehenderit possimus!
                    </Text>
                </ImageContext>

                <WrapperCard>
                    <CardImage
                        title=" Lorem ipsum dolor sit amet"
                        body=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, fuga. Nobis earum inventore
                        maxime vel nemo mollitia."
                    />

                    <CardImage
                        title=" Lorem ipsum dolor sit amet"
                        body=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, fuga. Nobis earum inventore
                        maxime vel nemo mollitia."
                    />

                    <CardImage
                        title=" Lorem ipsum dolor sit amet"
                        body=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, fuga. Nobis earum inventore
                        maxime vel nemo mollitia."
                    />
                </WrapperCard>

                <ImageContext image={logo}>
                    <Title> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, est ea. </Title>

                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, fuga. Nobis earum inventore
                        maxime vel nemo mollitia, magni odit iusto illum explicabo repellendus sit quis, accusantium
                        voluptate? Error, reprehenderit possimus!
                    </Text>
                </ImageContext>

                <Carousel
                    images={[
                        {
                            image:
                                "https://i.picsum.photos/id/590/575/250.jpg?hmac=OkrnLsj3RFErBAInegacGFBREAzJgfeH4n0NHuCnmEw",
                            legend: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                        },
                        {
                            image:
                                "https://i.picsum.photos/id/261/575/250.jpg?hmac=Va4y0ADlKDna_QKDQUcvOretFTHIwHxBUReYC8vj06E",
                            legend: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                        },
                        {
                            image:
                                "https://i.picsum.photos/id/139/575/250.jpg?hmac=w44W9-OHI1GINJcBIv_5rl6GmBg86Vpqd-qI6sHfJn0",
                            legend: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                        },
                        {
                            image:
                                "https://i.picsum.photos/id/642/575/250.jpg?hmac=4RRiUH8RE5_KrnsYJGOoKfJ8AZYqObV7RI5sTamdYsY",
                            legend: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                        },
                        {
                            image:
                                "https://i.picsum.photos/id/731/575/250.jpg?hmac=9k3V3KpQzK9EjKXqvGziU90XkHYz7HNQ8uwytlAWrz0",
                            legend: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                        },
                    ]}
                ></Carousel>

                <Parallax src={img01}>
                    <SubTitle center>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quasi labore deserunt
                        voluptatem explicabo.
                    </SubTitle>
                </Parallax>

                <ImageContext image={logo}>
                    <Title> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, est ea. </Title>

                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, fuga. Nobis earum inventore
                        maxime vel nemo mollitia, magni odit iusto illum explicabo repellendus sit quis, accusantium
                        voluptate? Error, reprehenderit possimus!
                    </Text>
                </ImageContext>

                <Footer />
            </WrapperContent>
        </>
    );
};

export default Home;
