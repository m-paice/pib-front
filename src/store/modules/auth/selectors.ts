import { createSelector } from "reselect";

// application interface
import { ApplicationState } from "./../../index";

export const userIdAuthenticated = (state: ApplicationState) => state.auth.user.id;
export const userAuthenticated = (state: ApplicationState) => state.auth.user;
export const tokenAuthenticated = (state: ApplicationState) => state.auth.token;

export const userEnabled = (state: ApplicationState) => state.auth.user.habilitado;
export const userActiveNotifications = (state: ApplicationState) => state.auth.user.ativacao === "ambos";

export const message = (state: ApplicationState) => state.auth.message;

export const userTypeActiveAccount = (state: ApplicationState) =>
    state.auth.user.ativacao === "sms" ? "SMS" : "E-mail";

export const userTypeActiveAccountContrary = (state: ApplicationState) =>
    state.auth.user.ativacao === "sms" ? "E-mail" : "Telefone";
