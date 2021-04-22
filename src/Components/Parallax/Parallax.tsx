import React from "react";

import { Container } from "./styles";

interface Props {
    src: string;
}

const Parallax: React.FC<Props> = ({ children, src }) => {
    return <Container src={src}> {children} </Container>;
};

export default Parallax;
