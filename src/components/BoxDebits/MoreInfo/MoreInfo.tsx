import React from "react";

interface Props {}

const MoreInfo: React.FC<Props> = (props) => {
    return (
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
    );
};

export default MoreInfo;
