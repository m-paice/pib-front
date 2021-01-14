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
}

const stylesPrimary: React.CSSProperties = {
    backgroundColor: "#14657b",
    color: "#fff",
};

const stylesSecondary: React.CSSProperties = {
    backgroundColor: "#fff",
    color: "#14657b",
};

const Simulator: React.FC<Props> = ({ isOpen, onClose, monthForRule, valor }) => {
    const [options, setOptions] = useState<number[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    const negociation = useSelector((state: ApplicationState) => negociationByMonth(state, monthForRule));

    useEffect(() => {
        if (negociation) setOptions(Array.from({ length: negociation.maximoParcela }).map((_, index) => index + 1));
    }, [negociation]);

    const handleCalculateValue = () => {
        setTotalPrice(Math.ceil(Math.random() * 999));
    };

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
                                value={`${negociation.idadeDivida} meses`}
                                disabled
                            />
                        </div>
                        <div className="col-sm-4 comp-modal">
                            <label className="lblModal">Número de parcelas</label>
                            <select
                                style={{ paddingLeft: "12px !important", color: "#fff" }}
                                className="form-control inputModal selectModal"
                                onChange={handleCalculateValue}
                            >
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
