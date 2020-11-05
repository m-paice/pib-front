import React from "react";

import SweetAlert from "react-bootstrap-sweetalert";

interface Props {
    title: string;
    handleConfirm(): void;
    handleCancel(): void;
}

const SweetAlertComponent: React.FC<Props> = ({ title, handleConfirm, handleCancel }) => {
    return (
        <div>
            <SweetAlert
                title={<div className="txt-sweet-alert">{title}</div>}
                style={{
                    background: "#14647b",
                    color: "#fff !important",
                    width: 500,
                }}
                showCancel
                confirmBtnCssClass="btn-sweet-alert"
                cancelBtnCssClass="btn-sweet-alert"
                confirmBtnText="Confirmar"
                cancelBtnText="Cancelar"
                onConfirm={handleConfirm}
                onCancel={handleCancel}
            />
        </div>
    );
};

export default SweetAlertComponent;
