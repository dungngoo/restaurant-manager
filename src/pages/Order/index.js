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
const cx = classNames.bind(styles);

function Order() {
    const urls = [`${img1}`, `${img2}`, `${img3}`, `${img4}`, `${img5}`];
    const [error, setError] = useState(null);
    const [isSuccess, setIsSuccess] = useState(null);
    const [success, setSuccess] = useState(null);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [lobbies, setLobbies] = useState([]);
    const [serviceTypes, setServiceTypes] = useState([]);
    const [prevFormData, setPrevFormData] = useState(null);
    const [packages, setPackages] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        eventDate: '',
        eventType: '',
        servicePackage: '',
        lobbyType: '',
        numbersTable: '',
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
        async function getPackages() {
            try {
                const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/packages/`);
                const data = await response.json();
                console.log('Packages: ', data);
                setPackages(data);
            } catch (error) {
                console.log(error.message);
            }
        }
        getLobbies();
        getServiceType();
        getPackages();
    }, []);

    function handleChange(event) {
        const { name, value } = event.target;
        if (name === 'lobbyType') {
            const lobby = lobbies.find((l) => l.name === value.substring());
            setFormData((prevData) => ({
                ...prevData,
                lobbyType: value,
                capacity: lobby ? lobby.capacity : '',
            }));
        } else {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
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
            if (JSON.stringify(formData) === JSON.stringify(prevFormData)) {
                setError('Bạn đã đặt tiệc rồi. Hãy thay đổi dữ liệu!!!');
                setSuccess(null);
            } else {
                async function sendBooking(formData) {
                    try {
                        const response = await axios.post(
                            `${process.env.REACT_APP_SERVER_URL}/bookings/sendEmail`,
                            formData,
                        );
                        console.log(response.data);
                        setSuccess(response.data);
                    } catch (error) {
                        setError(error.response.data.error);
                    }
                }
                sendBooking(formData);
                setPrevFormData(formData);
            }
        } else {
            setError('Vui lòng điền đầy đủ thông tin!');
        }
    }
    console.log(prevFormData);
    useEffect(() => {
        if (error) {
            setShowErrorModal(true);
            setShowSuccessModal(false);
        }
        if (success) {
            setShowErrorModal(false);
            setShowSuccessModal(true);
        }
    }, [error, success]);
    useEffect(() => {
        console.log(formData);
    }, [formData]);
    console.log(isSuccess);
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
                            {serviceTypes &&
                                serviceTypes.map((serviceType, index) => (
                                    <option key={index} value={serviceType.name}>
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
                        <select
                            name={'servicePackage'}
                            type={'text'}
                            value={formData.servicePackage}
                            className={cx('input')}
                            placeholder="Gói dịch vụ"
                            onChange={handleChange}
                        >
                            <option value="">-- Chọn gói dịch vụ --</option>
                            {packages &&
                                packages.map((item, index) => (
                                    <option key={index} value={item.packageName}>
                                        {item.packageName}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <div className={cx('wrapper')}>
                        <Button className={cx('btnBooking')}>Đặt tiệc</Button>
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
                            style={{ color: 'green', textAlign: 'center', fontSize: '20px' }}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>{success}</Modal.Title>
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
