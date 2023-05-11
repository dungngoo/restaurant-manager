import classNames from 'classnames/bind';
import styles from './Doc4.module.scss';
import Clock from '~/components/Clock';
import HeaderDoc from '~/components/Layout/components/HeaderDoc';
const cx = classNames.bind(styles);

function Doc4() {
    return (
        <div className={cx('wrapper-doc')}>
            <div className={cx('header-clock')}>
                <HeaderDoc text="Quản lí dịch vụ" />
                <Clock />
            </div>
        </div>
    );
}

export default Doc4;
