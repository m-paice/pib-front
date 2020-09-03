import React from "react";

import { Bar } from "react-chartjs-2";

interface Props {
    title: string;
    labels: string[];
    data: number[];
    color: string | string[];
}

const BarChart: React.FC<Props> = ({ title, labels, data, color }) => {
    return (
        <Bar
            data={{
                labels,
                datasets: [
                    {
                        label: title,
                        data,
                        backgroundColor: color,
                    },
                ],
            }}
            options={{
                scales: {
                    xAxes: [
                        {
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                            },
                        },
                    ],
                    yAxes: [
                        {
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                            },
                        },
                    ],
                },
            }}
        />
    );
};

export default BarChart;
