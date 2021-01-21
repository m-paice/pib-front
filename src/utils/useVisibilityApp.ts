import { useCallback } from "react";
import { useIdleTimer } from "react-idle-timer";

// store
import storeDefault from "../store";
import { types as typesAuth } from "../store/modules/auth/types";

// utils
import history from "../utils/history";

export default () => {
    const { store } = storeDefault();

    const setUserAway = useCallback(() => {
        store.dispatch({
            type: typesAuth.AUTH_LOGOUT,
        });

        history.push("/");
    }, []);

    const setUserOnline = useCallback(() => {}, []);

    useIdleTimer({
        timeout: 1000 * 60 * 1, // 5 minutes
        onIdle: setUserAway,
        onActive: setUserOnline,
        debounce: 1000,
        // events: ["visibilitychange"],
    });
};
