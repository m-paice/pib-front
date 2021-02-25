import React, { createContext, useState, useContext } from "react";

import { cpf, cnpj } from "cpf-cnpj-validator";

// service
import api from "../service/api";

// utils
import history from "../utils/history";
import validators from "../utils/validators";

interface UserContextData {
    check(document: string): void;
    forgotPassword(document: string): void;
    messageErrorResponse: string;
    messageErrorForgotPasswordResponse: string;
    email: string;
    handleClearMessagesErros(): void;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export const UserProvider: React.FC = ({ children }) => {
    const [messageError, setMessageError] = useState("");
    const [messageErrorForgotPassword, setMessageErrorForgotPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleClearMessagesErros = () => {
        setMessageError("");
        setMessageErrorForgotPassword("");
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

        if (!checkCPF && !checkCNPJ) return setMessageError("Documento inválido #2");

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

    return (
        <UserContext.Provider
            value={{
                check: handleCheck,
                forgotPassword: handleForgotPassword,
                handleClearMessagesErros,
                messageErrorResponse: messageError,
                messageErrorForgotPasswordResponse: messageErrorForgotPassword,
                email,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);

    return context;
};
