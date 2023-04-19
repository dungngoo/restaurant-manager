import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './NewsData.module.scss';

const cx = classNames.bind(styles);

function NewsData() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-header')}>
                <div className={cx('header')}>
                    <h2 className={cx('title')}>LƯU Ý KHI TỔ CHỨC TIỆC CƯỚI MÙA HÈ</h2>
                </div>
            </div>
            <div className={cx('wrapper-body')}>
                <p className={cx('p')}>
                    Mùa hè là khoảng thời gian lý tưởng để tổ chức tiệc cưới của các cặp đôi. Thế nhưng, việc tổ chức
                    hôn lễ tốt đẹp vào mùa hè cũng không phải điều dễ dàng nếu các cặp đôi thiếu đi sự tinh ý và kinh
                    nghiệm. Để hôn lễ được thành công tốt đẹp nhất, bạn hãy cùng Luxury Palace điểm qua những lưu ý khi
                    tổ chức tiệc cưới mùa hè ngay sau đây nhé.
                </p>
                <h2 className={cx('h2')}>Lưu ý chọn địa điểm cưới</h2>
                <p className={cx('p')}>
                    Hè đến là khoảng thời gian lý tưởng cho nhiều loại hình tiệc cưới hòa mình với thiên nhiên như tiệc
                    bãi biển, tiệc vườn, tiệc khán phòng,… Tuy nhiên mỗi địa điểm đều có những ưu nhược điểm khác nhau
                    mà người tổ chức cần lưu ý.
                </p>
                <h2 className={cx('h2')}>Tiệc cưới tại vườn</h2>
                <p className={cx('p')}>
                    Tổ chức tiệc cưới tại vườn sẽ luôn tạo nên một bữa tiệc ấm áp và đáng nhớ cho cả gia đình. Thế
                    nhưng, tổ chức tiệc tại vườn thường bị ảnh hưởng nhiều bởi các yếu tố thời tiết như mưa, gió,… do
                    đó, nếu tổ chức tiệc tại vườn mùa hè bạn cần trang bị sẵn mái vòm để buổi lễ không bị ảnh hưởng bởi
                    thời tiết. Ngoài ra, bạn chỉ nên tổ chức tại những khu vườn rộng rãi, tránh những địa điểm chật hẹp
                    khiến không khí mùa hè trở nên oi bức gây khó chịu cho khách mời.
                </p>
                <h2 className={cx('h2')}>Tiệc cưới bãi biển</h2>
                <p className={cx('p')}>
                    Tổ chức ở bãi biển cũng là sự lựa chọn lý tưởng với các cặp đôi yêu thích sự trẻ trung, năng động.
                    Đây là buổi tiệc phù hợp với các hôn lễ thân mật chỉ gồm những người thân thiết. Họ sẽ vô cùng ấn
                    tượng với một buổi tiệc lãng mạn có biển xanh, cát trắng. Tuy nhiên, vì là tiệc ngoài trời nên tiệc
                    cưới bãi biển cũng dễ bị ảnh hưởng bởi các yếu tố thời tiết nên bạn cần trang bị cho mình sắn những
                    kế hoạch dự phòng hết sức chu đáo.
                </p>
                <h2 className={cx('h2')}>Tiệc cưới tại trung tâm tiệc cưới</h2>
                <p className={cx('p')}>
                    Khác với các các loại hình tiệc cưới ngoài trời, tiệc cưới tại trung tâm tiệc cưới phù hợp với tất
                    cả các thời điểm trong năm mà không cần lo về sự ảnh hưởng của thời tiết. Trên hết hiện nay, các
                    trung tâm tiệc cưới đều cho phép khách hàng trang trí theo chủ đề yêu thích, do vậy mà bạn hoàn toàn
                    có thể thỏa sức sáng tạo và hiện thực hóa ý tưởng của mình. Ngoài ra, các trung tâm tiệc cưới đều có
                    trang bị hệ thống điều hòa giúp không khí trở nên mát mẻ và khách mời không bị ảnh hưởng bởi cái
                    nóng oi bức của mùa hè.
                </p>
                <div className={cx('wrapper-img')}>
                    <img className={cx('img')} src="https://luxurypalace.vn/wp-content/uploads/2023/03/1r.jpg"></img>
                </div>
            </div>
            <div className={cx('wrapper-footer')}>
                <div className={cx('footer')}>
                    <h2 className={cx('title')}>TIN LIÊN QUAN</h2>
                </div>
            </div>
            <div className={cx('wrapper-newsOrther')}>
                <div className={cx('c-4')}>
                    <div className={cx('news')}>
                        <Link to={''} className={cx('wrapper-imgNewsOrther')}>
                            <img
                                className={cx('imgNewsOrther')}
                                src="https://luxurypalace.vn/wp-content/uploads/2023/04/QKLD-398x321.jpg"
                            ></img>
                        </Link>
                        <Link to={''} className={cx('titleNewsOrther')}>
                            CÁCH CHỌN HOA CƯỚI PHÙ HỢP MÙA HÈ 2023 (2)
                        </Link>
                        <p className={cx('pShort')}>
                            Nếu vẫn bạn chưa tìm được loài hoa cưới phù hợp với hôn lễ của mình trong phần 1, thì…
                        </p>
                        <button className={cx('btnRead')}>
                            <Link className={cx('link')} to={'luu-y-khi-to-chuc-tiec-mua-he'}>
                                Đọc ngay
                            </Link>
                        </button>
                    </div>
                </div>
                <div className={cx('c-4')}>
                    <div className={cx('news')}>
                        <Link to={''} className={cx('wrapper-imgNewsOrther')}>
                            <img
                                className={cx('imgNewsOrther')}
                                src="https://luxurypalace.vn/wp-content/uploads/2023/04/QKLD-398x321.jpg"
                            ></img>
                        </Link>
                        <Link to={''} className={cx('titleNewsOrther')}>
                            CÁCH CHỌN HOA CƯỚI PHÙ HỢP MÙA HÈ 2023 (2)
                        </Link>
                        <p className={cx('pShort')}>
                            Nếu vẫn bạn chưa tìm được loài hoa cưới phù hợp với hôn lễ của mình trong phần 1, thì…
                        </p>
                        <button className={cx('btnRead')}>
                            <Link className={cx('link')} to={'luu-y-khi-to-chuc-tiec-mua-he'}>
                                Đọc ngay
                            </Link>
                        </button>
                    </div>
                </div>
                <div className={cx('c-4')}>
                    <div className={cx('news')}>
                        <Link to={''} className={cx('wrapper-imgNewsOrther')}>
                            <img
                                className={cx('imgNewsOrther')}
                                src="https://luxurypalace.vn/wp-content/uploads/2023/04/QKLD-398x321.jpg"
                            ></img>
                        </Link>
                        <Link to={''} className={cx('titleNewsOrther')}>
                            CÁCH CHỌN HOA CƯỚI PHÙ HỢP MÙA HÈ 2023 (2)
                        </Link>
                        <p className={cx('pShort')}>
                            Nếu vẫn bạn chưa tìm được loài hoa cưới phù hợp với hôn lễ của mình trong phần 1, thì…
                        </p>
                        <button className={cx('btnRead')}>
                            <Link className={cx('link')} to={'luu-y-khi-to-chuc-tiec-mua-he'}>
                                Đọc ngay
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default NewsData;
