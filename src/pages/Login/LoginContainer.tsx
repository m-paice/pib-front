import React from "react";

import { useSelector, useDispatch } from "react-redux";

// actions
import { actions } from "../../store/modules/auth/actions";

// selectors

export const loginContainer = (Component: React.ElementType) => {
    const Container: React.FC = () => {
        const dispatch = useDispatch();

        const handleLogin = (data: { login: string; senha: string }) => {
            dispatch(actions.login(data));
        };

        return (
            <Component
                payload={{
                    data: {},
                    actions: {
                        login: handleLogin,
                    },
                }}
            />
        );
    };

    return Container;
};
