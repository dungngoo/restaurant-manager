import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import HeaderContent from '~/components/Layout/components/HeaderContent';
import styles from './Promotion.module.scss';
import img1 from '~/assets/imgs/promotion/img1.jpg';
const cx = classNames.bind(styles);

function Promotion() {
    return (
        <div className={cx('wrapper')}>
            <HeaderContent
                title="Khuyến mãi"
                li1="Tiệc cưới"
                li2="Tiệc Hội Nghị"
                li3="Tiệc sự kiện"
                li4="Tiệc outside"
            />
            <h2 className={cx('title', 'pb-20')}>Tiệc cưới</h2>
            <div className={cx('grid')}>
                <div className={cx('row')}>
                    <div className={cx('col l-4')}>
                        <div className={cx('sidebar')}>
                            <Link className={cx('link')} to="li-xi-dau-nam">
                                Lì xì đầu năm - nhận ngàn quà tặng
                            </Link>
                            <p className={cx('paragraph')}>
                                QUÀ SIÊU XỊN từ Luxury Palace dành TẶNG RIÊNG cho các cặp đôi cưới trong năm 2023 sẽ là
                                MÓN QUÀ Ý NGHĨA và THIẾT THỰC NHẤT từ trước đến nay
                            </p>
                            <span className={cx('span')}>Cảm ơn quý khách</span>
                        </div>
                    </div>
                    <div className={cx('col l-8')}>
                        <img className={cx('img')} src={img1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Promotion;
