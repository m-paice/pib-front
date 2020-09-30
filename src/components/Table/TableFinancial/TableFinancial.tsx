import React, { useState } from "react";

import { Wallet } from "../../../store/modules/pj/wallet/types";

import Pagination from "../../Pagination";

import TheadItem from "./TheadItem";
import TbodyItem from "./TbodyItem";

interface Thead {
    text: string;
    title: string;
    reference: string;
}

type Tbody = Wallet;

interface Props {
    thead: Thead[];
    tbody: Tbody[];
}

const TableFinancial: React.FC<Props> = ({ thead, tbody }) => {
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
                        <TbodyItem key={index} index={index} {...item} />
                    ))}

                    {!data.length && (
                        <tr>
                            <td
                                className="text-center pt-3 pb-3"
                                style={{ borderBottom: 0, borderRadius: 0 }}
                                colSpan={thead.length}
                            >
                                Nenhum registro encontrado.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            {tbody.length !== 0 && <Pagination data={tbody} perPage={15} handleSetData={handleSetData} />}
        </div>
    );
};

export default TableFinancial;
