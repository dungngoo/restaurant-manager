import { type } from '@testing-library/user-event/dist/type';
import classNames from 'classnames/bind';
import styles from './Order.module.scss';
const cx = classNames.bind(styles);

function Order() {
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
                <img
                    className={cx('img')}
                    src="https://images2.thanhnien.vn/Uploaded/ttt/images/Content/tin-tuc/cap-nhat/2017_09_w4/luxury_palace/IMG_1778.jpg"
                ></img>
            </div>
        </div>
    );
}

export default Order;
