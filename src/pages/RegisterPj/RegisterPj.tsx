import React, { useCallback, useState, useEffect } from "react";

import { Formik, Form, FormikProps } from "formik";
import * as Yup from "yup";

import { FormStepper, FormStep } from "../../components/FormStepper";

import { Container } from "./RegisterPjContainer";

import { CertificateData } from "../../context/usuario";

export interface FormValues {
    cnpj: string;
    socialReason: string;
    fantasyName: string;
    foundationDate: string;
    namePartnerMain: string;
    namePartnerSecondary: string;

    cellPhone: string;
    email: string;
    emailConfirm: string;
    password: string;
    passwordConfirm: string;
    zipcode: string;
    type: string;
    address: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    uf: string;

    accountType: string;
    bank: string;
    agency: string;
    account: string;
    digit: string;
    holder: string;
    documentHolder: string;

    termsOfUse: boolean;
    receiveTips: boolean;
}

// steps
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";

import NavSteps from "./NavSteps";

// validation form step 1
const Step1Schema = Yup.object().shape({
    cnpj: Yup.string().required("obrigatório"),
    socialReason: Yup.string().required("obrigatório"),
    fantasyName: Yup.string().required("obrigatório"),
    foundationDate: Yup.string()
        .required("obrigatório")
        .matches(/^\d{2}\/\d{2}\/\d{4}$/, "data da fundação inválida"),
    namePartnerMain: Yup.string().required("obrigatório"),
});

// validation form step 2
const Step2Schema = Yup.object().shape({
    cellPhone: Yup.string()
        .required("obrigatório")
        .matches(/^\(\d{2}\)\ \d{5}-\d{4}$/, "celular inválido"),
    email: Yup.string().email("e-mail inválido").required("obrigatório"),
    emailConfirm: Yup.string()
        .email("e-mail inválido")
        .required("obrigatório")
        .oneOf([Yup.ref("email")], "os emails devem corresponder"),
    password: Yup.string().required("obrigatório"),
    passwordConfirm: Yup.string()
        .required("obrigatório")
        .oneOf([Yup.ref("password")], "as senhas devem corresponder"),
    zipcode: Yup.string().matches(/^\d{5}-\d{3}$/, "CEP inválido"),
    address: Yup.string().required("obrigatório"),
    number: Yup.string().required("obrigatório"),
    neighborhood: Yup.string().required("obrigatório"),
    city: Yup.string().required("obrigatório"),
    uf: Yup.string().required("obrigatório"),
});

// validation form step 3
const Step3Schema = Yup.object().shape({
    accountType: Yup.string().required("obrigatório"),
    bank: Yup.string().required("obrigatório"),
    agency: Yup.string().required("obrigatório"),
    account: Yup.string().required("obrigatório"),
    digit: Yup.string().required("obrigatório"),
    holder: Yup.string().required("obrigatório"),
    documentHolder: Yup.string()
        .matches(
            /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/,
            "CPF ou CNPJ inválido",
        )
        .required("obrigatório"),
    termsOfUse: Yup.bool().oneOf([true], "você precisa aceitar os termos para seguir em frente"),
});

const initialValues: FormValues = {
    cnpj: "",
    socialReason: "",
    fantasyName: "",
    foundationDate: "",
    namePartnerMain: "",
    namePartnerSecondary: "",

    cellPhone: "",
    email: "",
    emailConfirm: "",
    password: "",
    passwordConfirm: "",
    zipcode: "",
    type: "",
    address: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    uf: "",

    accountType: "",
    bank: "",
    agency: "",
    account: "",
    digit: "",
    holder: "",
    documentHolder: "",

    termsOfUse: false,
    receiveTips: false,
};

interface Props {
    payload: {
        data: {
            dataCertificate: CertificateData;
        };
        actions: {
            create(data): void;
            handleClearDataCertificate(): void;
        };
    };
}

const RegisterPj: React.FC<Props> = ({ payload }) => {
    const { data, actions } = payload;

    const { dataCertificate } = data;
    const { create, handleClearDataCertificate } = actions;

    const [values, setValues] = useState<FormValues>(initialValues);

    useEffect(() => {
        if (dataCertificate) {
            setValues({
                ...values,
                cnpj: dataCertificate.cnpj,
                socialReason: dataCertificate.name,
                namePartnerMain: dataCertificate.responsavel,
                email: dataCertificate.email,
                emailConfirm: dataCertificate.email,
            });
        }

        return () => {
            handleClearDataCertificate();
        };
    }, [dataCertificate]);

    const handleSubmit = useCallback((values: FormValues) => {
        create(values);
    }, []);

    const isDataCertificate = !!dataCertificate;

    return (
        <div className="page">
            <div className="container">
                <div className="descmod cadastro">
                    <div className="col-xs-12">
                        <div className="titulo-mob noneBr">
                            Faça seu cadastro para podermos te ajudar <br />a manter sua empresa em dia!
                        </div>
                    </div>
                </div>
                <FormStepper initialValues={values} onSubmit={handleSubmit}>
                    <FormStep validationSchema={Step1Schema}>
                        <Step1 disabled={isDataCertificate} />
                    </FormStep>

                    <FormStep validationSchema={Step2Schema}>
                        <Step2 />
                    </FormStep>

                    <FormStep validationSchema={Step3Schema}>
                        <Step3 />
                    </FormStep>
                </FormStepper>
            </div>
        </div>
    );
};

export default Container(RegisterPj);
