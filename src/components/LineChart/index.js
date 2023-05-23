import React from 'react';
import ReactApexChart from 'react-apexcharts';
import TimeRangeForm from '../TimeRangeForm';

class LineChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: 'basic-line',
                },
                xaxis: {
                    categories: [],
                },
                tooltip: {
                    enabled: true,
                    x: {
                        show: true,
                        formatter: function (value) {
                            return value.toString();
                        },
                    },
                    y: {
                        formatter: function (value) {
                            return new Intl.NumberFormat('vi-VN', {
                                style: 'currency',
                                currency: 'VND',
                            }).format(value);
                        },
                    },
                },
            },
            series: [
                {
                    name: 'Doanh thu',
                    data: [],
                },
            ],
            year: '',
            month: '',
            error: null,
            monthlyRevenueData: null,
        };
    }

    componentDidMount() {
        const { year, month } = this.state;

        const startDate = new Date(year, month - 1, 1);
        const endDate = new Date(year, month, 0);

        const categories = [];
        const seriesData = [];

        let currentDate = startDate;
        while (currentDate <= endDate) {
            categories.push(currentDate.getDate());
            seriesData.push(0);
            currentDate.setDate(currentDate.getDate() + 1);
        }

        // Gọi API endpoint trên backend để lấy dữ liệu doanh thu theo tháng
        fetch(`${process.env.REACT_APP_SERVER_URL}/bookings/caculateMonth?year=${year}&month=${month}`)
            .then((response) => response.json())
            .then((data) => {
                // Cập nhật mảng seriesData với dữ liệu doanh thu theo ngày
                console.log(data);
                Object.keys(data.dailyRevenueData).forEach((day) => {
                    seriesData[day - 1] = data.dailyRevenueData[day];
                });

                this.setState({
                    options: {
                        xaxis: {
                            categories: categories.map((day) => `${day}`),
                        },
                        annotations: {
                            y: {
                                formatter: function (value) {
                                    // Định dạng giá trị hiển thị cho cột dọc (đơn vị VND)
                                    return new Intl.NumberFormat('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND',
                                    }).format(value);
                                },
                            },
                            x: {
                                formatter: function (value) {
                                    // Định dạng giá trị hiển thị cho cột x (đơn vị ngày)
                                    return value.toString();
                                },
                            },
                        },
                    },
                    series: [
                        {
                            data: seriesData,
                        },
                    ],
                    error: null,
                    monthlyRevenueData: data.monthlyRevenueData,
                });
            })
            .catch((error) => {
                console.error('Error:', error);
                this.setState({ error: 'Chưa chọn tháng' });
            });
    }

    handleTimeRangeSubmit = (startTime, endTime) => {
        // Lấy thông tin year và month từ startTime (ngày đầu tháng)
        const [year, month] = startTime.split('-');
        this.setState({ year, month }, () => {
            // Gọi lại phương thức componentDidMount để lấy dữ liệu doanh thu mới
            this.componentDidMount();
        });
    };

    render() {
        const { options, series, error, monthlyRevenueData } = this.state;

        return (
            <>
                <div>
                    <TimeRangeForm onSubmit={this.handleTimeRangeSubmit} />
                    <h2>Doanh thu theo tháng</h2>
                    {error ? (
                        <p>{error}</p>
                    ) : (
                        <ReactApexChart options={options} series={series} type="line" height={350} />
                    )}
                </div>
                {monthlyRevenueData !== 0 && (
                    <h3>
                        Tổng doanh thu theo tháng:
                        <span style={{ fontSize: '30px', color: 'red' }}>
                            {monthlyRevenueData > 0 && monthlyRevenueData.toLocaleString()}
                        </span>
                    </h3>
                )}
            </>
        );
    }
}

export default LineChart;
