import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
    faUser,
    faAngleDown,
    faCartShopping,
    faMedal,
    faCar,
    faCheck,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logoRestaurant from '~/assets/imgs/logo-restaurant1.png';
import FormAccount from '../FormAccount';
const cx = classNames.bind(styles);

function Header() {
    const [showLoginForm, setShowLoginForm] = useState(false);

    const handleClick = () => {
        setShowLoginForm(!showLoginForm);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header__wrap-logo')}>
                <img src={logoRestaurant} className={cx('header-logo')} />
            </div>
            <div className={cx('header-container')}>
                <div className={cx('header-content')}>
                    <div className={cx('header__wrap-input-search')}>
                        <input
                            type="text"
                            placeholder="Cá sốt trứng muối, đậu hũ hải sản"
                            className={cx('header__input-search')}
                            onFocus="script"
                        ></input>
                        <div className={cx('header__wrap-icon-search')}>
                            <FontAwesomeIcon icon={faSearch} className={cx('header__icon-search')} />
                        </div>
                    </div>
                    <div className={cx('header__criteria')}>
                        <div>
                            <FontAwesomeIcon icon={faMedal} className={cx('header__criteria-logo')} />
                            Cam kết chất lượng
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faCar} className={cx('header__criteria-logo')} />
                            Giao nhanh 60 phút - Freeship dù chỉ 1 món
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faCheck} className={cx('header__criteria-logo')} />
                            Lỗi là đổi
                        </div>
                    </div>
                </div>

                <div className={cx('header-login')}>
                    <div className={cx('header__wrap-logo-login')}>
                        <FontAwesomeIcon icon={faUser} className={cx('header__logo-login')} />
                    </div>
                    <div className={cx('header__account')} onClick={handleClick}>
                        <span>Đăng nhập / Đăng ký</span>

                        <div className={cx('header__myaccount')}>
                            <span>Tài khoản của tôi</span>
                            <FontAwesomeIcon icon={faAngleDown} className={cx('header__myaccount-icon')} />
                        </div>
                    </div>
                    {/* Hiện account Form đăng nhập */}
                    {showLoginForm && <FormAccount />}
                </div>
                <div className={cx('header__cart')}>
                    <div className={cx('header__wrap-cart-logo')}>
                        <FontAwesomeIcon icon={faCartShopping} className={cx('header__wrap-cart-logo')} />
                    </div>
                    <span>Giỏ hàng</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
