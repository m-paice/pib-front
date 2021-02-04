export enum types {
    LOAD_WALLET = "@pj/WALLET/LOAD_WALLET",
    LOAD_WALLET_INIT = "@pj/WALLET/LOAD_WALLET_INIT",
    LOAD_WALLET_SUCCESS = "@pj/WALLET/LOAD_WALLET_SUCCESS",
    LOAD_WALLET_FAILURE = "@pj/WALLET/LOAD_WALLET_FAILURE",
}

export interface Lojista {
    id: string;
    associacaoId: string;
    usuarioId: string;
    cnpj: string;
    dataFundacao: Date;
    fantasia: string;
    inscricaoEstadual: null;
    inscricaoMunicipal: null;
    razaoSocial: string;
    updatedAt: Date;
    createdAt: Date;
}

export interface Wallet {
    id: string;
    lojistaId: string;
    documento: string;
    nome: string;
    operacao: string;
    valor: number;
    lojista: Lojista;
    updatedAt: Date;
    createdAt: Date;
}

export interface ById {
    [key: string]: object;
}

export interface StateWallet {
    byId: ById;
    allId: string[];
}
