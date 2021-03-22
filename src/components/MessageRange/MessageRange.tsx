import React from "react";

interface Props {}

const MessageRange: React.FC<Props> = ({ children }) => {
    return (
        <div className="faixamsg">
            <div className="container">
                <div className="col-xs-12">{children}</div>
            </div>
        </div>
    );
};

export default MessageRange;
