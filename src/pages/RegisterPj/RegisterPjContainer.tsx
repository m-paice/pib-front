import React from "react";

import { useSelector, useDispatch } from "react-redux";

// actions
import { actions } from "../../store/modules/users/actions";

// selectors

export const Container = (Component: React.ElementType) => {
    const Container: React.FC = () => {
        const dispatch = useDispatch();

        const handleCreate = (data) => {
            dispatch(actions.create({ ...data, document: "lojista" }));
        };

        return (
            <Component
                payload={{
                    data: {},
                    actions: {
                        create: handleCreate,
                    },
                }}
            />
        );
    };

    return Container;
};
