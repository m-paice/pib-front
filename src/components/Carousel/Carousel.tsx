import React from "react";

interface Props {}

const Carousel: React.FC<Props> = (props) => {
    return (
        <div
            id="carouselExampleControls"
            className="container carousel slide"
            data-ride="carousel"
            style={{ maxWidth: 830 }}
        >
            <div className="carousel-inner">
                <div className="carousel-item active" data-interval="5000">
                    <h4>
                        <b>Saiba como funciona ter a conta em dia na sua vida. </b>
                        Tenha um financeiro mais saudável
                    </h4>
                </div>
                <div className="carousel-item" data-interval="5000">
                    <h4>
                        <b>Saiba como funciona ter a conta em dia na sua vida. </b>
                        Tenha um financeiro mais saudável
                    </h4>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};

export default Carousel;
