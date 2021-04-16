import React from "react";

import { useSelector, useDispatch } from "react-redux";

// actions
import { actions as actionsUser } from "../../store/modules/users/actions";
// selectors
import { userAuthenticated } from "../../store/modules/auth/selectors";

export const profileContainer = (Component: React.ElementType) => {
    const Container: React.FC = () => {
        const dispatch = useDispatch();

        const update = (data) => {
            dispatch(actionsUser.update(data));
        };

        const user = useSelector(userAuthenticated);

        return (
            <Component
                payload={{
                    data: {
                        user,
                    },
                    actions: {
                        update,
                    },
                }}
            />
        );
    };

    return Container;
};
