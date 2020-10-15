import React from "react";

import { useSelector } from "react-redux";

import { totalValue } from "../../store/modules/pj/wallet/selectors";
import {
    receiveDebtorsValueNextDays,
    delayDebtorsValue,
    namesDebtorsSituation,
    amountDebtorsSituation,
} from "../../store/modules/pj/debtor/selectors";

export const balanceContainer = (Component: React.ElementType) => {
    const Container: React.FC = () => {
        const availableValue = useSelector(totalValue);
        const receiveValue = useSelector(receiveDebtorsValueNextDays);
        const delayValue = useSelector(delayDebtorsValue);
        const situationNames = useSelector(namesDebtorsSituation);
        const amountSituation = useSelector(amountDebtorsSituation);

        const handleFormatValue = (value: number) =>
            value.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
            });

        return (
            <Component
                payload={{
                    availableValue: handleFormatValue(availableValue),
                    receiveValue: handleFormatValue(receiveValue),
                    delayValue: handleFormatValue(delayValue),
                    situationNames,
                    amountSituation,
                    isValidValue: availableValue > 25,
                }}
            />
        );
    };

    return Container;
};
