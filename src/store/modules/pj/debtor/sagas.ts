import { put } from "redux-saga/effects";
import { addDays } from "date-fns";

import { types } from "./types";

const randomSituation = () => Math.ceil(Math.random() * 4);
const randomPayment = () => Math.ceil(Math.random() * 2);
const randomPortion = () => Math.ceil(Math.random() * 15);
const randomDiscount = () => Math.ceil(Math.random() * 50);

const randomValue = () => Math.ceil(Math.random() * 999);

const randomDate = () => {
    const dataIni = new Date(2020, 0, 1);
    const dataAtual = new Date(2020, 11, 30);
    return new Date(dataIni.getTime() + Math.random() * (dataAtual.getTime() - dataIni.getTime()));
};

function* loadDebtors() {
    try {
        const response = yield new Promise((resolve) => {
            setTimeout(() => {
                resolve(
                    Array.from({ length: 35 }).map((_, index) => {
                        const portionValue = randomPortion();
                        const debtValue = randomValue();
                        const discountValue = randomDiscount();
                        const situationValue = randomSituation();

                        return {
                            id: index.toString(),
                            dateRegister: randomDate(),
                            document: "460.328.018-10",
                            name: "Matheus Paice",
                            debit: debtValue,
                            negociation: debtValue - randomDiscount(),
                            receipt: randomValue(),
                            late: randomValue(),
                            situation: situationValue,
                            payment: randomPayment(),
                            portion: portionValue,
                            discount: discountValue,
                            detailsPortion: Array.from({ length: portionValue })
                                .map((_, index) => {
                                    const dueDateValue = randomDate();

                                    return {
                                        portion: index + 1,
                                        dueDate: dueDateValue,
                                        valuePortion: (debtValue - discountValue) / portionValue,
                                        datePayment: addDays(dueDateValue, 30),
                                        situation: situationValue,
                                    };
                                })
                                .sort((a, b) => (a.dueDate > b.dueDate ? 1 : -1))
                                .map((item, index) => ({
                                    ...item,
                                    portion: index + 1,
                                })),
                        };
                    }),
                );
            }, 2000);
        });

        yield put({
            type: types.LOAD_DEBTOR_SUCCESS,
            payload: response,
        });
    } catch (error) {
        yield put({ type: types.LOAD_DEBTOR_FAILURE });
    }
}

export default {
    loadDebtors,
};
