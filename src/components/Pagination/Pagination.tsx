import React, { useState, useEffect } from "react";

interface Props {
    data: any[];
    perPage: number;
    handleSetData(data: any[]): void;
}

interface PaginationSate {
    page: number;
    totalPage: number;
}

const Pagination: React.FC<Props> = ({ data, perPage, handleSetData }) => {
    const [pagination, setPagination] = useState<PaginationSate>({
        page: 1,
        totalPage: Math.ceil(data.length / perPage),
    });

    const [buttons, setButtons] = useState<number[]>([]);

    useEffect(() => {
        const page = pagination.page - 1;
        const start = page * perPage;
        const end = start + perPage;

        const part = data.slice(start, end);

        handleSetData(part);
    }, [pagination.page]);

    useEffect(() => {
        const { maxLeft, maxRight } = calculateMaxVisible();

        const buttonsNumbers: number[] = [];
        for (let page = maxLeft; page <= maxRight; page = page + 1) {
            buttonsNumbers.push(page);
        }

        setButtons(buttonsNumbers);
    }, [pagination.page]);

    const calculateMaxVisible = () => {
        let maxLeft = pagination.page - Math.floor(10 / 2);
        let maxRight = pagination.page + Math.floor(10 / 2);

        if (maxLeft < 1) {
            maxLeft = 1;
            maxRight = 10;
        }

        if (maxRight > pagination.totalPage) {
            maxLeft = pagination.totalPage - (10 - 1);
            maxRight = pagination.totalPage;

            if (maxLeft < 1) maxLeft = 1;
        }

        return { maxLeft, maxRight };
    };

    const nextPage = () => {
        setPagination((prevState) => ({
            ...prevState,
            page: prevState.page + 1,
        }));
    };

    const prevPage = () => {
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
        <nav aria-label="...">
            <ul className="pagination justify-content-center">
                <li className="page-item pointer" onClick={prevPage}>
                    <span className="page-link">Anterior</span>
                </li>

                {buttons.map((item) => (
                    <li
                        key={item}
                        className={`page-item pointer ${pagination.page === item ? "active" : ""}`}
                        onClick={() => goToPage(item)}
                    >
                        <a className="page-link">{item}</a>
                    </li>
                ))}

                <li className="page-item pointer" onClick={nextPage}>
                    <a className="page-link">Próximo</a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
