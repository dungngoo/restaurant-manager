import React from 'react';
import ReactApexChart from 'react-apexcharts';

class BarChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: 'basic-bar',
                },
                xaxis: {
                    categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
                },
            },
            series: [
                {
                    name: 'Series 1',
                    data: [30, 40, 35, 50, 49, 60, 70, 91],
                },
            ],
        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
            </div>
        );
    }
}

export default BarChart;
