import classNames from 'classnames/bind';
import styles from './Doc4.module.scss';
import Clock from '~/components/Clock';
import HeaderDoc from '~/components/Layout/components/HeaderDoc';
import ServiceList from '~/components/ServiceList';
const cx = classNames.bind(styles);

function Doc4() {
    return (
        <div className={cx('wrapper-doc')}>
            <div className={cx('header-clock')}>
                <HeaderDoc text="Quản lí dịch vụ" />
                <Clock />
            </div>
            <ServiceList />
        </div>
    );
}

export default Doc4;
