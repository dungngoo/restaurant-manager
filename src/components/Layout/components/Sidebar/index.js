import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div>
            <div className={cx('wrapper')}>
                <div className={cx('list-item')}>
                    <ul>
                        <li>FLASH SALE</li>
                        <li>FLASH SALE</li>
                        <li>FLASH SALE</li>
                        <li>FLASH SALE</li>
                        <li>FLASH SALE</li>
                    </ul>
                </div>
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
