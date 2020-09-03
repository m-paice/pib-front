import React from "react";

interface Props {}

const SeparatorVertical: React.FC<Props> = (props) => {
    return (
        <div className="col-md-1">
            <div className="traco-vertical-p"></div>
        </div>
    );
};

export default SeparatorVertical;
