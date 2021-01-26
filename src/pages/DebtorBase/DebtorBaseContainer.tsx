import React from "react";

import { useSelector, useDispatch } from "react-redux";

// actions
import { actions as actionsDebtors } from "../../store/modules/pj/debtor/actions";
import { userEnabled } from "../../store/modules/auth/selectors";

// selectors
import { dataDebtor } from "../../store/modules/pj/debtor/selectors";

export const debtorBaseContainer = (Component: React.ElementType) => {
    const Container: React.FC = () => {
        const dispatch = useDispatch();
        const debtors = useSelector(dataDebtor);
        const userEnable = useSelector(userEnabled);

        const handleFilterSituation = (situation: number) => {
            if (!situation || situation === 0) return debtors;

            const optionsSituation = {
                1: "nao negociada",
                2: "atraso",
                3: "em dia",
                4: "quitada",
            };

            if (situation === 1) {
                return debtors.filter((debtor) => !debtor.negociacao);
            }

            return debtors.filter(
                (debtor) => debtor.negociacao && debtor.negociacao.situacao === optionsSituation[situation],
            );
        };

        const handleLoadDebtors = () => {
            dispatch(actionsDebtors.loadNegociation());
        };

        const handleCloseOrOpenDebit = (debit) => {
            dispatch(actionsDebtors.closeOrOpen(debit));
        };

        return (
            <Component
                payload={{
                    data: {
                        userEnable,
                        debtors,
                    },
                    actions: {
                        handleLoadDebtors,
                        handleFilterSituation,
                        handleCloseOrOpenDebit,
                    },
                }}
            />
        );
    };

    return Container;
};
