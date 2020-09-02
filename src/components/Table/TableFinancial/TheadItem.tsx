import React from "react";

interface Props {
    text: string;
    title: string;
}

const TheadItem: React.FC<Props> = ({ text, title }) => {
    return (
        <th className="titulo-lista-regras" style={{ whiteSpace: "break-spaces" }}>
            <div className="help" data-toggle="tooltip" data-placement="top" title={title}>
                {text}
                <span className="glyphicon glyphicon-question-sign ml-2"></span>
            </div>
        </th>
    );
};

export default TheadItem;
