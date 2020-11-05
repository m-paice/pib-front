import React, { useState } from "react";

import { ArrowRightShort, ArrowDownShort } from "react-bootstrap-icons";

interface Props {
    id: string;
    href: string;
    title?: string;
    text?: string;
}

const Collapse: React.FC<Props> = ({ id, href, title, text }) => {
    const [toggle, setToggle] = useState(false);

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
                        aria-expanded={toggle}
                        aria-controls={id}
                    >
                        {toggle ? <ArrowRightShort /> : <ArrowDownShort />}
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
