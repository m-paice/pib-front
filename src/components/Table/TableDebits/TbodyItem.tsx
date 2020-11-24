import React from "react";

import { Debt } from "../../../store/modules/pf/debt/types";

import DeniedDebts from "../../BoxDebits/DeniedDebts";
import ApprovedDebits from "../../BoxDebits/ApprovedDebits";

type Props = Debt;

const TbodyItem: React.FC<Props> = (props) => {
    const { situation } = props;

    if (situation === 0 || situation === -1) {
        return <DeniedDebts {...props} />;
    }

    return <ApprovedDebits {...props} />;
};

export default TbodyItem;
