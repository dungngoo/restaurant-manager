import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('grid')}>
            <div className={cx('row')}>
                <div className={cx('col-12')}>
                    <h2 className={cx('titlePage')}>Liên hệ</h2>
                </div>
            </div>
            <div className={cx('row')}>
                <div className={cx('c-5')}>
                    <div className={cx('rowCol')}>
                        <div className={cx('c-12')}>
                            <div className={cx('text')}>
                                <h4 className={cx('titleText')}>Luxury Palace</h4>
                                <p className={cx('paragraph1')}>171 Nguyễn Thái Sơn, P.7, Quận Gò Vấp, Tp.HCM</p>
                                <p> Liên hệ: 093 133 14 49</p>
                                <p>CSKH: (028) 35.88.33.99 – CSKH@luxurypalace.com.vn </p>
                                <p>Email: marketing@luxurypalace.com.vn</p>
                            </div>
                        </div>
                        <div className={cx('c-12')}>
                            <div className={cx('formContact')}>
                                <h4 className={cx('titleForm')}>Gửi liên hệ</h4>
                                <input name="inputEmail" className={cx('input')} placeholder="Email"></input>
                                <input
                                    name="inputPhoneNumber"
                                    className={cx('input')}
                                    placeholder="Số điện thoại"
                                ></input>
                                <input name="inputTitle" className={cx('input')} placeholder="Tiêu đề"></input>
                                <textarea
                                    rows={5}
                                    name="inputContent"
                                    className={cx('input')}
                                    placeholder="Nội dung"
                                ></textarea>
                                <p className={cx('footerForm')}>
                                    <button className={cx('btnSumbit')}>Gửi</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('c-7')}>
                    <div className={cx('mapLocation')}>
                        <iframe
                            className={cx('map')}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.789250254864!2d106.68746151462298!3d10.827433992286906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528f0ca03c999%3A0x888b237a95d3219f!2zMTcxIE5ndXnhu4VuIFRow6FpIFPGoW4sIFBoxrDhu51uZyA3LCBHw7IgVuG6pXAsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1679033221357!5m2!1svi!2s"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
