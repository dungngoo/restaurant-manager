import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faStar, faCartFlatbed } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './CartProduct.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function CardProduct() {
    return (
        <div className={cx('card', 'card-product')}>
            <a href="">
                <img
                    className={cx('card-img-top')}
                    src="https://product.hstatic.net/200000582249/product/main_08b954ca13154970b47d8448ebfb2461.jpg"
                    alt="Ảnh sản phẩm"
                />
            </a>
            <div className={cx('card-body')}>
                <a href="">
                    <h5 className={cx('card-title')}>Combo 3 con cua Cà Mau siêu tiết kiệm</h5>
                </a>
                <p className={cx('card-rate')}>
                    0
                    <FontAwesomeIcon icon={faStar} className={cx('card-rate-star')} />|
                    <p className={cx('card-sold')}>Đã bán 82+</p>
                </p>
                <div className={cx('card-title-price')}>
                    <div className={cx('card-price')}>499.000đ</div>
                    <div className={cx('card-promotion')}>699.000đ</div>
                    <span className={cx('card-discount')}>-29%</span>
                </div>
                <div className={cx('card-btn')}>
                    <Button className={cx('card-ship')} outline small>
                        FreeShip++
                    </Button>
                </div>
                <div className={cx('card-delivery')}>
                    <img
                        src="https://salt.tikicdn.com/ts/upload/9e/13/50/6d16b5e1d219857bd23572ce049e59e2.png"
                        alt="Now"
                        className={cx('card-delivery-now')}
                    />
                    <span>Giao ngay trong 60 phút</span>
                </div>
                <div className={cx('card-bottom')}>
                    <button className={cx('card-bottom-btn')}>
                        Thêm vào giỏ
                        <FontAwesomeIcon icon={faCartFlatbed} className={cx('card-btn-cart')} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CardProduct;
