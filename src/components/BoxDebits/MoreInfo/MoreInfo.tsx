import React from "react";

import { Shookeeper } from "../../../store/modules/pf/debt/types";

type Props = Shookeeper;

const MoreInfo: React.FC<Props> = (props) => {
    const {
        cnpj,
        dadosBancarios,
        usuario: { email, celular, endereco },
    } = props;

    return (
        <div className="p-3">
            <div className="row ">
                <div className="col-md-6 text-left">
                    <b>Informações adicionais</b> <br />
                    <b>Banco:</b> {dadosBancarios.nomeInstituicao} <br />
                    <b>Motivo de devolução:</b> Descrição do motivo da devolução
                </div>
                <div className="col-md-2 text-left">
                    <b>Agencia:</b> {dadosBancarios.agencia}
                </div>
                <div className="col-md-2 text-left">
                    <b>Conta:</b> {dadosBancarios.conta.split("-")[0]}
                </div>
                <div className="col-md-2 text-left">
                    <b>Digito:</b> {dadosBancarios.conta.split("-")[1]}
                </div>
            </div>

            <div className="boxinfos">
                <div className="col-xs-12 boxinfos linha"></div>
            </div>

            <div className="row">
                <div className="col-md-6 text-left">
                    <b>Informações do credor</b> <br />
                    <b>CNPJ:</b> {cnpj} <br />
                    <b>Endereço:</b> {endereco.rua} nº {endereco.numero} Bairro {endereco.bairro}
                </div>
                <div className="col-md-3 text-left">
                    <b>Email:</b> {email} <br />
                    <b>Cidade:</b> {endereco.cidade} <b>CEP</b>: {endereco.cep}
                </div>
                <div className="col-md-3 text-left">
                    <b>Telefone:</b> {celular} <br />
                    <b>UF:</b> {endereco.uf}
                </div>
            </div>
        </div>
    );
};

export default MoreInfo;
