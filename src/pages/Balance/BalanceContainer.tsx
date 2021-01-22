import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { addMonths, differenceInMonths, subMonths, subYears } from "date-fns";

// selectors
import { userEnabled } from "../../store/modules/auth/selectors";
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

        const userEnable = useSelector(userEnabled);
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
            debtors.reduce(
                (acc, cur) => {
                    if (!cur.negociacao) return acc;

                    return {
                        ...acc,
                        ...(cur.negociacao
                            ? {
                                  [cur.negociacao.formaPagamento]: acc[cur.negociacao.formaPagamento] + 1,
                              }
                            : acc),
                    };
                },
                { boleto: 0, cartao: 0 },
            );

        const filterPaymentForSituaction = (situation: number) => {
            if (!situation || situation === 0)
                return debtors.reduce(
                    (acc, cur) => {
                        if (!cur.negociacao) return acc;

                        return {
                            ...acc,
                            [cur.negociacao ? cur.negociacao.formaPagamento : ""]:
                                (acc[cur.negociacao ? cur.negociacao.formaPagamento : ""] || 0) + 1,
                        };
                    },
                    { boleto: 0, cartao: 0 },
                );

            const optionsSituation = {
                1: "atraso",
                2: "em dia",
                3: "quitada",
            };

            return debtors
                .filter((item) => item.negociacao && item.negociacao.situacao === optionsSituation[situation])
                .reduce(
                    (acc, cur) => {
                        if (!cur.negociacao) return acc;
                        return {
                            ...acc,
                            [cur.negociacao ? cur.negociacao.formaPagamento : ""]:
                                (acc[cur.negociacao ? cur.negociacao.formaPagamento : ""] || 0) + 1,
                        };
                    },
                    { boleto: 0, cartao: 0 },
                );
        };

        // flow received for situatio
        const handleFilterFlowReceivedForSituation = (situation: string, amountMonth: number) => {
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
                        (cur.negociacao ? cur.negociacao.parcelas : [])
                            .filter((item) =>
                                situation === null
                                    ? item.situacao !== "em dia" && item.vencimento > new Date(initialDate)
                                    : item.situacao === situation && item.vencimento > new Date(initialDate),
                            )
                            .reduce((acc, cur) => {
                                if (differenceInMonths(i, cur.vencimento) === 1) {
                                    return acc + cur.valorParcela;
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

        // amount payment in cash or portion
        const amountInCashOrPortion = () =>
            debtors.reduce(
                (acc, cur) => {
                    if (!cur.negociacao) return acc;

                    return {
                        ...acc,
                        ...(cur.negociacao?.parcelas.length > 1
                            ? {
                                  parcelado: acc["parcelado"] + 1,
                              }
                            : {
                                  ["a vista"]: acc["a vista"] + 1,
                              }),
                    };
                },
                { ["a vista"]: 0, parcelado: 0 },
            );

        // filter payment in cash or portion
        const filterInCashOrPortion = (situation: number) => {
            if (!situation || situation === 0)
                return debtors.reduce(
                    (acc, cur) => {
                        if (!cur.negociacao) return acc;

                        return {
                            ...acc,
                            ...(cur.negociacao.parcelas.length > 1
                                ? {
                                      parcelado: acc["parcelado"] + 1,
                                  }
                                : {
                                      ["a vista"]: acc["a vista"] + 1,
                                  }),
                        };
                    },
                    { ["a vista"]: 0, parcelado: 0 },
                );

            const optionsSituation = {
                1: "atraso",
                2: "em dia",
                3: "quitada",
            };

            return debtors
                .filter((item) => item.negociacao && item.negociacao.situacao === optionsSituation[situation])
                .reduce(
                    (acc, cur) => {
                        if (!cur.negociacao) return acc;

                        return {
                            ...acc,
                            ...(cur.negociacao?.parcelas.length > 1
                                ? {
                                      parcelado: acc["parcelado"] || 0 + 1,
                                  }
                                : {
                                      ["a vista"]: acc["a vista"] + 1,
                                  }),
                        };
                    },
                    { ["a vista"]: 0, parcelado: 0 },
                );
        };

        // filter amount debtors for situation
        const filterAmountDebtorsForSituation = (situation: number) => {
            if (!situation || situation === 0) return amountPf;

            const optionsSituation = {
                1: "nao negociada",
                2: "atraso",
                3: "em dia",
                4: "quitada",
            };

            // quantidade de devedores nao negociados
            if (situation === 1) return debtors.filter((item) => !item.negociacao).length;

            const mapDocument: {
                [key: string]: number;
            } = debtors
                .filter((item) => item.negociacao && item.negociacao.situacao === optionsSituation[situation])
                .reduce((acc, cur) => {
                    if (acc[cur.consumidor.cpf]) return acc;

                    return {
                        ...acc,
                        [cur.consumidor.cpf]: (acc[cur.consumidor.cpf] || 0) + 1,
                    };
                }, {});

            return Object.values(mapDocument).reduce((acc, cur) => acc + cur, 0);
        };

        // filter amount debt for situation
        const filterAmountDebtsForSituation = (situation: number) => {
            if (!situation || situation === 0) return amountDebtsPf;

            const optionsSituation = {
                1: "nao negociada",
                2: "atraso",
                3: "em dia",
                4: "quitada",
            };

            // quantidade de dividas nao negociadas
            if (situation === 1) return debtors.filter((item) => !item.negociacao).length;

            const mapDocument: {
                [key: string]: number;
            } = debtors
                .filter((item) => item.negociacao && item.negociacao.situacao === optionsSituation[situation])
                .reduce((acc, cur) => {
                    return {
                        ...acc,
                        [cur.consumidor.cpf]: (acc[cur.consumidor.cpf] || 0) + 1,
                    };
                }, {});

            return Object.values(mapDocument).reduce((acc, cur) => acc + cur, 0);
        };

        // fluxo de recevimento de parcelas que vence do cada mes do ano
        const handleFlowReceived = (amountMonth = 12) => {
            const response: number[] = [];

            for (let i = 0; i < amountMonth; i = i + 1) {
                let currentMonth: null | Date = null;

                if (i === 0) {
                    currentMonth = new Date();
                } else {
                    currentMonth = addMonths(new Date(), i);
                }

                const debits = debtors.reduce((acc, cur) => {
                    if (!cur.negociacao) return acc;

                    return (
                        acc +
                        cur.negociacao.parcelas
                            .filter((item) => !item.dataPagamento && new Date(item.vencimento).getMonth() === i)
                            .reduce((acc, cur) => acc + cur.valorParcela, 0)
                    );
                }, 0);

                response.push(debits);
            }

            return response;
        };

        // valores recebidos (PARCELAS [2])
        const handleFlowValueReceived = (amountMonth = 12) => {
            return [];
        };

        const filterAmountWalletForSituation = (situation: number) => {
            if (!situation || situation === 0) return amountWallet;

            const optionsSituation = {
                1: "nao negociada",
                2: "atraso",
                3: "em dia",
                4: "quitada",
            };

            // quantidade de dividas nao negociadas
            if (situation === 1)
                return debtors.filter((item) => !item.negociacao).reduce((acc, cur) => acc + cur.valor, 0);

            return debtors
                .filter((item) => item.negociacao && item.negociacao.situacao === optionsSituation[situation])
                .reduce((acc, cur) => acc + cur.valor, 0);
        };

        return (
            <Component
                payload={{
                    data: {
                        userEnable,
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
                        handleFilterFlowReceivedForSituation,
                        handleFlowValueReceived,
                    },
                    actions: {
                        handleLoadDebtor,
                    },
                }}
            />
        );
    };

    return Container;
};
