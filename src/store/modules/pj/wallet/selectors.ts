import { createSelector } from "reselect";

import { Wallet } from "./types";

// common selectors
import { getElements } from "../../common/selectors";
// application interface
import { ApplicationState } from "./../../../index";

export const stateWallet = (state: ApplicationState) => getElements<Wallet>(state.pj.wallet);

export const dataWallet = createSelector(stateWallet, (walletItems) =>
    walletItems.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1)).map((walletItem) => walletItem),
);

// total values received
export const totalValueReceived = createSelector(stateWallet, (walletItems) =>
    walletItems.filter((item) => item.operacao === "saldo").reduce((acc, cur) => acc + cur.valor, 0),
);

// total values rescued
export const totalValueRescued = createSelector(stateWallet, (walletItems) =>
    walletItems.filter((item) => item.operacao !== "saldo").reduce((acc, cur) => acc + cur.valor, 0),
);

export const totalValue = createSelector(stateWallet, (walletItems) => {
    return walletItems.reduce((acc, cur) => {
        const operationType = {
            comissao: acc - cur.valor,
            recebimento: acc + cur.valor,
        };

        return operationType[cur.operacao];
    }, 0);
});
