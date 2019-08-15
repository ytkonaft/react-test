import React from 'react'
import Chart from "react-apexcharts";


const BarChart = ({ data  }) => {
    const labels = data.map(itm => itm.timestamp)
    const chartData = data.map(itm => itm.value);
    return (
        <Chart
            options={{
                xaxis: {
                  categories: labels
                },
                yaxis: {
                    decimalsInFloat: false,
                }
              }}
            series={[{
                data: chartData
            }]}
            type="line"
            />

    )
}

export default BarChart
