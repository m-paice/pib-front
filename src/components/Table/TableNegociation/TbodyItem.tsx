import React from "react";

import Pencil from "../../../assets/imagens/pencil.png";
import Calculator from "../../../assets/imagens/calculator.png";

interface PropsItem {
    text: string | number;
    separator?: boolean;
}

const Item: React.FC<PropsItem> = ({ text, separator = true }) => {
    return (
        <td className="txt-lista-regras">
            {text}
            {separator && <div className="traco-v-table align-right"></div>}
        </td>
    );
};

const Actions: React.FC = () => {
    return (
        <td className="txt-lista-regras action">
            <div className="row d-flex justify-content-around">
                <div>
                    <img src={Pencil} className="img-icon" />
                </div>
                <div>
                    <a>
                        <img src={Calculator} className="img-icon" />
                    </a>
                </div>
            </div>
        </td>
    );
};

interface Props {
    id: number;
    yaerDebit: string;
    interest: string;
    discount: number;
    maxPortion: number;
    attenuator: string;
    trafficTicket: string;
    advisory: string;
    readjustment: number;
}

const TbodyItem: React.FC<Props> = ({
    id,
    yaerDebit,
    interest,
    discount,
    maxPortion,
    attenuator,
    trafficTicket,
    advisory,
    readjustment,
}) => {
    return (
        <tr className="itemListaRegras">
            <Item text={`${id} - ${yaerDebit}`} />
            <Item text={interest} />
            <Item text={`${discount}%`} />
            <Item text={maxPortion} />
            <Item text={attenuator} />
            <Item text={trafficTicket} />
            <Item text={advisory} />
            <Item text={readjustment} />
            <Actions />
        </tr>
    );
};

export default TbodyItem;
