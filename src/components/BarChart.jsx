import React from 'react'
import Chart from "react-apexcharts";

const LineChart = ({ data  }) => {
    const chartData = data.map(itm => {
        return itm.value
    });

    const optionsObj = {}

    chartData.forEach(value => {
        const round = parseInt(value) / 10
        const dozens = parseInt(round) *10
        const sign = round < 0 ? -1 : 1;
        const key = `${dozens} - ${dozens + (10 * sign)}`
        if (!optionsObj[key]) {
            optionsObj[key] = 1
        } else {
            optionsObj[key] = optionsObj[key] + 1
        }
    })

    const labels = []
    const values = []
    for (let key in optionsObj) {
        labels.push(key)
        values.push(optionsObj[key])
    }


    return (
        <Chart
            options={{
                xaxis: {
                  categories: labels
                }
              }}
            series={[{
                data: values
            }]}
            type="bar"
      />
    )
}

export default LineChart
