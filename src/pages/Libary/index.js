import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Libary.module.scss';
const cx = classNames.bind(styles);

function Libary() {
    return (
        <div className={cx('container')}>
            <h2 className={cx('titleContainer')}>Hình ảnh</h2>
            <div className={cx('navBar')}>
                <ul className={cx('nav')}>
                    <li className={cx('navItem')}>
                        <a className={cx('navLink')}>1. Món ăn</a>
                    </li>
                    <li className={cx('navItem')}>
                        <a className={cx('navLink')}>2. Sự kiện cưới</a>
                    </li>
                    <li className={cx('navItem')}>
                        <a className={cx('navLink')}>3. Sự kiện công ty</a>
                    </li>
                    <li className={cx('navItem')}>
                        <a className={cx('navLink')}>4. Sự kiên cá nhân khác</a>
                    </li>
                </ul>
            </div>
            <div className={cx('wrapper')}>
                <div className={cx('row')}>
                    <div className={cx('col6')}>
                        <a href="" className={cx('h-100')}>
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
                        <a href="" className={cx('h-100')}>
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
                        <a href="" className={cx('h-100')}>
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
                        <a href="" className={cx('h-100')}>
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
