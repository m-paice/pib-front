import React from "react";

import { Container } from "./style";

interface Props {
    image: string;
}

const ImageContent: React.FC<Props> = ({ children, image }) => {
    return (
        <Container>
            <section>
                <img src={image} alt="image" />
            </section>

            <section>{children}</section>
        </Container>
    );
};

export default ImageContent;
