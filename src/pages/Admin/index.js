import classNames from 'classnames/bind';
import styles from './Admin.module.scss';
import logoAdmin from '~/assets/imgs/thiepcuoi.jpg';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

function Admin() {
    const [showPassword, setShowPassword] = useState(true);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
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
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    function handleSubmit(e) {
        e.preventDefault();

        async function login() {
            const requestUrl = `${process.env.REACT_APP_SERVER_URL}/admin/login`;
            // Gửi request tới server với method POST và dữ liệu từ formData
            try {
                const response = await fetch(requestUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    // Redirect đến trang dashboard khi đăng nhập thành công
                    window.location.href = '/admin/dashboard';
                } else {
                    // Hiển thị thông báo lỗi khi đăng nhập thất bại
                    const data = await response.json();
                    alert(data.message);
                }
            } catch (error) {
                console.error('Error:', error);
            }
            // Xử lý response từ server ở đây
        }
        login();
    }
    useEffect(() => {
        console.log(formData);
    }, [formData]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('img')} data-tilt>
                    <img src={logoAdmin} alt="IMG" />
                </div>
                {/* <!--=====TIÊU ĐỀ======--> */}
                <div className={cx('form-1')}>
                    <span className={cx('span-h1')}>
                        <b>ĐĂNG NHẬP HỆ THỐNG QUẢN LÝ</b>
                    </span>
                    {/* <!--=====FORM INPUT TÀI KHOẢN VÀ PASSWORD======--> */}
                    <form className={cx('form')} onSubmit={handleSubmit}>
                        <div className={cx('wrap-input')}>
                            <input
                                className={cx('input')}
                                type="text"
                                placeholder="Tài khoản quản trị"
                                name="username"
                                id="username"
                                value={formData.username}
                                onChange={handleChange}
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
                                name="password"
                                id="password-field"
                                value={formData.password}
                                onChange={handleChange}
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

                        <div className={cx('btn-dangnhap')}>
                            <Button className={cx('button')}>Đăng nhập</Button>
                        </div>
                        <a className={cx('forgot-password')} href="/forgot.html">
                            Bạn quên mật khẩu?
                        </a>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Admin;
