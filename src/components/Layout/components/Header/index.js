import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logoRestaurant from '~/assets/imgs/logo-restaurant1.png';
const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-logo')}>
                <img src={logoRestaurant} />
            </div>
            <div className="header-container">
                <div className="header-search"></div>
                <div className="header-criteria"></div>
            </div>
            <div className="header-login"></div>
            <div className="header-cart"></div>
        </div>
    );
}

export default Header;
