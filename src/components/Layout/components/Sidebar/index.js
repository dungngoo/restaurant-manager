import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoAdmin from '~/assets/imgs/admin/img1.jpg';
const cx = classNames.bind(styles);

function Sidebar() {
    const [currentPath, setCurrentPath] = useState('');
    const listsManager = [
        {
            link: '1',
            iClassname: 'fa-solid fa-champagne-glasses',
            name: 'Quản lí tiệc',
        },
        {
            link: '2',
            iClassname: 'fa-solid fa-dungeon',
            name: 'Quản lí sảnh',
        },
        {
            link: '3',
            iClassname: 'fa-solid fa-utensils',
            name: 'Quản lí thực đơn',
        },
        {
            link: '4',
            iClassname: 'fa-solid fa-user',
            name: 'Quản lí nhân viên',
        },
        {
            link: '5',
            iClassname: 'fa-solid fa-bell-concierge',
            name: 'Quản lí dịch vụ',
        },
        {
            link: '6',
            iClassname: 'fa-solid fa-star',
            name: 'Quản lí đơn đặt tiệc',
        },
        {
            link: '7',
            iClassname: 'fa-solid fa-chart-column',
            name: 'Thống kê',
        },
    ];

    const location = useLocation();

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {/* Thông tin admin  ( img, họ tên, welcome back) */}
                <div className={cx('wrap-img')}>
                    <img src={logoAdmin} alt="Ảnh minh họa" className={cx('img')} />
                    <h3 className={cx('name')}>Ngô Quốc Dũng</h3>
                    <div className={cx('span')}>Chào mừng bạn trở lại</div>
                </div>
                {/* //////////////////////// */}

                <ul className={cx('list-manager')}>
                    {listsManager.map((list, index) => (
                        <li
                            className={cx('item-manager', {
                                active: `/admin/${list.link}` === currentPath,
                            })}
                            key={index}
                        >
                            <Link to={`/admin/${list.link}`} className={cx('link')}>
                                <div className={cx('wrap-i')}>
                                    <i className={list.iClassname}></i>
                                </div>
                                <div className={cx('p')}>
                                    <span>{list.name}</span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
