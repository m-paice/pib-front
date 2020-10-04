import { put } from "redux-saga/effects";

import { types } from "./types";

const randomSituation = () => Math.ceil(Math.random() * 3);

const randomValue = () => Math.ceil(Math.random() * 999);

function* loadDebtors() {
    try {
        const response = yield new Promise((resolve) => {
            setTimeout(() => {
                resolve(
                    Array.from({ length: 35 }).map((_, index) => ({
                        id: index.toString(),
                        document: "460.328.018-10",
                        name: "Matheus Paice",
                        debit: randomValue(),
                        negociation: randomValue(),
                        receipt: randomValue(),
                        late: randomValue(),
                        situation: randomSituation(),
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
