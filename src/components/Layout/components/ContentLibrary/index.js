import classNames from 'classnames/bind';
import styles from './ContentLibrary.module.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ContentLibrary(props) {
    const {
        header,
        cardOverlay1,
        cardOverlay2,
        cardOverlay3,
        cardOverlay4,
        href,
        href2,
        href3,
        href4,
        image1,
        image2,
        image3,
        image4,
    } = props;

    const { headerTitle, titleLink, paragraph, image, linkTo } = props;
    const [library, setLibrary] = useState('');

    // const titleToPath = {
    //     hoinghi: '/promotions/hoi-nghi-thanh-cong/',
    //     tieccuoi: '/promotions/li-xi-dau-nam/',
    //     sukien: '/promotions/tiec-su-kien-ca-nhan/',
    // };

    const libraryToPath = {
        monan: '/library-cat/hinh-am-thuc/',
        sukiencuoi: '/library-cat/hinh-cuoi/',
        sukiencongty: '/library-cat/hinh-su-kien/',
        sukiencanhan: '/library-cat/hinh-trang-tri/',
    };

    const handleClick = (library) => {
        setLibrary(library);
    };

    useEffect(() => {
        const currentPath = window.location.pathname;
        for (const [key, value] of Object.entries(libraryToPath)) {
            if (currentPath === value) {
                setLibrary(key);
                break;
            }
        }
        return () => {
            setLibrary(null);
        };
    }, [library]);
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
                                    <span className={cx('span-item')} onClick={() => handleClick('ruby')}>
                                        1. Món Ăn
                                    </span>
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
                                    <span className={cx('span-item')} onClick={() => handleClick('topaz')}>
                                        2. Sự kiện cưới
                                    </span>
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
                                    <span className={cx('span-item')} onClick={() => handleClick('platinum')}>
                                        3. Sự kiện công ty
                                    </span>
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
                                    <span className={cx('span-item')} onClick={() => handleClick('platinum')}>
                                        4. Sự kiện cá nhân khác
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={cx('row')}>
                <h1 style={{ textAlign: 'center', color: '#434343' }}>{header}</h1>
                {image1 && (
                    <div className={cx('col6')}>
                        <a href="" className={cx('h-100')}>
                            <div className={cx('card')}>
                                <img className={cx('img')} src={image1}></img>
                                {cardOverlay1 && (
                                    <div className={cx('cardOverlay')}>
                                        <h5 className={cx('cardTitle')}>{cardOverlay1}</h5>
                                    </div>
                                )}
                                {!cardOverlay1 && <a className={cx('a')}>{href}</a>}
                            </div>
                        </a>
                    </div>
                )}
                {image2 && (
                    <div className={cx('col6')}>
                        <a href="" className={cx('h-100')}>
                            <div className={cx('card')}>
                                <img className={cx('img')} src={image2}></img>
                                {cardOverlay2 && (
                                    <div className={cx('cardOverlay')}>
                                        <h5 className={cx('cardTitle')}>{cardOverlay2}</h5>
                                    </div>
                                )}
                                {!cardOverlay2 && <a className={cx('a')}>{href2}</a>}
                            </div>
                        </a>
                    </div>
                )}
                {image3 && (
                    <div className={cx('col6')}>
                        <a href="" className={cx('h-100')}>
                            <div className={cx('card')}>
                                <img className={cx('img')} src={image3}></img>
                                {cardOverlay3 && (
                                    <div className={cx('cardOverlay')}>
                                        <h5 className={cx('cardTitle')}>{cardOverlay3}</h5>
                                    </div>
                                )}
                                {!cardOverlay3 && <a className={cx('a')}>{href3}</a>}
                            </div>
                        </a>
                    </div>
                )}
                {image4 && (
                    <div className={cx('col6')}>
                        <a href="" className={cx('h-100')}>
                            <div className={cx('card')}>
                                <img className={cx('img')} src={image4}></img>
                                {cardOverlay4 && (
                                    <div className={cx('cardOverlay')}>
                                        <h5 className={cx('cardTitle')}>{cardOverlay4}</h5>
                                    </div>
                                )}
                                {!cardOverlay4 && <a className={cx('a')}>{href4}</a>}
                            </div>
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ContentLibrary;
