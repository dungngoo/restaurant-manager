import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa0, faList, faListUl, faTableList } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('list-item')}>
                <div className={cx('row')}>
                    <FontAwesomeIcon icon={faTableList} className={cx('icon-caterory')} />
                    <h3 className={cx('category')}>Danh mục sản phẩm</h3>
                </div>
                <ul className={cx('list-item')}>
                    <li>
                        <a>FLASH SALE</a>
                    </li>
                    <li>
                        <a>Khai vị & món chính</a>
                    </li>
                    <li>
                        <a>Cua Cà Mau & Hải sản chế biến xốt</a>
                    </li>
                    <li>
                        <a>Combo hải sản & Set menu </a>
                    </li>
                    <li>
                        <a>Cá, Bò & Sashimi hải sản xốt Thái</a>
                    </li>
                    <li>
                        <a>Gỏi & Món ăn kèm</a>
                    </li>
                    <li>
                        <a>Vua Cua Food</a>
                    </li>
                    <li>
                        <a>Thực đơn tại nhà hàng Food House</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;

// import classNames from 'classnames/bind';
// import styles from './Header.module.scss';
// const cx = classNames.bind(styles);

// function Header() {
//     return (
//         <div>
//             <h1 className={cx('wrapper')}>Header</h1>
//         </div>
//     );
// }

// export default Header;
