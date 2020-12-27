import React from "react";

import { Company } from "../../../store/modules/pj/company/types";

type Props = Company;

const address = {
    street: "",
    number: "",
    neighborhood: "",
    zipcode: "",
    city: "",
    uf: "",
};
const bank = {
    name: "",
    agency: "",
    account: "",
    digit: "",
};
const phoneNumbers = {
    ddd: "",
    number: "",
};
const email = "";

const MoreInfo: React.FC<Props> = (props) => {
    console.log("props: ", props);
    const { cnpj } = props;

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
                    <b>Endereço:</b> {address.street} nº {address.number} Bairro {address.neighborhood}
                </div>
                <div className="col-md-3 text-left">
                    <b>Email:</b> {email} <br />
                    <b>Cidade:</b> {address.city} - <b>CEP</b>: {address.zipcode}
                </div>
                <div className="col-md-3 text-left">
                    <b>Telefone:</b> ({phoneNumbers.ddd}) {phoneNumbers.number} <br />
                    <b>UF:</b> {address.uf}
                </div>
            </div>
        </div>
    );
};

export default MoreInfo;
