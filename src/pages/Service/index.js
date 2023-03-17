import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Service.module.scss';
const cx = classNames.bind(styles);

function Service() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h2 className={cx('title')}>Dịch vụ</h2>
                <div className={cx('wrap-service')}>
                    <nav className={cx('navbar')}>
                        <Link className={cx('navbar-link')} to="./conference">
                            <span className={cx('span-item')}>Hội nghị</span>
                        </Link>
                        <Link className={cx('navbar-link')} to="./wedding">
                            <span className={cx('span-item')}>Tiệc cưới</span>
                        </Link>
                        <Link className={cx('navbar-link')} to="./partyoutside">
                            <span className={cx('span-item')}> Tiệc outside</span>
                        </Link>
                        <Link className={cx('navbar-link')} to="./partyoutside">
                            <span className={cx('span-item')}> Sự kiện</span>
                        </Link>
                    </nav>
                </div>
            </div>
            <div className={cx('content')}>
                <div className={cx('header-content')}>
                    <p className={cx('title-content')}>
                        LUXURY PALACE được ví như MỘT CUNG ĐIỆN tổ chức tiệc cưới vừa HIỆN ĐẠI, vừa SANG TRỌNG lại không
                        kém phần LÃNG MẠNG. Mỗi sảnh tiệc có thiết kế riêng biệt, độc đáo và đầy ấn tượng hứa hẹn đem
                        đến cho bạn sự lựa chọn hoàn hảo nhất. Và chúng tôi tin rằng, mỗi tiệc cưới của bạn là một câu
                        chuyện tình yêu tuyệt đẹp với những nụ cười hạnh phúc, những khoảnh khắc ý nghĩa và cảm xúc ngập
                        tràn.
                    </p>
                    <p className={cx('introduce-content')}>
                        LUXURY PALACE – CUNG ĐIỆN HOÀNG GIA sẽ cùng bạn tạo nên những dấu ấn khó phai trong ngày trọng
                        đại đẹp nhất đời mình.
                    </p>
                </div>
                <div className={cx('wrapper-img-content')}>
                    <div className={cx('img-top')}>
                        <i className={cx('icon-top', 'fa-solid fa-chevron-left', 'transform-left-top')}></i>
                        <img
                            className={cx('img-service')}
                            src="https://luxurypalace.vn/wp-content/uploads/2021/01/LUL04115-2.jpg"
                            alt=""
                        ></img>
                        <i className={cx('icon-top', 'fa-solid fa-chevron-right', 'transform-right-top')}></i>
                    </div>
                    <i className={cx('icon-bottom', 'fa-solid fa-chevron-left', 'transform-left-bottom')}></i>

                    <div className={cx('imgs')}>
                        <img
                            className={cx('img-item')}
                            src="https://luxurypalace.vn/wp-content/uploads/2021/01/LUL04115-2.jpg"
                            alt=""
                        />
                        <img
                            className={cx('img-item')}
                            src="https://luxurypalace.vn/wp-content/uploads/2021/01/LUL04115-2.jpg"
                            alt=""
                        />

                        <img
                            className={cx('img-item')}
                            src="https://luxurypalace.vn/wp-content/uploads/2021/01/LUL04115-2.jpg"
                            alt=""
                        />
                        <img
                            className={cx('img-item')}
                            src="https://luxurypalace.vn/wp-content/uploads/2021/01/LUL04115-2.jpg"
                            alt=""
                        />
                        <img
                            className={cx('img-item')}
                            src="https://luxurypalace.vn/wp-content/uploads/2021/01/LUL04115-2.jpg"
                            alt=""
                        />
                        <img
                            className={cx('img-item')}
                            src="https://luxurypalace.vn/wp-content/uploads/2021/01/LUL04115-2.jpg"
                            alt=""
                        />
                        <img
                            className={cx('img-item')}
                            src="https://luxurypalace.vn/wp-content/uploads/2021/01/LUL04115-2.jpg"
                            alt=""
                        />
                        <img
                            className={cx('img-item')}
                            src="https://luxurypalace.vn/wp-content/uploads/2021/01/LUL04115-2.jpg"
                            alt=""
                        />
                        <img
                            className={cx('img-item')}
                            src="https://luxurypalace.vn/wp-content/uploads/2021/01/LUL04115-2.jpg"
                            alt=""
                        />
                        <img
                            className={cx('img-item')}
                            src="https://luxurypalace.vn/wp-content/uploads/2021/01/LUL04115-2.jpg"
                            alt=""
                        />
                        <img
                            className={cx('img-item')}
                            src="https://luxurypalace.vn/wp-content/uploads/2021/01/LUL04115-2.jpg"
                            alt=""
                        />
                    </div>

                    {/* <i
                        className={cx('icon-bottom', 'fa-solid fa-chevron-right', 'transform-right-bottom', 'right')}
                    ></i> */}
                </div>
            </div>
        </div>
    );
}

export default Service;
