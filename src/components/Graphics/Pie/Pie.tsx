import React from "react";

import { Pie } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

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
            options={{
                plugins: {
                    datalabels: {
                        formatter: (value, ctx) => {
                            let sum = 0;
                            const dataArr = ctx.chart.data.datasets[0].data;
                            dataArr.map((data) => {
                                sum += data;
                            });
                            const percentage = ((value * 100) / sum).toFixed(2).replace(".", ",") + "%";
                            return percentage;
                        },
                        color: "#fff",
                    },
                },
            }}
            // options={{
            //     responsive: true,
            //     legend: false,

            //     maintainAspectRatio: true,
            //     plugins: {
            //         labels: {
            //             render: "percentage",
            //             fontColor: ["green", "white", "red"],
            //             precision: 2,
            //         },
            //     },
            //     tooltips: {
            //         callbacks: {
            //             label: function (tooltipItem, data) {
            //                 // get the concerned dataset
            //                 const dataset = data.datasets[tooltipItem.datasetIndex];
            //                 // calculate the total of this data set
            //                 const total = dataset.data.reduce(function (
            //                     previousValue,
            //                     currentValue,
            //                     currentIndex,
            //                     array,
            //                 ) {
            //                     return previousValue + currentValue;
            //                 });
            //                 // get the current items value
            //                 const currentValue = dataset.data[tooltipItem.index];
            //                 // calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number
            //                 const percentage = Math.floor((currentValue / total) * 100 + 0.5);

            //                 return `${currentValue} - ${percentage}%`;
            //             },
            //         },
            //     },
            // }}
        />
    );
};

export default PieChart;
