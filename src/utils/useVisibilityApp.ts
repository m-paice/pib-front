import { useCallback } from "react";
import { useIdleTimer } from "react-idle-timer";

export default () => {
    const setUserAway = useCallback(() => {
        console.log("offline");
    }, []);

    const setUserOnline = useCallback(() => {
        console.log("online");
    }, []);

    useIdleTimer({
        timeout: 1000 * 60 * 1, // 5 minutes
        onIdle: setUserAway,
        onActive: setUserOnline,
        debounce: 1000,
        // events: ["visibilitychange"],
    });
};
