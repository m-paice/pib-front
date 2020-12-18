import { put, call } from "redux-saga/effects";

import { types } from "./types";
import { types as typesAuth } from "../auth/types";

import history from "../../../utils/history";

import api from "../../../service/api";

function* create(action) {
    const { payload } = action;

    let payloadData;

    if (payload.document === "consumidor") {
        payloadData = {
            document: payload.document,
            cpf: payload.cpf,
            senha: payload.password,
            nome: payload.name,
            nascimento: payload.birthDate,
            email: payload.email,
            celular: payload.phone,
        };
    }

    if (payload.document === "lojista") {
        payloadData = {
            document: payload.document,
            cnpj: payload.cnpj,
            razaoSocial: payload.socialReason,
            fantasia: payload.fantasyName,
            dataFundacao: payload.foundationDate,
            acionista: payload.namePartnerMain,

            celular: payload.cellPhone,
            email: payload.email,
            senha: payload.password,

            cep: payload.zipcode,
            rua: payload.address,
            numero: payload.number,
            complemento: payload.complement,
            bairro: payload.neighborhood,
            cidade: payload.city,
            uf: payload.uf,

            tipo: payload.accountType,
            banco: payload.bank,
            nomeInstituicao: payload.bank,
            agencia: payload.agency,
            conta: payload.account + "-" + payload.digit,
            nomeTitular: payload.holder,
            documento: payload.documentHolder,
        };
    }

    try {
        const response: {
            data: {
                user: any;
                token: string;
                document: string;
            };
        } = yield call(api.post, "/usuario", payloadData);

        yield put({
            type: typesAuth.AUTH_LOGIN_SUCCESS,
            payload: {
                token: response.data.token,
                user: response.data.user,
            },
        });

        const typeUserAuthenticated = yield response.data.document;

        // TODO: load actions for user

        yield history.push("/" + typeUserAuthenticated);

        yield put({ type: types.CREATE_USER_SUCCESS });
    } catch (error) {
        yield put({ type: types.CREATE_USER_FAILURE });
    }
}

export default {
    create,
};
