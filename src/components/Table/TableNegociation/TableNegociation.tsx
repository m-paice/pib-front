import React, { useState } from "react";

import { Negociation } from "../../../store/modules/pj/negociation/types";

import TheadItem from "./TheadItem";
import TbodyItem from "./TbodyItem";

import Pagination from "../../Pagination";

interface Thead {
    text: string;
    title: string;
    reference: string;
}

type Tbody = Negociation;

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

    const handleSetData = (data: Tbody[]) => {
        setData(data);
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
                        <TbodyItem key={item.id} {...item} />
                    ))}

                    {!data.length && (
                        <tr>
                            <td
                                className="text-center pt-3 pb-3"
                                style={{ borderBottom: 0, borderRadius: 0 }}
                                colSpan={thead.length}
                            >
                                Nenhuma negociação encontrada.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            {tbody.length !== 0 && <Pagination data={tbody} perPage={12} handleSetData={handleSetData} />}
        </div>
    );
};

export default TableNegociation;
