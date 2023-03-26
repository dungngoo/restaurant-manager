import styles from './AdminLayout.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const cx = classNames.bind(styles);

function AdminLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            <div className={cx('content')}>{children}</div>

            <div className={cx('wrap-i')}>
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
            </div>
        </div>
    );
}

export default AdminLayout;
