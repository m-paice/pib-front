import React from "react";

import { Button } from "./styles";

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

const ButtonComponent: React.FC<Props> = ({ children, ...rest }) => {
    return <Button> {children} </Button>;
};

export default Button;
