import React, { useState, useEffect } from "react";

import { Modal, ModalBody } from "reactstrap";

import { Negociation } from "../../../store/modules/pj/negociation/types";

interface Props extends Negociation {
    isOpen: boolean;
    onClose(): void;
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

const Simulator: React.FC<Props> = ({
    isOpen,
    onClose,
    idadeDivida,
    desconto,
    maximoParcela,
    idadeDividaFormatado,
}) => {
    const options = Array.from({ length: maximoParcela }).map((_, index) => index + 1);

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [totalPrice, setTotalPrice] = useState(0);
    const [debitPrice, setDebitPrice] = useState("");
    const [discountValue, setDiscountValue] = useState(0);

    const [portionPrice, setPortionPrice] = useState(1);
    const [portionSelected, setPortionSelected] = useState(0);

    useEffect(() => {
        if (Number(String(discountValue).replace(/\D/g, "")) > 99) {
            setErrors((prevState) => ({
                ...prevState,
                discount: "O percentual máximo para desconto é de 99%",
            }));
            return;
        } else {
            setErrors({});
        }
    }, [discountValue]);

    useEffect(() => {
        if (debitPrice && discountValue) {
            const debitFormated = Number(debitPrice.replace(",", "."));

            const response = debitFormated - (debitFormated * discountValue) / 100;
            setTotalPrice(response);
        }

        if (!debitPrice || !discountValue) {
            setTotalPrice(0);
        }
    }, [debitPrice, discountValue]);

    useEffect(() => {
        if (debitPrice && discountValue && portionSelected) {
            setPortionPrice(totalPrice / portionSelected);
        } else {
            setPortionPrice(0);
        }
    }, [portionSelected]);

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDebitPrice(event.target.value);
    };

    const handleChangeInputDiscount = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDiscountValue(Number(event.target.value));
    };

    const handleBlurInputDiscount = (event: React.FocusEvent<HTMLInputElement>) => {
        setDiscountValue(Number(event.target.value));
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
                                value={debitPrice}
                                onChange={handleChangeInput}
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
                            />
                        </div>

                        <div className="col-sm-4 comp-modal">
                            <label className="lblModal">Desconto concedido (%)</label>
                            <input
                                type="text"
                                className="form-control inputModal"
                                title="Desconto concedido"
                                style={stylesPrimary}
                                value={discountValue}
                                onChange={handleChangeInputDiscount}
                                onBlur={handleBlurInputDiscount}
                            />
                            {errors["discount"] && <span className="text-white"> {errors["discount"]} </span>}
                        </div>
                        <div className="col-sm-4 comp-modal">
                            <label className="lblModal">Número de parcelas</label>
                            <select
                                style={{ paddingLeft: "12px !important", color: "#fff" }}
                                className="form-control inputModal selectModal"
                                onChange={(event) => setPortionSelected(Number(event.target.value))}
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
                            <label className="lblModal">Valor de cada parcela</label>
                            <input
                                type="text"
                                className="form-control inputModal money"
                                title="Valor de cada parcela"
                                style={stylesSecondary}
                                value={portionPrice.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
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
