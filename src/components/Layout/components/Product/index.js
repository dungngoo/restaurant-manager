import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import Footer from '../Footer';

const cx = classNames.bind(styles);

function Product() {
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('row')}>
                    <div className={cx('colLeft')}>
                        <img
                            src="https://product.hstatic.net/200000582249/product/image-1-compressed_eed9e9cfe14046cd987c8c78f7d3bc3a_master.jpg"
                            alt="Error"
                            className={cx('imgProduct')}
                        ></img>
                        <div className={cx('shareLink')}>
                            <label className={cx('label')}>Chia sẻ:</label>
                            <span className={cx('iconShare')}>
                                <a className={cx('iconFacebook')}>
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                            </span>
                            <span className={cx('iconShare')}>
                                <a className={cx('iconMessenger')}>
                                    <i className="fa-brands fa-facebook-messenger"></i>
                                </a>
                            </span>
                            <span className={cx('iconShare')}>
                                <a className={cx('iconTwitter')}>
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                            </span>
                            <span className={cx('iconShare')}>
                                <i className="fa-solid fa-link"></i>
                            </span>
                        </div>
                    </div>
                    <div className={cx('colRight')}>
                        <div className={cx('productDetails')}>
                            <div className={cx('details')}>
                                <h1 className={cx('productName')}>Combo 2#</h1>
                                <div className={cx('row')}>
                                    <label className={cx('labelPrice')}>Giá:</label>
                                    <span className={cx('price')}>979,000đ</span>
                                </div>
                                <div className={cx('row')}>
                                    <label className={cx('labelQuantity')}>Số lượng:</label>

                                    <a className={cx('quantityControlBtn')}>
                                        <i className="fa-solid fa-minus"></i>
                                    </a>
                                    <input className={cx('quantity')} value="1" />

                                    <a className={cx('quantityControlBtn')}>
                                        <i className="fa-solid fa-plus"></i>
                                    </a>
                                </div>
                                <div className={cx('row')}>
                                    <button className={cx('btnAdd')}>Thêm vào giỏ</button>
                                    <button className={cx('btnBuy')}>Mua hàng</button>
                                </div>
                            </div>
                            <div className={cx('description')}>
                                <h2 className={cx('descriptionHeading')}>Mô tả sản phẩm</h2>
                                <p className={cx('shortDescription')}>
                                    Khi nhắc đến danh sách combo tiết kiệm nằm trong TOP “best seller” tại nhà Vua Cua,
                                    hẳn không thể bỏ qua Combo #2 siêu hấp dẫn. Combo #2 kết hợp giữa
                                    <span className={cx('highlight')}>
                                        cua thịt vừa (400gr), tôm sú, ốc móng tay, nghêu, bắp khoanh cùng xúc xích xông
                                        khói,
                                    </span>
                                    giúp thực khách thưởng thức bữa ăn thêm phần tròn vị, cho cảm giác ngon miệng, lại
                                    không quá ngấy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;
