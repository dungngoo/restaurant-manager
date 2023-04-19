import classNames from 'classnames/bind';
import styles from './Service.module.scss';

// Ảnh tiệc hội nghị
import hoinghiimg1 from '~/assets/imgs/services/hoi-nghi/img1.jpg';
import hoinghiimg2 from '~/assets/imgs/services/hoi-nghi/img2.jpg';
import hoinghiimg3 from '~/assets/imgs/services/hoi-nghi/img3.jpg';
import hoinghiimg4 from '~/assets/imgs/services/hoi-nghi/img4.jpg';
import hoinghiimg5 from '~/assets/imgs/services/hoi-nghi/img5.jpg';
import hoinghiimg6 from '~/assets/imgs/services/hoi-nghi/img6.jpg';
import hoinghiimg7 from '~/assets/imgs/services/hoi-nghi/img7.jpg';
import hoinghiimg8 from '~/assets/imgs/services/hoi-nghi/img8.jpg';
import hoinghiimg9 from '~/assets/imgs/services/hoi-nghi/img9.jpg';
import hoinghiimg10 from '~/assets/imgs/services/hoi-nghi/img10.jpg';

// Ảnh tiệc cưới
import tieccuoiimg1 from '~/assets/imgs/services/tiec-cuoi/img1.jpg';
import tieccuoiimg2 from '~/assets/imgs/services/tiec-cuoi/img2.jpg';
import tieccuoiimg3 from '~/assets/imgs/services/tiec-cuoi/img3.jpg';
import tieccuoiimg4 from '~/assets/imgs/services/tiec-cuoi/img4.jpg';
import tieccuoiimg5 from '~/assets/imgs/services/tiec-cuoi/img5.jpg';
import tieccuoiimg6 from '~/assets/imgs/services/tiec-cuoi/img6.jpg';
import tieccuoiimg7 from '~/assets/imgs/services/tiec-cuoi/img7.jpg';
import tieccuoiimg8 from '~/assets/imgs/services/tiec-cuoi/img8.jpg';
import tieccuoiimg9 from '~/assets/imgs/services/tiec-cuoi/img9.jpg';
import tieccuoiimg10 from '~/assets/imgs/services/tiec-cuoi/img10.jpg';

// Ảnh tiệc outside
import tiecoutsideimg1 from '~/assets/imgs/services/tiec-outside/img1.jpg';
import tiecoutsideimg2 from '~/assets/imgs/services/tiec-outside/img2.jpg';
import tiecoutsideimg3 from '~/assets/imgs/services/tiec-outside/img3.jpg';
import tiecoutsideimg4 from '~/assets/imgs/services/tiec-outside/img4.jpg';
import tiecoutsideimg5 from '~/assets/imgs/services/tiec-outside/img5.jpg';
import tiecoutsideimg6 from '~/assets/imgs/services/tiec-outside/img6.jpg';
import tiecoutsideimg7 from '~/assets/imgs/services/tiec-outside/img7.jpg';
import tiecoutsideimg8 from '~/assets/imgs/services/tiec-outside/img8.jpg';
import tiecoutsideimg9 from '~/assets/imgs/services/tiec-outside/img9.jpg';
import tiecoutsideimg10 from '~/assets/imgs/services/tiec-outside/img10.jpg';

// Ảnh tiệc sự kiện
import tiecsukienimg1 from '~/assets/imgs/services/tiec-sukien/img1.jpg';
import tiecsukienimg2 from '~/assets/imgs/services/tiec-sukien/img2.jpg';
import tiecsukienimg3 from '~/assets/imgs/services/tiec-sukien/img3.jpg';
import tiecsukienimg4 from '~/assets/imgs/services/tiec-sukien/img4.jpeg';
import tiecsukienimg5 from '~/assets/imgs/services/tiec-sukien/img5.jpeg';
import tiecsukienimg6 from '~/assets/imgs/services/tiec-sukien/img6.jpg';
import tiecsukienimg7 from '~/assets/imgs/services/tiec-sukien/img7.jpg';
import tiecsukienimg8 from '~/assets/imgs/services/tiec-sukien/img8.jpg';
import tiecsukienimg9 from '~/assets/imgs/services/tiec-sukien/img9.jpg';
import tiecsukienimg10 from '~/assets/imgs/services/tiec-sukien/img10.jpg';

