import React, { useState } from "react";

// components
import MoreInfo from "../MoreInfo";

interface Props {
    status: "paidOut" | "late" | "next" | "done";
}

interface State {
    info: boolean;
}

interface handleCheckStatusReturn {
    title: string;
    class: string;
}

const ApprovedDebits: React.FC<Props> = (props) => {
    const [state, setState] = useState<State>({
        info: false,
    });

    const handleSetState = (key: string, value: string | boolean) => {
        setState((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    // check status of debits
    const handleCheckStatus = (): handleCheckStatusReturn => {
        const { status } = props;

        if (status === "paidOut")
            return {
                title: "Pago",
                class: "green",
            };

        if (status === "late")
            return {
                title: "Em atraso",
                class: "red",
            };

        if (status === "next")
            return {
                title: "Próximo",
                class: "blue",
            };

        return {
            class: "",
            title: "",
        };
    };

    const { info } = state;

    return (
        <div className="cada debito ativo">
            <div className="row rowCenter">
                <div className="col-md-1">
                    <a className="smais">
                        <span
                            className={`btn glyphicon ${info ? "glyphicon-minus" : "glyphicon-plus"} align-btn-b`}
                            onClick={() => handleSetState("info", !info)}
                        ></span>
                    </a>
                </div>
                <div className=" col-md-3 c colBorder">
                    <span className="labelDebito text-left p-left">Claro Móvel Brasil</span>
                </div>

                <div className="col-md-6 c nobri">
                    <span className="labelDebito text-center hidden-xs">Já negociada em 01/03/202020</span>
                </div>
                <div className="col-md-2 cb">
                    <a className={`btneg ${handleCheckStatus().class}`} href="">
                        {handleCheckStatus().title}
                    </a>
                </div>
            </div>

            {info && <MoreInfo />}
        </div>
    );
};

export default ApprovedDebits;
