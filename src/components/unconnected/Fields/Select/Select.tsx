import React from "react";

import Select from "react-select";

interface Options {
    value: string | number;
    label: string;
}

interface Props {
    options: Options[];
    value: any;
    onChange(value: any): void;
    onBlur?(): void;
    placeholder?: string;
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

const SelectComponent: React.FC<Props> = (props) => {
    return (
        <div>
            <Select styles={customStyles} className="form-control selectAzul-2" {...props} />
        </div>
    );
};

export default SelectComponent;
