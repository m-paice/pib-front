import React, { useState } from "react";

import { Tooltip } from "reactstrap";

interface Props {
    text: string;
    title: string;
    reference: string;
    handleOrderForColumn: (column: string) => void;
}

const TheadItem: React.FC<Props> = ({ text, title, reference, handleOrderForColumn }) => {
    const name = title.replace(/\s/g, "");

    const [state, setState] = useState({
        [name]: false,
    });

    const handleSetState = (nameSelected: string) => {
        setState((prevState) => ({
            ...prevState,
            [nameSelected]: !prevState[nameSelected],
        }));
    };

    return (
        <th className="titulo-lista-regras pointer" style={{ whiteSpace: "break-spaces" }}>
            <div className="help" onClick={() => handleOrderForColumn(reference)}>
                <span style={{ color: "#000" }} id={name}>
                    {text}
                </span>
                <span className="glyphicon glyphicon-question-sign ml-2"></span>
            </div>
            <Tooltip
                target={name}
                placement="top"
                isOpen={state[name]}
                autohide={false}
                toggle={() => handleSetState(name)}
            >
                {title}
            </Tooltip>
        </th>
    );
};

export default TheadItem;
