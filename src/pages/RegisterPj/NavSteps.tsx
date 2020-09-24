import React from "react";

import { FormikProps } from "formik";

import { FormValues } from "./RegisterPj";

interface Props {
    currentStep: number;
    handleGoToStep(step: number, props: FormikProps<FormValues>): void;
    formikBag: FormikProps<FormValues>;

    text: string;
    number: string;
    value: number;
}

const NavSteps: React.FC<Props> = ({ currentStep, handleGoToStep, formikBag, text, number, value }) => {
    return (
        <li>
            <a
                className={`${currentStep === value ? "text-menu-number-c" : "text-menu-number"} pointer`}
                onClick={() => handleGoToStep(value, formikBag)}
            >
                <span className={currentStep === value ? "icon-menu-number-c" : "icon-menu-number"}>{number}</span>
                {text}
            </a>
        </li>
    );
};

export default NavSteps;
