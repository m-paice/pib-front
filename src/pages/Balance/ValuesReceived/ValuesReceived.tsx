import React, { useState, useCallback } from "react";

// components
import Select from "../../../components/unconnected/Fields/Select";

import Bar from "../../../components/Graphics/Bar";
import Pie from "../../../components/Graphics/Pie";

const optionsYears = [
    { value: 12, label: "12 meses" },
    { value: 24, label: "24 meses" },
];

const optionsSituation = [
    { value: 0, label: "Todos" },
    { value: 1, label: "Em atraso" },
    { value: 2, label: "Em dia" },
    { value: 3, label: "Não negociada" },
    { value: 4, label: "Quitada" },
];

const paymentTypes = {
    1: "À vista",
    2: "Parcelado",
};

interface Props {}

const ValuesReceived: React.FC<Props> = (props) => {
    const [amountMonth, setAmountMonth] = useState({
        value: 12,
        label: "12 meses",
    });

    const [paymentSituationSelected, setPaymentSituationSelected] = useState({
        value: 0,
        label: "Todos",
    });

    const handleSetAmountMonth = useCallback(
        (amountMonth: any) => {
            setAmountMonth(amountMonth);
        },
        [amountMonth],
    );

    const handleSetPaymentoSituation = useCallback(
        (situation: any) => {
            setPaymentSituationSelected(situation);
        },
        [paymentSituationSelected],
    );

    return (
        <>
            <div className="col-sm-4 text-center">
                <div>
                    <div className="row">
                        <div className="col-md-4 text-left">
                            <b>Planos</b>
                        </div>
                        <div className="col-md-8">
                            <div style={{ width: 196 }}>
                                <Select
                                    options={optionsSituation}
                                    value={paymentSituationSelected}
                                    onChange={handleSetPaymentoSituation}
                                />
                            </div>
                        </div>
                    </div>
                    {/* <div>
                        <div className="txt-blue">À vista: R$ 300,00</div>
                        <div className="txt-darkblue">Parcelado: R$ 600,00</div>
                    </div> */}
                </div>

                <br />
                <Pie
                    labels={Array.from({ length: 2 }).map((_, index) => paymentTypes[index + 1])}
                    data={Array.from({ length: 2 }).map((_, index) => Math.ceil(Math.random() * 999))}
                    colors={["#4E4C67", "#A6B1E1", "#4E4C67", "#A6B1E1"]}
                />
            </div>
            <div className="col-sm-1 colum-width-2">
                <div className="traco-vertical-g"></div>
            </div>
            <div className="col-sm-7">
                <div className="barraRolagem">
                    <div className="d-flex justify-content-between">
                        <b>
                            Valores
                            <br />
                            Recebidos
                        </b>
                        <div style={{ width: 140 }}>
                            <Select options={optionsYears} value={amountMonth} onChange={handleSetAmountMonth} />
                        </div>
                    </div>
                    <Bar
                        title="Valores Recebidos"
                        labels={Array.from({ length: amountMonth.value }).map((_, index) => {
                            const currentMonth = new Date().getMonth();
                            const currentYear = new Date().getFullYear();

                            if (currentMonth + (index + 2) > 24) {
                                return `${currentMonth - currentMonth + (index - 13)}/${currentYear + 2}`;
                            }

                            if (currentMonth + (index + 2) > 12) {
                                return `${currentMonth - currentMonth + (index - 1)}/${currentYear + 1}`;
                            }

                            return `${currentMonth + (index + 2)}/${currentYear}`;
                        })}
                        data={Array.from({ length: amountMonth.value }).map((_, index) =>
                            Math.ceil(Math.random() * 99),
                        )}
                        color="#4E4C67"
                    />
                </div>
            </div>
        </>
    );
};

export default ValuesReceived;
