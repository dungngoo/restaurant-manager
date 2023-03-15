import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
const cx = classNames.bind(styles);

function Discover() {
    return (
        <div className={cx('wrapper')}>
            <h1>Trang khám phá</h1>
        </div>
    );
}

export default Discover;
