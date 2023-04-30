import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './EventsLibrary.module.scss';
import { Link, useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function EventsLibrary() {
    const [events, setEvents] = useState([]);
    const { param } = useParams();

    useEffect(() => {
        async function getEventByParam() {
            try {
                const requestUrl = `${process.env.REACT_APP_SERVER_URL}/events/${param}`;
                const response = await fetch(requestUrl);
                const { events } = await response.json();
                console.log(events);
                setEvents(events);
            } catch (error) {
                console.log(error.message);
            }
        }
        getEventByParam();
    }, [param]);

    const libraryToPath = {
        monan: '/library-cat/hinh-am-thuc/',
        sukiencuoi: '/library-cat/hinh-cuoi/',
        sukiencongty: '/library-cat/hinh-su-kien/',
        sukiencanhan: '/library-cat/hinh-trang-tri/',
    };
    console.log(param);
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper-header')}>
                <div className={cx('header')}>
                    <h2 className={cx('title')}>Hình ảnh</h2>
                    <div className={cx('wrap-service')}>
                        <ul className={cx('navbar')}>
                            <li>
                                <Link
                                    to={libraryToPath.monan}
                                    className={cx(
                                        'navbar-link',
                                        window.location.pathname === libraryToPath.monan ? 'selected' : '',
                                    )}
                                >
                                    <span className={cx('span-item')}>1. Món Ăn</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={libraryToPath.sukiencuoi}
                                    className={cx(
                                        'navbar-link',
                                        window.location.pathname === libraryToPath.sukiencuoi ? 'selected' : '',
                                    )}
                                >
                                    <span className={cx('span-item')}>2. Sự kiện cưới</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={libraryToPath.sukiencongty}
                                    className={cx(
                                        'navbar-link',
                                        window.location.pathname === libraryToPath.sukiencongty ? 'selected' : '',
                                    )}
                                >
                                    <span className={cx('span-item')}>3. Sự kiện công ty</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={libraryToPath.sukiencanhan}
                                    className={cx(
                                        'navbar-link',
                                        window.location.pathname === libraryToPath.sukiencanhan ? 'selected' : '',
                                    )}
                                >
                                    <span className={cx('span-item')}>4. Sự kiện cá nhân khác</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={cx('wrap-row')}>
                <div className={cx('row')}>
                    {events &&
                        events.map((menuItem, index) => (
                            <div className={cx('col6')} key={index}>
                                <a href={`/events/${menuItem.name}`} className={cx('h-100')}>
                                    <div className={cx('card')}>
                                        <img className={cx('img')} src={menuItem.imgs[0]}></img>
                                        <p className={cx('a')}>{menuItem.name}</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default EventsLibrary;
