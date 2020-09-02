import React from "react";

import TheadItem from "./TheadItem";
import TbodyItem from "./TbodyItem";

interface Thead {
    text: string;
    title: string;
}

interface Tbody {
    date: string;
    cnpj: string;
    company: string;
    operation: string;
    value: string;
}

interface Props {
    thead: Thead[];
    tbody: Tbody[];
}

const TableFinancial: React.FC<Props> = ({ thead, tbody }) => {
    return (
        <div className="table-regua barraRolagem">
            <table className="tableListaRegras">
                <thead>
                    <tr className="bs-example">
                        {thead.map((item, index) => (
                            <TheadItem key={index} text={item.text} title={item.title} />
                        ))}
                    </tr>
                </thead>
                <tbody className="listaCompletaRegras">
                    {tbody.map((item, index) => (
                        <TbodyItem key={index} {...item} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableFinancial;
