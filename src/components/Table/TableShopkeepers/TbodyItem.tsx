import React from "react";

import { Shopkeeper } from "../../../store/modules/association/shopkeeper/types";

import Switch from "../../unconnected/Switch";

interface PropsItem {
    text: string | number;
    separator?: boolean;
    errors?: boolean;
}

const styles: React.CSSProperties = {
    position: "absolute",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
};

const Item: React.FC<PropsItem> = ({ text, separator = true, errors }) => {
    return (
        <td className={`txt-lista-regras ${errors ? "tdErrors" : ""}`} style={{ position: "relative" }}>
            <span style={styles}>{text}</span>
            {separator && <div className="traco-v-table align-right"></div>}
        </td>
    );
};

const ActionsItem: React.FC = ({ children }) => {
    return (
        <td className={`txt-lista-regras `} style={{ position: "relative" }}>
            {children}
        </td>
    );
};

interface Props extends Shopkeeper {
    updateShopkeeper(id: string): void;
}

const TbodyItem: React.FC<Props> = (props) => {
    const {
        id,
        usuario: { nome, habilitado },
        updateShopkeeper,
    } = props;

    return (
        <tr className="itemListaRegras">
            <Item text={nome} />
            <Item text={habilitado ? "SIM" : "NÃO"} />
            <ActionsItem>
                <Switch onChange={() => updateShopkeeper(id)} checked={habilitado} />
            </ActionsItem>
        </tr>
    );
};

export default TbodyItem;
