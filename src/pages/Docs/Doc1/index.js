import classNames from 'classnames/bind';
import styles from './Doc1.module.scss';
const cx = classNames.bind(styles);

function Doc1() {
    return (
        <div className={cx('wrapper')}>
            <h1>Hello ae Doc1</h1>
        </div>
    );
}

export default Doc1;
