import classNames from 'classnames/bind';
import styles from './Promotion.module.scss';
const cx = classNames.bind(styles);

function Promotion() {
    return (
        <div className={cx('wrapper')}>
            <h1>Trang Thư viện</h1>
        </div>
    );
}

export default Promotion;
