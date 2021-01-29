import { Reducer } from "redux";

// app reducers
import { reducers as reducerNotification } from "./notification";

// app state
import { StateNotification } from "./notification/types";

export interface StateApp {
    notification: StateNotification;
}

export const reducers: Reducer = (state = {}, actions) => ({
    notification: reducerNotification(state.notification, actions),
});
