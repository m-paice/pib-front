import { createSelector } from "reselect";

import { Negociation } from "./types";
// common selectors
import { getElements } from "../../common/selectors";
// application interface
import { ApplicationState } from "./../../../index";

export const stateNegociation = (state: ApplicationState) => getElements<Negociation>(state.pj.negociations);

export const dataNegociation = createSelector(stateNegociation, (negociations) =>
    negociations.map((negociation) => negociation),
);
