export enum types {
    LOAD_DEBTOR = "@pj/DEBTOR/LOAD_DEBTOR",
    LOAD_DEBTOR_INIT = "@pj/DEBTOR/LOAD_DEBTOR_INIT",
    LOAD_DEBTOR_SUCCESS = "@pj/DEBTOR/LOAD_DEBTOR_SUCCESS",
    LOAD_DEBTOR_FAILURE = "@pj/DEBTOR/LOAD_DEBTOR_FAILURE",

    CLOSE_OR_OPEN_DEBTOR = "@pj/DEBTOR/CLOSE_OR_OPEN_DEBTOR",
    CLOSE_OR_OPEN_DEBTOR_INIT = "@pj/DEBTOR/CLOSE_OR_OPEN_DEBTOR_INIT",
    CLOSE_OR_OPEN_DEBTOR_SUCCESS = "@pj/DEBTOR/CLOSE_OR_OPEN_DEBTOR_SUCCESS",
    CLOSE_OR_OPEN_DEBTOR_FAILURE = "@pj/DEBTOR/CLOSE_OR_OPEN_DEBTOR_FAILURE",

    ADD_DEBTOR = "@pj/DEBTOR/ADD_DEBTOR",
    ADD_DEBTOR_INIT = "@pj/DEBTOR/ADD_DEBTOR_INIT",
    ADD_DEBTOR_SUCCESS = "@pj/DEBTOR/ADD_DEBTOR_SUCCESS",
    ADD_DEBTOR_FAILURE = "@pj/DEBTOR/ADD_DEBTOR_FAILURE",

    REMOVE_DEBTOR = "@pj/DEBTOR/REMOVE_DEBTOR",
    REMOVE_DEBTOR_INIT = "@pj/DEBTOR/REMOVE_DEBTOR_INIT",
    REMOVE_DEBTOR_SUCCESS = "@pj/DEBTOR/REMOVE_DEBTOR_SUCCESS",
    REMOVE_DEBTOR_FAILURE = "@pj/DEBTOR/REMOVE_DEBTOR_FAILURE",

    UPDATE_DEBTOR = "@pj/DEBTOR/UPDATE_DEBTOR",
    UPDATE_DEBTOR_INIT = "@pj/DEBTOR/UPDATE_DEBTOR_INIT",
    UPDATE_DEBTOR_SUCCESS = "@pj/DEBTOR/UPDATE_DEBTOR_SUCCESS",
    UPDATE_DEBTOR_FAILURE = "@pj/DEBTOR/UPDATE_DEBTOR_FAILURE",
}

export interface User {
    nome: string;
}

export interface PortionNegociation {
    id: string;
    negociacaoId: string;
    dataPagamento: Date;
    parcela: number;
    situacao: string;
    valorParcela: number;
    vencimento: Date;
    createdAt: string;
    updatedAt: string;
}
export interface Negociation {
    id: string;
    lojistaId: string;
    consumidorId: string;
    debitoId: string;
    atrasado: number;
    dataRegistro: Date;
    dataVencimento: Date;
    desconto: number;
    divida: number;
    formaPagamento: string;
    negociado: number;
    parcelamento: number;
    recebido: number;
    situacao: string;
    parcelas: PortionNegociation[];
    updatedAt: Date;
    createdAt: Date;
}
export interface shopkeeper {
    id: string;
    usuarioId: string;
    cnpj: string;
    dataFundacao: Date;
    fantasia: string;
    inscricaoEstadual: string;
    inscricaoMunicipal: string;
    razaoSocial: string;
    usuario: User;
    updatedAt: Date;
    createdAt: Date;
}

export interface Consumer {
    id: string;
    usuarioId: string;
    cpf: string;
    usuario: User;
    createdAt: Date;
    updatedAt: Date;
}

export interface Debtor {
    id: string;
    consumidorId: string;
    lojistaId: string;
    contrato: string;
    inclusao: string;
    seqdiv: string;
    status: string;
    tipoDoc: string;
    valor: number;
    vencimento: Date;
    habilitado: boolean;
    consumidor: Consumer;
    lojista: shopkeeper;
    negociacao?: Negociation;
    updatedAt: Date;
    createdAt: Date;
}

export interface ById {
    [key: string]: object;
}

export interface StateDebtor {
    byId: ById;
    allId: string[];
}
