import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import ContentLibrary from '~/components/Layout/components/ContentLibrary';
import styles from './Library.module.scss';
import { Link } from 'react-router-dom';

//  Hình ảnh
import img1 from '~/assets/imgs/library/img1.jpg';
import img2 from '~/assets/imgs/library/img2.jpg';
import img3 from '~/assets/imgs/library/img3.jpg';
import img4 from '~/assets/imgs/library/img4.png';

// Hình ảnh các món ăn
import monanimg1 from '~/assets/imgs/library/monan/img1.jpg';
import monanimg2 from '~/assets/imgs/library/monan/img2.jpg';
import monanimg3 from '~/assets/imgs/library/monan/img3.jpg';
import monanimg4 from '~/assets/imgs/library/monan/img4.jpg';

// Hình cưới
import hinhcuoiimg2 from '~/assets/imgs/library/hinhcuoi/img2.jpg';


// Hình sự kiện công ty
import hinhsukienimg1 from '~/assets/imgs/library/hinhsukien/img1.jpg';
import hinhsukienimg2 from '~/assets/imgs/library/hinhsukien/img2.jpg';
import hinhsukienimg3 from '~/assets/imgs/library/hinhsukien/img3.jpg';
import hinhsukienimg4 from '~/assets/imgs/library/hinhsukien/img4.jpg';

// Hình sự kiện khác
import hinhtrangtriimg1 from '~/assets/imgs/library/hinhtrangtri/img1.jpg';
import hinhtrangtriimg2 from '~/assets/imgs/library/hinhtrangtri/img2.jpg';
import hinhtrangtriimg3 from '~/assets/imgs/library/hinhtrangtri/img3.jpg';
const cx = classNames.bind(styles);
// Component List Món Ăn
export const MonAn = () => {
    return (
        <ContentLibrary
            header="1. Món Ăn"
            href="Teabreak"
            href2="Món Tôm"
            href3="Món Cá"
            href4="Món Gà - Bồ Câu"
            image1={monanimg1}
            image2={monanimg2}
            image3={monanimg3}
            image4={monanimg4}
        />
    );
};

//  Component Hình Cưới
export const HinhCuoi = () => {
    return <ContentLibrary header="2. Sự kiện cưới" href="Bộ sưu tập cung điện mùa đông" image1={hinhcuoiimg2} />;
};

// Component tiệc sự kiện
export const SuKienCongTy = () => {
    return (
        <ContentLibrary
            header="3. Sự kiện công ty"
            href="SÔI ĐỘNG CÙNG “CHƯƠNG TRÌNH RAP – NGÃ TƯ”"
            href2="Hội Nghị Kinh Doanh Spa Thực Chiến"
            href3="Kỷ Niệm 30 năm ngày truyền thống công ty Đông Hải"
            href4="Kỷ Niệm 10 Năm Công Ty Việt Thắng Tại Luxury Palace"
            image1={hinhsukienimg1}
            image2={hinhsukienimg2}
            image3={hinhsukienimg3}
            image4={hinhsukienimg4}
        />
    );
};

// Component tiệc sự kiện cá nhân
export const SuKienCaNhan = () => {
    return (
        <ContentLibrary
            header="4. Sự kiện cá nhân khác"
            href="Tiệc Sinh Nhật Tại Luxury Palace”"
            href2="Decor Sắc Xanh vẻ đẹp từ thiên nhiên"
            href3="Decor Cung Điện Mùa Đông"
            image1={hinhtrangtriimg1}
            image2={hinhtrangtriimg2}
            image3={hinhtrangtriimg3}
        />
    );
};

