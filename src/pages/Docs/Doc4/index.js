import classNames from 'classnames/bind';
import styles from './Doc4.module.scss';
const cx = classNames.bind(styles);

function Doc4() {
    return (
        <div className={cx('wrapper')}>
            <h1>Hello ae Doc4</h1>
        </div>
    );
}

export default Doc4;
