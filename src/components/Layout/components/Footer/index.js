import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <>
            <div className={cx('footer')}>
                <div className={cx('footer-wrapper')}>
                    <div className={cx('footerHeading')}>
                        <div className={cx('footerHeadingLeft')}>
                            <label className={cx('label')}>Đăng ký nhận tin</label>
                            <input className={cx('inputEmail')} placeholder="Nhập email của bạn" />
                            <input className={cx('btnSubmit')} type="submit" value="Đăng ký"></input>
                        </div>
                        <div className={cx('footerHeadingRight')}>
                            <span className={cx('label')}> Kết nối với chúng tôi</span>
                            <a href="#" className={cx('icon')}>
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a href="#" className={cx('icon')}>
                                <i className="fa-brands fa-square-instagram"></i>
                            </a>
                            <a href="#" className={cx('icon')}>
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={cx('footerContent')}>
                    <div className={cx('row')}>
                        <div className={cx('col')}>
                            <h3 className={cx('footerTitle')}>Công ty Cổ phần Thương mại & Dịch vụ Vua Cua</h3>
                            <ul className={cx('footerListIcon')}>
                                <li className={cx('footerItem')}>
                                    <i className=" fa-sharp fa-solid fa-location-dot"></i>
                                    <a className={cx('footerItemLink')}>
                                        Trụ sở chính: 37 Nguyễn Văn Hưởng, phường Thảo Điền, Thành phố Thủ Đức, Hồ Chí
                                        Minh.
                                    </a>
                                </li>
                                <li className={cx('footerItem')}>
                                    <i className=" fa-solid fa-phone"></i>
                                    <a className={cx('footerItemLink')}>1900 6333 87</a>
                                </li>
                                <li className={cx('footerItem')}>
                                    <i className=" fa-solid fa-envelope"></i>
                                    <a className={cx('footerItemLink')}>cskh@vuacua.vn</a>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('col')}>
                            <h3 className={cx('footerTitle')}>Hỗ trợ khách hàng</h3>
                            <ul className={cx('footerList')}>
                                <li className={cx('footerItem')}>
                                    <a className={cx('footerItemLink')}>Trải nghiệm thực đơn nhà hàng</a>
                                </li>
                                <li className={cx('footerItem')}>
                                    <a className={cx('footerItemLink')}>Hệ thống cửa hàng</a>
                                </li>
                                <li className={cx('footerItem')}>
                                    <a className={cx('footerItemLink')}>Nhượng quyền thương hiệu</a>
                                </li>
                                <li className={cx('footerItem')}>
                                    <a className={cx('footerItemLink')}>Đại lí phân phối</a>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('col')}>
                            <h3 className={cx('footerTitle')}>Liên kết</h3>
                            <ul className={cx('footerList')}>
                                <li className={cx('footerItem')}>
                                    <a className={cx('footerItemLink')}>Trang chủ</a>
                                </li>
                                <li className={cx('footerItem')}>
                                    <a className={cx('footerItemLink')}>Đặt món</a>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('col')}>
                            <h3 className={cx('footerTitle')}>Chính sách</h3>
                            <ul className={cx('footerList')}>
                                <li className={cx('footerItem')}>
                                    <a className={cx('footerItemLink')}>Giới thiệu</a>
                                </li>
                                <li className={cx('footerItem')}>
                                    <a className={cx('footerItemLink')}>Tuyển dụng</a>
                                </li>
                                <li className={cx('footerItem')}>
                                    <a className={cx('footerItemLink')}>Chính sách bảo mật</a>
                                </li>
                                <li className={cx('footerItem')}>
                                    <a className={cx('footerItemLink')}>Chính sách đổi trả</a>
                                </li>
                                <li className={cx('footerItem')}>
                                    <a className={cx('footerItemLink')}>Chính sách giao hàng</a>
                                </li>
                                <li className={cx('footerItem')}>
                                    <a className={cx('footerItemLink')}>Liên hệ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={cx('footerLast')}>
                    <h4 className={cx('lastTitle')}>Copyright © 2023 Vua Cua Restaurant.</h4>
                </div>
            </div>
        </>
    );
}

export default Footer;
