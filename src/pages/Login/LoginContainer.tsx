import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

// actions
import { actions } from "../../store/modules/auth/actions";

// selectors
import { message } from "../../store/modules/auth/selectors";

export const loginContainer = (Component: React.ElementType) => {
    const Container: React.FC = () => {
        const dispatch = useDispatch();

        const [isOpenCertificate, setIsOpenCertificate] = useState(false);

        const handleOpenCertificate = () => {
            setIsOpenCertificate(true);
        };

        const handleCloseCertificate = () => {
            setIsOpenCertificate(false);
        };

        const handleLogin = (data: { login: string; senha: string }) => {
            dispatch(actions.login(data));
        };

        const messageError = useSelector(message);

        return (
            <Component
                payload={{
                    data: {
                        messageError,
                        isOpenCertificate,
                    },
                    actions: {
                        login: handleLogin,
                        handleOpenCertificate,
                        handleCloseCertificate,
                    },
                }}
            />
        );
    };

    return Container;
};
