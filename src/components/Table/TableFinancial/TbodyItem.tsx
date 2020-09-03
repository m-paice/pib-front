import React from "react";

interface PropsItem {
    text: string;
    separator?: boolean;
}

const Item: React.FC<PropsItem> = ({ text, separator = true }) => {
    return (
        <td className="txt-lista-regras">
            <span> {text} </span>
            {separator && <div className="traco-v-table align-right"></div>}
        </td>
    );
};

interface Props {
    date: string;
    cnpj: string;
    company: string;
    operation: string;
    value: string;
}

const TbodyItem: React.FC<Props> = ({ date, cnpj, company, operation, value }) => {
    return (
        <tr className="itemListaRegras">
            <Item text={date} />
            <Item text={cnpj} />
            <Item text={company} />
            <Item text={operation} />
            <Item text={value} separator={false} />
        </tr>
    );
};

export default TbodyItem;
