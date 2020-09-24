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
}

// steps
import Step1 from "./Steps/Step1";
import Stpe2 from "./Steps/Step2";

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
    email: Yup.string().required("obrigatório"),
    emailConfirm: Yup.string()
        .required("obrigatório")
        .oneOf([Yup.ref("email")], "os emails devem corresponder"),
    zipcode: Yup.string().matches(/^\d{5}-\d{3}$/, "CEP inválido"),
    address: Yup.string().required("obrigatório"),
    number: Yup.string().required("obrigatório"),
    neighborhood: Yup.string().required("obrigatório"),
    city: Yup.string().required("obrigatório"),
    uf: Yup.string().required("obrigatório"),
});

const schemaArray = [Step1Schema, Step2Schema];

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
    zipcode: "",
    type: "",
    address: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    uf: "",
};

const RegisterPj: React.FC = (props) => {
    const [currentStep, setCurrentStep] = useState(0);
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
                        <Form className="p-4">
                            <div className="col-xs-12">
                                <nav className="menu-pj">
                                    <ul>
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
                                <Stpe2
                                    handleNextSteps={handleNextSteps}
                                    handlePrevSteps={handlePrevSteps}
                                    formikProps={formikBag}
                                />
                            )}
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default RegisterPj;
