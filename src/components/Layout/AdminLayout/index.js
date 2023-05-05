import styles from './AdminLayout.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
const cx = classNames.bind(styles);

function AdminLayout({ children }) {
    async function handleLogout() {
        // Gửi yêu cầu logout đến server
        fetch(`${process.env.REACT_APP_SERVER_URL}/admin/logout/`, {
            credentials: 'include', // Gửi cookie về server
        })
            .then(() => {
                // Xóa access_token khỏi local storage hoặc cookie
                localStorage.removeItem('access_token');
                // chuyển hướng về trang đăng nhập
                window.location.href = '/admin/login';
            })
            .catch((error) => {
                console.error('Logout error:', error);
            });
    }
    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            <div className={cx('content')}>{children}</div>

            <div className={cx('wrap-i')} onClick={handleLogout}>
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
            </div>
        </div>
    );
}

export default AdminLayout;
