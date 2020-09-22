import React from "react";

interface Props {
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    value?: string;
    type?: string;
    checked?: boolean;
}

const Input: React.FC<Props> = ({ ...rest }) => {
    return <input {...rest} />;
};

export default Input;