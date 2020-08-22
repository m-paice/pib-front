import React, { useState } from "react";

interface Props {}

interface State {
    info: boolean;
}

const DeniedDebts: React.FC<Props> = (props) => {
    const [state, setState] = useState<State>({
        info: false,
    });

    const handleSetState = (key: string, value: string | boolean) => {
        setState((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    const { info } = state;

    return (
        <div className="cada debito">
            <div className="row rowCenter">
                <div className="col-md-1">
                    <a href="javascript:void(0);" className="smais">
                        <span
                            className={`glyphicon ${info ? "glyphicon-minus" : "glyphicon-plus"} align-btn-b `}
                            onClick={() => handleSetState("info", !info)}
                        ></span>
                    </a>
                </div>
                <div className=" col-md-2">
                    <span className="labelDebito text-left">Claro Móvel Brasil</span>
                </div>
                <div className="col-md-7 d-flex justify-content-between">
                    <div>
                        <div className="lab">
                            <div className="help" data-toggle="tooltip" data-placement="top" title="Texto ajuda">
                                Tipo
                                <span className="glyphicon glyphicon-question-sign ml-1"></span>
                            </div>
                        </div>
                        <div className="txt-12 m-0 font-weight-bold">Telefonia Fixa</div>
                    </div>
                    <div className="div c"></div>
                    <div>
                        <div className="lab">
                            <div className="help" data-toggle="tooltip" data-placement="top" title="Texto ajuda">
                                Vencimento
                                <span className="glyphicon glyphicon-question-sign ml-1"></span>
                            </div>
                        </div>
                        <div className="txt-12 m-0 font-weight-bold">01/01/2020</div>
                    </div>
                    <div className="div c"></div>
                    <div>
                        <div className="lab">
                            <div
                                className="help"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Este é um texto de ajuda com número de caracteres elevado."
                            >
                                Valor da dívida
                                <span className="glyphicon glyphicon-question-sign ml-1"></span>
                            </div>
                        </div>
                        <div className="txt-12 m-0 font-weight-bold">R$ 1.800,00</div>
                    </div>
                    <div className="div c"></div>
                    <div>
                        <div className="lab">
                            <div className="help" data-toggle="tooltip" data-placement="top" title="Texto ajuda">
                                Registro
                                <span className="glyphicon glyphicon-question-sign ml-1"></span>
                            </div>
                        </div>
                        <div className="txt-12 m-0 font-weight-bold">01/01/2020</div>
                    </div>
                </div>
                <div className=" col-md-2 cb ">
                    <a className="btneg" href="">
                        Quero Negociar
                    </a>
                </div>
            </div>

            {info && (
                <div>
                    <div className="col-xs-12 boxinfos">
                        <div className="col-xs-12 boxinfos">
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
                                <b>CNPJ:</b> 78.441.581/0001-94
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
                </div>
            )}
        </div>
    );
};

export default DeniedDebts;
