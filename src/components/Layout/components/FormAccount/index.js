import classNames from 'classnames/bind';
import styles from './FormAccount.module.scss';

const cx = classNames.bind(styles);

function FormAccount() {
    return (
        <div className={cx('header__account-login')}>
            <h3 className={cx('header__acount-title')}>ĐĂNG NHẬP TÀI KHOẢN</h3>
            <div className={cx('header__acount-wrap-input')}>
                <input
                    type="number"
                    pattern="[0-9]{5}"
                    placeholder="Số điện thoại"
                    className={cx('header__acount-input', 'header__account-phonenumber')}
                />
                <input
                    type="password"
                    placeholder="Mật khẩu"
                    className={cx('header__acount-input', 'header__account-password')}
                />
            </div>
            <div className={cx('header__account-pilocy')}>
                This site is protected by reCAPTCHA and the Google
                <a href="/">Privacy Policy</a>
                and
                <a href="/">Terms of Service</a>
                apply.
            </div>
            <div className={cx('header__account-wrap-button')}>Đăng nhập</div>
            <div className={cx('header__account-forgot-password')}>
                <div className={cx('header__wrap-new-account')}>
                    <span className={cx('header__text', 'header__newaccount')}>Khách hàng mới?</span>
                    <span className={cx('header__text', 'header__createaccount')}>Tạo tài khoản</span>
                </div>
                <div className={cx('header__wrap-forgot-account')}>
                    <span className={cx('header__text', 'header__fotgotpw')}>Quên mật khẩu?</span>
                    <span className={cx('header__text', 'header__findpw')}>Khôi phục mật khẩu</span>
                </div>
            </div>
        </div>
    );
}

export default FormAccount;
