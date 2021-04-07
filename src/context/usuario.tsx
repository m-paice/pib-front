import React, { createContext, useState, useContext } from "react";

import { cpf, cnpj } from "cpf-cnpj-validator";

// service
import api from "../service/api";

// utils
import history from "../utils/history";
import validators from "../utils/validators";

// components
import Alert from "../components/Alert";

export interface CertificateData {
    cpf: string;
    cnpj: string; 
    email: string;
    name: string;
}

interface UserContextData {
    messageErrorResponse: string;
    messageErrorForgotPasswordResponse: string;
    email: string;
    dataCertificate: CertificateData | null;
    check(document: string): void;
    forgotPassword(document: string): void;
    handleClearMessagesErros(): void;
    handleActiveAccount(token: string): void;
    handleNewPassword(data): void;
    handleActiveNotification(data): void;
    handleConfirmActiveAccountType(data): void;
    handleSetDataCertificate(data): void;
    handleClearDataCertificate(): void;
}

interface AlertTypes {
    show: boolean;
    title: string;
    message: string;
    type: string;
    handleConfirm: any;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export const UserProvider: React.FC = ({ children }) => {
    const [messageError, setMessageError] = useState("");
    const [messageErrorForgotPassword, setMessageErrorForgotPassword] = useState("");

    const [dataCertificate, setDataCertificate] = useState<CertificateData | null>(null)

    const handleSetDataCertificate = (data) => {
        setDataCertificate(data)
    }

    const handleClearDataCertificate = () => {
        setDataCertificate(null)
    }

    const [atrAlert, setAtrAlert] = useState<AlertTypes>({
        show: false,
        title: "",
        message: "",
        type: "success",
        handleConfirm: null,
    });
    const [email, setEmail] = useState("");

    const handleClearMessagesErros = () => {
        setMessageError("");
        setMessageErrorForgotPassword("");
    };

    const handleCloseAlertRedirectLogin = () => {
        setAtrAlert({
            show: false,
            message: "",
            type: "",
            title: "",
            handleConfirm: null,
        });

        history.push("/login");
    };

    const handleCloseAlert = () => {
        setAtrAlert({
            show: false,
            message: "",
            type: "",
            title: "",
            handleConfirm: null,
        });
    };

    const handleActiveAccount = async (hash: string) => {
        const response = await api.post("/usuario/ativar-conta", {
            token: hash,
        });

        if (response.data.error) {
            return;
        }

        setAtrAlert((prevState) => ({
            show: true,
            title: "Usuário ativado",
            message: "Parabéns, você ativou seu usuário",
            type: "success",
            handleConfirm: handleCloseAlertRedirectLogin,
        }));
    };

    const handleConfirmActiveAccountType = async (hash: string) => {
        const response = await api.post("/usuario/confirmar-ativacao", {
            token: hash,
        });

        if (response.data.error) {
            return;
        }

        setAtrAlert((prevState) => ({
            show: true,
            title: "Notificações ativadas com sucesso",
            message: "Parabéns, você ativou suas notificações",
            type: "success",
            handleConfirm: handleCloseAlertRedirectLogin,
        }));
    };

    const handleNewPassword = async (data: { hash: string; password: string }) => {
        const { hash, password } = data;

        const response = await api.post("/usuario/nova-senha", {
            token: hash,
            password,
        });

        if (response.data.error) {
            return;
        }

        setAtrAlert((prevState) => ({
            show: true,
            title: "Senha alterada",
            message: "Parabéns, você alterou sua senha",
            type: "success",
            handleConfirm: handleCloseAlertRedirectLogin,
        }));
    };

    const handleChangeEmail = (email: string) => {
        const name = email.split("@");

        const inicio = name[0].substr(0, 1);
        const fim = name[0].substr(name[0].length - 1, 1);

        return `${inicio}*******${fim}@${name[1]}`;
    };

    const handleForgotPassword = async (document: string) => {
        const response = await api.post("/usuario/forgot-password", { document });

        if (!response.data) {
            setMessageErrorForgotPassword("Documento não encontrado");
            setMessageError("");

            return;
        }

        setEmail(() => handleChangeEmail(response.data.email));
        return history.push("/forgotpassword");
    };

    const handleCheck = async (document: string) => {
        const checkCPF = cpf.isValid(document);
        const checkCNPJ = cnpj.isValid(document);

        if (!checkCPF && !checkCNPJ) return setMessageError("Documento inválido");

        const response = await api.post("/usuario/check", {
            document,
        });

        if (response.data) {
            setMessageErrorForgotPassword("");
            setMessageError("Usuário já cadastrado!");
            return;
        }

        if (validators.document(document) === "pj") {
            setMessageError("");
            history.push("/registerpj");
            return;
        }

        if (validators.document(document) === "pf") {
            setMessageError("");
            history.push("/register");
            return;
        }

        if (!validators.document(document)) {
            setMessageErrorForgotPassword("");
            setMessageError("Documento inválido.");
            return;
        }
    };

    const handleActiveNotification = async (data: { typeActiveAccount: string }) => {
        const { typeActiveAccount } = data;

        if (typeActiveAccount === "sms") {
            const response = await api.post("/usuario/ativar-dispositivo", {
                tipo: "sms",
            });
        }

        if (typeActiveAccount === "email") {
            const response = await api.post("/usuario/ativar-dispositivo", {
                tipo: "email",
            });
        }

        setAtrAlert((prevState) => ({
            show: true,
            title: "Enviamos um link de ativação pra você",
            message: "Agora é com você, ative sua conta e tenha acesso a todos os recursos da plataforma",
            type: "success",
            handleConfirm: handleCloseAlert,
        }));
    };

    return (
        <UserContext.Provider
            value={{
                check: handleCheck,
                forgotPassword: handleForgotPassword,
                handleClearMessagesErros,
                handleActiveAccount,
                handleNewPassword,
                handleActiveNotification,
                handleConfirmActiveAccountType,
                handleSetDataCertificate,
                handleClearDataCertificate,
                messageErrorResponse: messageError,
                messageErrorForgotPasswordResponse: messageErrorForgotPassword,
                email,
                dataCertificate,
            }}
        >
            {children}

            <Alert
                show={atrAlert.show}
                handleConfirm={atrAlert.handleConfirm}
                title={atrAlert.title}
                message={atrAlert.message}
                type={atrAlert.type}
            />
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);

    return context;
};
