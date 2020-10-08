import { createSelector } from "reselect";

// application interface
import { ApplicationState } from "./../../index";

export const userAuthenticated = (state: ApplicationState) => state.auth.user;
export const tokenAuthenticated = (state: ApplicationState) => state.auth.token;