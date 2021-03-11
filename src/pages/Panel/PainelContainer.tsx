import React from "react";

import { useSelector, useDispatch } from "react-redux";

// actions
import { actions as actionsDebits } from "../../store/modules/pf/debt/actions";
import { actions as actionsNegociactions } from "../../store/modules/pj/negociation/actions";

// selectors
import { amountDebitsOpened, debitsPaid } from "../../store/modules/pf/debt/selectors";

export const painelContainer = (Component: React.ElementType) => {
    const Container: React.FC = () => {
        const dispatch = useDispatch();

        const handleLoadDebits = () => {
            dispatch(actionsNegociactions.loadNegociation());
            dispatch(actionsDebits.loadDebt());
        };

        const amountDebitsPf = useSelector(debitsPaid);

        return (
            <Component
                payload={{
                    data: {
                        amountDebits: amountDebitsPf,
                    },
                    actions: {
                        loadDebits: handleLoadDebits,
                    },
                }}
            />
        );
    };

    return Container;
};
