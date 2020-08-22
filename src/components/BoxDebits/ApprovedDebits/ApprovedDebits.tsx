import React, { useState } from "react";

interface Props {
    status: "paidOut" | "late" | "next" | "done";
}

interface State {
    info: boolean;
}

interface handleCheckStatusReturn {
    title: string;
    class: string;
}

const ApprovedDebits: React.FC<Props> = (props) => {
    const [state, setState] = useState<State>({
        info: false,
    });

    const handleSetState = (key: string, value: string | boolean) => {
        setState((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    // check status of debits
    const handleCheckStatus = (): handleCheckStatusReturn => {
        const { status } = props;

        if (status === "paidOut")
            return {
                title: "Pago",
                class: "green",
            };

        if (status === "late")
            return {
                title: "Em atraso",
                class: "red",
            };

        if (status === "next")
            return {
                title: "Próximo",
                class: "blue",
            };

        return {
            class: "",
            title: "",
        };
    };

    const { info } = state;

    return (
        <div className="cada debito ativo">
            <div className="row rowCenter">
                <div className="col-md-1">
                    <a className="smais">
                        <span
                            className={`btn glyphicon ${info ? "glyphicon-minus" : "glyphicon-plus"} align-btn-b`}
                            onClick={() => handleSetState("info", !info)}
                        ></span>
                    </a>
                </div>
                <div className=" col-md-3 c colBorder">
                    <span className="labelDebito text-left p-left">Claro Móvel Brasil</span>
                </div>

                <div className="col-md-6 c nobri">
                    <span className="labelDebito text-center hidden-xs">Já negociada em 01/03/202020</span>
                </div>
                <div className="col-md-2 cb">
                    <a className={`btneg ${handleCheckStatus().class}`} href="">
                        {handleCheckStatus().title}
                    </a>
                </div>
            </div>

            {info && (
                <div className="col-xs-12 boxinfos">
                    <div className="col-xs-12 boxinfos ">
                        <div className="col-xs-12">
                            <b>Informações adicionais</b>
                        </div>
                        <div className="col-xs-12 col-sm-5">
                            <b>Banco:</b> Banco do Brasil
                        </div>
                        <div className="col-xs-12 col-sm-3">
                            <b>Agencia:</b> 123-4
                        </div>
                        <div className="col-xs-6 col-sm-2">
                            <b>Conta:</b> 481559
                        </div>
                        <div className="col-xs-6 col-sm-2">
                            <b>Digito:</b> 9
                        </div>
                        <div className="col-xs-12">
                            <b>Motivo de devolução:</b> Descrição do motivo da devolução
                        </div>
                        <div className="col-xs-12 linha"></div>
                        <div className="col-xs-12">
                            <b>Informações do credor</b>
                        </div>
                        <div className="col-xs-12 col-sm-5">
                            <b>CNPJ:</b> 123456123456
                        </div>
                        <div className="col-xs-12 col-sm-4">
                            <b>Email:</b> email@email.com.br
                        </div>
                        <div className="col-xs-12 col-sm-3">
                            <b>Telefone:</b> (14) 99856-8956
                        </div>
                        <div className="col-xs-12 col-sm-5">
                            <b>Endereço:</b> Rua nome da rua nº 1234 Bairro Centro
                        </div>
                        <div className="col-xs-6 col-sm-4">
                            <b>Cidade:</b> Marília
                        </div>
                        <div className="col-xs-6 col-sm-3">
                            <b>UF:</b> SP
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ApprovedDebits;
