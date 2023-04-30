import classNames from 'classnames/bind';
import styles from './Footer1.module.scss';

const cx = classNames.bind(styles);

function Footer1() {
    return (
        <div className={cx('footer')}>
            <div className={cx('grid wide')}>
                <div className={cx('row')}>
                    <div className={cx('col-md-12')}>
                        <div className={cx('footer-heading')}>
                            <img
                                className={cx('footer-logo')}
                                src="https://luxurypalace.vn/wp-content/themes/luxury-palace/image/logo.png"
                                alt="Logo nhà hàng"
                            />
                        </div>
                    </div>
                    <div className={cx('footer-content')}>
                        <div className={cx('col-md-7', 'footer-content-left')}>
                            <h1 className={cx('title-footer')}>
                                &emsp; Cảm Ơn <br /> Quý Khách
                            </h1>
                            <div className={cx('service-footer')}>
                                <ul className={cx('list-service')}>
                                    <li className={cx('item-service')}>Liên Hệ</li>
                                    <li className={cx('item-service')}>Dịch Vụ</li>
                                    <li className={cx('item-service')}>Sảnh Tiệc</li>
                                    <li className={cx('item-service')}>Ưu đãi</li>
                                    <li className={cx('item-service')}>Thư viện</li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('col-md-5', 'footer-content-right')}>
                            <div classNames={cx('row', 'wrap-content-right')}>
                                <div className={cx('email-contact')}>ngodung06vn@gmail.com</div>
                                <div className={cx('phone-contact')}>0328038817</div>
                                <div className={cx('address')}>
                                    171 Nguyễn Thái Sơn, Phường 7, Q.Gò Vấp, Tp. Hồ Chí Minh
                                </div>
                            </div>
                            <div className={cx('row')}>
                                <div className={cx('title-connect')}>Kết nối</div>
                                <div className={cx('socials')}>
                                    <i className={cx('fa-brands fa-facebook', 'facebook')} />
                                    <i className={cx('fa-brands fa-facebook-messenger')} />
                                    <i className={cx('fa-brands fa-square-youtube')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('copyright')}>COPYRIGHT © | 2023 DH PALACE</div>
        </div>
    );
}

export default Footer1;
