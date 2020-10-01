import React, { useState } from "react";

import { Modal, ModalBody } from "reactstrap";

import { Negociation } from "../../store/modules/pj/negociation/types";

interface Props extends Negociation {
    isOpen: boolean;
    onClose(): void;
}

const stylesPrimary: React.CSSProperties = {
    backgroundColor: "#14657b",
    color: "#fff",
};

const stylesSecondary: React.CSSProperties = {
    backgroundColor: "#fff",
    color: "#14657b",
};

const Simulator: React.FC<Props> = ({ isOpen, onClose, yaerDebit, discount, maxPortion }) => {
    const options = Array.from({ length: maxPortion }).map((_, index) => index + 1);

    const [totalPrice, setTotalPrice] = useState(754);
    const [debitPrice, setDebitPrice] = useState(0);

    const handleCalculateValue = () => {
        setTotalPrice(Math.floor(Math.random() * 999));
        setDebitPrice(Math.floor(Math.random() * 999));
    };

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
                                value={debitPrice.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
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
                                value={yaerDebit}
                            />
                        </div>
                        <div className="col-sm-4 comp-modal">
                            <label className="lblModal">Número de parcelas</label>
                            <select
                                style={{ paddingLeft: "12px !important" }}
                                className="form-control inputModal selectModal"
                                onChange={handleCalculateValue}
                            >
                                {options.map((value) => (
                                    <option key={value} value={value}>
                                        {" "}
                                        {value}{" "}
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
                                value={`${discount}%`}
                            />
                        </div>
                        <div className="col-sm-4 comp-modal">
                            <label className="lblModal">Valor a ser pago</label>
                            <input
                                type="text"
                                className="form-control inputModal money"
                                title="Valor a ser pago"
                                style={stylesSecondary}
                                value={totalPrice.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
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
