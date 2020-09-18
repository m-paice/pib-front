import React from "react";

interface Props {}

const Pagination: React.FC<Props> = (props) => {
    return (
        <nav aria-label="...">
            <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                    <span className="page-link">Anterior</span>
                </li>
                <li className="page-item">
                    <a className="page-link">1</a>
                </li>
                <li className="page-item active">
                    <span className="page-link">2</span>
                </li>
                <li className="page-item">
                    <a className="page-link">3</a>
                </li>

                <li className="page-item">
                    <a className="page-link">4</a>
                </li>

                <li className="page-item">
                    <a className="page-link">5</a>
                </li>

                <li className="page-item">
                    <a className="page-link">6</a>
                </li>

                <li className="page-item">
                    <a className="page-link">7</a>
                </li>

                <li className="page-item">
                    <a className="page-link">8</a>
                </li>

                <li className="page-item">
                    <a className="page-link">9</a>
                </li>

                <li className="page-item">
                    <a className="page-link">10</a>
                </li>
                <li className="page-item">
                    <a className="page-link">Próximo</a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
