import React from "react";

import { useUser } from "../../context/usuario";

export const Container = (Component: React.ElementType) => {
    const Container: React.FC = () => {
        const { handleNewPassword } = useUser();

        return (
            <Component
                payload={{
                    data: {},
                    actions: {
                        handleNewPassword,
                    },
                }}
            />
        );
    };

    return Container;
};
