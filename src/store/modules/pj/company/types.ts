export enum types {
    ADD_COMPANY = "@pj/company/ADD_COMPANY",
    ADD_COMPANY_INIT = "@pj/company/ADD_COMPANY_INIT",
    ADD_COMPANY_SUCCESS = "@pj/company/ADD_COMPANY_SUCCESS",
    ADD_COMPANY_FAILURE = "@pj/company/ADD_COMPANY_FAILURE",

    REMOVE_COMPANY = "@pj/company/REMOVE_COMPANY",
    REMOVE_COMPANY_INIT = "@pj/company/REMOVE_COMPANY_INIT",
    REMOVE_COMPANY_SUCCESS = "@pj/company/REMOVE_COMPANY_SUCCESS",
    REMOVE_COMPANY_FAILURE = "@pj/company/REMOVE_COMPANY_FAILURE",

    UPDATE_COMPANY = "@pj/company/UPDATE_COMPANY",
    UPDATE_COMPANY_INIT = "@pj/company/UPDATE_COMPANY_INIT",
    UPDATE_COMPANY_SUCCESS = "@pj/company/UPDATE_COMPANY_SUCCESS",
    UPDATE_COMPANY_FAILURE = "@pj/company/UPDATE_COMPANY_FAILURE",
}

export interface Address {
    zipcode: string;
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    uf: string;
    main: boolean;
}

export interface PhoneNumber {
    ddd: string;
    number: string;
    main: boolean;
}

export interface Company {
    id: string;
    name: string;
    cnpj: string;
    email: string;
    address: Address[];
    phoneNumbers: PhoneNumber[];
    createdAt: Date | null;
    updatedAt: Date | null;
}

export interface ById {
    [key: string]: object;
}

export interface StateCompany {
    byId: ById;
    allId: string[];
}
