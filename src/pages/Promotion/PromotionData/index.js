import classNames from 'classnames/bind';

import styles from './PromotionData.module.scss';

const cx = classNames.bind(styles);

function PromotionData() {
    // render dữ liệu các component
    function componentTiecCuoi() {
        return (
            <>
                <div className={cx('wrapper-header')}>
                    <div className={cx('header')}>
                        <h2 className={cx('title')}>LÌ XÌ ĐẦU NĂM – NHẬN NGÀN QUÀ TẶNG</h2>
                    </div>
                </div>
                <div className={cx('wrapper-body')}>
                    <div className={cx('paragraphShort')}>
                        <span className={cx('spanShort')}>💢[LÌ XÌ ĐẦU NĂM – NHẬN NGÀN QUÀ TẶNG]💢</span>
                        <span className={cx('spanShort')}>💥Bàn tiệc CAO CẤP </span>
                        <span className={cx('spanShort')}>💥Heineken SUỐT TIỆC </span>
                        <span className={cx('spanShort')}>💥Trang trí SANG TRỌNG </span>
                        <span className={cx('spanShort')}>💥Và nhiều QUÀ TẶNG KHỦNG KHÁC </span>
                        <span className={cx('spanShort')}>👉HỢP ĐỒNG CÀNG SỚM THÌ QUÀ TẶNG CÀNG ƯU ĐÃI.</span>
                    </div>
                    <div className={cx('imageBody')}>
                        <img
                            className={cx('img')}
                            src="https://luxurypalace.vn/wp-content/uploads/2023/02/tet.png"
                        ></img>
                    </div>
                    <div className={cx('paragraphLong')}>
                        <p className={cx('pLong')}>
                            “QUÀ SIÊU XỊN từ DH PALACE dành TẶNG RIÊNG cho các cặp đôi cưới trong năm 2023 sẽ là MÓN QUÀ
                            Ý NGHĨA và THIẾT THỰC NHẤT từ trước đến nay.
                        </p>
                        <p className={cx('pLong')}> ===========💌========== </p>
                        <p className={cx('pLong')}>
                            <span className={cx('hashtag')}>#DH_PALACE</span> sẽ giúp cho các cặp đôi cân đối về phần
                            chi phí nhưng vẫn đáp ứng được tốt phần dịch vụ 5 sao tại trung tâm.
                        </p>
                        <p className={cx('pLong')}>
                            <span className={cx('hashtag')}> #DH_PALACE </span> sẽ ưu tiên chọn sảnh đẹp để biến giấc mơ
                            của nàng dâu trở thành giấc mơ cổ tích như nàng hằng mong ước.
                        </p>

                        <p className={cx('pLong')}>
                            <span className={cx('hashtag')}> #DH_PALACE </span> sẽ đảm bảo phần an toàn tuyệt đối trong
                            các khâu khử trùng để tiệc của khách hàng diễn ra cách tốt đẹp nhất.
                        </p>
                        <p className={cx('pLong')}> ===========💌========== </p>
                        <p className={cx('pLong')}>
                            QUÀ TẶNG ĐI KÈM VỚI ĐIỀU KIỆN ÁP DỤNG (Tuỳ theo từng số bàn sẽ có những quà tặng tương ứng)
                        </p>
                        <p className={cx('pLong')}> ===========💌==========</p>
                        <p className={cx('pLong')}>
                            Toạ lạc như một “CUNG ĐIỆN” SANG TRỌNG & ĐẲNG CẤP tại khu vực GÒ VẤP, DH PALACE như một
                            thiên đường HOÀNG GIA vẽ nên những câu chuyện tình yêu tuyệt đẹp dành cho cặp đôi.
                        </p>
                        <p className={cx('pLong')}>
                            <span className={cx('hashtag')}>#dhpalace</span>
                            <span className={cx('hashtag')}> #hoinghisangtronggovap</span>
                            <span className={cx('hashtag')}> #yentiecsangtrong</span>
                            <span className={cx('hashtag')}> #trungtamtieccuoigovap</span>
                        </p>
                        <p className={cx('pLong')}> ===========💌========== </p>
                        <p className={cx('pLong')}> ➡TRUNG TÂM HỘI NGHỊ – TIỆC CƯỚI DH PALACE </p>
                        <p className={cx('pLong')}> 171 Nguyễn Thái Sơn, P.7, Quận Gò Vấp, Tphcm </p>
                        <p className={cx('pLong')}> ☎(028) 3588 2288 – 3588 2299 </p>
                        <p className={cx('pLong')}>
                            🔴Website:<span className={cx('hashtag')}></span>
                        </p>
                    </div>
                </div>
            </>
        );
    }
    function componentTiecSukien() {
        return (
            <div>
                <div className={cx('wrapper-header')}>
                    <div className={cx('header')}>
                        <h2 className={cx('title')}>Tiệc Sự Kiện Cá Nhân</h2>
                    </div>
                </div>
                <div className={cx('wrapper-body')}>
                    <div className={cx('imageBody')}>
                        <img
                            className={cx('img-1')}
                            src="https://luxurypalace.vn/wp-content/uploads/2019/12/web.jpg"
                        ></img>
                    </div>
                </div>
                <div className={cx('paragraphLong')}>
                    <h1>ƯU ĐÃI QUÀ TẶNG LỚN DÀNH CHO CAC TIỆC SỰ KIỆN CÁ NHÂN.</h1>
                    <p className={cx('pBig')}>
                        MỖI THỜI KHẮC TẠI DH PALACE LÀ ĐIỂM KẾT NỐI CÁC THÀNH VIÊN TRONG GIA ĐÌNH BẠN
                    </p>
                    <br />
                    <p className={cx('pBig')}>
                        DH PALACE được ví như TÒA LÂU ĐÀI sang trọng và đẳng cấp nhất tại khu vực Gò Vấp. Chúng tôi,
                        không chỉ tổ chức tốt được những sự kiện CÁ NHÂN mà còn KẾT NỐI được nhiều GIA ĐÌNH bằng những
                        chương trình sự kiện KẾT NỐI đa dạng khác nhau.
                    </p>
                    <p className={cx('pBig')}>Trọn gói chỉ từ 3,850,000 vnđ/bàn/ 10 khách với 9 QUÀ TẶNG HẤP DẪN:</p>
                    <p className={cx('pBig')}> ==========00=========== </p>
                    <p className={cx('pBig')}>Trọn gói chỉ từ 3,850,000 vnđ/bàn/ 10 khách với 9 QUÀ TẶNG HẤP DẪN:</p>
                    <p>➡QUÀ TẶNG Bia tiger trong 2,5 giờ</p>
                    <p>➡QUÀ TẶNG Nước ngọt, nước tinh khiết trong 2,5 giờ</p>
                    <p>➡QUÀ TẶNG Phí phục vụ</p>
                    <p>➡QUÀ TẶNG Bánh mặn đầu tiệc</p>
                    <p>➡QUÀ TẶNG Phí setup và chạy thử chương trình</p>
                    <p>➡QUÀ TẶNG Tiếc mục văn nghệ đặc sắc</p>
                    <p>➡QUÀ TẶNG Màn hình LED hiện đại</p>
                    <p>➡QUÀ TẶNG Hệ thống âm thanh ánh sáng cao cấp</p>
                    <p>➡QUÀ TẶNG Cùng nhiều ưu đãi hấp dẫn khác.</p>
                    <p className={cx('pBig')}>(*) Chương trình có kèm theo điều kiện áp dụng</p>
                </div>
            </div>
        );
    }
    function componentTiecHoiNghi() {
        return (
            <div>
                <div className={cx('wrapper-header')}>
                    <div className={cx('header')}>
                        <h2 className={cx('title')}>Hội Nghị Thành Công</h2>
                    </div>
                </div>
                <div className={cx('wrapper-body')}>
                    <div className={cx('imageBody')}>
                        <img
                            className={cx('img-1')}
                            src="https://luxurypalace.vn/wp-content/uploads/2019/10/d99a7447fe4f34116d5e-1536x1024.jpg"
                        ></img>
                    </div>
                </div>
                <div className={cx('paragraphLong')}>
                    <h1>HỘI NGHỊ THÀNH CÔNG – CHỈ TỪ 220.000đ+/KHÁCH</h1>
                    <p className={cx('pSuperLong')}>
                        Với kinh nghiệm tổ chức thành công sự kiện cho nhiều doanh nghiệp lớn trong và ngoài nước cùng
                        kiến trúc SANG TRỌNG, trang thiết bị HIỆN ĐẠI và phong cách phục vụ CHU ĐÁO. DH PALACE chúng
                        tôi, luôn tự hào là nơi tổ chức thành công những sự kiện quan trọng của QUÝ DOANH NGHIỆP.
                    </p>
                    <br />
                    <p className={cx('pSuperLong')}>Ưu đãi cho hội họp nửa ngày bao gồm:</p>
                    <li>PHÒNG HỌP NỬA NGÀY</li>
                    <li>GIẤY, VIẾT, NƯỚC SUỐI, HOA TƯƠI TRANG TRÍ…</li>
                    <li>ÂM THANH ÁNH SÁNG CHUYÊN NGHIỆP VÀ MÀN HÌNH LED HIỆN ĐẠI</li>
                    <li>MẠNG INTERNET KHÔNG DÂYY</li>
                    <li>ĐẶC BIỆT: DỊCH VỤ OUTSIDE CATERING.</li>
                </div>
            </div>
        );
    }
    function componentTiecOutside() {
        return (
            <div>
                <div className={cx('wrapper-header')}>
                    <div className={cx('header')}>
                        <h2 className={cx('title')}>KHUYẾN MÃI DÀNH CHO TIỆC OUTSIDE</h2>
                    </div>
                </div>
                <div className={cx('wrapper-body')}>
                    <div className={cx('imageBody')}>
                        <img
                            className={cx('img-1')}
                            src="https://luxurypalace.vn/wp-content/uploads/2021/01/f2167d1d2b96dbc882871-scaled.jpg"
                        ></img>
                    </div>
                </div>
                <div className={cx('paragraphLong')}>
                    <h1>ƯU ĐÃI QUÀ TẶNG LỚN DÀNH CHO CÁC TIỆC OUTSIDE</h1>
                    <br />
                    <p className={cx('pBig')}>
                        Tặng voucher giảm giá 200.000đ cho các đơn đặt tiệc outside từ 30 khách trở lên và tặng dịch vụ
                        thiết kế thiệp cưới hoàn toàn miễn phí cho các đơn hàng tiệc outside có số lượng khách từ 50
                        người trở lên. Thời gian khuyến mãi từ ngày 1/5/2023 đến hết ngày 31/5/2023.
                    </p>
                    <p className={cx('pBig')}>Trọn gói chỉ từ 3,850,000 vnđ/bàn/ 10 khách với 9 QUÀ TẶNG HẤP DẪN:</p>
                    <p className={cx('pBig')}> ==========00=========== </p>
                    <p className={cx('pBig')}>Trọn gói chỉ từ 3,850,000 vnđ/bàn/ 10 khách với 9 QUÀ TẶNG HẤP DẪN:</p>
                    <p>➡QUÀ TẶNG Bia tiger trong 2,5 giờ</p>
                    <p>➡QUÀ TẶNG Nước ngọt, nước tinh khiết trong 2,5 giờ</p>
                    <p>➡QUÀ TẶNG Phí phục vụ</p>
                    <p>➡QUÀ TẶNG Bánh mặn đầu tiệc</p>
                    <p>➡QUÀ TẶNG Phí setup và chạy thử chương trình</p>
                    <p>➡QUÀ TẶNG Tiếc mục văn nghệ đặc sắc</p>
                    <p>➡QUÀ TẶNG Màn hình LED hiện đại</p>
                    <p>➡QUÀ TẶNG Hệ thống âm thanh ánh sáng cao cấp</p>
                    <p>➡QUÀ TẶNG Cùng nhiều ưu đãi hấp dẫn khác.</p>
                    <p className={cx('pBig')}>(*) Chương trình có kèm theo điều kiện áp dụng</p>
                </div>
            </div>
        );
    }
    return (
        <div className={cx('wrapper')}>
            {window.location.pathname === '/promotions/ngay-le-dac-biet/' && componentTiecCuoi()}
            {window.location.pathname === '/promotions/tiec-su-kien-ca-nhan/' && componentTiecSukien()}
            {window.location.pathname === '/promotions/hoi-nghi-thanh-cong/' && componentTiecHoiNghi()}
            {window.location.pathname === '/promotions/tiec-outside/' && componentTiecOutside()}
        </div>
    );
}
export default PromotionData;
