import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import HeaderContent from '~/components/Layout/components/HeaderContent';
import SlideShow from '~/components/Layout/components/SlideShow';
import styles from './Service.module.scss';
const cx = classNames.bind(styles);

function Service() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <HeaderContent title="Dịch vụ" />
                <SlideShow
                    introduceParagraph="Sảnh tiệc hội nghị của LUXURY PALACE được thiết kế với công suất lớn, hệ thống âm thanh, thiết bị, ánh sáng, trình chiếu hiện đại, đẳng cấp sẽ luôn sẵn sàng mang đến một không gian đa chức năng cho mọi loại hình tổ chức sự kiện. Phong cách phục vụ tận tình, chuyên nghiệp của đội ngũ nhân viên giàu kinh nghiệm sẽ mang lại cho bạn sự hài lòng cao nhất về chất lượng dịch vụ."
                    imgTop="https://luxurypalace.vn/wp-content/uploads/2021/01/LUL04115-2.jpg"
                    img1="https://luxurypalace.vn/wp-content/uploads/2021/01/1.jpg"
                    img2="https://luxurypalace.vn/wp-content/uploads/2021/01/Untitled-1.jpg"
                    img3="https://luxurypalace.vn/wp-content/uploads/2021/01/5.jpg"
                    img4="https://luxurypalace.vn/wp-content/uploads/2021/01/4.jpg"
                    img5="https://luxurypalace.vn/wp-content/uploads/2021/01/6.jpg"
                    img6="https://luxurypalace.vn/wp-content/uploads/2021/01/LUL04115-2.jpg"
                    img7="https://luxurypalace.vn/wp-content/uploads/2021/01/LUL04115-2.jpg"
                    img8="https://luxurypalace.vn/wp-content/uploads/2021/01/LUL04115-2.jpg"
                    img9="https://luxurypalace.vn/wp-content/uploads/2021/01/LUL04115-2.jpg"
                    img10="https://luxurypalace.vn/wp-content/uploads/2021/01/LUL04115-2.jpg"
                />
            </div>
        </div>
    );
}

export default Service;
