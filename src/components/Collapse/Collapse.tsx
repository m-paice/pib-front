import React from "react";

interface Props {
    id: string;
    href: string;
    title?: string;
    text?: string;
}

const Collapse: React.FC<Props> = ({ id, href, title, text }) => {
    return (
        <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingThree">
                <h4 className="panel-title">
                    <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href={href}
                        aria-expanded="false"
                        aria-controls={id}
                    >
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="glyphicon glyphicon-chevron-down"></span>
                        {title}
                    </a>
                </h4>
            </div>
            <div id={id} className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                <div className="panel-body">{text}</div>
            </div>
        </div>
    );
};

export default Collapse;
