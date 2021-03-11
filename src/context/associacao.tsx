import React, { useState, useContext, createContext } from "react";

import api from "../service/api";

import Alert from "../components/Alert";

interface DebitosData {
    data: any[];
    nome: string;
}

interface AssociacaoContextData {
    debitos: DebitosData;
    erro: string;
    handleSearchConsumer(data: { cpf: string }): void;
    negociar(data): void;
}

const AssociacaoContext = createContext({} as AssociacaoContextData);

export const AssociacaoProvider: React.FC = ({ children }) => {
    const [debitos, setDebitos] = useState<DebitosData>({ nome: "", data: [] });
    const [document, setDocument] = useState("");

    const [erro, setErro] = useState("");
    const [isOpenModal, setIsOpenModal] = useState(false);

    const handleSetError = (code: number) => {
        const mapError = {
            1: "CPF não encontrado",
        };

        setErro(mapError[code]);
        setDebitos({ nome: "", data: [] });
    };

    const handleSearchConsumer = async (data: { cpf: string }) => {
        const { cpf } = data;

        setErro("");
        setDocument(cpf);

        const response = await api.post("/associacao/consumidor", { cpf });

        if (response.data.error) return handleSetError(response.data.code);

        setDebitos(response.data);
    };

    const negociar = async (data) => {
        await api.post("/negociacao", data);
        setIsOpenModal(true);
    };

    const handleConfirm = async () => {
        const response = await api.post("/associacao/consumidor", { cpf: document });

        setDebitos(response.data);
        setIsOpenModal(false);
    };

    return (
        <AssociacaoContext.Provider
            value={{
                debitos,
                erro,
                handleSearchConsumer,
                negociar,
            }}
        >
            {children}

            <Alert
                show={isOpenModal}
                title="Credas informa"
                message="Parabéns, sua negociação foi feita com sucesso"
                type="success"
                handleConfirm={handleConfirm}
            />
        </AssociacaoContext.Provider>
    );
};

export const useAssociacao = () => {
    const context = useContext(AssociacaoContext);

    return context;
};
