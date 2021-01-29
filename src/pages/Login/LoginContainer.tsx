import React from "react";

import { useSelector, useDispatch } from "react-redux";

// actions
import { actions } from "../../store/modules/auth/actions";

// selectors
import { message } from "../../store/modules/auth/selectors";

export const loginContainer = (Component: React.ElementType) => {
    const Container: React.FC = () => {
        const dispatch = useDispatch();

        const handleLogin = (data: { login: string; senha: string }) => {
            dispatch(actions.login(data));
        };

        const messageError = useSelector(message);

        return (
            <Component
                payload={{
                    data: {
                        messageError,
                    },
                    actions: {
                        login: handleLogin,
                    },
                }}
            />
        );
    };

    return Container;
};
