import React, { useCallback, useState } from "react";

import { Formik, Form, FormikProps } from "formik";
import * as Yup from "yup";

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
    cnpj: Yup.string()
        .matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/, "CNPJ inválido")
        .required("obrigatório"),
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

const schemaArray = [Step1Schema, Step2Schema, Step3Schema];

const initialValues: FormValues = {
    cnpj: "12.321.312/0001-21",
    socialReason: "Matheus Paice SA",
    fantasyName: "Matheus Paice",
    foundationDate: "10/10/2020",
    namePartnerMain: "Marina Paice",
    namePartnerSecondary: "",

    cellPhone: "",
    email: "",
    emailConfirm: "",
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

const RegisterPj: React.FC = (props) => {
    const [currentStep, setCurrentStep] = useState(2);
    const [test, setTest] = useState(0);

    const handleSubmit = useCallback((values: FormValues) => {
        // TODO: call action

        console.log(values);
    }, []);

    const handleNextSteps = (props: FormikProps<FormValues>) => {
        props.submitForm().then(() => {
            setTest((prevState) => prevState + 1);

            if (test > 0 && props.isValid) {
                setCurrentStep((prevState) => prevState + 1);
                props.validateForm();
                props.setTouched({});
            }
        });
    };

    const handlePrevSteps = () => {
        setCurrentStep((prevCurrentPage) => prevCurrentPage - 1);
    };

    const handleGoToStep = (step: number, props: FormikProps<FormValues>) => {
        props.submitForm().then(() => {
            setTest((prevState) => prevState + 1);

            if (test > 0 && props.isValid) {
                setCurrentStep(step);
                props.validateForm();
                props.setTouched({});
            }
        });
    };

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
                <Formik
                    initialValues={initialValues}
                    validationSchema={schemaArray[currentStep]}
                    onSubmit={handleSubmit}
                    enableReinitialize
                >
                    {(formikBag) => (
                        <Form>
                            <div className="col-xs-12">
                                <nav className="menu-pj">
                                    <ul style={{ marginBottom: 30 }}>
                                        <NavSteps
                                            currentStep={currentStep}
                                            handleGoToStep={handleGoToStep}
                                            formikBag={formikBag}
                                            text="Cadastro inicial"
                                            number="1"
                                            value={0}
                                        />
                                        <NavSteps
                                            currentStep={currentStep}
                                            handleGoToStep={handleGoToStep}
                                            formikBag={formikBag}
                                            text="Contato"
                                            number="2"
                                            value={1}
                                        />
                                        <NavSteps
                                            currentStep={currentStep}
                                            handleGoToStep={handleGoToStep}
                                            formikBag={formikBag}
                                            text="Dados Bancários"
                                            number="3"
                                            value={2}
                                        />
                                    </ul>
                                </nav>
                            </div>
                            {currentStep === 0 && <Step1 handleNextSteps={handleNextSteps} formikProps={formikBag} />}
                            {currentStep === 1 && (
                                <Step2
                                    handleNextSteps={handleNextSteps}
                                    handlePrevSteps={handlePrevSteps}
                                    formikProps={formikBag}
                                />
                            )}
                            {currentStep === 2 && <Step3 handlePrevSteps={handlePrevSteps} />}
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default RegisterPj;
