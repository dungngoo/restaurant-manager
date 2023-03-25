import classNames from 'classnames/bind';
import styles from './Admin.module.scss';
import logoAdmin from '~/assets/imgs/thiepcuoi.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Admin() {
    const [showPassword, setShowPassword] = useState(true);

    function handleShowPassword(e) {
        console.log('a');
        const input = document.querySelector('#password-field');
        if (input.type === 'password') {
            input.type = 'text';
        } else {
            input.type = 'password';
        }
        if (showPassword) {
            setShowPassword(!showPassword);
        } else {
            setShowPassword(!showPassword);
        }
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('img')} data-tilt>
                    <img src={logoAdmin} alt="IMG" />
                </div>
                {/* <!--=====TIÊU ĐỀ======--> */}
                <form className={cx('form-1')}>
                    <span className={cx('span-h1')}>
                        <b>ĐĂNG NHẬP HỆ THỐNG QUẢN LÝ</b>
                    </span>
                    {/* <!--=====FORM INPUT TÀI KHOẢN VÀ PASSWORD======--> */}
                    <form className={cx('form')} action="">
                        <div className={cx('wrap-input')}>
                            <input
                                className={cx('input')}
                                type="text"
                                placeholder="Tài khoản quản trị"
                                name="username"
                                id="username"
                            />
                            <span className="focus-input100"></span>
                            <span className={cx('span-i-admin')}>
                                <i class="fa-regular fa-user"></i>
                            </span>
                        </div>
                        <div className={cx('wrap-input')}>
                            <input
                                autocomplete="off"
                                className={cx('input')}
                                type="password"
                                placeholder="Mật khẩu"
                                name="current-password"
                                id="password-field"
                            />
                            <span toggle="#password-field" className="bx fa-fw bx-hide field-icon click-eye"></span>
                            <span className="focus-input100"></span>
                            <span className={cx('span-i-admin')}>
                                <i class="fa-solid fa-key"></i>
                            </span>
                            {showPassword ? (
                                <span className={cx('span-i-admin', 'bottom')} onClick={handleShowPassword}>
                                    <i class="fa-regular fa-eye-slash"></i>
                                </span>
                            ) : (
                                <span className={cx('span-i-admin', 'bottom')} onClick={handleShowPassword}>
                                    <i class="fa-regular fa-eye"></i>
                                </span>
                            )}
                        </div>

                        {/* <!--=====ĐĂNG NHẬP======--> */}
                        <div className={cx('btn-dangnhap')}>
                            <input type="button" value="Đăng nhập" id="submit" onClick="validate()" />
                        </div>
                        {/* <!--=====LINK TÌM MẬT KHẨU======--> */}
                        <div className="text-right p-t-12">
                            <a className={cx('forgot-password')} href="/forgot.html">
                                Bạn quên mật khẩu?
                            </a>
                            <Link to="/docs">Hello</Link>
                        </div>
                    </form>
                    {/* <!--=====FOOTER======--> */}
                </form>
            </div>
        </div>
    );
}

export default Admin;
