import classNames from 'classnames/bind';
import styles from './Introduce.module.scss';
import img1 from '~/assets/imgs/introduce/img1.jpg';
import img2 from '~/assets/imgs/introduce/img2.jpg';
import img3 from '~/assets/imgs/introduce/img3.jpg';
import img4 from '~/assets/imgs/introduce/img4.jpg';
import HeaderContent from '~/components/Layout/components/HeaderContent';
const cx = classNames.bind(styles);

function Introduce() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>Giới thiệu</h2>
            <p>
                DH PALACE được biết đến như là một CUNG ĐIỆN tổ chức hội nghị – tiệc cưới đẳng cấp bậc nhất tại
                thành phố Hồ Chí Minh. Tại đây, chúng tôi sẽ mang đến cho bạn sự trải nghiệm dịch vụ hoàn hảo và chuyên
                nghiệp nhất. Với tổng diện tích sử dụng lên đến gần 20.000 m2, trong đó bao gồm 10 sảnh tiệc, mỗi sảnh
                tiệc có sức chứa từ 200 đến 1.500 khách, cùng lúc có thể đón tiếp trên 4.000 khách. Đáp ứng mọi yêu cầu
                của bạn về hình thức cũng như quy mô tổ chức. Bất kể là một hội thảo vài chục người hay một sự kiện hàng
                ngàn người, chúng tôi cũng sẽ cam kết chuẩn bị chỉnh chu và tỉ mỉ nhất trong từng chi tiết.
            </p>

            <img className={cx('aligncenter')} src={img1} alt="" />

            <img className={cx('aligncenter')} src={img2} alt="" />

            <p>
                DH PALACE mang trên mình một lối kiến trúc hoàng gia sang trọng, mỗi góc tại CUNG ĐIỆN là một khu
                vực check- in thần thánh nhất dành cho quan khách. CUNG ĐIỆN HOÀNG GIA cùng với sự đầu tư về trang thiết
                bị, hệ thống âm thanh ánh sáng hiện đại và đội ngũ phục vụ chuyên nghiệp sẽ mang đến sự hài lòng bậc
                nhất cho quan khách.
            </p>

            <img className={cx('aligncenter')} src={img3} alt="" />

            <img className={cx('aligncenter')} src={img4} alt="" />

            <p>
                Luôn đặt mình vào vị trí của khách hàng, lắng nghe và thấu hiểu chính là nền tảng để DH PALACE tạo
                nên một chất lượng dịch vụ hoàn hảo và trọn vẹn nhất.
            </p>
            <p></p>
        </div>
    );
}

export default Introduce;
