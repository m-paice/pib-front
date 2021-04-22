import React from "react";

import { Carousel } from "react-responsive-carousel";

import { Container } from "./styles";

interface Image {
    image: string;
    legend?: string;
}

interface Props {
    images: Image[];
}

const CarouselComponent: React.FC<Props> = ({ children, images }) => {
    return (
        <Container>
            <Carousel autoPlay infiniteLoop centerMode dynamicHeight>
                {images.map((item, index) => (
                    <div key={index}>
                        <img src={item.image} />
                        <p className="legend">{item.legend}</p>
                    </div>
                ))}
            </Carousel>
        </Container>
    );
};

export default CarouselComponent;
