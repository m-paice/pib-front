import React, { useState, useCallback, useEffect } from "react";

// components
import Select from "../../../components/unconnected/Fields/Select";

import Bar from "../../../components/Graphics/Bar";
import Pie from "../../../components/Graphics/Pie";

const optionsYears = [
    { value: 12, label: "12 meses" },
    { value: 24, label: "24 meses" },
];

const optionSituationPie = [
    { value: 0, label: "Todos" },
    { value: 1, label: "Em atraso" },
    { value: 2, label: "Em dia" },
    { value: 3, label: "Quitada" },
];

const paymentTypes = ["À vista", "Parcelado"];

interface Props {
    amountInCashOrPortion(): { [key: number]: number };
    filterInCashOrPortion(situation: number): { [key: number]: number };
    handleFlowValueReceived(amountMonth: number): number[];
}

const ValuesReceived: React.FC<Props> = ({ amountInCashOrPortion, filterInCashOrPortion, handleFlowValueReceived }) => {
    const [data, setData] = useState<{ [key: number]: number }>({});
    const [barData, setBarData] = useState<number[]>([]);

    const [amountMonth, setAmountMonth] = useState({
        value: 12,
        label: "12 meses",
    });

    const [paymentSituationSelected, setPaymentSituationSelected] = useState({
        value: 0,
        label: "Todos",
    });

    // console.log(data);

    useEffect(() => {
        const response = amountInCashOrPortion();
        const barDataResponse = handleFlowValueReceived(amountMonth.value);

        // const inCash = Object.values(response).filter((item) => item === 1).length;
        // const portion = Object.values(response).filter((item) => item > 1).length;

        setData(response);
        setBarData(barDataResponse);
    }, [amountInCashOrPortion]);

    useEffect(() => {
        const barDataResponse = handleFlowValueReceived(amountMonth.value);

        setBarData(barDataResponse);
    }, [amountMonth.value]);

    useEffect(() => {
        const response = filterInCashOrPortion(paymentSituationSelected.value);

        setData(response);
    }, [paymentSituationSelected.value]);

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
                <div style={{ width: 396 }}>
                    <div className="row">
                        <div className="col-md-6 text-left font-25">
                            <b>Planos</b>
                        </div>
                        <div className="col-md-6" style={{ zIndex: 2 }}>
                            <div style={{ width: 196 }}>
                                <Select
                                    options={optionSituationPie}
                                    value={paymentSituationSelected}
                                    onChange={handleSetPaymentoSituation}
                                />
                            </div>
                        </div>
                    </div>
                    <br />
                    <section style={{ marginTop: 40 }}>
                        <Pie labels={paymentTypes} data={Object.values(data)} colors={["#4E4C67", "#A6B1E1"]} />
                    </section>
                </div>
            </div>
            <div className="col-sm-1 colum-width-2">
                <div className="traco-vertical-g"></div>
            </div>
            <div className="col-sm-7">
                <div className="barraRolagem">
                    <div className="d-flex justify-content-between">
                        <b className="font-25">
                            Valores
                            <br />
                            Recebidos
                        </b>
                        <div style={{ width: 140 }}>
                            <Select options={optionsYears} value={amountMonth} onChange={handleSetAmountMonth} />
                        </div>
                    </div>
                    <Bar
                        labels={Array.from({ length: amountMonth.value }).map((_, index) => {
                            const currentMonth = new Date().getMonth() + 1;
                            const currentYear = new Date().getFullYear();

                            if (index + 1 > 12) {
                                return `${index + 1 - 12}/${currentYear + 1}`;
                            }

                            return `${currentMonth + index}/${currentYear}`;
                        })}
                        data={barData}
                        color="#4E4C67"
                    />
                </div>
            </div>
        </>
    );
};

export default ValuesReceived;
