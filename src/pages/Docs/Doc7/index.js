import classNames from 'classnames/bind';
import styles from './Doc7.module.scss';

import HeaderDoc from '~/components/Layout/components/HeaderDoc';
import Clock from '~/components/Clock';
import LobbyList from '~/components/LobbyList';

const cx = classNames.bind(styles);

function Docs7() {
    return (
        <div className={cx('wrapper-doc')}>
            <div className={cx('header-clock')}>
                <HeaderDoc text="Quản lí sảnh" />
                <Clock />
            </div>
            <LobbyList/>
        </div>
    );
}

export default Docs7;
