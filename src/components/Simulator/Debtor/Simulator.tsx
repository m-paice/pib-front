import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { Modal, ModalBody } from "reactstrap";

import { ApplicationState } from "../../../store";

// types
import { Debtor } from "../../../store/modules/pj/debtor/types";

// selector
import { negociationByMonth } from "../../../store/modules/pj/negociation/selectors";

interface Props extends Debtor {
    isOpen: boolean;
    onClose(): void;
    monthForRule: number;
    idadeDividaFormatado: string;
}

const stylesPrimary: React.CSSProperties = {
    backgroundColor: "#14657b",
    color: "#fff",
};

const stylesSecondary: React.CSSProperties = {
    backgroundColor: "#fff",
    color: "#14657b",
};

const Simulator: React.FC<Props> = ({ isOpen, onClose, monthForRule, idadeDividaFormatado, valor }) => {
    const [options, setOptions] = useState<number[]>([]);
    const [portion, setPortion] = useState(0);
    const [portionValue, setPortionValue] = useState(0);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    const negociation = useSelector((state: ApplicationState) => negociationByMonth(state, monthForRule));

    useEffect(() => {
        if (negociation) {
            setOptions(Array.from({ length: negociation.maximoParcela }).map((_, index) => index + 1));

            setTotalPrice(valor - valor * (negociation.desconto / 100));
        }
    }, [negociation]);

    useEffect(() => {
        if (negociation && portion) {
            setPortionValue(totalPrice / portion);
        }
    }, [portion]);

    const handleFormatPrice = (value: number) => value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });

    if (!negociation)
        return (
            <tr className="itemListaRegras">
                <td></td>
                <td className="txt-lista-regras text-center" colSpan={7}>
                    Não foi encontrado negociação para essa data.
                </td>
                <td></td>
            </tr>
        );

    return (
        <Modal isOpen={isOpen} toggle={onClose} size="lg">
            <ModalBody style={{ backgroundColor: "#14657b" }}>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h4 className="modal-title" id="myLargeModalLabel" style={{ color: "#fff" }}>
                                Simulador
                            </h4>
                            <h6 style={{ color: "#fff" }}>Simule aqui o valor a receber do consumidor</h6>
                            <hr className="traco" />

                            <a className="close text-right regua-close btn-close-modal pointer" onClick={onClose}>
                                Fechar
                            </a>
                        </div>

                        <div className="col-sm-4 comp-modal">
                            <label className="lblModal">Valor da Dívida</label>
                            <input
                                type="text"
                                className="form-control inputModal money"
                                title="Valor total da dívida"
                                style={stylesPrimary}
                                value={handleFormatPrice(valor)}
                                disabled
                            />
                        </div>
                        <div className="col-sm-4 comp-modal">
                            <label className="lblModal">Idade da Dívida</label>
                            <input
                                type="text"
                                className="form-control inputModal"
                                title="Tempo de vida da dívida"
                                style={stylesPrimary}
                                value={idadeDividaFormatado}
                                disabled
                            />
                        </div>
                        <div className="col-sm-4 comp-modal">
                            <label className="lblModal">Número de parcelas</label>
                            <select
                                style={{ paddingLeft: "12px !important", color: "#fff" }}
                                className="form-control inputModal selectModal"
                                onChange={(event) => setPortion(Number(event.target.value))}
                            >
                                <option value={0}> selecione </option>
                                {options.map((value) => (
                                    <option key={value} value={value}>
                                        {value}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col-sm-4 comp-modal">
                            <label className="lblModal">Desconto concedido</label>
                            <input
                                type="text"
                                className="form-control inputModal"
                                title="Desconto concedido"
                                style={stylesPrimary}
                                value={`${negociation.desconto}%`}
                                disabled
                            />
                        </div>
                        <div className="col-sm-4 comp-modal">
                            <label className="lblModal">Valor de cada parcela</label>
                            <input
                                type="text"
                                className="form-control inputModal money"
                                title="Valor de cada parcela"
                                style={stylesSecondary}
                                value={handleFormatPrice(portionValue)}
                                disabled
                            />
                        </div>

                        <div className="col-sm-4 comp-modal">
                            <label className="lblModal">Valor a ser pago</label>
                            <input
                                type="text"
                                className="form-control inputModal money"
                                title="Valor a ser pago"
                                style={stylesSecondary}
                                value={handleFormatPrice(totalPrice)}
                                disabled
                            />
                        </div>
                    </div>
                </div>
            </ModalBody>
        </Modal>
    );
};

export default Simulator;
