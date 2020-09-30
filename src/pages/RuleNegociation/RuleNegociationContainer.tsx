import React from "react";

import { useSelector } from "react-redux";

import { dataNegociation } from "../../store/modules/pj/negociation/selectors";

export const ruleNegociationContainer = (Component: React.ElementType) => {
    const Container: React.FC = () => {
        const negociations = useSelector(dataNegociation);

        return (
            <Component
                payload={{
                    data: negociations,
                }}
            />
        );
    };

    return Container;
};
