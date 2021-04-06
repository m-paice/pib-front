import React from "react";

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

interface Props {
    isOpen: boolean;
    handleConfirm?(): void;
    handleCancel?(): void;
}

const Certificate: React.FC<Props> = ({ children, isOpen, handleConfirm, handleCancel }) => {
    return (
        <Modal isOpen={isOpen}>
            <ModalHeader>Selecione seu certificado</ModalHeader>

            <ModalBody>
                <select name="" id="" style={{ width: "100%", color: "#000" }}>
                    <option style={{ color: "#000" }} value="1">
                        Alan
                    </option>
                    <option style={{ color: "#000" }} value="1">
                        William
                    </option>
                    <option style={{ color: "#000" }} value="1">
                        Robert
                    </option>
                </select>
            </ModalBody>

            <ModalFooter>
                <div className="d-flex full-width">
                    <Button type="button" onClick={handleConfirm}>
                        Cancelar
                    </Button>
                    <Button type="button" onClick={handleCancel}>
                        Continuar
                    </Button>
                </div>
            </ModalFooter>
        </Modal>
    );
};

export default Certificate;
