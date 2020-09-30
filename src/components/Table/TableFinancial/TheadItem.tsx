import React from "react";

interface Props {
    text: string;
    title: string;
    reference: string;
    handleOrderForColumn: (column: string) => void;
}

const TheadItem: React.FC<Props> = ({ text, title, reference, handleOrderForColumn }) => {
    return (
        <th className="titulo-lista-regras pointer" style={{ whiteSpace: "break-spaces" }}>
            <div
                className="help"
                data-toggle="tooltip"
                data-placement="top"
                title={title}
                onClick={() => handleOrderForColumn(reference)}
            >
                {text}
                <span className="glyphicon glyphicon-question-sign ml-2"></span>
            </div>
        </th>
    );
};

export default TheadItem;
