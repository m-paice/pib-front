import React from "react";

import { Container } from "./style";

interface Props {
    title: string;
    body: string;
}

const CardImage: React.FC<Props> = ({ title, body }) => {
    return (
        <Container>
            <div className="imgBx">
                <img
                    src="https://i.picsum.photos/id/36/260/260.jpg?hmac=W4Y493qBIbRar05Qea-7zvpb9X7EmQJwvbMmaxcRdng"
                    alt="image"
                />
            </div>
            <div className="content">
                <h2> {title} </h2>
                <p>{body}</p>
            </div>
        </Container>
    );
};

export default CardImage;
