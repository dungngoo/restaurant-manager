import classNames from 'classnames/bind';
import styles from './Doc2.module.scss';
import Clock from '~/components/Clock';
import HeaderDoc from '~/components/Layout/components/HeaderDoc';
const cx = classNames.bind(styles);

function Doc2() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-clock')}>
                <HeaderDoc text="Quản lí mật khẩu" />
                <Clock />
            </div>
        </div>
    );
}

export default Doc2;
