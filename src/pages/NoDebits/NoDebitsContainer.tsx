import React from "react";

import { useSelector, useDispatch } from "react-redux";

// actions

// selectors
import { amountDebitsPaidOut } from "../../store/modules/pf/debt/selectors";

export const noDebitsContainer = (Component: React.ElementType) => {
    const Container: React.FC = () => {
        const dispatch = useDispatch();

        const amountDebitsPaidOutPf = useSelector(amountDebitsPaidOut);

        return (
            <Component
                payload={{
                    data: {
                        amountDebitsPaidOut: amountDebitsPaidOutPf,
                    },
                    actions: {},
                }}
            />
        );
    };

    return Container;
};
