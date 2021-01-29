import { Reducer } from "redux";
import { StateNotification, types } from "./types";
import { types as typesAuth } from "../../auth/types";

const { SHOW_NOTIFICATION_SUCCESS, HIDE_NOTIFICATION_SUCCESS } = types;

const initialState: StateNotification = {
    show: false,
};

const reducerNotification: Reducer = (state = false, action) => {
    const { type, payload } = action;

    switch (type) {
        case SHOW_NOTIFICATION_SUCCESS:
            return payload;
        case HIDE_NOTIFICATION_SUCCESS:
            return payload;
        case typesAuth.AUTH_LOGOUT_SUCCESS:
            return false;
        default:
            return state;
    }
};

export const reducers: Reducer<StateNotification> = (state = initialState, actions) => ({
    show: reducerNotification(state.show, actions),
});
