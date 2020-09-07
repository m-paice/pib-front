import { eventChannel, buffers } from "redux-saga";
import io from "socket.io-client";

const socketURL = process.env.SOCKET_URL || "http://127.0.0.1:5050";

export function createSocketConnection(token) {
    return io(socketURL, {
        query: {
            token,
        },
        transports: ["websocket"],
        upgrade: false,
    });
}

export function createSocketChannel(socket, namespace) {
    return eventChannel((emit) => {
        const eventHandler = (event) => {
            emit(event);
        };

        const errorHandler = (errorEvent) => {
            emit(new Error(errorEvent.reason));
        };

        socket.on(`${namespace}`, eventHandler);
        socket.on("error", errorHandler);

        const unsubscribe = () => {
            socket.off(`${namespace}`, eventHandler);
        };

        return unsubscribe;
    }, buffers.expanding(100));
}
