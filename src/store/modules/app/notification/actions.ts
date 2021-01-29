import { types } from "./types";

const { SHOW_NOTIFICATION, HIDE_NOTIFICATION } = types;

export interface ResultAction {
    type: string;
    payload?: any;
}

interface Actions {
    showNotification(): ResultAction;
    hideNotification(): ResultAction;
}

export const actions: Actions = {
    showNotification: () => ({
        type: SHOW_NOTIFICATION,
    }),
    hideNotification: () => ({
        type: HIDE_NOTIFICATION,
    }),
};
