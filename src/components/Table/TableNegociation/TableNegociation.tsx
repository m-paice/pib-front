import React, { useState } from "react";

import TheadItem from "./TheadItem";
import TbodyItem from "./TbodyItem";

import Pagination from "../../Pagination";

interface Thead {
    text: string;
    title: string;
    reference: string;
}

interface Tbody {
    yaerDebit: string;
    interest: string;
    discount: number;
    maxPortion: number;
    attenuator: string;
    trafficTicket: string;
    advisory: string;
    readjustment: string;
}

interface Props {
    thead: Thead[];
    tbody: Tbody[];
}

const TableNegociation: React.FC<Props> = ({ thead, tbody }) => {
    const [data, setData] = useState<Tbody[]>(tbody);
    const [lastOrdem, setLastOrder] = useState("");

    const handleOrderForColumn = (column: string) => {
        if (lastOrdem === column) {
            const response = data.map((item) => item).sort((a: Tbody, b: Tbody) => (a[column] < b[column] ? 1 : -1));

            setData(response);
            setLastOrder("");
        } else {
            const response = data.map((item) => item).sort((a: Tbody, b: Tbody) => (a[column] > b[column] ? 1 : -1));

            setData(response);
            setLastOrder(column);
        }
    };

    return (
        <div className="table-regua barraRolagem">
            <table className="tableListaRegras">
                <thead>
                    <tr className="bs-example">
                        {thead.map((item, index) => (
                            <TheadItem
                                key={index}
                                text={item.text}
                                title={item.title}
                                reference={item.reference}
                                handleOrderForColumn={handleOrderForColumn}
                            />
                        ))}
                    </tr>
                </thead>
                <tbody className="listaCompletaRegras">
                    {data.map((item, index) => (
                        <TbodyItem key={index} {...item} />
                    ))}
                </tbody>
            </table>

            <Pagination />
        </div>
    );
};

export default TableNegociation;
