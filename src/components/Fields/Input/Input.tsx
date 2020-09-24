import React from "react";

type Props = React.HTMLProps<HTMLInputElement>;

const Input: React.FC<Props> = ({ ...rest }) => {
    return <input {...rest} />;
};

export default Input;
