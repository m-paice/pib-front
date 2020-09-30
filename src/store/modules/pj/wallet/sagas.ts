import { put } from "redux-saga/effects";

import { types } from "./types";
import { Result } from "./actions";

const valueForOperation = {
    1: () => Math.ceil(Math.random() * 1000),
    2: () => Math.ceil(Math.random() * 1000),
    3: () => Math.ceil(Math.random() * 50),
    4: () => Math.ceil(Math.random() * 15),
};

function* loadNegociation() {
    try {
        const response = yield new Promise((resolve) => {
            setTimeout(() => {
                resolve(
                    Array.from({ length: 5 }).map((_, index) => {
                        const operation = Math.ceil(Math.random() * 4);

                        return {
                            id: index.toString(),
                            date: new Date(),
                            cnpj: "123.456.789/0001-00",
                            nameCompany: "Matheus Paice SA",
                            operation,
                            value: valueForOperation[operation](),
                        };
                    }),
                );
            }, 2000);
        });

        yield put({
            type: types.LOAD_WALLET_SUCCESS,
            payload: response,
        });
    } catch (error) {
        yield put({ type: types.LOAD_WALLET_FAILURE });
    }
}

function* addItemWallet(action: Result) {
    const { type, payload } = action;

    yield put({ type: types.ADD_WALLET_SUCCESS, payload });
}

export default {
    loadNegociation,
    addItemWallet,
};
