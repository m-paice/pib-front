import { TypesUser } from "./types";

const { ADD_USER, REMOVE_USER, UPDATE_USER } = TypesUser;

interface Result {
    type: string;
    payload?: any;
}

interface ActionsUser {
    addUser(data: any): Result;
    removeUser(id: string): Result;
    updateUser(id: string, data: any): Result;
}

export const actionsUser: ActionsUser = {
    addUser: (data) => ({
        type: ADD_USER,
        payload: data,
    }),
    removeUser: (id) => ({
        type: REMOVE_USER,
        payload: id,
    }),
    updateUser: (id, data) => ({
        type: UPDATE_USER,
        payload: {
            id,
            data,
        },
    }),
};
