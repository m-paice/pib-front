import React from "react";

interface Props {}

const Horizontal: React.FC<Props> = (props) => {
    return (
        <div className="col-sm-12">
            <br />
            <hr className="traco-horiz" />
        </div>
    );
};

export default Horizontal;
