import React from "react";

import { Modal, ModalBody } from "reactstrap";

import { Debtor } from "../../../store/modules/pj/debtor/types";

interface Props extends Debtor {
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

const Simulator: React.FC<Props> = ({ isOpen, onClose }) => {
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
                    </div>
                </div>
            </ModalBody>
        </Modal>
    );
};

export default Simulator;
