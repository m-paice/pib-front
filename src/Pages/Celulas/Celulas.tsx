import React from "react";

import { WrapperHeader, WrapperContent, WrapperCard } from "./styles";
import { Title, SubTitle, Text } from "../../Components/Fonts/style";

import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import CardImage from "../../Components/CardImage";

interface Props {}

const Celulas: React.FC<Props> = ({ children }) => {
    return (
        <>
            <WrapperContent>
                <WrapperCard>
                    <Title> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, est ea. </Title>
                    {Array.from({ length: 9 }).map((_, index) => (
                        <CardImage
                            key={index}
                            title=" Lorem ipsum dolor sit amet"
                            body=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, fuga. Nobis earum inventore
                        maxime vel nemo mollitia."
                        />
                    ))}

                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, fuga. Nobis earum inventore
                        maxime vel nemo mollitia, magni odit iusto illum explicabo repellendus sit quis, accusantium
                        voluptate? Error, reprehenderit possimus!
                    </Text>
                    <Title> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, est ea. </Title>

                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, fuga. Nobis earum inventore
                        maxime vel nemo mollitia, magni odit iusto illum explicabo repellendus sit quis, accusantium
                        voluptate? Error, reprehenderit possimus!
                    </Text>
                </WrapperCard>
            </WrapperContent>
        </>
    );
};

export default Celulas;
