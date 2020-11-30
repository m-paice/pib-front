import { put, call } from "redux-saga/effects";

import { types } from "./types";

import api from "../../../service/api";

function* create(action) {
    const { payload } = action;

    const payloadData = {
        document: "fisica",
        cpf: payload.cpf,
        senha: payload.password,
        nome: payload.name,
        nascimento: payload.birthDate,
        email: payload.email,
        celular: payload.phone,
    };

    try {
        const response = yield call(api.post, "/usuario", payloadData);

        yield put({ type: types.CREATE_USER_SUCCESS });
    } catch (error) {
        yield put({ type: types.CREATE_USER_FAILURE });
    }
}

export default {
    create,
};
