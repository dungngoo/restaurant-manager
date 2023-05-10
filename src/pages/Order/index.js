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
import axios from 'axios';
import { useParams } from 'react-router-dom';
const cx = classNames.bind(styles);

function Order() {
    const urls = [`${img1}`, `${img2}`, `${img3}`, `${img4}`, `${img5}`];
    const [error, setError] = useState(null);
    const [imageMenu, setImageMenu] = useState('');
    const [success, setSuccess] = useState(null);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [menus, setMenus] = useState([]);
    const [lobbies, setLobbies] = useState([]);
    const [serviceTypes, setServiceTypes] = useState([]);
    const [serviceOthers, setServiceOthers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorCount, setErrorCount] = useState(0);
    const [successCount, setSuccessCount] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        eventType: '',
        lobbyType: '',
        numbersTable: '',
        servicePackage: [],
        capacity: '',
    });

    useEffect(() => {
        //  Lấy tất cả các sảnh
        async function getLobbies() {
            try {
                const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/lobbies/`);
                const data = await response.json();
                console.log('Lobbies: ', data);
                setLobbies(data);
            } catch (error) {
                console.log(error.message);
            }
        }
        // Lấy tất cả các loại dịch vụ
        async function getServiceType() {
            try {
                const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/serviceTypes/type`);
                const data = await response.json();
                console.log('Service Types: ', data);
                setServiceTypes(data);
            } catch (error) {
                console.log(error.message);
            }
        }
        async function getMenu() {
            try {
                const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/menus`);
                const data = await response.json();
                console.log('Menus: ', data);
                setMenus(data);
            } catch (error) {
                console.log(error.message);
            }
        }
        getMenu();
        getLobbies();
        getServiceType();
    }, []);

    function handleChange(event) {
        const { name, value, checked } = event.target;
        if (name === 'lobbyType') {
            const lobby = lobbies.find((l) => l.name === value.substring());
            setFormData((prevData) => ({
                ...prevData,
                lobbyType: value,
                capacity: lobby ? lobby.capacity : '',
            }));
        } else if (name === 'eventType') {
            if (value !== '') {
                let type = value;
                console.log(type);
                async function getServiceFollowServiceType() {
                    try {
                        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/services/${type}`);
                        const data = await response.json();
                        console.log('Service orthers: ', data);
                        setServiceOthers(data);
                    } catch (error) {
                        console.log(error.message);
                    }
                }
                getServiceFollowServiceType();
            } else {
                setServiceOthers([]);
            }
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        } else if (name === 'servicePackage') {
            if (checked) {
                formData.servicePackage.push(value);
            } else {
                const index = formData.servicePackage.indexOf(value);
                if (index > -1) {
                    formData.servicePackage.splice(index, 1);
                }
            }
            setFormData((prevData) => ({
                ...prevData,
                servicePackage: formData.servicePackage,
            }));
        } else if (name === 'menu') {
            if (value === 'Thực đơn 1') {
                setImageMenu('http://atesco.vn/admin/webroot/upload/image/images/cc.jpg');
            } else if (value === 'Thực đơn 2') {
                setImageMenu('http://atesco.vn/admin/webroot/upload/image/images/d8.jpg');
            } else if (value === 'Thực đơn 3') {
                setImageMenu('http://atesco.vn/admin/webroot/upload/image/images/d6.jpg');
            } else if (value === 'Thực đơn 4') {
                setImageMenu('http://atesco.vn/admin/webroot/upload/image/images/d4.jpg');
            } else if (value === '') {
                setImageMenu('');
            }
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        } else {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);

        // check if formData is valid
        const isValidForm =
            formData.name !== '' &&
            formData.phone !== '' &&
            formData.eventDate !== '' &&
            formData.eventType !== '' &&
            formData.lobbyType !== '' &&
            formData.numbersTable !== '' &&
            formData.numbersTable > 0 &&
            formData.servicePackage !== '' &&
            formData.menu !== '';
        if (isValidForm) {
            async function formatData() {
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    menu: '',
                    eventDate: '',
                    eventType: '',
                    lobbyType: '',
                    numbersTable: '',
                    servicePackage: [],
                    capacity: '',
                });
                setImageMenu('');
            }
            async function sendBookingAndEmail(formData) {
                try {
                    // Gửi booking và email đồng thời
                    const responseBooking = await axios.post(`${process.env.REACT_APP_SERVER_URL}/bookings/`, formData);
                    const responseEmail = await axios.post(
                        `${process.env.REACT_APP_SERVER_URL}/bookings/sendEmail`,
                        formData,
                    );
                    console.log(responseEmail);
                    console.log(responseBooking);

                    // Xử lý kết quả trả về từ server
                    if (responseBooking.data.success && responseEmail.data.success) {
                        setSuccess('Đặt tiệc thành công');
                        setSuccessCount((prev) => prev + 1);
                        setErrorCount(0);
                        setError('');
                        formatData();
                        setLoading(false);
                    } else {
                        setError('Lỗi khi gửi đơn đặt tiệc');
                        setSuccess('');
                        setLoading(false);
                        setErrorCount((prev) => prev + 1);
                        setSuccessCount(0);
                    }
                } catch (error) {
                    setError(error.response.data.message);
                    setLoading(false);
                    setErrorCount((prev) => prev + 1);
                    setSuccessCount(0);
                }
            }
            sendBookingAndEmail(formData);
        } else {
            setError('Thông tin đơn đặt tiệc không hợp lệ!');
            setLoading(false);
            setErrorCount((prev) => prev + 1);
            setSuccessCount(0);
        }
    }

    console.log('Success:' + success);
    console.log('err:' + error);
    useEffect(() => {
        if (error) {
            setShowSuccessModal(false);
            setShowErrorModal(true);
        } else if (success) {
            setShowSuccessModal(true);
            setShowErrorModal(false);
        }
    }, [error, success]);
    useEffect(() => {
        if (errorCount > 0) {
            setShowSuccessModal(false);
            setShowErrorModal(true);
        } else if (successCount > 0) {
            setShowSuccessModal(true);
            setShowErrorModal(false);
        }
    }, [errorCount, successCount]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('row')}>
                <div className={cx('c-5')}>
                    <form className={cx('formBooking')} onSubmit={handleSubmit}>
                        <h2 className={cx('titleForm')}>ĐẶT TIỆC TẠI ĐÂY</h2>
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
                                name={'email'}
                                type={'email'}
                                value={formData.email}
                                className={cx('input')}
                                placeholder="Email"
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
                                {serviceTypes &&
                                    serviceTypes.map((serviceType, index) => (
                                        <option key={index} value={serviceType.type}>
                                            {serviceType.name}
                                        </option>
                                    ))}
                            </select>

                            <select
                                name={'lobbyType'}
                                type={'text'}
                                value={formData.lobbyType}
                                className={cx('input')}
                                placeholder="Loại sảnh"
                                onChange={handleChange}
                            >
                                <option value="">--- Chọn sảnh ---</option>
                                {lobbies &&
                                    lobbies.map((lobby, index) => (
                                        <option key={index} value={lobby.name}>
                                            Sảnh {lobby.name} - Sức chứa: {lobby.capacity}
                                        </option>
                                    ))}
                            </select>
                            <input
                                name={'numbersTable'}
                                type={'number'}
                                value={formData.numbersTable}
                                className={cx('input')}
                                placeholder="Số bàn"
                                max={formData.capacity}
                                onChange={handleChange}
                            ></input>
                            {serviceOthers.length > 0 && (
                                <div className={cx('wrap-checkbox')}>
                                    <p>Chọn dịch vụ khác:</p>
                                    {serviceOthers.map((service, index) => (
                                        <div className={cx('wrap-service')}>
                                            <label key={index}>
                                                <input
                                                    name="servicePackage"
                                                    type="checkbox"
                                                    value={service.serviceName}
                                                    className={cx('c-3')}
                                                    checked={formData.servicePackage.includes(service.serviceName)}
                                                    onChange={handleChange}
                                                />
                                                <span>{service.serviceName}</span>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <select
                                name={'menu'}
                                type={'text'}
                                value={formData.menu}
                                className={cx('input')}
                                placeholder="Loại sảnh"
                                onChange={handleChange}
                            >
                                <option value="">--- Chọn thực đơn ---</option>
                                {menus.length > 0 &&
                                    menus.map((menu, i) => (
                                        <option value={menu.name} key={i}>
                                            {menu.name}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        <div className={cx('wrapper-booking')}>
                            {loading ? (
                                <div className={cx('loading')}>
                                    <i className="fas fa-circle-notch fa-spin"></i>
                                </div>
                            ) : (
                                <Button className={cx('btnBooking')}>Đặt tiệc</Button>
                            )}
                        </div>
                        <div className={cx('footerBooking')}>
                            <h3 className={cx('hotLine')}>Hotline: 0328038817</h3>
                        </div>
                        {error && (
                            <Modal
                                show={showErrorModal}
                                onHide={() => setShowErrorModal(false)}
                                style={{ color: 'red' }}
                                className={cx('modal-error')}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>Error</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>{error}</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setShowErrorModal(false)}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        )}
                        {success && (
                            <Modal
                                show={showSuccessModal}
                                onHide={() => setShowSuccessModal(false)}
                                style={{
                                    color: 'green',
                                    textAlign: 'center',
                                    fontSize: '20px',
                                }}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>{success}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Đặt tiệc thành công</Modal.Body>
                            </Modal>
                        )}
                    </form>
                </div>
                <div className={cx('c-7')} id="carousel">
                    {imageMenu !== '' ? (
                        <div className={cx('div-menu')}>
                            <img src={imageMenu} />
                        </div>
                    ) : (
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
                    )}
                </div>
            </div>
        </div>
    );
}

export default Order;
