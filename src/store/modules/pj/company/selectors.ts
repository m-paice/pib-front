// import { createSelector } from "reselect";

// application interface
import { ApplicationState } from "./../../../index";

export const companiesById = (state: ApplicationState) => state.pj.companies.byId;
