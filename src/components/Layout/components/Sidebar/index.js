import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import logoAdmin from '~/assets/imgs/admin/img1.jpg';
const cx = classNames.bind(styles);

function Sidebar() {
    const listsManager = [
        {
            link: '1',
            iClassname: 'fa-solid fa-house',
            name: 'Quản lí nhân viên',
        },
        {
            link: '2',
            iClassname: 'fa-solid fa-magnifying-glass',
            name: 'Quản lí đơn đặt tiệc',
        },
        {
            link: '3',
            iClassname: 'fa-solid fa-user',
            name: 'Quản lí tiệc',
        },
        {
            link: '4',
            iClassname: 'fa-regular fa-user',
            name: 'Quản lí dịch vụ',
        },
        {
            link: '5',
            iClassname: 'fa-brands fa-facebook',
            name: 'Quản lí thực đơn',
        },
        {
            link: '6',
            iClassname: 'fa-solid fa-check',
            name: 'Quản lí sảnh',
        },
    ];

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
                        <li id="li" className={cx('item-manager')} key={index}>
                            <Link to={`/admin/${list.link}`} className={cx('link')}>
                                <div className={cx('wrap-i')}>
                                    <i className={list.iClassname}></i>
                                </div>
                                <span id="p" className={cx('p')}>
                                    {list.name}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
