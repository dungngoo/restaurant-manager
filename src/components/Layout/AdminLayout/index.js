import styles from './AdminLayout.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function AdminLayout({ children, onLogoutSuccess }) {
    const [user, setUser] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function logout() {
        setIsLoading(true);
        setTimeout(() => {
            localStorage.removeItem('accessToken');
            alert('Đăng xuất thành công');
            setIsLoading(false);
            navigate('/admin/login');
        }, 500);
    }
    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            <div className={cx('content')}>{children}</div>
            <div className={cx('wrap-i')} onClick={logout}>
                {isLoading ? (
                    <i className="fas fa-circle-notch fa-spin"></i>
                ) : (
                    <i class="fa-solid fa-arrow-right-from-bracket"></i>
                )}
            </div>
        </div>
    );
}

export default AdminLayout;
