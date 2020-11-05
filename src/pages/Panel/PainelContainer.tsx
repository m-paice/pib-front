import React from "react";

import { useSelector, useDispatch } from "react-redux";

// actions

// selectors
import { amountDebitsOpened } from "../../store/modules/pf/debt/selectors";

export const painelContainer = (Component: React.ElementType) => {
    const Container: React.FC = () => {
        const dispatch = useDispatch();

        const amountDebitsPf = useSelector(amountDebitsOpened);

        return (
            <Component
                payload={{
                    data: {
                        amountDebits: amountDebitsPf,
                    },
                    actions: {},
                }}
            />
        );
    };

    return Container;
};
