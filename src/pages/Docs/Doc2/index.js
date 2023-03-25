import classNames from 'classnames/bind';
import styles from './Doc2.module.scss';
const cx = classNames.bind(styles);

function Doc2() {
    return (
        <div className={cx('wrapper')}>
            <h1>Hello ae Doc2</h1>
        </div>
    );
}

export default Doc2;
