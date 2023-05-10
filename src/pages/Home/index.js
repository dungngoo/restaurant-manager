import classNames from 'classnames/bind';
import { Carousel } from 'react-responsive-carousel';
import styles from './Home.module.scss';

import img1 from '~/assets/imgs/home/img1.jpeg';
import img2 from '~/assets/imgs/home/img2.jpg';
import img3 from '~/assets/imgs/home/img3.jpg';
import img4 from '~/assets/imgs/home/img4.png';
import img5 from '~/assets/imgs/home/img5.jpeg';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import News from '../News';
import { useEffect } from 'react';
import OrtherNews from '../News/OrtherNews';
const cx = classNames.bind(styles);

function Home({ home }) {
    const urls = [`${img1}`, `${img2}`, `${img3}`, `${img4}`, `${img5}`];
    function init() {
        const underBanner = document.getElementById('underbanner');
        const wrapRow = document.getElementById('wrap-row');
        const wrapDiscover = document.getElementById('wrap-discover');
        const wrapPromotion = document.getElementById('wrap-promotion');
        const wrapNews = document.getElementById('wrap-news');

        window.addEventListener('scroll', function () {
            var x = this.scrollY;
            if (x > 0 && x < 1142 - 200) {
                underBanner.classList.add(cx('slideInLeft'));
            }
            if (x > 470 - 200 && x < 1975 - 200) {
                wrapRow.classList.add(cx('slideInRight'));
            }
            if (x > 1275 - 200 && x < 2775 - 200) {
                wrapDiscover.classList.add(cx('slideInLeft'));
            }
            if (x > 2085 - 200 && x < 3275 - 200) {
                wrapPromotion.classList.add(cx('slideInRight'));
            }
            if (x > 2575 - 200) {
                wrapNews.classList.add(cx('slideInLeft'));
            }
        });
    }
    document.addEventListener('readystatechange', function () {
        if (document.readyState === 'complete') {
            init();
        }
    });

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrap-carousel')}>
                <Carousel
                    className={cx('carousel')}
                    showThumbs={false}
                    centerSlidePercentage={50}
                    autoPlay
                    showStatus={false}
                    infiniteLoop
                    interval={2000}
                >
                    {urls.map((url, index) => (
                        <div className={cx('div')}>
                            <img src={url} alt={`Ảnh${index}`} />
                        </div>
                    ))}
                </Carousel>
            </div>
            <div id="underbanner" className={cx('under-banner')}>
                <div className={cx('grid')}>
                    <div className={cx('row')}>
                        <div className={cx('col l-6', 'left-content')}>
                            <p>
                                Luôn đặt mình vào vị trí của khách hàng, lắng nghe và thấu hiểu chính là nền tảng để
                                LUXURY PALACE tạo nên một chất lượng dịch vụ hoàn hảo.
                            </p>
                            <p>
                                Hãy để chúng tôi luôn đồng hành và mang lại cho bạn một sự kiện ẤN TƯỢNG và TRỌN VẸN
                                nhất.
                            </p>
                            <div className={cx('span')}>Cảm ơn quý khách</div>
                        </div>
                        <div className={cx('col l-6')}>
                            <div className={cx('right-content')}>
                                <div className={cx('wrap-i')}>
                                    <img
                                        src="https://luxurypalace.vn/wp-content/uploads/2021/04/co-dau-luxury-palace.jpg"
                                        alt="Ảnh cưới 1"
                                    />
                                </div>
                                <div className={cx('wrap-i')}>
                                    <img
                                        src="https://luxurypalace.vn/wp-content/uploads/2020/01/kham-pha-5.jpg"
                                        alt="Ảnh cưới 2"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="wrap-row" className={cx('wrap-row')}>
                <div className={cx('row')}>
                    <div className={cx('col6')}>
                        <a href="/services/hoi-nghi" className={cx('h-100')}>
                            <div className={cx('border')}></div>
                            <div className={cx('overlay')}></div>
                            <div className={cx('card')}>
                                <img
                                    className={cx('img')}
                                    src="https://luxurypalace.vn/wp-content/uploads/2019/10/service-1-398x176.png"
                                ></img>
                                <div className={cx('cardOverlay')}>
                                    <Link to="/services/hoi-nghi" className={cx('cardTitle')}>
                                        <h1>Hội nghị</h1>
                                        <p>
                                            Luôn đặt mình vào vị trí của khách hàng, lắng nghe và thấu hiểu chính là nền
                                            tảng để luxury palace tạo nên mộtchất lượng dịch vụ hoàn hảo và trọn vẹn
                                            nhất.
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={cx('col6')}>
                        <a href="/services/tiec-cuoi" className={cx('h-100')}>
                            <div className={cx('border')}></div>
                            <div className={cx('overlay')}></div>
                            <div className={cx('card')}>
                                <img
                                    className={cx('img')}
                                    src="https://luxurypalace.vn/wp-content/uploads/2019/12/tiec-cuoi-398x176.jpg"
                                ></img>
                                <div className={cx('cardOverlay')}>
                                    <Link to="/services/tiec-cuoi" className={cx('cardTitle')}>
                                        <h1>Tiệc cưới</h1>
                                        <p>
                                            LUXURY PALACE được ví như MỘT CUNG ĐIỆN tổ chức tiệc cưới vừa HIỆN ĐẠI, vừa
                                            SANG TRỌNG lại không kém phần LÃNG MẠNG. Mỗi sảnh tiệc có thiết kế riêng
                                            biệt, độc đáo và đầy ấn tượng hứa hẹn đem đến cho bạn sự lựa chọn hoàn hảo
                                            nhất. Và chúng tôi tin rằng, […]
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={cx('col6')}>
                        <a href="/services/tiec-outside" className={cx('h-100')}>
                            <div className={cx('border')}></div>
                            <div className={cx('overlay')}></div>
                            <div className={cx('card')}>
                                <img
                                    className={cx('img')}
                                    src="https://luxurypalace.vn/wp-content/uploads/2019/12/outsize-398x176.jpg"
                                ></img>
                                <div className={cx('cardOverlay')}>
                                    <Link to="/services/tiec-outside" className={cx('cardTitle')}>
                                        <h1>Tiệc outside</h1>
                                        <p>
                                            LUXURY PALACE không chỉ phù hợp cho các loại hình tiệc trong khuôn khổ lồng
                                            kính tại trung tâm, chúng tôi còn là ĐỘI NGŨ KINH NGHIỆM tác chiến cho các
                                            loại hình tiệc outside bên ngoài. Với động ngũ là các chuyên gia năm sao
                                            hoàn toàn mang đến cho khách hàng sự CHUẨN […]
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={cx('col6')}>
                        <a href="/services/tiec-su-kien" className={cx('h-100')}>
                            <div className={cx('border')}></div>
                            <div className={cx('overlay')}></div>
                            <div className={cx('card')}>
                                <img
                                    className={cx('img')}
                                    src="https://luxurypalace.vn/wp-content/uploads/2019/12/event-398x176.jpg"
                                ></img>
                                <div className={cx('cardOverlay')}>
                                    <Link to="/services/tiec-su-kien" className={cx('cardTitle')}>
                                        <h1>Sự kiện</h1>
                                        <p>
                                            LUXURY PALACE được thiết kế như LÂU ĐÀI HOÀNG GIA, với lối kiến trúc thích
                                            hợp với các loại hình sự kiện trong đó có CÁC SỰ KIỆN CÁ NHÂN KHÁC NHAU: SỰ
                                            KIỆN SINH NHẬT SỰ KIỆN KỶ NIỆM NGÀY CƯỚI SỰ KIỆN LỄ ĐÍNH HÔN SỰ KIỆN LỄ GIA
                                            TIÊN SỰ KIÊN TIỆC […]
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Khám phá */}
            <div id="wrap-discover" className={cx('wrap-discover')}>
                <h1 className={cx('header')}>KHÁM PHÁ</h1>
                <div className={cx('content')}>
                    <div className={cx('grid')}>
                        <div className={cx('row')}>
                            <div className={cx('col l-6')}>
                                <div className={cx('wrap-content')}>
                                    <h3>Khám phá ngay những sảnh tiệc sang trọng và lịch lãm tại DH Palace</h3>
                                    <Button primary className={cx('btn-discover')} to={'/discover/ruby/'}>
                                        Khám phá ngay
                                    </Button>
                                </div>
                            </div>
                            <div className={cx('col l-6')}>
                                <div className={cx('wrap-p')}>
                                    <p>
                                        DH PALACE mang trên mình một lối kiến trúc HOÀNG GIA sang trọng, mỗi góc tại
                                        CUNG ĐIỆN mang vẻ đẹp khác nhau dành cho quan khách. Mỗi sảnh tiệc là một sự đầu
                                        tư bậc nhất về trang thiết bị, hệ thống âm thanh ánh sáng hiện đại và đội ngũ
                                        phục vụ chuyên nghiệp luôn đáp ứng trọn vẹn nhất các loại hình tiệc đẳng cấp
                                        khác nhau
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('wrap-img-dis')}>
                    <div className={cx('col3')}>
                        <div className={cx('wrap-img')}>
                            <img
                                src="https://luxurypalace.vn/wp-content/uploads/2021/04/LUL03779.jpg"
                                alt="Ảnh khám phá 1"
                            />
                        </div>
                    </div>
                    <div className={cx('col3')}>
                        <div className={cx('wrap-img')}>
                            <img
                                src="https://luxurypalace.vn/wp-content/uploads/2021/04/luxury-palace-model.jpg"
                                alt="Ảnh khám phá 2"
                            />
                        </div>
                    </div>
                    <div className={cx('col6')}>
                        <div className={cx('wrap-img')}>
                            <img
                                src="https://luxurypalace.vn/wp-content/uploads/2021/04/LUL03671.jpg"
                                alt="Ảnh khám phá 3"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Ưu đãi */}
            <div id="wrap-promotion" className={cx('wrap-promotion')}>
                <h1 className={cx('header')}>ƯU ĐÃI</h1>
                <div className={cx('wrap-img-prm')}>
                    <div className={cx('col4')}>
                        <div className={cx('wrap-img')}>
                            <a href="/promotion-cat/tiec-cuoi/" className={cx('h-100')}>
                                <div className={cx('card')}>
                                    <img
                                        className={cx('img')}
                                        src="http://luxurypalace.vn/wp-content/uploads/2020/01/tiec-cuoi.jpg"
                                        alt="Ảnh tiệc cưới 1"
                                    ></img>
                                    <div className={cx('cardOverlay')}>
                                        <Link to="/promotion-cat/tiec-cuoi/" className={cx('cardTitle')}>
                                            <h1 className={cx('h1')}>Tiệc cưới</h1>
                                        </Link>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={cx('col4')}>
                        <div className={cx('wrap-img')}>
                            <a href="/promotion-cat/tiec-hoi-nghi/" className={cx('h-100')}>
                                <div className={cx('card')}>
                                    <img
                                        className={cx('img')}
                                        src="http://luxurypalace.vn/wp-content/uploads/2020/01/3.jpg"
                                        alt="Ảnh tiệc hội nghị"
                                    ></img>
                                    <div className={cx('cardOverlay')}>
                                        <Link to="/promotion-cat/tiec-hoi-nghi/" className={cx('cardTitle')}>
                                            <h1 className={cx('h1')}>Tiệc hội nghị</h1>
                                        </Link>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={cx('col4')}>
                        <div className={cx('wrap-img')}>
                            <a href="/promotion-cat/tiec-su-kien/" className={cx('h-100')}>
                                <div className={cx('card')}>
                                    <img
                                        className={cx('img')}
                                        src="http://luxurypalace.vn/wp-content/uploads/2019/10/promotion-3.png"
                                        alt="Ảnh tiệc sự kiện"
                                    ></img>
                                    <div className={cx('cardOverlay')}>
                                        <Link to="/promotion-cat/tiec-su-kien/" className={cx('cardTitle')}>
                                            <h1 className={cx('h1')}>Tiệc sự kiện</h1>
                                        </Link>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Tin tức */}

            <div id="wrap-news" className={cx('wrap-news')}>
                <div style={{paddingTop: '60px'}}><h1 className={cx('header')}>TIN TỨC</h1></div>
                <OrtherNews />
            </div>
        </div>
    );
}

export default Home;
