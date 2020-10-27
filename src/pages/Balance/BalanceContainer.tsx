import React from "react";

import { useSelector } from "react-redux";
import { addMonths, getMonth, differenceInDays, differenceInMonths } from "date-fns";

import formatDate from "../../utils/formatDate";

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
            if (situation !== -1) {
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

        // amount payment in cash or portion
        const amountInCashOrPortion = () =>
            debtors.reduce((acc, cur) => {
                return {
                    ...acc,
                    [cur.id]: cur.detailsPortion.reduce((acc, cur) => {
                        return acc + 1;
                    }, 0),
                };
            }, {});

        // filter payment in cash or portion
        const filterInCashOrPortion = (situation: number) => {
            if (situation !== -1) {
                return debtors
                    .filter((item) => item.situation === situation)
                    .reduce((acc, cur) => {
                        return {
                            ...acc,
                            [cur.id]: cur.detailsPortion.reduce((acc, cur) => {
                                return acc + 1;
                            }, 0),
                        };
                    }, {});
            }

            return debtors.reduce((acc, cur) => {
                return {
                    ...acc,
                    [cur.id]: cur.detailsPortion.reduce((acc, cur) => {
                        return acc + 1;
                    }, 0),
                };
            }, {});
        };

        // filter amount debtors for situation
        const filterAmountDebtorsForSituation = (situation: number) => {
            if (situation !== -1) {
                const mapDocument = debtors
                    .filter((item) => item.situation === situation)
                    .reduce((acc, cur) => {
                        if (acc[cur.document]) return acc;

                        return {
                            ...acc,
                            [cur.document]: (acc[cur.document] || 0) + 1,
                        };
                    }, {});

                return Object.values(mapDocument).reduce((acc: number, cur: number) => acc + cur, 0);
            }

            const mapDocument = debtors.reduce((acc, cur) => {
                if (acc[cur.document]) return acc;

                return {
                    ...acc,
                    [cur.document]: (acc[cur.document] || 0) + 1,
                };
            }, {});

            return Object.values(mapDocument).reduce((acc: number, cur: number) => acc + cur, 0);
        };

        // filter amount debt for situation
        const filterAmountDebtsForSituation = (situation: number) => {
            if (situation !== -1) {
                const mapDocument = debtors
                    .filter((item) => item.situation === situation)
                    .reduce((acc, cur) => {
                        return {
                            ...acc,
                            [cur.document]: (acc[cur.document] || 0) + 1,
                        };
                    }, {});

                return Object.values(mapDocument).reduce((acc: number, cur: number) => acc + cur, 0);
            }

            const mapDocument = debtors.reduce((acc, cur) => {
                return {
                    ...acc,
                    [cur.document]: (acc[cur.document] || 0) + 1,
                };
            }, {});

            return Object.values(mapDocument).reduce((acc: number, cur: number) => acc + cur, 0);
        };

        // fluxo de recevimento (PARCELAS em atraso [1] e proxima[0])
        const handleFlowReceived = (amountMonth = 12) => {
            const response: number[] = [];

            let count = 1;
            for (let i = new Date(); i <= addMonths(new Date(), amountMonth); i = addMonths(new Date(), count)) {
                const valueOfMonth = debtors.reduce((acc, cur) => {
                    return (
                        acc +
                        cur.detailsPortion
                            .filter((item) => item.situation !== 2)
                            .reduce((acc, cur) => {
                                if (differenceInMonths(i, cur.dueDate) === 1) {
                                    return acc + cur.valuePortion;
                                }

                                return acc;
                            }, 0)
                    );
                }, 0);

                response.push(valueOfMonth);

                count = count + 1;
            }

            return response;
        };

        return (
            <Component
                payload={{
                    availableValue: handleFormatValue(availableValue),
                    receiveValue: handleFormatValue(receiveValue),
                    delayValue: handleFormatValue(delayValue),
                    paymentForm,
                    amountPayment,
                    filterPaymentForSituaction,
                    receivedPortion,
                    amountInCashOrPortion,
                    filterInCashOrPortion,
                    isValidValue: availableValue > 25,
                    amountPf,
                    filterAmountDebtorsForSituation,
                    amountDebtsPf,
                    filterAmountDebtsForSituation,
                    amountWallet,

                    handleFlowReceived,
                }}
            />
        );
    };

    return Container;
};
