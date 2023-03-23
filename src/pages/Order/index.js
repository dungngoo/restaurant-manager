import { type } from '@testing-library/user-event/dist/type';
import classNames from 'classnames/bind';
import { Carousel } from 'react-responsive-carousel';
import styles from './Order.module.scss';
import img1 from '~/assets/imgs/orders/img1.jpg';
import img2 from '~/assets/imgs/orders/img2.jpeg';
import img3 from '~/assets/imgs/orders/img3.jpg';
import img4 from '~/assets/imgs/orders/img4.png';
import img5 from '~/assets/imgs/orders/img5.jpg';
const cx = classNames.bind(styles);

function Order() {
    const urls = [`${img1}`, `${img2}`, `${img3}`, `${img4}`, `${img5}`];
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
                        <input
                            name={'inputDate'}
                            type={'datetime-local'}
                            className={cx('input')}
                            placeholder=""
                        ></input>
                        <input
                            name={'inputTypeParty'}
                            type={'text'}
                            className={cx('input')}
                            placeholder="Loại tiệc"
                        ></input>
                        <input
                            name={'inputTypeLobby'}
                            type={'text'}
                            className={cx('input')}
                            placeholder="Loại sảnh"
                        ></input>
                        <input
                            name={'inputTableNumber'}
                            type={'number'}
                            className={cx('input')}
                            placeholder="Số bàn"
                        ></input>
                        <input name={'inputFood'} type={'text'} className={cx('input')} placeholder="Món ăn"></input>
                    </div>
                    <div className={cx('wrapper')}>
                        <button className={cx('btnBooking')}>Đặt tiệc</button>
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
