import React from "react";

import SweetAlert from "react-bootstrap-sweetalert";

interface Props {
    isValidValue: boolean;
    handleConfirm(): void;
    handleCancel(): void;
    messageConfirm?: string;
    messageError?: string;
}

const AlertWithdraw: React.FC<Props> = ({ isValidValue, handleConfirm, handleCancel }) => {
    return (
        <div>
            {isValidValue ? (
                <SweetAlert
                    title={
                        <div className="txt-sweet-alert">
                            Tem certeza que deseja <br /> sacar este valor agora?
                        </div>
                    }
                    style={{
                        background: "#14647b",
                        color: "#fff !important",
                        width: 500,
                    }}
                    showCancel
                    confirmBtnCssClass="btn-sweet-alert"
                    cancelBtnCssClass="btn-sweet-alert"
                    confirmBtnText="Quero sacar"
                    cancelBtnText="Cancelar"
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
            ) : (
                <SweetAlert
                    title={
                        <div className="txt-sweet-alert">
                            Opa! Você não possui valor mínimo <br /> para saque que é de R$25,00
                        </div>
                    }
                    style={{
                        background: "#14647b",
                        color: "#fff !important",
                        width: 500,
                    }}
                    confirmBtnCssClass="btn-sweet-alert"
                    confirmBtnText="Voltar"
                    onConfirm={handleCancel}
                />
            )}
        </div>
    );
};

export default AlertWithdraw;
