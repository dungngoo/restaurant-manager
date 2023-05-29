import classNames from 'classnames/bind';
import styles from './ComponentSearch.module.scss';
import { useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

function ComponentSearch() {
    const [search, setSearch] = useState('');
    const [searchItem, setSearchItem] = useState('');
    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };
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
    return (
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
    );
}

export default ComponentSearch;
