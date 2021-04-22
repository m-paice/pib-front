import React from "react";

import { Container } from "./style";

interface Props {
    id?: string;
    image: string;
}

const ImageContent: React.FC<Props> = ({ children, image, id }) => {
    return (
        <Container id={id}>
            <section>
                <img src={image} alt="image" />
            </section>

            <section>{children}</section>
        </Container>
    );
};

export default ImageContent;
