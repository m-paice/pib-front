import React, { useState, useEffect } from "react";

import { Debt } from "../../../store/modules/pf/debt/types";

import TbodyItem from "./TbodyItem";

import Pagination from "../../Pagination";

const perPage = 15;

interface PaginationSate {
    page: number;
    totalPage: number;
}

type Tbody = Debt;

interface Props {
    tbody: Tbody[];
}

const TableDebits: React.FC<Props> = ({ tbody }) => {
    const [data, setData] = useState<Tbody[]>(tbody);

    const [pagination, setPagination] = useState<PaginationSate>({
        page: 1,
        totalPage: 0,
    });

    useEffect(() => {
        const page = pagination.page - 1;
        const start = page * perPage;
        const end = start + perPage;

        const part = tbody.slice(start, end);

        setData(part);
        setPagination((prevState) => ({
            ...prevState,
            totalPage: Math.ceil(tbody.length / perPage),
        }));
    }, [tbody, pagination.page]);

    const nextPage = () => {
        if (pagination.page >= pagination.totalPage) return;

        setPagination((prevState) => ({
            ...prevState,
            page: prevState.page + 1,
        }));
    };

    const prevPage = () => {
        if (pagination.page <= 1) return;

        setPagination((prevState) => ({
            ...prevState,
            page: prevState.page - 1,
        }));
    };

    const goToPage = (page: number) => {
        setPagination((prevState) => ({
            ...prevState,
            page,
        }));
    };

    return (
        <div className="table-regua barraRolagem">
            <span id="top"></span>

            {data.map((item, index) => (
                <TbodyItem key={index} {...item} />
            ))}

            {!data.length && <span className="text-center pt-3 pb-3">Nenhum registro encontrado.</span>}

            {tbody.length !== 0 && (
                <Pagination
                    page={pagination.page}
                    totalPage={pagination.totalPage}
                    nextPage={nextPage}
                    prevPage={prevPage}
                    goToPage={goToPage}
                />
            )}
        </div>
    );
};

export default TableDebits;
