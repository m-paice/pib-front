import React from "react";

import SweetAlert from "react-bootstrap-sweetalert";

interface Props {
    show: boolean;
    handleConfirm(): void;
    title: string;
    message: string;
    type?:
        | "input"
        | "secondary"
        | "info"
        | "success"
        | "warning"
        | "danger"
        | "error"
        | "custom"
        | "controlled"
        | "default"
        | undefined;
}

const Alert: React.FC<Props> = (props) => {
    const { show, handleConfirm, title, message, type = "success" } = props;

    return (
        <SweetAlert show={show} type={type} title={title} onConfirm={handleConfirm}>
            <div style={{ color: "#000" }}>{message}</div>
        </SweetAlert>
    );
};

export default Alert;
