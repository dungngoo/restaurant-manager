import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Promotion.module.scss';

import img1 from '~/assets/imgs/promotion/img1.jpg';
import img2 from '~/assets/imgs/promotion/img2.jpg';
import img3 from '~/assets/imgs/promotion/img3.jpg';

import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

// Component Tiệc cưới
export const TiecCuoiKM = () => {
    return (
        <Promotion
            headerTitle="Tiệc cưới"
            titleLink="LÌ XÌ ĐẦU NĂM – NHẬN NGÀN QUÀ TẶNG"
            paragraph="QUÀ SIÊU XỊN từ Luxury Palace dành TẶNG RIÊNG cho các cặp đôi cưới trong năm 2023 sẽ là MÓN QUÀ Ý NGHĨA và THIẾT THỰC NHẤT từ trước đến nay"
            image={img1}
            linkTo='/promotions/li-xi-dau-nam/'
        />
    );
};

//  Component Hội Nghị
export const HoiNghiKM = () => {
    return (
        <Promotion
            headerTitle="Tiệc hội nghị"
            titleLink="Hội Nghị Thành Công"
            paragraph="Với kinh nghiệm tổ chức thành công sự kiện cho nhiều doanh nghiệp lớn trong và ngoài nước cùng kiến trúc SANG TRỌNG, trang thiết bị HIỆN ĐẠI và phong cách phục vụ CHU ĐÁO. Luxury Palace chúng tôi, luôn tự hào là nơi tổ chức thành công những sự kiện quan trọng của QUÝ…"
            image={img2}
            linkTo='/promotions/hoi-nghi-thanh-cong/'
        />
    );
};



// Component tiệc sự kiện
export const SuKienKM = () => {
    return (
        <Promotion
            headerTitle="Tiệc sự kiện"
            titleLink="Tiệc Sự Kiện Cá Nhân"
            paragraph="Luxury Palace được ví như TÒA LÂU ĐÀI sang trọng và đẳng cấp nhất tại khu vực Gò Vấp. Chúng tôi, không chỉ tổ chức tốt được những sự kiện CÁ NHÂN mà còn KẾT NỐI được nhiều GIA ĐÌNH bằng những chương trình sự kiện KẾT NỐI đa dạng khác nhau."
            image={img3}
            linkTo='/promotions/tiec-su-kien-ca-nhan/'
        />
    );
};

function Promotion(props) {
    const { headerTitle, titleLink, paragraph, image,linkTo } = props;
    const [promotion, setPromotion] = useState('');

    // const titleToPath = {
    //     hoinghi: '/promotions/hoi-nghi-thanh-cong/',
    //     tieccuoi: '/promotions/li-xi-dau-nam/',
    //     sukien: '/promotions/tiec-su-kien-ca-nhan/',
    // };

    const promotionCatToPath = {
        hoinghi: '/promotion-cat/hoi-nghi/',
        tieccuoi: '/promotion-cat/tiec-cuoi/',
        sukien: '/promotion-cat/su-kien/',
    };

    const handleClick = (promotion) => {
        setPromotion(promotion);
    };

    useEffect(() => {
        const currentPath = window.location.pathname;
        for (const [key, value] of Object.entries(promotionCatToPath)) {
            if (currentPath === value) {
                setPromotion(key);
                break;
            }
        }
        return () => {
            setPromotion(null);
        };
    }, [promotion]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-header')}>
                <div className={cx('header')}>
                    <h2 className={cx('title')}>Khuyến mãi</h2>
                    <div className={cx('wrap-service')}>
                        <ul className={cx('navbar')}>
                            <li>
                                <Link
                                    to={promotionCatToPath.tieccuoi}
                                    className={cx(
                                        'navbar-link',
                                        window.location.pathname === promotionCatToPath.tieccuoi ? 'selected' : '',
                                    )}
                                >
                                    <span className={cx('span-item')} onClick={() => handleClick('ruby')}>
                                        Tiệc cưới
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={promotionCatToPath.hoinghi}
                                    className={cx(
                                        'navbar-link',
                                        window.location.pathname === promotionCatToPath.hoinghi ? 'selected' : '',
                                    )}
                                >
                                    <span className={cx('span-item')} onClick={() => handleClick('topaz')}>
                                        Tiệc hội nghị
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={promotionCatToPath.sukien}
                                    className={cx(
                                        'navbar-link',
                                        window.location.pathname === promotionCatToPath.sukien ? 'selected' : '',
                                    )}
                                >
                                    <span className={cx('span-item')} onClick={() => handleClick('platinum')}>
                                        Sự kiện
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <h2 className={cx('title', 'pb-20')}>{headerTitle}</h2>
            <div className={cx('grid')}>
                <div className={cx('row')}>
                    <div className={cx('col l-4')}>
                        <div className={cx('sidebar')}>
                            <Link className={cx('link')} to={linkTo}>
                                {titleLink}
                            </Link>
                            <p className={cx('paragraph')}>{paragraph}</p>
                            <span className={cx('span')}>Cảm ơn quý khách</span>
                        </div>
                    </div>
                    <div className={cx('col l-8')}>
                        <img className={cx('img')} src={image} alt="Ảnh minh họa" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Promotion;
