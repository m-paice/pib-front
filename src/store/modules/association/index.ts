import { Reducer } from "redux";

// association reducers
import { reducers as reducersshopkeeper } from "./shopkeeper";

// association state
import { StateShopkeeper } from "./shopkeeper/types";

export interface StateAssociation {
    shopkeeper: StateShopkeeper;
}

export const reducers: Reducer = (state = {}, actions) => ({
    shopkeeper: reducersshopkeeper(state.shopkeeper, actions),
});
