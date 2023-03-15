import classNames from 'classnames/bind';
import styles from './Libary.module.scss';
const cx = classNames.bind(styles);

function Libary() {
    return (
        <div className={cx('wrapper')}>
            <h1>Trang Khuyến mãi</h1>
        </div>
    );
}

export default Libary;
