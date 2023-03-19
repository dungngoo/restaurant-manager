import classNames from 'classnames/bind';
import styles from './Introduce.module.scss';
const cx = classNames.bind(styles);

function Introduce() {
    return (
        <div className={cx('wrapper')}>
            <h2>Giới thiệu</h2>
            <p>
                LUXURY PALACE được biết đến như là một CUNG ĐIỆN tổ chức hội nghị – tiệc cưới đẳng cấp bậc nhất tại
                thành phố Hồ Chí Minh. Tại đây, chúng tôi sẽ mang đến cho bạn sự trải nghiệm dịch vụ hoàn hảo và chuyên
                nghiệp nhất. Với tổng diện tích sử dụng lên đến gần 20.000 m2, trong đó bao gồm 10 sảnh tiệc, mỗi sảnh
                tiệc có sức chứa từ 200 đến 1.500 khách, cùng lúc có thể đón tiếp trên 4.000 khách. Đáp ứng mọi yêu cầu
                của bạn về hình thức cũng như quy mô tổ chức. Bất kể là một hội thảo vài chục người hay một sự kiện hàng
                ngàn người, chúng tôi cũng sẽ cam kết chuẩn bị chỉnh chu và tỉ mỉ nhất trong từng chi tiết.
            </p>

            <img
                className={cx('aligncenter')}
                src="https://luxurypalace.vn/wp-content/uploads/2022/03/COK_6273.jpg"
                alt=""
            />

            <img
                className={cx('aligncenter')}
                src="https://luxurypalace.vn/wp-content/uploads/2022/03/COK_6273.jpg"
                alt=""
            />

            <p>
                LUXURY PALACE mang trên mình một lối kiến trúc hoàng gia sang trọng, mỗi góc tại CUNG ĐIỆN là một khu
                vực check- in thần thánh nhất dành cho quan khách. CUNG ĐIỆN HOÀNG GIA cùng với sự đầu tư về trang thiết
                bị, hệ thống âm thanh ánh sáng hiện đại và đội ngũ phục vụ chuyên nghiệp sẽ mang đến sự hài lòng bậc
                nhất cho quan khách.
            </p>

            <img
                className={cx('aligncenter')}
                src="https://luxurypalace.vn/wp-content/uploads/2022/03/COK_6273.jpg"
                alt=""
            />

            <img
                className={cx('aligncenter')}
                src="https://luxurypalace.vn/wp-content/uploads/2022/03/COK_6273.jpg"
                alt=""
            />

            <p>
                Luôn đặt mình vào vị trí của khách hàng, lắng nghe và thấu hiểu chính là nền tảng để LUXURY PALACE tạo
                nên một chất lượng dịch vụ hoàn hảo và trọn vẹn nhất.
            </p>
            <p></p>
        </div>
    );
}

export default Introduce;