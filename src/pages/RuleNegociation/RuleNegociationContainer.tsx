import React from "react";

import { useSelector, useDispatch } from "react-redux";

// selectors
import { dataNegociation } from "../../store/modules/pj/negociation/selectors";
import { userEnabled } from "../../store/modules/auth/selectors";

// actions
import { actions as actionsNegociation } from "../../store/modules/pj/negociation/actions";

export const ruleNegociationContainer = (Component: React.ElementType) => {
    const Container: React.FC = () => {
        const dispatch = useDispatch();

        const userEnable = useSelector(userEnabled);
        const negociations = useSelector(dataNegociation);

        const handleLoadRuleNegociations = () => {
            dispatch(actionsNegociation.loadNegociation());
        };

        return (
            <Component
                payload={{
                    data: {
                        userEnable,
                        negociations,
                    },
                    actions: {
                        loadRuleNegociations: handleLoadRuleNegociations,
                    },
                }}
            />
        );
    };

    return Container;
};
