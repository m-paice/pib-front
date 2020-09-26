import { put } from "redux-saga/effects";

import { types } from "./types";

function* loadNegociation() {
    try {
        const response = yield new Promise((resolve) => {
            setTimeout(() => {
                resolve(
                    Array.from({ length: 60 }).map((_, index) => ({
                        id: index.toString(),
                        yaerDebit: (index + 1).toString(),
                        interest: (Math.random() * 8).toFixed(1),
                        discount: (Math.random() * 12).toFixed(1),
                        maxPortion: Math.floor(Math.random() * 12),
                        attenuator: (Math.random() * 12).toFixed(1),
                        trafficTicket: (Math.random() * 2).toFixed(1),
                        readjustment: (Math.random() * 100).toFixed(1),
                    })),
                );
            }, 2000);
        });

        yield put({
            type: types.LOAD_NEGOCIATION_SUCCESS,
            payload: response,
        });
    } catch (error) {
        yield put({ type: types.LOAD_NEGOCIATION_FAILURE });
    }
}

export default {
    loadNegociation,
};
