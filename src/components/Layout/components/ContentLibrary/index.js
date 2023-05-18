import classNames from 'classnames/bind';
import styles from './ContentLibrary.module.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavbarContent from '../NavbarContent';

const cx = classNames.bind(styles);

function ContentLibrary(props) {
    const { header } = props;

    const { type } = useParams();
    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
        async function getMenuItemByType() {
            try {
                const requestUrl = `${process.env.REACT_APP_SERVER_URL}/menuitems/type`;
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

    return (
        <div className={cx('container')}>
            <NavbarContent />
            <div className={cx('row')}>
                <h1 style={{ textAlign: 'center', color: '#434343' }}>{header}</h1>
                {menuItems &&
                    menuItems.map((menuItem, index) => (
                        <div className={cx('col6')} key={index}>
                            <a href={`/libraries/${menuItem.type}`} className={cx('h-100')}>
                                <div className={cx('card')}>
                                    <img className={cx('img')} src={menuItem.image}></img>
                                    <a className={cx('a')}>{menuItem.type}</a>
                                </div>
                            </a>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default ContentLibrary;