import SlideShow from '~/components/Layout/components/SlideShow';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
const cx = classNames.bind(styles);

// Component hội nghị
export const HoiNghi = () => {
    const photos = [
        `${hoinghiimg1}`,
        `${hoinghiimg2}`,
        `${hoinghiimg3}`,
        `${hoinghiimg4}`,
        `${hoinghiimg5}`,
        `${hoinghiimg6}`,
        `${hoinghiimg7}`,
        `${hoinghiimg8}`,
        `${hoinghiimg9}`,
        `${hoinghiimg10}`,
    ];

    return (
        <Service
            photos={photos}
            paragraph1="Sảnh tiệc hội nghị của LUXURY PALACE được thiết kế với công suất lớn, hệ thống âm thanh, thiết bị, ánh sáng, trình chiếu hiện đại, đẳng cấp sẽ luôn sẵn sàng mang đến một không gian đa chức năng cho mọi loại hình tổ chức sự kiện. Phong cách phục vụ tận tình, chuyên nghiệp của đội ngũ nhân viên giàu kinh nghiệm sẽ mang lại cho bạn sự hài lòng cao nhất về chất lượng dịch vụ."
        />
    );
};

//  Component Tiệc cưới
export const TiecCuoi = () => {
    const photos = [
        `${tieccuoiimg1}`,
        `${tieccuoiimg2}`,
        `${tieccuoiimg3}`,
        `${tieccuoiimg4}`,
        `${tieccuoiimg5}`,
        `${tieccuoiimg6}`,
        `${tieccuoiimg7}`,
        `${tieccuoiimg8}`,
        `${tieccuoiimg9}`,
        `${tieccuoiimg10}`,
    ];

    return (
        <Service
            photos={photos}
            paragraph1="LUXURY PALACE được ví như MỘT CUNG ĐIỆN tổ chức tiệc cưới vừa HIỆN ĐẠI, vừa SANG TRỌNG lại không kém phần LÃNG MẠNG. Mỗi sảnh tiệc có thiết kế riêng biệt, độc đáo và đầy ấn tượng hứa hẹn đem đến cho bạn sự lựa chọn hoàn hảo nhất. Và chúng tôi tin rằng, mỗi tiệc cưới của bạn là một câu chuyện tình yêu tuyệt đẹp với những nụ cười hạnh phúc, những khoảnh khắc ý nghĩa và cảm xúc ngập tràn."
            paragraph2="LUXURY PALACE – CUNG ĐIỆN HOÀNG GIA sẽ cùng bạn tạo nên những dấu ấn khó phai trong ngày trọng đại đẹp nhất đời mình."
        />
    );
};

// Component tiệc outside
export const TiecOutside = () => {
    const photos = [
        `${tiecoutsideimg1}`,
        `${tiecoutsideimg2}`,
        `${tiecoutsideimg3}`,
        `${tiecoutsideimg4}`,
        `${tiecoutsideimg5}`,
        `${tiecoutsideimg6}`,
        `${tiecoutsideimg7}`,
        `${tiecoutsideimg8}`,
        `${tiecoutsideimg9}`,
        `${tiecoutsideimg10}`,
    ];

    return (
        <Service
            photos={photos}
            paragraph1="LUXURY PALACE không chỉ phù hợp cho các loại hình tiệc trong khuôn khổ lồng kính tại trung tâm, chúng tôi còn là ĐỘI NGŨ KINH NGHIỆM tác chiến cho các loại hình tiệc outside bên ngoài. Với động ngũ là các chuyên gia năm sao hoàn toàn mang đến cho khách hàng sự CHUẨN MỰC TUYỆT ĐỐI trong từng sự kiện ngoài trời."
        />
    );
};

