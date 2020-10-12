import { put } from "redux-saga/effects";

import { types } from "./types";

const randomSituation = () => Math.ceil(Math.random() * 4);

const randomValue = () => Math.ceil(Math.random() * 999);

const dateRandom = () => {
    const dataIni = new Date(2020, 0, 1);
    const dataAtual = new Date(2020, 11, 30);
    return new Date(dataIni.getTime() + Math.random() * (dataAtual.getTime() - dataIni.getTime()));
};

function* loadDebtors() {
    try {
        const response = yield new Promise((resolve) => {
            setTimeout(() => {
                resolve(
                    Array.from({ length: 35 }).map((_, index) => ({
                        id: index.toString(),
                        dateRegister: dateRandom(),
                        document: "460.328.018-10",
                        name: "Matheus Paice",
                        debit: randomValue(),
                        negociation: randomValue(),
                        receipt: randomValue(),
                        late: randomValue(),
                        situation: randomSituation(),
                        maxPartion: Math.ceil(Math.random() * 24),
                        vencimento: dateRandom(),
                    })),
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
