import { type } from '@testing-library/user-event/dist/type';
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
import Modal from 'react-modal';
const cx = classNames.bind(styles);

function Order() {
    const [showModal, setShowModal] = useState(false);
    const [selectedMainDish, setSelectedMainDish] = useState('');
    const [selectedSideDish, setSelectedSideDish] = useState('');
    const [selectedOtherDishes, setSelectedOtherDishes] = useState([]);
    const urls = [`${img1}`, `${img2}`, `${img3}`, `${img4}`, `${img5}`];

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleMainDishChange = (event) => {
        setSelectedMainDish(event.target.value);
    };

    const handleSideDishChange = (event) => {
        setSelectedSideDish(event.target.value);
    };

    const handleOtherDishesChange = (event) => {
        const selectedDishes = Array.from(event.target.selectedOptions, (option) => option.value);
        setSelectedOtherDishes(selectedDishes);
    };

    const handleSelect = (e) => {
        if (e.target.value === 'self-select') {
            setShowModal(true);
        }
    };
    return (
        <div className={cx('row')}>
            <div className={cx('c-5')}>
                <form className={cx('formBooking')}>
                    <h1 className={cx('titleHeading')}>Đặt tiệc tại đây</h1>

                    <h2 className={cx('titleForm')}>Liên hệ đặt tiệc</h2>
                    <div className={cx('bodyForm')}>
                        <input name={'inputName'} type={'text'} className={cx('input')} placeholder="Họ và tên"></input>
                        <input
                            name={'inputPhoneNumber'}
                            type={'number'}
                            className={cx('input')}
                            placeholder="Điện thoại"
                        ></input>
                        <input name={'inputDate'} type={'date'} className={cx('input')} placeholder=""></input>
                        <select name={'inputTypeParty'} type={'text'} className={cx('input')} placeholder="Loại tiệc">
                            <option value="">--- Chọn loại tiệc ---</option>
                            <option value="Tiệc cưới">Tiệc cưới</option>
                            <option value="Tiệc hội nghị">Tiệc hội nghị</option>
                            <option value="Tiệc outside">Tiệc outside</option>
                            <option value="Tiệc sự kiện">Tiệc sự kiện</option>
                        </select>
                        {/* <span style={{ color: 'red' }} className={cx('error')}>
                            Error
                        </span> */}
                        <select name={'inputTypeLobby'} type={'text'} className={cx('input')} placeholder="Loại sảnh">
                            <option value="">--- Chọn sảnh ---</option>
                            <option value="Sảnh Ruby">Sảnh Ruby</option>
                            <option value="Sảnh Topaz">Sảnh Topaz</option>
                            <option value="Sảnh Diamond">Sảnh Diamond</option>
                            <option value="Sảnh Platinum">Sảnh Platinum</option>
                        </select>
                        <input
                            name={'inputTableNumber'}
                            type={'number'}
                            className={cx('input')}
                            placeholder="Số bàn"
                        ></input>
                        <select
                            name={'inputFood'}
                            type={'text'}
                            className={cx('input')}
                            placeholder="Món ăn"
                            onChange={(e) => handleSelect(e)}
                        >
                            <option value={''}>--- Chọn combo món ăn ---</option>
                            <option value={'combo1'}>Combo1</option>
                            <option value={'combo2'}>Combo2</option>
                            <option value={'self-select'}>Tự chọn món</option>
                        </select>
                        <Modal isOpen={showModal} onRequestClose={handleCloseModal}>
                            <h2>Chọn món của bạn</h2>
                            <div>
                                <label htmlFor="main-dish">Món chính:</label>
                                <select
                                    id="main-dish"
                                    name="main-dish"
                                    value={selectedMainDish}
                                    onChange={handleMainDishChange}
                                >
                                    <option value="">Chọn món chính</option>
                                    <option value="beef">Thịt bò</option>
                                    <option value="chicken">Gà</option>
                                    <option value="fish">Cá</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="side-dish">Món phụ:</label>
                                <select
                                    id="side-dish"
                                    name="side-dish"
                                    value={selectedSideDish}
                                    onChange={handleSideDishChange}
                                >
                                    <option value="">Chọn món phụ</option>
                                    <option value="rice">Cơm</option>
                                    <option value="noodle">Mì</option>
                                    <option value="vegetables">Rau</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="other-dishes">Các loại món khác:</label>
                                <select
                                    id="other-dishes"
                                    name="other-dishes"
                                    multiple
                                    value={selectedOtherDishes}
                                    onChange={handleOtherDishesChange}
                                >
                                    <option value="soup">Súp</option>
                                    <option value="salad">Salad</option>
                                    <option value="dessert">Tráng miệ</option>
                                    <option value="drink">Nước uống</option>
                                </select>
                            </div>
                            <button onClick={handleCloseModal}>Đóng</button>
                        </Modal>
                    </div>
                    <div className={cx('wrapper')}>
                        <Button className={cx('btnBooking')}>Đặt tiệc</Button>
                    </div>

                    <div className={cx('footerBooking')}>
                        <h3 className={cx('hotLine')}>Hotline: 0328038817</h3>
                    </div>
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
