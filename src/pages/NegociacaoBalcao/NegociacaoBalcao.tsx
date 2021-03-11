import React, { useState, useEffect } from "react";

import { mask, unMask } from "remask";

import TableDebits from "../../components/Table/TableDebits";

import { Debt } from "../../store/modules/pf/debt/types";

import { Container } from "./NegociacaoBalcaoContainer";

interface Props {
    payload: {
        data: {
            erro: string;
            nome: string;
            debits: Debt[];
        };
        actions: {
            handleSearchConsumer(data: { cpf: string }): void;
            negociar(data): void;
        };
    };
}

const NegociacaoBalcao: React.FC<Props> = ({ payload }) => {
    const { data, actions } = payload;

    const { debits, erro, nome } = data;
    const { handleSearchConsumer, negociar } = actions;

    const [tbodyDebits, setTbodyDebits] = useState<Debt[]>(debits);

    const [documentText, setDocumentText] = useState("");

    useEffect(() => {
        setTbodyDebits(payload.data.debits);
    }, [payload.data]);

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        handleSearchConsumer({ cpf: documentText });
    };

    return (
        <div className="page">
            <div className="container">
                <div className="meu-cadastro d-flex align-items-center">
                    <div className="col-md-6 p-0">
                        <h2 className="h2pad titulo-mob">Pesquise por CPF</h2>
                    </div>
                    <form onSubmit={submit} className="col-md-6 d-flex align-items-center p-0">
                        <input
                            className="form-control"
                            placeholder="Digite um CPF"
                            onChange={(event) => {
                                setDocumentText(mask(unMask(event.target.value), ["999.999.999-99"]));
                            }}
                            value={documentText}
                        />

                        <button className="ml-3 btpadrao" type="submit">
                            Buscar
                        </button>
                    </form>
                </div>

                <div className="d-flex justify-content-end mr-4 text-danger">{erro && erro}</div>

                {!!debits.length && (
                    <section className="mt-4">
                        <h2 className="h2pad titulo-mob mb-3">{nome}</h2>
                        <TableDebits
                            tbody={tbodyDebits}
                            generateBillet={() => {}}
                            renegotiateDebit={() => {}}
                            negociar={negociar}
                        />
                    </section>
                )}
            </div>
        </div>
    );
};

export default Container(NegociacaoBalcao);
