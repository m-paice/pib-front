import React, { useEffect, useState, CSSProperties } from "react";

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

// hooks
import { useListCertificates, useReadCert, useSignData, useSignHash } from "../../hooks/lacuna";
import { useAsync } from "../../hooks/useAsync";

// context
import { useUser } from "../../context/usuario";
// actions
import { actions as actionsLogin } from "../../store/modules/auth/actions";

import api from "../../service/api";

const defaultOptionStyles: CSSProperties = {
    color: "#000",
};
interface Props {
    isOpen: boolean;
    handleConfirm?(): void;
    handleCancel?(): void;
}

const Certificate: React.FC<Props> = ({ children, isOpen, handleConfirm, handleCancel }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const { handleSetDataCertificate } = useUser();

    const [certificateData, setCertificateData] = useState("");

    const { execute: listKeysCertificate, value: valueListKeysCertificate } = useAsync(api.get, false);
    const { execute: vaidateCertificate, value: valueValidateCertificate } = useAsync(api.post, false);

    const [certificates, handleStart] = useListCertificates();
    const [handleReadCertificate] = useReadCert();
    const [handleSignData] = useSignData();

    useEffect(() => {
        handleStart();

        listKeysCertificate("/certificados");
    }, []);

    useEffect(() => {
        if (valueValidateCertificate?.data?.document) {
            if (valueValidateCertificate.data.isLogin) {
                dispatch(actionsLogin.loginWithCertificate(valueValidateCertificate.data));

                return;
            }

            handleSetDataCertificate(valueValidateCertificate.data);

            if (valueValidateCertificate.data.document === "pf") {
                history.push("/register");
            } else {
                history.push("/registerpj");
            }
        }
    }, [valueValidateCertificate]);

    const handleChangeCertificate = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCertificateData(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const certEncoded = await handleReadCertificate(certificateData);

        const signature = await handleSignData(certificateData, valueListKeysCertificate.data.nonce);

        const data = {
            digestAlgorithm: valueListKeysCertificate.data.digestAlgorithm,
            nonce: valueListKeysCertificate.data.nonce,
            certEncoded,
            signature,
        };

        await vaidateCertificate("/certificados", data);
    };

    return (
        <Modal isOpen={isOpen}>
            <ModalHeader>Selecione seu certificado</ModalHeader>

            <ModalBody>
                <form onSubmit={handleSubmit}>
                    <select
                        name=""
                        id=""
                        onChange={handleChangeCertificate}
                        style={{ width: "100%", ...defaultOptionStyles }}
                    >
                        <option style={defaultOptionStyles} value="">
                            Selecione
                        </option>
                        {certificates.map((item, index) => (
                            <option key={index} style={defaultOptionStyles} value={item.thumbprint}>
                                {item.subjectName + " (expira em " + item.validityEnd.toLocaleDateString() + ")"}
                            </option>
                        ))}
                    </select>

                    <Button type="submit">Validar</Button>
                </form>
            </ModalBody>

            <ModalFooter>
                <div className="d-flex full-width">
                    <Button type="button" onClick={handleConfirm}>
                        Fechar
                    </Button>
                </div>
            </ModalFooter>
        </Modal>
    );
};

export default Certificate;
