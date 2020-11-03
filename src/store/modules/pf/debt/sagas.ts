import { put, select } from "redux-saga/effects";

import { types } from "./types";
import { ResultAction } from "./actions";

import data from "../../../../data/debts";
import portionData from "../../../../data/portion";
import companiesData from "../../../../data/companies";

import { User } from "../../auth/types";

import { userIdAuthenticated, userAuthenticated } from "../../auth/selectors";

function* loadDebt() {
    const user: User = yield select(userAuthenticated);

    try {
        const response = data
            .filter((item) => item.document === user.document)
            .reduce((acc, cur) => {
                const portionFiltered = portionData.filter((item) => item.idRegister === cur.id);
                const companyFiltered = companiesData.filter((item) => item.id === cur.companyId);

                return [...acc, { ...cur, detailsPortion: portionFiltered, company: companyFiltered }];
            }, []);

        yield put({
            type: types.LOAD_DEBT_SUCCESS,
            payload: response,
        });
    } catch (error) {
        yield put({
            type: types.LOAD_DEBT_FAILURE,
        });
    }
}

function* createDebt(action: ResultAction) {
    const { type, payload } = action;

    const userId = yield select(userIdAuthenticated);

    try {
        yield put({
            type: types.ADD_DEBT_SUCCESS,
            payload: data
                .filter((item) => item.document === userId)
                .map((item) => ({
                    ...item,
                    userId,
                })),
        });
    } catch (error) {
        yield put({ type: types.ADD_DEBT_FAILURE });
    }
}

export default {
    loadDebt,
    createDebt,
};
