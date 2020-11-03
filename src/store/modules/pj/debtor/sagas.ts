import { put } from "redux-saga/effects";

import { types } from "./types";

import data from "../../../../data/debts";
import portionData from "../../../../data/portion";

function* loadDebtors() {
    try {
        const response = data.reduce((acc, cur) => {
            const portionFiltered = portionData.filter((item) => item.idRegister === cur.id);

            return [...acc, { ...cur, detailsPortion: portionFiltered }];
        }, []);

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
