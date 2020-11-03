import { put } from "redux-saga/effects";

import { types } from "./types";

import data from "../../../../data/debts";
import portionData from "../../../../data/portion";
import companiesData from "../../../../data/companies";

function* loadDebtors() {
    try {
        const response = data.reduce((acc, cur) => {
            const portionFiltered = portionData.filter((item) => item.idRegister === cur.id);
            const companyFiltered = companiesData.filter((item) => item.id === cur.companyId);

            return [...acc, { ...cur, detailsPortion: portionFiltered, company: companyFiltered }];
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
