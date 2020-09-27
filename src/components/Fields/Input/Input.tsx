import React from "react";

type Props = React.HTMLProps<HTMLInputElement>;

const InputComponent: React.FC<Props> = ({ ...rest }) => {
    return <input {...rest} />;
};

export default InputComponent;
