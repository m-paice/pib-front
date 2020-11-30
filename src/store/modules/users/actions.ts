import { types } from "./types";

const { LOAD_USER, CREATE_USER } = types;

export interface ResultAction {
    type: string;
    payload?: any;
}

interface Actions {
    load(): ResultAction;
    create(data): ResultAction;
}

export const actions: Actions = {
    load: () => ({
        type: LOAD_USER,
    }),
    create: (data) => ({
        type: CREATE_USER,
        payload: data,
    }),
};
