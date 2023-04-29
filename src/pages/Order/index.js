import classNames from 'classnames/bind';
import { Carousel } from 'react-responsive-carousel';
import styles from './Order.module.scss';
import img1 from '~/assets/imgs/orders/img1.jpg';
import img2 from '~/assets/imgs/orders/img2.jpeg';
import img3 from '~/assets/imgs/orders/img3.jpg';
import img4 from '~/assets/imgs/orders/img4.png';
import img5 from '~/assets/imgs/orders/img5.jpg';
import Button from '~/components/Button';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useEffect } from 'react';
const cx = classNames.bind(styles);

function Order() {
    const urls = [`${img1}`, `${img2}`, `${img3}`, `${img4}`, `${img5}`];
    const [isValid, setIsValid] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [errorShown, setErrorShown] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        eventDate: '',
        eventType: '',
        servicePackage: '',
        menuType: '',
        decoration: '',
        lobbyType: '',
        numbersTable: '',
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        // check if formData is valid
        // check if formData is valid
        const isValidForm =
            formData.name !== '' &&
            formData.phone !== '' &&
            formData.eventDate !== '' &&
            formData.eventType !== '' &&
            formData.lobbyType !== '' &&
            formData.numbersTable !== '' &&
            formData.servicePackage !== '';

        if (isValidForm) {
            // do something with formData

            fetch(`${process.env.REACT_APP_SERVER_URL}/reservation/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Failed to submit form');
                    }
                    // handle successful form submission
                })
                .catch((error) => {
                    console.error(error);
                    // handle form submission error
                });
            setIsSuccess(true);
            setShowSuccessModal(true);
            setShowErrorModal(false);
        } else {
            setIsValid(false);
            setShowErrorModal(true);
            setShowSuccessModal(false); // show modal if data is not valid\
        }
    }

    const renderPackageDetails = () => {
        if (formData.servicePackage === 'Gói tùy chỉnh') {
            return (
                <div>
                    <label className={cx('label')}>Loại thực đơn:</label>
                    <select name="menuType" value={formData.menuType} onChange={handleChange} className={cx('input')}>
                        <option value="">--- Chọn thực đơn ---</option>
                        <option value="Thực đơn đặc biệt">Thực đơn đặc biệt</option>
                        <option value="Thực đơn cao cấp">Thực đơn cao cấp</option>
                        <option value="Thực đơn sang trọng">Thực đơn sang trọng</option>
                    </select>
                    <br />
                    <label className={cx('label')}>Trang trí sảnh:</label>
                    <select
                        name="decoration"
                        value={formData.decoration}
                        onChange={handleChange}
                        className={cx('input')}
                    >
                        <option value="">--- Chọn kiểu trang trí ---</option>
                        <option value="Trang trí ấm cúng">Trang trí ấm cúng</option>
                        <option value="Trang trí sang trọng">Trang trí sang trọng</option>
                        <option value="Trang trí cổ điển">Trang trí cổ điển</option>
                    </select>
                    <br />
                    <label className={cx('label')}>Âm thanh tiệc cưới:</label>
                    <select name="audio" value={formData.audio} onChange={handleChange} className={cx('input')}>
                        <option value="">--- Chọn âm thanh ---</option>

                        <option value="Âm thanh sống động">Âm thanh sống động</option>
                        <option value="Âm thanh nhẹ nhàng">Âm thanh nhẹ nhàng</option>
                        <option value="Âm thanh tinh t">Âm thanh tinh tế</option>
                    </select>
                    <br />
                    <label className={cx('label')}>Ánh sáng tiệc cưới:</label>
                    <select name="light" value={formData.light} onChange={handleChange} className={cx('input')}>
                        <option value="">--- Chọn ánh sáng ---</option>
                        <option value="Ánh sáng tạo không gian">Ánh sáng tạo không gian</option>
                        <option value="Ánh sáng màu sắc">Ánh sáng màu sắc</option>
                        <option value="Ánh sáng lãng mạn">Ánh sáng lãng mạn</option>
                    </select>
                </div>
            );
        }
    };

    return (
        <div className={cx('row')}>
            <div className={cx('c-5')}>
                <form className={cx('formBooking')} onSubmit={handleSubmit}>
                    <h1 className={cx('titleHeading')}>Đặt tiệc tại đây</h1>

                    <h2 className={cx('titleForm')}>Liên hệ đặt tiệc</h2>
                    <div className={cx('bodyForm')}>
                        <input
                            name={'name'}
                            value={formData.name}
                            type={'text'}
                            className={cx('input')}
                            placeholder="Họ và tên"
                            onChange={handleChange}
                        ></input>
                        <input
                            name={'phone'}
                            type={'phone'}
                            value={formData.phone}
                            className={cx('input')}
                            placeholder="Điện thoại"
                            onChange={handleChange}
                        ></input>
                        <input
                            name={'eventDate'}
                            value={formData.eventDate}
                            type={'date'}
                            className={cx('input')}
                            onChange={handleChange}
                        ></input>
                        <select
                            name={'eventType'}
                            value={formData.eventType}
                            type={'text'}
                            className={cx('input')}
                            placeholder="Loại tiệc"
                            onChange={handleChange}
                        >
                            <option value="">--- Chọn loại tiệc ---</option>
                            <option value="Tiệc cưới">Tiệc cưới</option>
                            <option value="Tiệc hội nghị">Tiệc hội nghị</option>
                            <option value="Tiệc outside">Tiệc outside</option>
                            <option value="Tiệc sự kiện">Tiệc sự kiện</option>
                        </select>
                        {/* <span style={{ color: 'red' }} className={cx('error')}>
                        Error
                    </span> */}
                        <select
                            name={'lobbyType'}
                            type={'text'}
                            value={formData.lobbyType}
                            className={cx('input')}
                            placeholder="Loại sảnh"
                            onChange={handleChange}
                        >
                            <option value="">--- Chọn sảnh ---</option>
                            <option value="Sảnh Ruby">Sảnh Ruby</option>
                            <option value="Sảnh Topaz">Sảnh Topaz</option>
                            <option value="Sảnh Diamond">Sảnh Diamond</option>
                            <option value="Sảnh Platinum">Sảnh Platinum</option>
                        </select>
                        <input
                            name={'numbersTable'}
                            type={'number'}
                            value={formData.numbersTable}
                            className={cx('input')}
                            placeholder="Số bàn"
                            onChange={handleChange}
                        ></input>
                        <select
                            name={'servicePackage'}
                            type={'text'}
                            value={formData.servicePackage}
                            className={cx('input')}
                            placeholder="Gói dịch vụ"
                            onChange={handleChange}
                        >
                            <option value="">-- Chọn gói dịch vụ --</option>
                            <option value="Gói tiêu chuẩn">Gói tiêu chuẩn</option>
                            <option value="Gói cao cấp">Gói cao cấp</option>
                            <option value="Gói tùy chỉnh">Gói tùy chỉnh</option>
                        </select>
                        {renderPackageDetails()}
                    </div>
                    <div className={cx('wrapper')}>
                        <Button className={cx('btnBooking')}>Đặt tiệc</Button>
                    </div>
                    <div className={cx('footerBooking')}>
                        <h3 className={cx('hotLine')}>Hotline: 0328038817</h3>
                    </div>
                    {!isValid && (
                        <Modal
                            show={showErrorModal}
                            onHide={() => setShowErrorModal(false)}
                            style={{ color: 'red' }}
                            className={cx('modal-error')}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Error</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Vui lòng điền đầy đủ thông tin</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setShowErrorModal(false)}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    )}
                    {isSuccess && (
                        <Modal
                            show={showSuccessModal}
                            onHide={() => setShowSuccessModal(false)}
                            style={{ color: 'green', textAlign: 'center', fontSize: '20px' }}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Success</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Đặt tiệc thành công </Modal.Body>
                        </Modal>
                    )}
                </form>
            </div>
            <div className={cx('c-7')}>
                <Carousel
                    className={cx('carousel')}
                    showThumbs={false}
                    centerSlidePercentage={50}
                    autoPlay
                    showStatus={false}
                    infiniteLoop
                    interval={2000}
                >
                    {urls.map((url) => (
                        <div className={cx('div')}>
                            <img src={url} />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default Order;
