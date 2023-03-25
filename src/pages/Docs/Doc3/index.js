import classNames from 'classnames/bind';
import styles from './Doc3.module.scss';
const cx = classNames.bind(styles);

function Doc3() {
    return (
        <div className={cx('wrapper')}>
            <h1>Hello ae Doc3</h1>
        </div>
    );
}

export default Doc3;
