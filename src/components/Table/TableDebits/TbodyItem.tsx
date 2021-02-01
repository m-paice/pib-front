import React from "react";

import { Debt } from "../../../store/modules/pf/debt/types";

import DeniedDebts from "../../BoxDebits/DeniedDebts";
import ApprovedDebits from "../../BoxDebits/ApprovedDebits";

interface Props extends Debt {
    generateBillet(data): void;
    renegotiateDebit(id): void;
}

const TbodyItem: React.FC<Props> = (props) => {
    const { negociacao } = props;

    if (!negociacao) {
        return <DeniedDebts {...props} />;
    }

    return <ApprovedDebits {...props} />;
};

export default TbodyItem;
