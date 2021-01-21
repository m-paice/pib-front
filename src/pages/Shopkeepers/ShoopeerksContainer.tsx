import React from "react";

import { useSelector, useDispatch } from "react-redux";

// actions
import { actions as actionsShopkeepers } from "../../store/modules/association/shopkeeper/actions";

// selectors
import { dataShopkeeper } from "../../store/modules/association/shopkeeper/selectors";

export const Container = (Component: React.ElementType) => {
    const Container: React.FC = () => {
        const dispatch = useDispatch();

        const shopkeepers = useSelector(dataShopkeeper);

        const handleLoadShopkeepers = () => {
            dispatch(actionsShopkeepers.loadshopkeeper());
        };

        const handleUpdateShopkeeper = (id: string) => {
            dispatch(actionsShopkeepers.updateShopKeeper(id));
        };

        return (
            <Component
                payload={{
                    data: {
                        shopkeepers,
                    },
                    actions: {
                        loadshopkeepers: handleLoadShopkeepers,
                        updateShopkeeper: handleUpdateShopkeeper,
                    },
                }}
            />
        );
    };

    return Container;
};
