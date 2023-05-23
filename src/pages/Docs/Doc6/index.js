import classNames from 'classnames/bind';
import styles from './Doc6.module.scss';
import BarChartDemo from '~/components/BarChart';

import HeaderDoc from '~/components/Layout/components/HeaderDoc';
import Clock from '~/components/Clock';
import ChartDetail from '~/components/ChartDetail';
import TimeRangeForm from '~/components/TimeRangeForm';
import PieChartDemo from '~/components/PieChart';
import ChartComponent from '~/components/ChartComponent';
import BarChart from '~/components/BarChart';
import LineChart from '~/components/LineChart';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function Docs6() {
    const [totalInvoices, setTotalInvoices] = useState('');
    const [weeklyRevenue, setWeeklyRevenue] = useState('');
    const [totalCateringOrders, setTotalCateringOrders] = useState('');

    // API lấy ra tất cả hóa đơn
    async function getParties() {
        fetch(`${process.env.REACT_APP_SERVER_URL}/parties`)
            .then((res) => res.json())
            .then((data) => {
                setTotalInvoices(data.length);
            })
            .catch((err) => console.error(err.message));
    }
    // API lấy ra tất cả đơn đặt tiệc
    async function getBoookings() {
        fetch(`${process.env.REACT_APP_SERVER_URL}/bookings`)
            .then((res) => res.json())
            .then((data) => {
                setTotalCateringOrders(data.length);
            })
            .catch((err) => console.error(err.message));
    }
    // Lấy ra tổng doanh thu theo tuần
    async function getCaculateByWeek() {
        fetch(`${process.env.REACT_APP_SERVER_URL}/bookings/caculate`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setWeeklyRevenue(data.totalRevenue ? data.totalRevenue : 0);
            })

            .catch((err) => console.error(err.message));
    }
    useEffect(() => {
        //  Gọi API để lấy ra thống kê theo yêu cầu
        getParties();
        getBoookings();
        getCaculateByWeek();
    }, []);

    return (
        <div className={cx('wrapper-doc')}>
            <div className={cx('header-clock')}>
                <HeaderDoc text="Thống kê" />
                <Clock />
            </div>

            <div className={cx('row')}>
                <div className={cx('col l-4')}>
                    <ChartDetail color="red" title={'TỔNG SỐ HÓA ĐƠN'} data={`${totalInvoices}`} />
                </div>
                <div className={cx('col l-4')}>
                    <ChartDetail color={'green'} title={'TỔNG SỐ ĐƠN ĐẶT TIỆC'} data={`${totalCateringOrders}`} />
                </div>
                <div className={cx('col l-4')}>
                    <ChartDetail color={'blue'} title={'DOANH THU TUẦN NÀY'} data={`${weeklyRevenue} `} />
                </div>
            </div>

            <div className={cx('content-doc')}>
                <div className={cx('grid')}>
                    <div className={cx('row')}>
                        <div className={cx('col l-12')}>
                            <LineChart />
                        </div>
                    </div>
                    <br />
                    <div className={cx('row')}>
                        <div className={cx('col l-6')}>
                            <ChartComponent title={'Tổng đơn đặt tiệc'} type={1} />
                        </div>
                        <div className={cx('col l-6')}>
                            <ChartComponent title={'Tổng số hóa đơn'} type={2} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Docs6;
