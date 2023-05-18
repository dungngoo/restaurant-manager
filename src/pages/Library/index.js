import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import ContentLibrary from '~/components/Layout/components/ContentLibrary';
import styles from './Library.module.scss';
import { Link } from 'react-router-dom';

import EventsLibrary from '~/components/Layout/components/EventsLibrary';
const cx = classNames.bind(styles);
// Component List Món Ăn
export const MonAn = () => {
    return <ContentLibrary />;
};

//  Component Hình Cưới
export const HinhCuoi = () => {
    return <EventsLibrary />;
};

function Libary() {
    const libraryToPath = {
        monan: '/library-cat/hinh-am-thuc/',
        sukiencuoi: '/library-cat/hinh-cuoi/',
        sukiencongty: '/library-cat/hinh-su-kien/',
        sukiencanhan: '/library-cat/hinh-trang-tri/',
    };

    return (
        <div className={cx('container')}>
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
            <div className={cx('wrap-row')}>
                <div className={cx('row')}>
                    <div className={cx('col6')}>
                        <a href="/library-cat/hinh-am-thuc/" className={cx('h-100')}>
                            <div className={cx('card')}>
                                <img
                                    className={cx('img')}
                                    src="https://luxurypalace.vn/wp-content/uploads/2019/12/IMG_1144-scaled.jpg"
                                ></img>
                                <div className={cx('cardOverlay')}>
                                    <h5 className={cx('cardTitle')}>1. Món ăn</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={cx('col6')}>
                        <a href="/library-cat/hinh-cuoi/" className={cx('h-100')}>
                            <div className={cx('card')}>
                                <img
                                    className={cx('img')}
                                    src="	https://luxurypalace.vn/wp-content/uploads/2020/01/LUL02306.jpg"
                                ></img>
                                <div className={cx('cardOverlay')}>
                                    <h5 className={cx('cardTitle')}>2. Sự kiện cưới</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={cx('col6')}>
                        <a href="/library-cat/hinh-su-kien/" className={cx('h-100')}>
                            <div className={cx('card')}>
                                <img
                                    className={cx('img')}
                                    src="https://luxurypalace.vn/wp-content/uploads/2019/12/8288fe19db363c686527.jpg"
                                ></img>
                                <div className={cx('cardOverlay')}>
                                    <h5 className={cx('cardTitle')}>3. Sự kiện công ty</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={cx('col6')}>
                        <a href="/library-cat/hinh-trang-tri/" className={cx('h-100')}>
                            <div className={cx('card')}>
                                <img
                                    className={cx('img')}
                                    src="https://luxurypalace.vn/wp-content/uploads/2021/12/6.jpg"
                                ></img>
                                <div className={cx('cardOverlay')}>
                                    <h5 className={cx('cardTitle')}>4. Sự kiện cá nhân khác</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Libary;
