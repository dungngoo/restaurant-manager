import React from 'react';
import ReactApexChart from 'react-apexcharts';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './ChartComponent.module.scss';

const cx = classNames.bind(styles);
class ChartComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: 'basic-pie',
                },
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200,
                            },
                            legend: {
                                position: 'top',
                            },
                        },
                    },
                ],
                labels: props.type === 1 ? ['Paid', 'Pending'] : ['Hóa đơn'],
                colors: props.type === 1 ? ['#ff0000', '#0022ff'] : ['#59d4e0'],
            },
            series: [],
        };
    }

    componentDidMount() {
        const { type } = this.props;
        // Gọi API endpoint trên backend để lấy dữ liệu doanh thu theo tháng
        let endpoint = '';
        if (type === 1) {
            fetch(`${process.env.REACT_APP_SERVER_URL}/bookings`)
                .then((response) => response.json())
                .then((data) => {
                    const paidCount = data.filter((order) => order.status === 'paid').length;
                    const pendingCount = data.filter((order) => order.status === 'pending').length;

                    // Cập nhật series với paidCount và pendingCount
                    this.setState({
                        series: [paidCount, pendingCount],
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        } else if (type === 2) {
            fetch(`${process.env.REACT_APP_SERVER_URL}/parties`)
                .then((response) => response.json())
                .then((data) => {
                    const dataCount = data.length;
                    console.log(dataCount);
                    this.setState({
                        series: [dataCount],
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        }

        // Gọi API endpoint để lấy dữ liệu tương ứng
        fetch(endpoint);
    }

    render() {
        const { title } = this.props; // Truy cập props title

        return (
            <div>
                <h4 style={{ textAlign: 'center', marginRight: '90px' }}>{title}</h4>
                <ReactApexChart options={this.state.options} series={this.state.series} type="pie" height={350} />
            </div>
        );
    }
}

export default ChartComponent;
