import { createSelector } from "reselect";

import { Shopkeeper } from "./types";
// common selectors
import { getElements, getElementById } from "../../common/selectors";
// application interface
import { ApplicationState } from "./../../../index";

export const stateShopkeeper = (state: ApplicationState) => getElements<Shopkeeper>(state.association.shopkeeper);

export const dataShopkeeper = createSelector(stateShopkeeper, (shopkeepers) => shopkeepers.map((item) => item));

export const getShopkeeperById = createSelector(
    stateShopkeeper,
    (_, idShopkeeper) => idShopkeeper,
    (shopkeepers, shopkeeperId) => shopkeepers.find((item) => item.id === shopkeeperId),
);
