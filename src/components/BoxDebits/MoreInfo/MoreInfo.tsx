import React from "react";

interface Props {}

const MoreInfo: React.FC<Props> = (props) => {
    return (
        <div className="p-3">
            <div className="row ">
                <div className="col-md-6 text-left">
                    <b>Informações adicionais</b> <br />
                    <b>Banco:</b> Banco do Brasil <br />
                    <b>Motivo de devolução:</b> Descrição do motivo da devolução
                </div>
                <div className="col-md-2 text-left">
                    <b>Agencia:</b> 123-4
                </div>
                <div className="col-md-2 text-left">
                    <b>Conta:</b> 481559
                </div>
                <div className="col-md-2 text-left">
                    <b>Digito:</b> 9
                </div>
            </div>

            <div className="boxinfos">
                <div className="col-xs-12 boxinfos linha"></div>
            </div>

            <div className="row">
                <div className="col-md-6 text-left">
                    <b>Informações do credor</b> <br />
                    <b>CNPJ:</b> 78.441.581/0001-94 <br />
                    <b>Endereço:</b> Rua nome da rua nº 1234 Bairro Centro
                </div>
                <div className="col-md-3 text-left">
                    <b>Email:</b> email@email.com.br <br />
                    <b>Cidade:</b> Marília
                </div>
                <div className="col-md-3 text-left">
                    <b>Telefone:</b> (14) 99856-8956 <br />
                    <b>UF:</b> SP
                </div>
            </div>
        </div>
    );
};

export default MoreInfo;
