import classNames from 'classnames/bind';
import HeaderContent from '~/components/Layout/components/HeaderContent';
import styles from './Service.module.scss';
import img1 from '~/assets/imgs/conference/img1.jpg';
import img2 from '~/assets/imgs/conference/img2.jpg';
import img3 from '~/assets/imgs/conference/img3.jpg';
import img4 from '~/assets/imgs/conference/img4.jpg';
import img5 from '~/assets/imgs/conference/img5.jpeg';
import img6 from '~/assets/imgs/conference/img6.jpg';
import img7 from '~/assets/imgs/conference/img7.jpg';
import img8 from '~/assets/imgs/conference/img8.jpg';
import img9 from '~/assets/imgs/conference/img9.jpg';
import img10 from '~/assets/imgs/conference/img10.png';
import img11 from '~/assets/imgs/conference/img11.jpg';
import img12 from '~/assets/imgs/conference/img12.jpg';
import SlideShow from '~/components/Layout/components/SlideShow';
const cx = classNames.bind(styles);

function Service() {
    return (
        <div className={cx('wrapper', 'abasdsad')}>
            <div className={cx('content')}>
                <HeaderContent title="Dịch vụ" li1="Hội nghị" li2="Tiệc cưới" li3="Tiệc outside" li4="Sự kiện" />
            </div>
            <SlideShow
                // introduceParagraph="Sảnh tiệc hội nghị của LUXURY PALACE được thiết kế với công suất lớn, hệ thống âm thanh, thiết bị, ánh sáng, trình chiếu hiện đại, đẳng cấp sẽ luôn sẵn sàng mang đến một không gian đa chức năng cho mọi loại hình tổ chức sự kiện. Phong cách phục vụ tận tình, chuyên nghiệp của đội ngũ nhân viên giàu kinh nghiệm sẽ mang lại cho bạn sự hài lòng cao nhất về chất lượng dịch vụ."
                img1={img1}
                img2={img2}
                img3={img3}
                img4={img4}
                img5={img5}
                img6={img6}
                img7={img7}
                img8={img8}
                img9={img9}
                img10={img10}
                img11={img11}
                img12={img12}
                title={
                    'Sảnh tiệc hội nghị của LUXURY PALACE được thiết kế với công suất lớn, hệ thống âm thanh, thiết bị, ánh sáng, trình chiếu hiện đại, đẳng cấp sẽ luôn sẵn sàng mang đến một không gian đa chức năng cho mọi loại hình tổ chức sự kiện. Phong cách phục vụ tận tình, chuyên nghiệp của đội ngũ nhân viên giàu kinh nghiệm sẽ mang lại cho bạn sự hài lòng cao nhất về chất lượng dịch vụ.'
                }
            />
        </div>
    );
}

export default Service;
