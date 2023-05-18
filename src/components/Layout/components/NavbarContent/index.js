import classNames from 'classnames/bind';
import styles from './NavbarContent.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function NavbarContent() {
    const libraryToPath = {
        monan: '/library-cat/hinh-am-thuc/',
        sukiencuoi: '/library-cat/hinh-cuoi/',
        sukiencongty: '/library-cat/hinh-su-kien/',
        sukiencanhan: '/library-cat/hinh-trang-tri/',
    };

    return (
        <div className={cx('wrapper-header')}>
            <div className={cx('header')}>
                <h2 className={cx('title')}>Hình ảnh</h2>
                <div className={cx('wrap-service')}>
                    <ul className={cx('navbar')}>
                        <li>
                            <Link
                                to={libraryToPath.monan}
                                className={cx(
                                    'navbar-link',
                                    window.location.pathname === libraryToPath.monan ? 'selected' : '',
                                )}
                            >
                                <span className={cx('span-item')}>1. Món Ăn</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={libraryToPath.sukiencuoi}
                                className={cx(
                                    'navbar-link',
                                    window.location.pathname === libraryToPath.sukiencuoi ? 'selected' : '',
                                )}
                            >
                                <span className={cx('span-item')}>2. Sự kiện cưới</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={libraryToPath.sukiencongty}
                                className={cx(
                                    'navbar-link',
                                    window.location.pathname === libraryToPath.sukiencongty ? 'selected' : '',
                                )}
                            >
                                <span className={cx('span-item')}>3. Sự kiện công ty</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={libraryToPath.sukiencanhan}
                                className={cx(
                                    'navbar-link',
                                    window.location.pathname === libraryToPath.sukiencanhan ? 'selected' : '',
                                )}
                            >
                                <span className={cx('span-item')}>4. Sự kiện cá nhân khác</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavbarContent;
