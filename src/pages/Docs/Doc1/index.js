import classNames from 'classnames/bind';
import Clock from '~/components/Clock';
import HeaderDoc from '~/components/Layout/components/HeaderDoc';
import styles from './Doc1.module.scss';
import StaffList from '~/components/StaffList';
const cx = classNames.bind(styles);

function Doc1() {
    return (
        <div className={cx('wrapper-doc')}>
            <div className={cx('header-clock')}>
                <HeaderDoc text="Quản lí nhân viên" />
                <Clock />
            </div>
            <StaffList />
        </div>
    );
}

export default Doc1;
