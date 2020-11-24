import React, { useState } from "react";

import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from "reactstrap";

const items = [
    {
        id: 1,
        title: "Saiba como funciona ter a conta em dia na sua vida.",
        subtitle: "Tenha um financeiro mais saudável",
    },
    {
        id: 2,
        title: "Saiba como funciona ter a conta em dia na sua vida.",
        subtitle: "Tenha um financeiro mais saudável",
    },
    {
        id: 3,
        title: "Saiba como funciona ter a conta em dia na sua vida.",
        subtitle: "Tenha um financeiro mais saudável",
    },
];

import "./carousel.css";

interface Props {}

const CarouselComponent: React.FC<Props> = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.id}>
                <h4>
                    <b>{item.title}</b>
                    <span>&nbsp;{item.subtitle}</span>
                </h4>
            </CarouselItem>
        );
    });

    return (
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
};

export default CarouselComponent;
