import React, { useState, useCallback, useEffect } from "react";

// components
import Select from "../../../components/unconnected/Fields/Select";

import Bar from "../../../components/Graphics/Bar";
import Pie from "../../../components/Graphics/Pie";

const optionsYears = [
    { value: 12, label: "12 meses" },
    { value: 24, label: "24 meses" },
];

const optionsSituation = [
    { value: -1, label: "Todos" },
    { value: 1, label: "Em atraso" },
    { value: 2, label: "Em dia" },
    { value: 0, label: "Não negociada" },
    { value: 3, label: "Quitada" },
];

const optionsSituationPie = [
    { value: -1, label: "Todos" },
    { value: 1, label: "Em atraso" },
    { value: 2, label: "Em dia" },
    { value: 3, label: "Quitada" },
];

const paymentTypes = {
    1: "À vista",
    2: "Parcelado",
};

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
        value: -1,
        label: "Todos",
    });

    useEffect(() => {
        const response = amountInCashOrPortion();
        const barDataResponse = handleFlowValueReceived(amountMonth.value);

        const inCash = Object.values(response).filter((item) => item === 1).length;
        const portion = Object.values(response).filter((item) => item > 1).length;

        setData({
            1: inCash,
            2: portion,
        });
        setBarData(barDataResponse);
    }, [amountInCashOrPortion]);

    useEffect(() => {
        const barDataResponse = handleFlowValueReceived(amountMonth.value);

        setBarData(barDataResponse);
    }, [amountMonth.value]);

    useEffect(() => {
        const response = filterInCashOrPortion(paymentSituationSelected.value);
        const inCash = Object.values(response).filter((item) => item === 1).length;
        const portion = Object.values(response).filter((item) => item > 1).length;

        setData({
            1: inCash,
            2: portion,
        });
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
                <div>
                    <div className="row">
                        <div className="col-md-6 text-left font-25">
                            <b>Planos</b>
                        </div>
                        <div className="col-md-6">
                            <div style={{ width: 196 }}>
                                <Select
                                    options={optionsSituationPie}
                                    value={paymentSituationSelected}
                                    onChange={handleSetPaymentoSituation}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <br />
                <Pie
                    labels={Array.from({ length: 2 }).map((_, index) => paymentTypes[index + 1])}
                    data={Object.values(data)}
                    colors={["#4E4C67", "#A6B1E1"]}
                />
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
                            const currentMonth = new Date().getMonth() - 1;
                            const currentYear = new Date().getFullYear();

                            if (currentMonth + (index + 2) > 24) {
                                return `${currentMonth - currentMonth + (index - 13)}/${currentYear + 2}`;
                            }

                            if (currentMonth + (index + 2) > 12) {
                                return `${currentMonth - currentMonth + (index - 1)}/${currentYear + 1}`;
                            }

                            return `${currentMonth + (index + 2)}/${currentYear}`;
                        })}
                        data={barData.filter((item, index) => index !== 0)}
                        color="#4E4C67"
                    />
                </div>
            </div>
        </>
    );
};

export default ValuesReceived;
