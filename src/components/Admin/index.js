import classNames from 'classnames/bind';
import styles from './Admin.module.scss';
import logoAdmin from '~/assets/imgs/thiepcuoi.jpg';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '~/components/Button';
import axios from 'axios';
import { AdminLayout } from '../Layout';
import Docs from '~/pages/Docs';
const cx = classNames.bind(styles);

function Admin() {
    const [showPassword, setShowPassword] = useState(true);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        isLogin: localStorage.getItem('accessToken') !== null,
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
            const { username, password } = formData;
            var myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

            var urlencoded = new URLSearchParams();
            urlencoded.append('username', username);
            urlencoded.append('password', password);

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: urlencoded,
                redirect: 'follow',
            };

            fetch(`${process.env.REACT_APP_SERVER_URL}/admin/login`, requestOptions)
                .then((response) => {
                    setLoading(true);
                    console.log(response);
                    if (response.ok) {
                        return response.json();
                    }
                    throw Error(response.status);
                })
                .then((result) => {
                    console.log(result);
                    localStorage.setItem('accessToken', result.accessToken);
                    alert('Thành công');
                    navigate('/admin');
                    setFormData({ isLogin: true });
                    setLoading(false);
                })
                .catch((err) => {
                    console.log('error: ' + err);
                    alert('Username, password are wrong');
                    setLoading(false);
                });
        }
        login();
    }
    function onLogoutSuccess() {
        setFormData({ isLogin: false });
    }
    useEffect(() => {
        console.log(formData);
    }, [formData]);

    return (
        <div>
            {formData.isLogin ? (
                <AdminLayout key={formData.isLogin} onLogoutSuccess={onLogoutSuccess}>
                    <Docs />
                </AdminLayout>
            ) : (
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
                                    <span
                                        toggle="#password-field"
                                        className="bx fa-fw bx-hide field-icon click-eye"
                                    ></span>
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
                                {loading ? (
                                    <span style={{ fontSize: '20px' }}>
                                        <i className="fas fa-circle-notch fa-spin"></i>
                                    </span>
                                ) : (
                                    <div className={cx('btn-dangnhap')}>
                                        <Button className={cx('button')}>Đăng nhập</Button>
                                    </div>
                                )}

                                <a className={cx('forgot-password')} href="/forgot.html">
                                    Bạn quên mật khẩu?
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Admin;
