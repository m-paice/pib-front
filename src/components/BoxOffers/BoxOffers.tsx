import React from "react";

interface Props {
    title?: string;
    text?: string;
    srcImage?: string;
}

const BoxOffers: React.FC<Props> = ({ title, text, srcImage }) => {
    return (
        <div className="oferta">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="titleOferta">{title}</h3>
                        <p>{text}</p>
                    </div>
                    <div className="col-md-6">
                        <img src={srcImage} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoxOffers;
