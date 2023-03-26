import classNames from 'classnames/bind';
import Clock from '~/components/Clock';
import HeaderDoc from '~/components/Layout/components/HeaderDoc';
import styles from './Doc3.module.scss';
const cx = classNames.bind(styles);

function Doc3() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-clock')}>
                <HeaderDoc text="Quản lí tiệc" />
                <Clock />
            </div>
        </div>
    );
}

export default Doc3;
