import React, { useState, useEffect } from "react";

interface Props {
    page: number;
    totalPage: number;
    nextPage(): void;
    prevPage(): void;
    goToPage(page: number): void;
}

const Pagination: React.FC<Props> = ({ page, totalPage, nextPage, prevPage, goToPage }) => {
    const [buttons, setButtons] = useState<number[]>([]);

    useEffect(() => {
        const { maxLeft, maxRight } = calculateMaxVisible();

        const buttonsNumbers: number[] = [];
        for (let page = maxLeft; page <= maxRight; page = page + 1) {
            buttonsNumbers.push(page);
        }

        setButtons(buttonsNumbers);
    }, [page, totalPage]);

    const calculateMaxVisible = () => {
        let maxLeft = page - Math.floor(5 / 2);
        let maxRight = page + Math.floor(5 / 2);

        if (maxLeft < 1) {
            maxLeft = 1;
            maxRight = 5;
        }

        if (maxRight > totalPage) {
            maxLeft = totalPage - (5 - 1);
            maxRight = totalPage;

            if (maxLeft < 1) maxLeft = 1;
        }

        return { maxLeft, maxRight };
    };

    return (
        <nav aria-label="...">
            <ul style={{ display: "inline-flex", width: "100%" }} className="pagination justify-content-center m-0">
                <li className="page-item pointer" onClick={prevPage}>
                    <a href="#top" className="page-link">
                        Anterior
                    </a>
                </li>

                {buttons.map((item) => (
                    <li
                        key={item}
                        className={`page-item pointer ${page === item ? "active" : ""}`}
                        onClick={() => goToPage(item)}
                    >
                        <a href="#top" className="page-link" style={{ zIndex: 0 }}>
                            {item}
                        </a>
                    </li>
                ))}

                <li className="page-item pointer" onClick={nextPage}>
                    <a href="#top" className="page-link">
                        Próximo
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
