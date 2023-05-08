import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { Modal } from 'react-bootstrap';
const cx = classNames.bind(styles);

function Contact() {
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        text: '',
        name: '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]+$/;
        if (!formData.email.match(emailRegex)) {
            alert('Vui lòng nhập email hợp lệ!');
            return;
        }
        if (!formData.phone.match(phoneRegex)) {
            alert('Vui lòng nhập số điện thoại hợp lệ!');
            return;
        }

        // Kiểm tra các trường khác
        if (!formData.name && !formData.text) {
            alert('Vui lòng nhập đầy đủ thông tin!');
            return;
        }
        e.preventDefault();
        // Gửi email cho bộ phận CSKH của DH Palace
        async function sendEmailtoContact() {
            const requestUrl = `${process.env.REACT_APP_SERVER_URL}/contacts/sendEmail`;
            const response = await fetch(requestUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            console.log(response);
            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Thành công',
                    text: 'Cám ơn bạn đã liên hệ với nhà hàng chúng tôi',
                });
                clearForm();
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Lỗi',
                    text: 'Đã có lỗi khi gửi liên hệ, xin mời kiểm tra lại!',
                });
            }
        }
        sendEmailtoContact();
    }
    function handleChangeInput(e) {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
    function clearForm() {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('text').value = '';
    }
    console.log(document.getElementById('email'));
    console.log(document.getElementById('name'));
    console.log(document.getElementById('phone'));
    console.log(document.getElementById('text'));
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
                                <h4 className={cx('titleText')}>DH Palace</h4>
                                <div>
                                    <span>171 Nguyễn Thái Sơn, P.7, Quận Gò Vấp, Tp.HCM</span>
                                </div>
                                <div>
                                    <span>Liên hệ: 0328038817</span>
                                </div>
                                <div>CSKH: (032) 80.388.17 – CSKHDHPALACE@gmail.com</div>
                                <div>Email: CSKHDHPALACE@gmail.com</div>
                            </div>
                        </div>
                        <div className={cx('c-12')}>
                            <form className={cx('formContact')} onSubmit={handleSubmit}>
                                <h4 className={cx('titleForm')}>Gửi liên hệ</h4>
                                <input
                                    name="name"
                                    id="name"
                                    className={cx('input')}
                                    placeholder="Họ và tên"
                                    value={formData.name}
                                    onChange={handleChangeInput}
                                ></input>
                                <input
                                    name="email"
                                    id="email"
                                    className={cx('input')}
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChangeInput}
                                ></input>
                                <input
                                    id="phone"
                                    name="phone"
                                    className={cx('input')}
                                    placeholder="Số điện thoại"
                                    value={formData.phone}
                                    onChange={handleChangeInput}
                                ></input>

                                <textarea
                                    rows={5}
                                    id="text"
                                    name="text"
                                    className={cx('input')}
                                    placeholder="Nội dung"
                                    value={formData.text}
                                    onChange={handleChangeInput}
                                ></textarea>
                                <p className={cx('footerForm')}>
                                    <button className={cx('btnSumbit')}>Gửi</button>
                                </p>
                            </form>
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
