import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Sidebar() {
    const listsManager = [
        {
            link: '1',
            iClassname: 'fa-solid fa-house',
            name: 'Quản lí 1',
        },
        {
            link: '2',
            iClassname: 'fa-solid fa-magnifying-glass',
            name: 'Quản lí 2',
        },
        {
            link: '3',
            iClassname: 'fa-solid fa-user',
            name: 'Quản lí 3',
        },
        {
            link: '4',
            iClassname: 'fa-regular fa-user',
            name: 'Quản lí 4',
        },
        {
            link: '5',
            iClassname: 'fa-brands fa-facebook',
            name: 'Quản lí 5',
        },
        {
            link: '6',
            iClassname: 'fa-solid fa-check',
            name: 'Quản lí 6',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {/* Thông tin admin  ( img, họ tên, welcome back) */}
                <div className={cx('wrap-img')}>
                    <img
                        src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-1/331787224_851102829289025_5870547377214840913_n.jpg?stp=dst-jpg_s320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ZDCxySxYszEAX8wcdmp&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfAq67RuqhUvGAhmGK1YttMIdXDnxKoeDC994GrNJQ7xQw&oe=6424090C"
                        alt=""
                        className={cx('img')}
                    />
                    <h3 className={cx('name')}>Ngô Quốc Dũng</h3>
                    <div className={cx('span')}>Chào mừng bạn trở lại</div>
                </div>
                {/* //////////////////////// */}

                <ul className={cx('list-manager')}>
                    {/* Render thẻ li từng chức năng quản lý */}
                    <li className={cx('item-manager', 'active')}>
                        <Link to="/" className={cx('link')}>
                            <div className={cx('wrap-i')}>
                                <i className="fa-regular fa-user"></i>
                            </div>
                            <span id="p" className={cx('p')}>
                                trở lại trang chính
                            </span>
                        </Link>
                    </li>

                    {listsManager.map((list, index) => (
                        <li id="li" className={cx('item-manager')} key={index}>
                            <a href={`/docs/${list.link}`} className={cx('link')}>
                                <div className={cx('wrap-i')}>
                                    <i className={list.iClassname}></i>
                                </div>
                                <span id="p" className={cx('p')}>
                                    {list.name}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
