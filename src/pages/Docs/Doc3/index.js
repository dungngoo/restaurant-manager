import classNames from 'classnames/bind';
import Clock from '~/components/Clock';
import HeaderDoc from '~/components/Layout/components/HeaderDoc';
import styles from './Doc3.module.scss';
import PartyList from '~/components/PartyList';
const cx = classNames.bind(styles);

function Doc3() {
    return (
        <div className={cx('wrapper-doc')}>
            <div className={cx('header-clock')}>
                <HeaderDoc text="Quản lí tiệc" />
                <Clock />
            </div>
            <PartyList />
        </div>
    );
}

export default Doc3;
