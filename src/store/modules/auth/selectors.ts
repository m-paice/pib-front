import { createSelector } from "reselect";

// application interface
import { ApplicationState } from "./../../index";

export const userIdAuthenticated = (state: ApplicationState) => state.auth.user.id;
export const userAuthenticated = (state: ApplicationState) => state.auth.user;
export const tokenAuthenticated = (state: ApplicationState) => state.auth.token;

export const userEnabled = (state: ApplicationState) => state.auth.user.habilitado;
