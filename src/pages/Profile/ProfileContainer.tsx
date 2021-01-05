import React from "react";

import { useSelector, useDispatch } from "react-redux";

// actions

// selectors
import { userAuthenticated } from "../../store/modules/auth/selectors";

export const profileContainer = (Component: React.ElementType) => {
    const Container: React.FC = () => {
        const dispatch = useDispatch();

        const user = useSelector(userAuthenticated);

        return (
            <Component
                payload={{
                    data: {
                        user,
                    },
                    actions: {},
                }}
            />
        );
    };

    return Container;
};
