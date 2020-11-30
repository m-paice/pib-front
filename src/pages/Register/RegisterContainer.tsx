import React from "react";

import { useSelector, useDispatch } from "react-redux";

// actions
import { actions as actionsUser } from "../../store/modules/users/actions";

// selectors

export const registerContainer = (Component: React.ElementType) => {
    const Container: React.FC = () => {
        const dispatch = useDispatch();

        const handleCreateUser = (data) => {
            dispatch(actionsUser.create(data));
        };

        return (
            <Component
                payload={{
                    data: {},
                    actions: {
                        create: handleCreateUser,
                    },
                }}
            />
        );
    };

    return Container;
};
