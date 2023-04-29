import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormAccount from '../FormAccount';
import { useState } from 'react';
import { faAngleDown, faUser } from '@fortawesome/free-solid-svg-icons';
import logoHeader from '~/assets/imgs/logonhahang1.png';

const cx = classNames.bind(styles);

function Header() {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showCartForm, setShowCartForm] = useState(false);
   
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('navbar-left-header')}>
                <li clasName={cx('list-item')}>
                    <Link className={cx('list-item-link')} to="/introduce">
                        Giới thiệu
                    </Link>
                </li>
                <li clasName={cx('list-item')}>
                    <Link className={cx('list-item-link')} to="/discover/ruby/">
                        Khám phá
                    </Link>
                </li>
                <li clasName={cx('list-item')}>
                    <Link className={cx('list-item-link')} to="/services/tiec-cuoi/">
                        Dịch vụ
                    </Link>
                </li>
                <li clasName={cx('list-item')}>
                    <Link className={cx('list-item-link', 'promotion')} to="/promotion-cat/tiec-cuoi/">
                        Khuyến mãi
                    </Link>
                </li>
            </ul>
            <div clasName={cx('logo-heading')}>
                <a className={cx('list-item-link-img')} href="/">
                    <div className={cx('wrap-img-header')}>
                        <img
                            className={cx('img-header')}
                            src="https://luxurypalace.vn/wp-content/themes/luxury-palace/image/logo_icon.png"
                            alt="Ảnh Header"
                        />
                    </div>
                </a>
            </div>
            <ul className={cx('navbar-right-header')}>
                <li clasName={cx('list-item')}>
                    <Link className={cx('list-item-link')} to="/library/">
                        Thư viện
                    </Link>
                </li>
                <li clasName={cx('list-item')}>
                    <a className={cx('list-item-link')} href="/news/">
                        Tin tức
                    </a>
                </li>
                <li clasName={cx('list-item')}>
                    <Link className={cx('list-item-link')} to="/contact/">
                        Liên hệ
                    </Link>
                </li>
                <li clasName={cx('list-item')}>
                    <Link className={cx('list-item-link')} to="/order/">
                        <div className={cx('orders')}>Đặt tiệc</div>
                    </Link>
                </li>
                {/* <li clasName={cx('list-item')}>
                    <div className={cx('form-login')}>
                        <div className={cx('header-login')} onClick={handleClick}>
                            <div className={cx('header__wrap-logo-login')}>
                                <FontAwesomeIcon icon={faUser} className={cx('header__logo-login')} alt="Tài khoản" />
                            </div>
                            <div className={cx('header__account')}>
                                <span>Đăng nhập / Đăng ký</span>

                                <div className={cx('header__myaccount')}>
                                    <span>Tài khoản của tôi</span>
                                    <FontAwesomeIcon icon={faAngleDown} className={cx('header__myaccount-icon')} />
                                </div>
                            </div> */}
                {/* Hiện account Form đăng nhập */}
                {showLoginForm && <FormAccount />}
                {/* </div>
                    </div>
                </li> */}
            </ul>
        </div>
    );
}

export default Header;
