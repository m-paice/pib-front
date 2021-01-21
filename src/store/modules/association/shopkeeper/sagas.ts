import { put, select, call } from "redux-saga/effects";

import { types } from "./types";

// selectors
import { getShopkeeperById } from "./selectors";

// api
import api from "../../../../service/api";

function* loadShopkeepers() {
    try {
        const response = yield call(api.get, "/associacao/lojista");

        yield put({
            type: types.LOAD_SHOPKEEPER_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        yield put({
            type: types.LOAD_SHOPKEEPER_FAILURE,
        });
    }
}

function* updateShopkeeper(action) {
    const { payload } = action;

    const shopkeeer = yield select((state) => getShopkeeperById(state, payload));

    const payloadData = {
        habilitado: !shopkeeer.usuario.habilitado,
    };

    try {
        const response = yield call(api.put, `/associacao/lojista/${payload}`, payloadData, {
            params: {
                include: ["usuario"],
            },
        });

        yield put({
            type: types.UPDATE_SHOPKEEPER_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        yield put({
            type: types.UPDATE_SHOPKEEPER_FAILURE,
        });
    }
}

export default {
    loadShopkeepers,
    updateShopkeeper,
};
