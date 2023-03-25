import classNames from 'classnames/bind';
import styles from './Doc5.module.scss';
const cx = classNames.bind(styles);

function Doc5() {
    return (
        <div className={cx('wrapper')}>
            <h1>Hello ae Doc5</h1>
        </div>
    );
}

export default Doc5;
