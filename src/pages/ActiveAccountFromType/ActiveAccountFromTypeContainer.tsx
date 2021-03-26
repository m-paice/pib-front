import React from "react";

import { useUser } from "../../context/usuario";

export const Container = (Component: React.ElementType) => {
    const Container: React.FC = () => {
        const { handleConfirmActiveAccountType } = useUser();

        return (
            <Component
                payload={{
                    data: {},
                    actions: {
                        handleConfirmActiveAccountType,
                    },
                }}
            />
        );
    };

    return Container;
};
