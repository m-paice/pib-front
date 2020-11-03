import React, { useState, useEffect } from "react";

// components
import Select from "../../../components/unconnected/Fields/Select";

import Bar from "../../../components/Graphics/Bar";
import Pie from "../../../components/Graphics/Pie";

const optionsSituation = [
    { value: -1, label: "Todos" },
    { value: 1, label: "Em atraso" },
    { value: 0, label: "Próxima" },
];

const optionsSituationPie = [
    { value: -1, label: "Todos" },
    { value: 1, label: "Em atraso" },
    { value: 2, label: "Em dia" },
    { value: 3, label: "Quitada" },
];

const optionsYears = [
    { value: 12, label: "12 meses" },
    { value: 24, label: "24 meses" },
];

const paymentTypes = {
    1: "Cartão de crédito",
    2: "Boleto",
};

interface Props {
    paymentForm: number[];
    amountPayment(): { [key: number]: number };
    filterPaymentForSituaction(situation: number): { [key: number]: number };
    receivedPortion: { [key: string]: any };

    handleFlowReceived(amountMonth: number): number[];
    handleFilterFlowReceivedForSituation(situation: number, amountMonth: number);
}

const FlowReceivement: React.FC<Props> = ({
    paymentForm,
    amountPayment,
    filterPaymentForSituaction,
    receivedPortion,
    handleFlowReceived,
    handleFilterFlowReceivedForSituation,
}) => {
    const [data, setData] = useState<{ [key: number]: number }>([]);
    const [barData, setBarData] = useState<number[]>([]);

    const [situationSelected, setSituationSelected] = useState({
        value: -1,
        label: "Todos",
    });

    const [paymentSituationSelected, setPaymentSituationSelected] = useState({
        value: -1,
        label: "Todos",
    });

    const [amountMonth, setAmountMonth] = useState({
        value: 12,
        label: "12 meses",
    });

    useEffect(() => {
        const response = amountPayment();
        const barDataResponse = handleFlowReceived(amountMonth.value);

        setData(response);
        setBarData(barDataResponse);
    }, [amountPayment]);

    useEffect(() => {
        const barDataResponse = handleFlowReceived(amountMonth.value);

        setBarData(barDataResponse);
    }, [amountMonth.value]);

    useEffect(() => {
        const response = filterPaymentForSituaction(paymentSituationSelected.value);

        setData(response);
    }, [paymentSituationSelected.value]);

    useEffect(() => {
        const response = handleFilterFlowReceivedForSituation(situationSelected.value, amountMonth.value);

        setBarData(response);
    }, [situationSelected.value]);

    const handleSetSituation = (situation: any) => {
        setSituationSelected(situation);
    };
    const handleSetPaymentoSituation = (situation: any) => {
        setPaymentSituationSelected(situation);
    };
    const handleSetAmountMonth = (amountMonth: any) => {
        setAmountMonth(amountMonth);
    };

    return (
        <>
            <div className="col-sm-4 text-center">
                <div>
                    <div className="row">
                        <div className="col-md-6 text-left font-25">
                            <b>Meios de pagamento</b>
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
                    <br />
                    <Pie
                        labels={paymentForm.map((payment) => paymentTypes[payment])}
                        data={paymentForm.map((situation) => data[situation])}
                        colors={["#26d3ff", "#14657b", "#4E4C67", "#A6B1E1"]}
                    />
                </div>
            </div>
            <div className="col-sm-1 colum-width-2">
                <div className="traco-vertical-g"></div>
            </div>
            <div className="col-sm-7">
                <div className="barraRolagem">
                    <div>
                        <div className="d-flex justify-content-between">
                            <b className="font-25">
                                Fluxo de <br /> Recebimento
                            </b>
                            <div className="d-flex" style={{ width: 300 }}>
                                <Select
                                    options={optionsSituation}
                                    value={situationSelected}
                                    onChange={handleSetSituation}
                                />
                                <Select options={optionsYears} value={amountMonth} onChange={handleSetAmountMonth} />
                            </div>
                        </div>

                        <Bar
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
                            data={barData.filter((item, index) => index !== 0)}
                            color="#26d3ff"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default FlowReceivement;
