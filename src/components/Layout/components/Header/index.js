import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('navbar-left-header')}>
                <li clasName={cx('list-item')}>
                    <Link className={cx('list-item-link')} to="/">
                        Giới thiệu
                    </Link>
                </li>
                <li clasName={cx('list-item')}>
                    <Link className={cx('list-item-link')} to="/discover">
                        Khám phá
                    </Link>
                </li>
                <li clasName={cx('list-item')}>
                    <Link className={cx('list-item-link')} to="/service">
                        Dịch vụ
                    </Link>
                </li>
                <li clasName={cx('list-item')}>
                    <Link className={cx('list-item-link')} to="/promotion">
                        Khuyến mãi
                    </Link>
                </li>
                <li clasName={cx('list-item')}>
                    <Link className={cx('list-item-link-img')} to="/">
                        <div className={cx('wrap-img-header')}>
                            <img
                                className={cx('img-header')}
                                src="https://luxurypalace.vn/wp-content/themes/luxury-palace/image/logo_icon.png"
                                alt="Ảnh Header"
                            />
                        </div>
                    </Link>
                </li>
                <li clasName={cx('list-item')}>
                    <Link className={cx('list-item-link')} to="/libary">
                        Thư viện
                    </Link>
                </li>
                <li clasName={cx('list-item')}>
                    <Link className={cx('list-item-link')} to="/news">
                        Tin tức
                    </Link>
                </li>
                <li clasName={cx('list-item')}>
                    <Link className={cx('list-item-link')} to="/contact">
                        Liên hệ
                    </Link>
                </li>
                <li clasName={cx('list-item')}>
                    <div className={cx('icon-socials')}>
                        <a className={cx('nav-icon')} href="">
                            <i className={cx('fa-brands fa-youtube')} />
                        </a>
                        <a className={cx('nav-icon')} href="">
                            <i className="fa-brands fa-facebook" />
                        </a>
                        <a className={cx('nav-icon')} href="">
                            <i className="fa-brands fa-facebook-messenger" />
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Header;
