export enum types {
    LOAD_DEBT = "@pj/debt/LOAD_DEBT",
    LOAD_DEBT_INIT = "@pj/debt/LOAD_DEBT_INIT",
    LOAD_DEBT_SUCCESS = "@pj/debt/LOAD_DEBT_SUCCESS",
    LOAD_DEBT_FAILURE = "@pj/debt/LOAD_DEBT_FAILURE",

    ADD_DEBT = "@pj/debt/ADD_DEBT",
    ADD_DEBT_INIT = "@pj/debt/ADD_DEBT_INIT",
    ADD_DEBT_SUCCESS = "@pj/debt/ADD_DEBT_SUCCESS",
    ADD_DEBT_FAILURE = "@pj/debt/ADD_DEBT_FAILURE",

    REMOVE_DEBT = "@pj/debt/REMOVE_DEBT",
    REMOVE_DEBT_INIT = "@pj/debt/REMOVE_DEBT_INIT",
    REMOVE_DEBT_SUCCESS = "@pj/debt/REMOVE_DEBT_SUCCESS",
    REMOVE_DEBT_FAILURE = "@pj/debt/REMOVE_DEBT_FAILURE",

    UPDATE_DEBT = "@pj/debt/UPDATE_DEBT",
    UPDATE_DEBT_INIT = "@pj/debt/UPDATE_DEBT_INIT",
    UPDATE_DEBT_SUCCESS = "@pj/debt/UPDATE_DEBT_SUCCESS",
    UPDATE_DEBT_FAILURE = "@pj/debt/UPDATE_DEBT_FAILURE",

    PAYMENT_BILLET_DEBT = "@pj/debt/PAYMENT_BILLET_DEBT",
    PAYMENT_BILLET_DEBT_INIT = "@pj/debt/PAYMENT_BILLET_DEBT_INIT",
    PAYMENT_BILLET_DEBT_SUCCESS = "@pj/debt/PAYMENT_BILLET_DEBT_SUCCESS",
    PAYMENT_BILLET_DEBT_FAILURE = "@pj/debt/PAYMENT_BILLET_DEBT_FAILURE",
}

export interface Address {
    id: string;
    usuarioId: string;
    bairro: string;
    cep: string;
    cidade: string;
    complemento: string;
    numero: string;
    rua: string;
    uf: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface User {
    nome: string;
    celular: string;
    email: string;
    endereco: Address;
}

export interface Details {
    id: number;
    idRegister: number;
    portion: number;
    dueDate: Date;
    valuePortion: number;
    datePayment: Date;
    situation: number; // [1] ok [2] proxima
    next: number;
}

export interface Consumer {
    id: string;
    usuarioId: string;
    cpf: string;
    usuario: User;
    createdAt: string;
    updatedAt: string;
}

export interface DadosBancarios {
    id: string;
    lojistaId: string;
    agencia: string;
    banco: string;
    conta: string;
    documento: string;
    nomeInstituicao: string;
    nomeTitular: string;
    tipo: string;
    updatedAt: Date;
    createdAt: Date;
}

export interface Shookeeper {
    id: string;
    usuarioId: string;
    cnpj: string;
    dataFundacao: string;
    fantasia: string;
    inscricaoEstadual: string;
    inscricaoMunicipal: string;
    razaoSocial: string;
    usuario: User;
    dadosBancarios: DadosBancarios;
    createdAt: string;
    updatedAt: string;
}

export interface Parcelas {
    id: string;
    negociacaoId: string;
    dataPagamento: Date;
    parcela: number;
    situacao: string;
    valorParcela: number;
    vencimento: Date;
    updatedAt: Date;
    createdAt: Date;
}

export interface Negociation {
    id: string;
    consumidorId: string;
    lojistaId: string;
    debitoId: string;
    dataRegistro: Date;
    dataVencimento: string;
    desconto: number;
    divida: number;
    negociado: number;
    parcelamento: number;
    recebido: number;
    atrasado: number;
    formaPagamento: string;
    situacao: string;
    parcelas: Parcelas[];
    createdAt: Date;
    updatedAt: Date;
}

export interface Debt {
    id: string;
    consumidorId: string;
    lojistaId: string;
    consumidor: Consumer;
    negociacao: Negociation;
    lojista: Shookeeper;
    contrato: string;
    inclusao: string;
    seqdiv: string;
    status: string;
    tipoDoc: string;
    valor: string;
    vencimento: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface ById {
    [key: string]: object;
}

export interface StateDebt {
    byId: ById;
    allId: string[];
}
