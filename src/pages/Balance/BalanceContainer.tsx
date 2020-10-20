import React from "react";

import { useSelector } from "react-redux";

import { totalValue } from "../../store/modules/pj/wallet/selectors";
import {
    dataDebtor,
    receiveDebtorsValueNextDays,
    delayDebtorsValue,
    namesDebtorsPayments,
    receivedDebtorsPortion,
    amountDebtorsPf,
    amountDetorsDebtsPf,
    amountDetorsWallet,
} from "../../store/modules/pj/debtor/selectors";

export const balanceContainer = (Component: React.ElementType) => {
    const Container: React.FC = () => {
        const debtors = useSelector(dataDebtor);
        const availableValue = useSelector(totalValue);
        const receiveValue = useSelector(receiveDebtorsValueNextDays);
        const delayValue = useSelector(delayDebtorsValue);
        const paymentForm = useSelector(namesDebtorsPayments);
        const receivedPortion = useSelector(receivedDebtorsPortion);
        const amountPf = useSelector(amountDebtorsPf);
        const amountDebtsPf = useSelector(amountDetorsDebtsPf);
        const amountWallet = useSelector(amountDetorsWallet);

        const handleFormatValue = (value: number) =>
            value.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
            });

        // amount items for payment
        const amountPayment = () =>
            debtors.reduce((acc, cur) => {
                return {
                    ...acc,
                    [cur.payment]: (acc[cur.payment] || 0) + 1,
                };
            }, {});

        const filterPaymentForSituaction = (situation: number) => {
            if (situation !== 0) {
                return debtors
                    .filter((item) => item.situation === situation)
                    .reduce((acc, cur) => {
                        return {
                            ...acc,
                            [cur.payment]: (acc[cur.payment] || 0) + 1,
                        };
                    }, {});
            }

            return debtors.reduce((acc, cur) => {
                return {
                    ...acc,
                    [cur.payment]: (acc[cur.payment] || 0) + 1,
                };
            }, {});
        };

        return (
            <Component
                payload={{
                    availableValue: handleFormatValue(availableValue),
                    receiveValue: handleFormatValue(receiveValue),
                    delayValue: handleFormatValue(delayValue),
                    paymentForm,
                    amountPayment,
                    filterPaymentForSituaction: filterPaymentForSituaction,
                    isValidValue: availableValue > 25,
                    amountPf,
                    amountDebtsPf,
                    amountWallet,
                }}
            />
        );
    };

    return Container;
};
