import React, { useState } from "react";

import Item from "./Item";

import Lock from "../../assets/imagens/lock.png";
import Calculator from "../../assets/imagens/calculator.png";

interface Props {}

interface State {
    info: boolean;
}

const WrapperItem: React.FC<Props> = (props) => {
    const [state, setState] = useState<State>({
        info: false,
    });

    const { info } = state;

    const handleSetState = (key: string, value: string | boolean): void => {
        setState((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    return (
        <div className="cada debito  remove-background">
            <div className="ltable">
                <div className="row rowCenter">
                    <div className="col-md c">
                        <span className="labelDebito text-left p-left">352.333.659-88</span>
                    </div>
                    <div className="col-md c colBorder">
                        <span className="labelDebito text-left p-left">André Luis Brasil</span>
                    </div>

                    <div className="col-md c nobri colBorder">
                        <span className="labelDebito text-center hidden-xs">R$ 999.999,00</span>
                    </div>
                    <div className="col-md c nobri colBorder">
                        <span className="labelDebito text-center hidden-xs">R$ 999.999,00</span>
                    </div>
                    <div className="col-md c nobri colBorder">
                        <span className="labelDebito text-center hidden-xs">R$ 999.999,00</span>
                    </div>
                    <div className="col-md c nobri colBorder">
                        <span className="labelDebito text-center hidden-xs">R$ 999.999,00</span>
                    </div>
                    <div className="col-md cb">
                        <a onClick={() => handleSetState("info", !info)} className="btneg green2 none-border-radius">
                            QUITADA
                        </a>
                    </div>
                    <div className="col-md c nobri">
                        <span className="labelDebito text-center hidden-xs action">
                            <div className="row">
                                <div className="col-xs-6">
                                    <img src={Lock} className="img-icon align-right" />
                                </div>
                                <div className="col-xs-6">
                                    <a>
                                        <i data-toggle="modal" data-target="#modalSimulador">
                                            <img src={Calculator} className="img-icon align-left" />
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </span>
                    </div>
                </div>

                {info && <Item />}
            </div>
        </div>
    );
};

export default WrapperItem;
