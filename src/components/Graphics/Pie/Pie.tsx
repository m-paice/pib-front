import React from "react";

import { Pie } from "react-chartjs-2";

interface Props {
    labels: string[];
    data: number[];
    colors: string[];
}

const PieChart: React.FC<Props> = ({ labels, data, colors }) => {
    return (
        <Pie
            data={{
                labels,
                datasets: [
                    {
                        data,
                        backgroundColor: colors,
                    },
                ],
            }}
            options={{}}
        />
    );
};

export default PieChart;
