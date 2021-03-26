import React from "react";

import { useSelector, useDispatch } from "react-redux";

// actions
import { actions as actionsDebits } from "../../store/modules/pf/debt/actions";

// selectors
import {
    selectDebts,
    valueTotalDebts,
    amountDebts,
    debitsPaid,
    allDebtsPaidOut,
    amountDebitsOpened,
} from "../../store/modules/pf/debt/selectors";
import { userActiveNotifications, userTypeActiveAccountContrary } from "../../store/modules/auth/selectors";

// context
import { useUser } from "../../context/usuario";

export const debtsContainer = (Component: React.ElementType) => {
    const Container: React.FC = () => {
        const dispatch = useDispatch();

        const { handleActiveNotification } = useUser();

        // selectors
        const debts = useSelector(selectDebts);
        const value = useSelector(valueTotalDebts);
        const amount = useSelector(amountDebts);
        const isDebitsPaid = useSelector(amountDebitsOpened);
        const allPaidOut = useSelector(allDebtsPaidOut);
        const activeNotifications = useSelector(userActiveNotifications);
        const typeActiveAccountContrary = useSelector(userTypeActiveAccountContrary);

        // actions
        const handleGenerateBillet = (data) => {
            dispatch(actionsDebits.paymentBillet(data));
        };

        const handleRenegotiateDebit = (id: string) => {
            dispatch(actionsDebits.renegotiateDebt(id));
        };

        const handleNegociation = (data) => {
            dispatch(actionsDebits.addDebt(data));
        };

        return (
            <Component
                payload={{
                    data: {
                        debts,
                        isDebitsPaid,
                        allPaidOut,
                        activeNotifications,
                        typeActiveAccountContrary,
                    },
                    actions: {
                        generateBillet: handleGenerateBillet,
                        renegotiateDebit: handleRenegotiateDebit,
                        negociation: handleNegociation,
                        handleActiveNotification,
                    },
                    amount,
                    value,
                }}
            />
        );
    };

    return Container;
};