// Component tiệc sự kiện
export const SuKien = () => {
    const listItems = [
        'SỰ KIỆN SINH NHẬT',
        'SỰ KIỆN KỶ NIỆM NGÀY CƯỚI',
        'SỰ KIỆN LỄ ĐÍNH HÔN',
        'SỰ KIỆN LỄ GIA TIÊN',
        'SỰ KIÊN TIỆC CHIA TAY HỘI ĐỘC THÂN',
        'VÀ RẤT NHIỀU SỰ KIỆN CÁ NHÂN KHÁC',
    ];
    const photos = [
        `${tiecsukienimg1}`,
        `${tiecsukienimg2}`,
        `${tiecsukienimg3}`,
        `${tiecsukienimg4}`,
        `${tiecsukienimg5}`,
        `${tiecsukienimg6}`,
        `${tiecsukienimg7}`,
        `${tiecsukienimg8}`,
        `${tiecsukienimg9}`,
        `${tiecsukienimg10}`,
    ];

    return (
        <Service
            photos={photos}
            paragraph1="LUXURY PALACE được thiết kế như LÂU ĐÀI HOÀNG GIA, với lối kiến trúc thích hợp với các loại hình sự kiện trong đó có CÁC SỰ KIỆN CÁ NHÂN KHÁC NHAU:"
            listItems={listItems}
            paragraph3="Chúng tôi tin rằng, mỗi SỰ KIỆN CÁ NHÂN của bạn là  những khoảnh khắc ý nghĩa nhất và cảm xúc nhất, và sẽ là dấu ấn kho phai khi được diễn ra tại LUXURY PALACE"
        />
    );
};

function Service(props) {
    const { photos, paragraph1, paragraph2, paragraph3, listItems } = props;
    const [service, setService] = useState('');

    const serviceToPath = {
        hoinghi: '/service/hoi-nghi/',
        tieccuoi: '/service/tiec-cuoi/',
        tiecouside: '/service/tiec-outside/',
        sukien: '/service/su-kien/',
    };

    const handleClick = (ser) => {
        setService(ser);
    };

    useEffect(() => {
        const currentPath = window.location.pathname;
        for (const [key, value] of Object.entries(serviceToPath)) {
            if (currentPath === value) {
                setService(key);
                break;
            }
        }
        return () => {
            setService(null);
        };
    }, [service]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-header')}>
                <div className={cx('header')}>
                    <h2 className={cx('title')}>Dịch vụ</h2>
                    <div className={cx('wrap-service')}>
                        <ul className={cx('navbar')}>
                            <li>
                                <Link
                                    to={serviceToPath.hoinghi}
                                    className={cx(
                                        'navbar-link',
                                        window.location.pathname === serviceToPath.hoinghi ? 'selected' : '',
                                    )}
                                >
                                    <span className={cx('span-item')} onClick={() => handleClick('ruby')}>
                                        Hội nghị
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={serviceToPath.tieccuoi}
                                    className={cx(
                                        'navbar-link',
                                        window.location.pathname === serviceToPath.tieccuoi ? 'selected' : '',
                                    )}
                                >
                                    <span className={cx('span-item')} onClick={() => handleClick('topaz')}>
                                        Tiệc cưới
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={serviceToPath.tiecouside}
                                    className={cx(
                                        'navbar-link',
                                        window.location.pathname === serviceToPath.tiecouside ? 'selected' : '',
                                    )}
                                >
                                    <span className={cx('span-item')} onClick={() => handleClick('diamond')}>
                                        Tiệc outside
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={serviceToPath.sukien}
                                    className={cx(
                                        'navbar-link',
                                        window.location.pathname === serviceToPath.sukien ? 'selected' : '',
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
            {paragraph1 && <p>{paragraph1}</p>}
            {paragraph2 && <p>{paragraph2}</p>}

            {listItems && (
                <ul style={{padding: '0 30px',fontSize: '18px'}}>
                    {listItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
            {paragraph3 && <p>{paragraph3}</p>}
            <Carousel thumbWidth={150} autoPlay showStatus={false} infiniteLoop onSwipeMove>
                {photos.map((photo, index) => (
                    <div className={cx('div')} key={index}>
                        <img src={photo} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Service;
