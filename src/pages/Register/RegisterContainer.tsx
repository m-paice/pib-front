import React from "react";

import { useSelector, useDispatch } from "react-redux";

// actions
import { actions as actionsUser } from "../../store/modules/users/actions";

// selectors

// context
import { useUser } from '../../context/usuario'

export const registerContainer = (Component: React.ElementType) => {
    const Container: React.FC = () => {
        const dispatch = useDispatch();

        const { dataCertificate, handleClearDataCertificate } = useUser()

        const handleCreateUser = (data) => {
            dispatch(actionsUser.create({ ...data, document: "consumidor" }));
        };

        return (
            <Component
                payload={{
                    data: {
                        dataCertificate,
                    },
                    actions: {
                        create: handleCreateUser,
                        handleClearDataCertificate,
                    },
                }}
            />
        );
    };

    return Container;
};
