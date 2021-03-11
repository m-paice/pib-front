import React from "react";

import { useAssociacao } from "../../context/associacao";

export const Container = (Component: React.ElementType) => {
    const Container: React.FC = () => {
        const { debitos, erro, handleSearchConsumer, negociar } = useAssociacao();

        return (
            <Component
                payload={{
                    data: {
                        erro,
                        nome: debitos.nome,
                        debits: debitos.data,
                    },
                    actions: {
                        handleSearchConsumer,
                        negociar,
                    },
                }}
            />
        );
    };

    return Container;
};
