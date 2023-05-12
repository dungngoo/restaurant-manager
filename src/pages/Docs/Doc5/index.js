import classNames from 'classnames/bind';
import styles from './Doc5.module.scss';
import Clock from '~/components/Clock';
import HeaderDoc from '~/components/Layout/components/HeaderDoc';
import MenuList from '~/components/MenuList';
const cx = classNames.bind(styles);

function Doc5() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-clock')}>
                <HeaderDoc text="Quản lí thực đơn" />
                <Clock />
            </div>
            <MenuList />
        </div>
    );
}

export default Doc5;
