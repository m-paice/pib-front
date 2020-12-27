import React from "react";

import { Debt } from "../../../store/modules/pf/debt/types";
import { status as statusSituation } from "../../../store/modules/pf/debt/selectors";

import DeniedDebts from "../../BoxDebits/DeniedDebts";
import ApprovedDebits from "../../BoxDebits/ApprovedDebits";

type Props = Debt;

const TbodyItem: React.FC<Props> = (props) => {
    const { status } = props;

    if (statusSituation[status] === 0 || statusSituation[status] === -1) {
        return <DeniedDebts {...props} />;
    }

    return <ApprovedDebits {...props} />;
};

export default TbodyItem;
