import React from "react";

interface Props {
    title?: string;
    text?: string;
}

const BoxKnowMore: React.FC<Props> = ({ title, text }) => {
    return (
        <div className="boxpai">
            <h3>{title}</h3>
            <div className="tex">{text}</div>
            <a>
                Saiba <span>+</span>
            </a>
        </div>
    );
};

export default BoxKnowMore;
