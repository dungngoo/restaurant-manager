import classNames from 'classnames/bind';
import styles from './Footer1.module.scss';
import logoNhaHang from '~/assets/imgs/dhpalace-remove.png';

const cx = classNames.bind(styles);

function Footer1() {
    return (
        <div className={cx('footer')}>
            <div className={cx('grid wide')}>
                <div className={cx('row')}>
                    <div className={cx('col-md-12')}>
                        <div className={cx('footer-heading')}>
                            <img className={cx('footer-logo')} src={logoNhaHang} alt="Logo nhà hàng" />
                        </div>
                    </div>
                    <div className={cx('footer-content')}>
                        <div className={cx('col-md-7', 'footer-content-left')}>
                            <h1 className={cx('title-footer')}>
                                &emsp; Cảm Ơn <br /> Quý Khách
                            </h1>
                            <div className={cx('service-footer')}>
                                <ul className={cx('list-service')}>
                                    <li className={cx('item-service')}>
                                        <a href="/contact/">Liên Hệ</a>
                                    </li>
                                    <li className={cx('item-service')}>
                                        <a href="/services/tiec-cuoi">Dịch Vụ</a>
                                    </li>
                                    <li className={cx('item-service')}>
                                        <a href="/discover/ruby/">Sảnh Tiệc</a>
                                    </li>
                                    <li className={cx('item-service')}>
                                        <a href="/promotion-cat/tiec-cuoi/">Ưu đãi</a>
                                    </li>
                                    <li className={cx('item-service')}>
                                        <a href="/library/">Thư viện</a>
                                    </li>
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
