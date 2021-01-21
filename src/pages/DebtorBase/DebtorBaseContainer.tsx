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

        const handleFilterSituation = (situation: string | null) => {
            if (!situation) return debtors;

            return debtors.filter((debtor) => debtor.negociacao?.situacao === situation);
        };

        const handleLoadDebtors = () => {
            dispatch(actionsDebtors.loadNegociation());
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
                    },
                }}
            />
        );
    };

    return Container;
};
