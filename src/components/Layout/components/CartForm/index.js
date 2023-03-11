import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './CartForm.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function CartForm() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('cart-title')}>
                <h3>GIỎ HÀNG</h3>
            </div>
            <div className={cx('cart-products')}>
                <FontAwesomeIcon icon={faCartShopping} className={cx('icon')} />
                <span>Hiện chưa có sản phẩm </span>
            </div>
            <div className={cx('cart-totalPrice')}>
                <h4 className={cx('title')}>TỔNG TIỀN</h4>
                <span className={cx('numberPrice')}>0đ</span>
            </div>
            <div className={cx('cart-btn')}>
                <Button primary className={cx('btn')}>
                    Login
                </Button>
            </div>
        </div>
    );
}

export default CartForm;
