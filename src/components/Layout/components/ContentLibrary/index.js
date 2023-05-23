import classNames from 'classnames/bind';
import styles from './ContentLibrary.module.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavbarContent from '../NavbarContent';
import Pagination from '~/components/Pagination';
import queryString from 'query-string';
import axios from 'axios';

const cx = classNames.bind(styles);

function ContentLibrary(props) {
    const { header } = props;
    const [search, setSearch] = useState('');
    const [searchItem, setSearchItem] = useState('');
    const [menuItems, setMenuItems] = useState([]);
    const [filters, setFilters] = useState({
        _limit: 6,
        _page: 1,
    });
    async function getMenuItemByType() {
        try {
            const paramsString = queryString.stringify(filters);
            const requestUrl = `${process.env.REACT_APP_SERVER_URL}/menuitems/type?${paramsString}`;
            const response = await fetch(requestUrl);
            const { data, pagination } = await response.json();
            console.log(data);
            setMenuItems(data);
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleSearch = () => {
        if (search) {
            // Send the search keyword to the server
            axios
                .get(`${process.env.REACT_APP_SERVER_URL}/menuitems/search?search=${encodeURIComponent(search)}`)
                .then((response) => {
                    // Handle the response data from the server
                    console.log(response.data);
                    setSearchItem(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            setSearchItem('');
        }
    };

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    useEffect(() => {
        getMenuItemByType();
    }, [filters]);

    return (
        <div className={cx('container')}>
            <NavbarContent />
            <div className={cx('wrap-input')}>
                <input
                    value={search}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    type="text"
                    placeholder="Tìm kiếm"
                    className={cx('input')}
                />
                <div
                    onClick={handleSearch}
                    style={{ cursor: 'pointer', zIndex: 1, transform: 'translateX(-30px)', fontSize: 20, padding: 4 }}
                >
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            <div className={cx('row')}>
                <h1 style={{ textAlign: 'center', color: '#434343' }}>{header}</h1>
                {searchItem ? (
                    <div className={cx('col6')}>
                        <a href={`/libraries/${searchItem.type}`} className={cx('h-100')}>
                            <div className={cx('card')}>
                                <img className={cx('img')} src={searchItem.image}></img>
                                <a className={cx('a')}>{searchItem.type}</a>
                            </div>
                        </a>
                    </div>
                ) : (
                    menuItems.map((menuItem, index) => (
                        <div className={cx('col6')} key={index}>
                            <a href={`/libraries/${menuItem._id}`} className={cx('h-100')}>
                                <div className={cx('card')}>
                                    <img className={cx('img')} src={menuItem.items[0].image}></img>
                                    <a className={cx('a')}>{menuItem._id}</a>
                                </div>
                            </a>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default ContentLibrary;
