import { put } from "redux-saga/effects";

import { types } from "./types";
import { Result } from "./actions";

const valueForOperation = {
    1: () => Math.ceil(Math.random() * 1000),
    2: () => Math.ceil(Math.random() * 300),
    3: () => Math.ceil(Math.random() * 20),
    4: () => Math.ceil(Math.random() * 15),
};

let i = 0;
const operation = () => {
    if (i < 4) {
        i = i + 1;
        return 1;
    }

    if (i >= 4) {
        i = 0;
        return Math.ceil(Math.random() * 4);
    }

    return 0;
};

const dateRandom = () => {
    const dataIni = new Date(2020, 0, 1);
    const dataAtual = new Date(2020, 11, 30);
    return new Date(dataIni.getTime() + Math.random() * (dataAtual.getTime() - dataIni.getTime()));
};

interface Names {
    [key: number]: string;
}

const namesRandom = () => {
    const numberRandom = Math.ceil(Math.random() * 5);

    const names: Names = {
        1: "Matheus Paice SA",
        2: "Lucas Zinner SA",
        3: "Felipe Soares SA",
        4: "Marina Paice SA",
        5: "Vanessa Vasconcelos SA",
    };

    return names[numberRandom];
};

function* loadNegociation() {
    try {
        const response = yield new Promise((resolve) => {
            setTimeout(() => {
                resolve(
                    Array.from({ length: 50 }).map((_, index) => {
                        return {
                            id: index.toString(),
                            date: dateRandom(),
                            cnpj: "123.456.789/0001-00",
                            nameCompany: namesRandom(),
                            operation: operation(),
                            value: valueForOperation[operation()](),
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
