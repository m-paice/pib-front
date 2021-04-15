import React from "react";

import { useSelector, useDispatch } from "react-redux";

// actions
import { actions } from "../../store/modules/users/actions";

// selectors

// context
import { useUser } from "../../context/usuario";

export const Container = (Component: React.ElementType) => {
    const Container: React.FC = () => {
        const dispatch = useDispatch();

        const { dataCertificate, handleClearDataCertificate } = useUser();

        const handleCreate = (data) => {
            dispatch(actions.create({ ...data, document: "lojista" }));
        };

        return (
            <Component
                payload={{
                    data: {
                        dataCertificate,
                    },
                    actions: {
                        create: handleCreate,
                        handleClearDataCertificate,
                    },
                }}
            />
        );
    };

    return Container;
};