function Libary(props) {
    const { headerTitle, titleLink, paragraph, image, linkTo } = props;
    const [library, setLibrary] = useState('');

    // const titleToPath = {
    //     hoinghi: '/promotions/hoi-nghi-thanh-cong/',
    //     tieccuoi: '/promotions/li-xi-dau-nam/',
    //     sukien: '/promotions/tiec-su-kien-ca-nhan/',
    // };

    const libraryToPath = {
        monan: '/library-cat/hinh-am-thuc/',
        sukiencuoi: '/library-cat/hinh-cuoi/',
        sukiencongty: '/library-cat/hinh-su-kien/',
        sukiencanhan: '/library-cat/hinh-trang-tri/',
    };

    const handleClick = (library) => {
        setLibrary(library);
    };

    useEffect(() => {
        const currentPath = window.location.pathname;
        for (const [key, value] of Object.entries(libraryToPath)) {
            if (currentPath === value) {
                setLibrary(key);
                break;
            }
        }
        return () => {
            setLibrary(null);
        };
    }, [library]);
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper-header')}>
                <div className={cx('header')}>
                    <h2 className={cx('title')}>Hình ảnh</h2>
                    <div className={cx('wrap-service')}>
                        <ul className={cx('navbar')}>
                            <li>
                                <Link
                                    to={libraryToPath.monan}
                                    className={cx(
                                        'navbar-link',
                                        window.location.pathname === libraryToPath.monan ? 'selected' : '',
                                    )}
                                >
                                    <span className={cx('span-item')} onClick={() => handleClick('ruby')}>
                                        1. Món Ăn
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={libraryToPath.sukiencuoi}
                                    className={cx(
                                        'navbar-link',
                                        window.location.pathname === libraryToPath.sukiencuoi ? 'selected' : '',
                                    )}
                                >
                                    <span className={cx('span-item')} onClick={() => handleClick('topaz')}>
                                        2. Sự kiện cưới
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={libraryToPath.sukiencongty}
                                    className={cx(
                                        'navbar-link',
                                        window.location.pathname === libraryToPath.sukiencongty ? 'selected' : '',
                                    )}
                                >
                                    <span className={cx('span-item')} onClick={() => handleClick('platinum')}>
                                        3. Sự kiện công ty
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={libraryToPath.sukiencanhan}
                                    className={cx(
                                        'navbar-link',
                                        window.location.pathname === libraryToPath.sukiencanhan ? 'selected' : '',
                                    )}
                                >
                                    <span className={cx('span-item')} onClick={() => handleClick('platinum')}>
                                        4. Sự kiện cá nhân khác
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={cx('wrap-row')}>
                <div className={cx('row')}>
                    <div className={cx('col6')}>
                        <a href="" className={cx('h-100')}>
                            <div className={cx('card')}>
                                <img
                                    className={cx('img')}
                                    src="https://luxurypalace.vn/wp-content/uploads/2019/12/IMG_1144-scaled.jpg"
                                ></img>
                                <div className={cx('cardOverlay')}>
                                    <h5 className={cx('cardTitle')}>1. Món ăn</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={cx('col6')}>
                        <a href="" className={cx('h-100')}>
                            <div className={cx('card')}>
                                <img
                                    className={cx('img')}
                                    src="	https://luxurypalace.vn/wp-content/uploads/2020/01/LUL02306.jpg"
                                ></img>
                                <div className={cx('cardOverlay')}>
                                    <h5 className={cx('cardTitle')}>2. Sự kiện cưới</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={cx('col6')}>
                        <a href="" className={cx('h-100')}>
                            <div className={cx('card')}>
                                <img
                                    className={cx('img')}
                                    src="https://luxurypalace.vn/wp-content/uploads/2019/12/8288fe19db363c686527.jpg"
                                ></img>
                                <div className={cx('cardOverlay')}>
                                    <h5 className={cx('cardTitle')}>3. Sự kiện công ty</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={cx('col6')}>
                        <a href="" className={cx('h-100')}>
                            <div className={cx('card')}>
                                <img
                                    className={cx('img')}
                                    src="https://luxurypalace.vn/wp-content/uploads/2021/12/6.jpg"
                                ></img>
                                <div className={cx('cardOverlay')}>
                                    <h5 className={cx('cardTitle')}>4. Sự kiện cá nhân khác</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Libary;
