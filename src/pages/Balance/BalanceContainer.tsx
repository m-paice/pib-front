import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { addMonths, differenceInMonths, subMonths, subYears } from "date-fns";

// selectors
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

// action
import { actions as actionsDebtor } from "../../store/modules/pj/debtor/actions";

export const balanceContainer = (Component: React.ElementType) => {
    const Container: React.FC = () => {
        const dispatch = useDispatch();

        const debtors = useSelector(dataDebtor);
        const availableValue = useSelector(totalValue);
        const receiveValue = useSelector(receiveDebtorsValueNextDays);
        const delayValue = useSelector(delayDebtorsValue);
        const paymentForm = useSelector(namesDebtorsPayments);
        const receivedPortion = useSelector(receivedDebtorsPortion);
        const amountPf = useSelector(amountDebtorsPf);
        const amountDebtsPf = useSelector(amountDetorsDebtsPf);
        const amountWallet = useSelector(amountDetorsWallet);

        const handleLoadDebtor = () => {
            dispatch(actionsDebtor.loadNegociation());
        };

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

            const initialDate = `${new Date().getMonth() + 2}/01/${new Date().getFullYear()}`;

            let count = 1;
            for (
                let i = new Date(initialDate);
                i <= addMonths(new Date(initialDate), amountMonth);
                i = addMonths(new Date(initialDate), count)
            ) {
                // console.log(formatDate(i));

                const valueOfMonth = debtors.reduce((acc, cur) => {
                    return (
                        acc +
                        cur.detailsPortion
                            .filter((item) => item.situation !== 2 && item.dueDate > new Date(initialDate))
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

        // valores recebidos (PARCELAS [2])
        const handleFlowValueReceived = (amountMonth = 12) => {
            const response: number[] = [];

            const initialDate = subYears(new Date(), 1);

            let count = 1;
            for (let i = new Date(initialDate); i <= new Date(); i = addMonths(new Date(initialDate), count)) {
                const valueOfMonth = debtors.reduce((acc, cur) => {
                    return (
                        acc +
                        cur.detailsPortion
                            .filter((item) => item.situation === 2 && item.dueDate > new Date(initialDate))
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

        const filterAmountWalletForSituation = (situation: number) => {
            if (situation !== -1)
                return debtors
                    .filter((item) => item.situation === situation)
                    .reduce((acc, cur) => {
                        return acc + cur.debt;
                    }, 0);

            return debtors.reduce((acc, cur) => {
                return acc + cur.debt;
            }, 0);
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
                    filterAmountWalletForSituation,

                    handleFlowReceived,
                    handleFlowValueReceived,

                    actions: {
                        handleLoadDebtor,
                    },
                }}
            />
        );
    };

    return Container;
};
