import React, { useEffect } from "react";

import { Container } from "./ShoopeerksContainer";

// types
import { Shopkeeper } from "../../store/modules/association/shopkeeper/types";

// components
import TableShopkeepers from "../../components/Table/TableShopkeepers";

const header = [
    { text: "Nome", title: "Nome", reference: "name" },
    { text: "CNPJ", title: "CNPJ", reference: "document" },
    { text: "Habilitado", title: "Habilitado", reference: "enable" },
    { text: "Ação", title: "Ação", reference: "action" },
];

interface Props {
    payload: {
        data: {
            shopkeepers: Shopkeeper[];
        };
        actions: {
            loadshopkeepers(): void;
            updateShopkeeper(id: string): void;
        };
    };
}

const shopkeepers: React.FC<Props> = ({ payload }) => {
    const { data, actions } = payload;

    const { shopkeepers } = data;
    const { loadshopkeepers, updateShopkeeper } = actions;

    useEffect(() => {
        loadshopkeepers();
    }, []);

    return (
        <div className="page">
            <div className="container">
                <TableShopkeepers
                    thead={header}
                    tbody={shopkeepers}
                    handleOrderByColumn={() => {}}
                    actions={{
                        updateShopkeeper,
                    }}
                />
            </div>
        </div>
    );
};

export default Container(shopkeepers);
