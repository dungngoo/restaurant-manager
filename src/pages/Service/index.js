import classNames from 'classnames/bind';
import styles from './Service.module.scss';
const cx = classNames.bind(styles);

function Service() {
    return (
        <div className={cx('wrapper')}>
            <h1>Trang dịch vụ</h1>
        </div>
    );
}

export default Service;
