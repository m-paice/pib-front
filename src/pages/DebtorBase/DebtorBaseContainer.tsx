import React from "react";

import { useSelector } from "react-redux";

import { dataDebtor } from "../../store/modules/pj/debtor/selectors";

export const debtorBaseContainer = (Component: React.ElementType) => {
    const Container: React.FC = () => {
        const debtors = useSelector(dataDebtor);

        const handleFilterSituation = (situation: number) => {
            if (situation === -1) return debtors;

            return debtors.filter((debtor) => debtor.situation === situation);
        };

        return (
            <Component
                payload={{
                    data: debtors,
                    handleFilterSituation,
                }}
            />
        );
    };

    return Container;
};
