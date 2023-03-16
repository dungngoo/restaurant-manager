import classNames from 'classnames/bind';
import styles from './Order.module.scss';
const cx = classNames.bind(styles);

function Order() {
    return (
        <div className={cx('wrapper')}>
            <h1>Form Đặt tiệc</h1>
        </div>
    );
}

export default Order;
