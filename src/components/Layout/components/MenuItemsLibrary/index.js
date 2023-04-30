import classNames from 'classnames/bind';
import styles from './MenuItemsLibrary.module.scss';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function MenuItemsLibrary(props) {
    const { header } = props;

    const { type } = useParams();
    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
        async function getMenuItemByType() {
            try {
                const requestUrl = `${process.env.REACT_APP_SERVER_URL}/menuitems/${type}`;
                const response = await fetch(requestUrl);
                const data = await response.json();
                console.log(data);
                setMenuItems(data);
            } catch (error) {
                console.log(error.message);
            }
        }
        getMenuItemByType();
    }, [type]);

    const libraryToPath = {
        monan: '/library-cat/hinh-am-thuc/',
        sukiencuoi: '/library-cat/hinh-cuoi/',
        sukiencongty: '/library-cat/hinh-su-kien/',
        sukiencanhan: '/library-cat/hinh-trang-tri/',
    };

    return (
        <div className={cx('container')}>
            <div className={cx('wrapper-header')}>
                <div className={cx('header')}>
                    {menuItems && type === 'Món chính' && <h2 className={cx('title')}>Món chính</h2>}
                    {menuItems && type === 'Món phụ' && <h2 className={cx('title')}>Món phụ</h2>}
                    {menuItems && type === 'Món tráng miệng' && <h2 className={cx('title')}>Món tráng miệng</h2>}
                    {menuItems && type === 'Món khai vị' && <h2 className={cx('title')}>Món khai vị</h2>}
                </div>
            </div>
            <div className={cx('row')}>
                {menuItems && type === 'Món chính' && (
                    <>
                        <p>
                            Món chính là món ăn quan trọng nhất trong một bữa tiệc cưới và đóng vai trò quan trọng trong
                            việc đảm bảo sức khỏe cho khách mời. Nhà hàng chúng tôi cần phải chọn những nguyên liệu tươi
                            ngon và chế biến món ăn sao cho giữ được vị ngon và đảm bảo an toàn vệ sinh thực phẩm.
                        </p>
                        <p>
                            Những món chính thường được ưa chuộng tại Nhà hàng chúng tôi bao gồm các món ăn chế biến từ
                            thịt, hải sản, rau củ và các loại tinh bột. Trong đó, các món chế biến từ thịt thường được
                            ưa chuộng nhất bởi vị ngon đậm đà và giàu chất đạm, cung cấp năng lượng cho cơ thể. Các loại
                            thịt như bò, heo, gà và cá được chế biến theo nhiều phong cách khác nhau như nướng, xào,
                            kho, hầm, nấu canh, v.v.
                        </p>
                        <p>
                            Món chính là nguồn cung cấp chính của protein, chất béo và các loại vitamin và khoáng chất
                            như sắt, kẽm, magiê, canxi, photpho và nhiều chất dinh dưỡng khác. Những loại thực phẩm này
                            giúp tăng cường sức đề kháng cho cơ thể, tăng cường khả năng miễn dịch, giảm nguy cơ các
                            bệnh tật và giúp duy trì sức khỏe tốt.
                        </p>
                        <p>
                            Nhà hàng chúng tôi cần đảm bảo món chính có chất lượng cao, đảm bảo an toàn thực phẩm và phù
                            hợp với khẩu vị của khách mời. Tuy nhiên, cũng cần chú ý đến số lượng và cách chế biến để
                            không gây lãng phí và đảm bảo sự hài lòng của khách hàng.
                        </p>
                    </>
                )}
                {menuItems && type === 'Món phụ' && (
                    <>
                        <p>
                            Nhà hàng chúng tôi không chỉ chú trọng đến những món chính để khách hàng thưởng thức mà còn
                            có những món phụ đầy hương vị và giá trị dinh dưỡng cao.
                        </p>
                        <p>
                            Đầu tiên là món salad, món ăn nhẹ với những nguyên liệu tươi ngon như rau củ quả, hạt điều,
                            hạt dẻ, gia vị,... Salad giúp bổ sung vitamin và chất xơ cho cơ thể, đồng thời giúp tăng
                            cường đề kháng và hỗ trợ quá trình tiêu hóa.
                        </p>
                        <p>
                            Tiếp theo là món súp, món ăn nóng hổi và bổ dưỡng trong thời tiết lạnh giá. Súp có thể được
                            chế biến từ nhiều loại rau củ, thịt, cá hoặc hải sản, tùy theo sở thích của khách hàng. Súp
                            chứa nhiều chất dinh dưỡng như vitamin, khoáng chất và chất đạm, giúp cải thiện sức khỏe và
                            tăng cường miễn dịch.
                        </p>
                        <p>
                            Không thể bỏ qua món chả giò, món ăn rất được yêu thích trong các bữa tiệc. Chả giò được làm
                            từ thịt, tôm, rau củ, nấm,... được cuộn trong bánh tráng và chiên giòn. Chả giò giúp cung
                            cấp năng lượng và đạm cho cơ thể, tuy nhiên vì chứa nhiều chất béo và calo nên cần ăn vừa
                            phải để không gây tăng cân.
                        </p>
                        <p>
                            Cuối cùng là món tráng miệng, thường là các món bánh ngọt hoặc trái cây tươi. Trái cây giúp
                            bổ sung vitamin, khoáng chất và chất xơ, giúp cơ thể khỏe mạnh và tăng cường đề kháng. Các
                            loại bánh ngọt thường chứa nhiều đường và calo, nên cần ăn vừa phải để không gây hại cho sức
                            khỏe.
                        </p>
                    </>
                )}
                {menuItems && type === 'Món tráng miệng' && (
                    <>
                        <p>
                            Món tráng miệng là một phần không thể thiếu trong bữa tiệc của Nhà hàng chúng tôi. Được chế
                            biến từ các nguyên liệu tươi ngon và được trang trí đẹp mắt, món tráng miệng là món ăn hoàn
                            hảo để kết thúc một bữa tiệc thật ngon miệng.
                        </p>
                        <p>
                            Nhà hàng chúng tôi thường có rất nhiều lựa chọn cho món tráng miệng, từ các loại bánh ngọt,
                            kem, trái cây cho đến các món tráng miệng mang phong cách Á Đông hoặc Âu Mỹ. Bánh ngọt
                            thường được làm từ bột mì, đường, bơ, trứng và các nguyên liệu khác, được trang trí với các
                            loại sốt, kem và hoa quả tươi. Kem thường được làm từ sữa tươi và các loại đường, và có thể
                            được trang trí với nhiều loại hạt và sốt.
                        </p>
                        <p>
                            Các món tráng miệng thường không chỉ ngon miệng mà còn rất giàu dinh dưỡng. Trong các món
                            tráng miệng từ trái cây, chúng ta có thể tìm thấy nhiều vitamin và chất xơ cần thiết cho cơ
                            thể. Các loại bánh ngọt và kem thường chứa nhiều đường và chất béo, do đó nên ăn với mức độ
                            vừa phải để tránh tăng cân.
                        </p>
                        <p>
                            Với sự đa dạng và hương vị tuyệt vời, món tráng miệng là một lựa chọn tuyệt vời để kết thúc
                            bữa tiệc của bạn và làm hài lòng cả những thực khách khó tính nhất.
                        </p>
                        <p>
                            Cuối cùng là món tráng miệng, thường là các món bánh ngọt hoặc trái cây tươi. Trái cây giúp
                            bổ sung vitamin, khoáng chất và chất xơ, giúp cơ thể khỏe mạnh và tăng cường đề kháng. Các
                            loại bánh ngọt thường chứa nhiều đường và calo, nên cần ăn vừa phải để không gây hại cho sức
                            khỏe.
                        </p>
                    </>
                )}
                {menuItems && type === 'Món khai vị' && (
                    <>
                        <p>
                            Món khai vị là món ăn đầu tiên được phục vụ trong bữa tiệc cưới và có nhiều đặc trưng khác
                            nhau, tùy vào sở thích của từng khách mời. Nhà hàng tiệc cưới thường có nhiều sự lựa chọn
                            cho món khai vị, từ các món ăn truyền thống đến các món ăn hiện đại và sáng tạo.
                        </p>
                        <p>
                            Món khai vị thường được chọn để kích thích vị giác của khách mời và chuẩn bị cho bữa tiệc
                            chính. Các món khai vị thường có kích cỡ nhỏ và được trình bày đẹp mắt, hấp dẫn để thu hút
                            sự chú ý của khách mời.
                        </p>
                        <p>
                            Những món khai vị thường được chế biến từ các nguyên liệu tươi ngon và có giá trị dinh dưỡng
                            cao. Các món ăn như sashimi, cá ngừ tươi, salad trộn, nộm hoa chuối, gỏi cuốn, gỏi ngó sen,
                            canh chua... là những món ăn thường được chọn để làm món khai vị trong các bữa tiệc cưới.
                        </p>
                        <p>
                            Ngoài ra, nhà hàng tiệc cưới cũng cung cấp các món ăn khai vị phong phú cho các khách hàng
                            ăn chay, dành cho người ăn chay hoặc có các giới hạn dinh dưỡng khác. Các món ăn như bánh đa
                            cua, chả giò chay, salad rau củ, súp lơ... là những món ăn khai vị tuyệt vời cho các khách
                            hàng ăn chay hoặc có các yêu cầu dinh dưỡng khác.
                        </p>
                        <p>
                            Món khai vị không chỉ là món ăn đầu tiên trong bữa tiệc cưới, mà còn là món ăn quan trọng
                            giúp khách mời cảm thấy hài lòng và có một trải nghiệm ẩm thực đầy đủ và tuyệt vời.
                        </p>
                    </>
                )}
                {menuItems &&
                    menuItems.slice(0, 6).map((menuItem, index) => (
                        <div className={cx('col6')} key={index}>
                            <div className={cx('card')}>
                                <img className={cx('img')} src={menuItem.image}></img>
                                <p className={cx('a')}>
                                    {menuItem.name} - {menuItem.price} đồng
                                </p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default MenuItemsLibrary;
