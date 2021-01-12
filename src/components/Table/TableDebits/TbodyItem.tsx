import React from "react";

import { Debt } from "../../../store/modules/pf/debt/types";

import DeniedDebts from "../../BoxDebits/DeniedDebts";
import ApprovedDebits from "../../BoxDebits/ApprovedDebits";

type Props = Debt;

const TbodyItem: React.FC<Props> = (props) => {
    const { negociacao } = props;

    if (!negociacao) {
        return <DeniedDebts {...props} />;
    }

    return <ApprovedDebits {...props} />;
};

export default TbodyItem;
