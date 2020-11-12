import React from "react";

import { Company } from "../../../store/modules/pj/company/types";

type Props = Company;

const MoreInfo: React.FC<Props> = (props) => {
    const { address, email, phoneNumbers, cnpj, bank } = props;
    const [addressMain] = address;
    const [phoneNumbersMain] = phoneNumbers;

    return (
        <div className="p-3">
            <div className="row ">
                <div className="col-md-6 text-left">
                    <b>Informações adicionais</b> <br />
                    <b>Banco:</b> {bank.name} <br />
                    <b>Motivo de devolução:</b> Descrição do motivo da devolução
                </div>
                <div className="col-md-2 text-left">
                    <b>Agencia:</b> {bank.agency}
                </div>
                <div className="col-md-2 text-left">
                    <b>Conta:</b> {bank.account}
                </div>
                <div className="col-md-2 text-left">
                    <b>Digito:</b> {bank.digit}
                </div>
            </div>

            <div className="boxinfos">
                <div className="col-xs-12 boxinfos linha"></div>
            </div>

            <div className="row">
                <div className="col-md-6 text-left">
                    <b>Informações do credor</b> <br />
                    <b>CNPJ:</b> {cnpj} <br />
                    <b>Endereço:</b> {addressMain.street} nº {addressMain.number} Bairro {addressMain.neighborhood}
                </div>
                <div className="col-md-3 text-left">
                    <b>Email:</b> {email} <br />
                    <b>Cidade:</b> {addressMain.city} - <b>CEP</b>: {addressMain.zipcode}
                </div>
                <div className="col-md-3 text-left">
                    <b>Telefone:</b> ({phoneNumbersMain.ddd}) {phoneNumbersMain.number} <br />
                    <b>UF:</b> {addressMain.uf}
                </div>
            </div>
        </div>
    );
};

export default MoreInfo;
