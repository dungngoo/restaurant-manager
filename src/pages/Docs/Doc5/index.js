import classNames from 'classnames/bind';
import styles from './Doc5.module.scss';
import Clock from '~/components/Clock';
import HeaderDoc from '~/components/Layout/components/HeaderDoc';
const cx = classNames.bind(styles);

function Doc5() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-clock')}>
                <HeaderDoc text="Quản lí văn phòng" />
                <Clock />
            </div>
        </div>
    );
}

export default Doc5;
