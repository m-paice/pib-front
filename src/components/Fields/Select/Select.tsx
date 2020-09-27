import React from "react";

import Select from "react-select";
import { FieldProps } from "formik";

interface Options {
    value: string;
    label: string;
}

interface Props {
    fieldProps: FieldProps;
    options: Options[];
    placeholder: string;
}

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: "#000",
        backgroundColor: state.isSelected ? "#08ccfd" : "#fff",
    }),
    control: () => ({
        width: "100%",
        marginTop: "-11px",
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = "opacity 300ms";

        return { ...provided, opacity, transition };
    },
};

const SelectComponent: React.FC<Props> = ({ fieldProps, options, placeholder }) => {
    return (
        <div>
            <Select
                styles={customStyles}
                className="form-control selectAzul-2"
                options={options}
                name={fieldProps.field.name}
                value={fieldProps.field.value}
                onChange={(event) => fieldProps.form.setFieldValue(fieldProps.field.name, event)}
                onBlur={fieldProps.field.onBlur}
                placeholder={placeholder}
            />
            <span className="erro">{fieldProps.meta.touched && fieldProps.meta.error && fieldProps.meta.error}</span>
        </div>
    );
};

export default SelectComponent;
