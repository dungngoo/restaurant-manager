import classNames from 'classnames/bind';
import styles from './Doc6.module.scss';
import BarChartDemo from '~/components/BarChart';

import HeaderDoc from '~/components/Layout/components/HeaderDoc';
import Clock from '~/components/Clock';
import ChartDetail from '~/components/ChartDetail';
import TimeRangeForm from '~/components/TimeRangeForm';
const cx = classNames.bind(styles);

function Docs6() {
    return (
        <div className={cx('wrapper-doc')}>
            <div className={cx('header-clock')}>
                <HeaderDoc text="Thống kê" />
                <Clock />
            </div>

            <div className={cx('row')}>
                <div className={cx('col l-4')}>
                    <ChartDetail color="red" title={'TỔNG SỐ HÓA ĐƠN'} data={'123'} />
                </div>
                <div className={cx('col l-4')}>
                    <ChartDetail color={'green'} title={'TỔNG SỐ ĐƠN ĐẶT TIỆC'} data={'123'} />
                </div>
                <div className={cx('col l-4')}>
                    <ChartDetail color={'blue'} title={'SỐ LƯỢNG TRUY CẬP'} data={'123'} />
                </div>
            </div>

            <div className={cx('content-doc')}>
                <div className={cx('grid')}>
                    <TimeRangeForm />
                    <div className={cx('row')}>
                        <div className={cx('col l-12')}>
                            <BarChartDemo />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Docs6;
