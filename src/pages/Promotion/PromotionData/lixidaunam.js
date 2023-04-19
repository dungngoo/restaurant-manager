import classNames from 'classnames/bind';

import styles from './PromotionData.module.scss';

const cx = classNames.bind(styles);

function PromotionData() {
    return (
        <div className={cx('wrapper')}>
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
                    <img className={cx('img')} src="https://luxurypalace.vn/wp-content/uploads/2023/02/tet.png"></img>
                </div>
                <div className={cx('paragraphLong')}>
                    <p className={cx('pLong')}>
                        “QUÀ SIÊU XỊN từ Luxury Palace dành TẶNG RIÊNG cho các cặp đôi cưới trong năm 2023 sẽ là MÓN QUÀ
                        Ý NGHĨA và THIẾT THỰC NHẤT từ trước đến nay.
                    </p>
                    <p className={cx('pLong')}> ===========💌========== </p>
                    <p className={cx('pLong')}>
                        <span className={cx('hashtag')}>#LUXURY_PALACE</span> sẽ giúp cho các cặp đôi cân đối về phần
                        chi phí nhưng vẫn đáp ứng được tốt phần dịch vụ 5 sao tại trung tâm.
                    </p>
                    <p className={cx('pLong')}>
                        <span className={cx('hashtag')}> #LUXURY_PALACE </span> sẽ ưu tiên chọn sảnh đẹp để biến giấc mơ
                        của nàng dâu trở thành giấc mơ cổ tích như nàng hằng mong ước.
                    </p>

                    <p className={cx('pLong')}>
                        <span className={cx('hashtag')}> #LUXURY_PALACE </span> sẽ đảm bảo phần an toàn tuyệt đối trong
                        các khâu khử trùng để tiệc của khách hàng diễn ra cách tốt đẹp nhất.
                    </p>
                    <p className={cx('pLong')}> ===========💌========== </p>
                    <p className={cx('pLong')}>
                        QUÀ TẶNG ĐI KÈM VỚI ĐIỀU KIỆN ÁP DỤNG (Tuỳ theo từng số bàn sẽ có những quà tặng tương ứng)
                    </p>
                    <p className={cx('pLong')}> ===========💌==========</p>
                    <p className={cx('pLong')}>
                        Toạ lạc như một “CUNG ĐIỆN” SANG TRỌNG & ĐẲNG CẤP tại khu vực GÒ VẤP, LUXURY PALACE như một
                        thiên đường HOÀNG GIA vẽ nên những câu chuyện tình yêu tuyệt đẹp dành cho cặp đôi.
                    </p>
                    <p className={cx('pLong')}>
                        <span className={cx('hashtag')}>#luxurypalace</span>
                        <span className={cx('hashtag')}> #hoinghisangtronggovap</span>
                        <span className={cx('hashtag')}> #yentiecsangtrong</span>
                        <span className={cx('hashtag')}> #trungtamtieccuoigovap</span>
                    </p>
                    <p className={cx('pLong')}> ===========💌========== </p>
                    <p className={cx('pLong')}> ➡TRUNG TÂM HỘI NGHỊ – TIỆC CƯỚI LUXURY PALACE </p>
                    <p className={cx('pLong')}> 171 Nguyễn Thái Sơn, P.7, Quận Gò Vấp, Tphcm </p>
                    <p className={cx('pLong')}> ☎(028) 3588 2288 – 3588 2299 </p>
                    <p className={cx('pLong')}>
                        🔴Website:<span className={cx('hashtag')}>https://luxurypalace.vn/</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default PromotionData;
