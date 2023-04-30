import classNames from 'classnames/bind';
import { Link, useParams } from 'react-router-dom';
import styles from './Promotion.module.scss';

import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function Promotion() {
    const [promotion, setPromotion] = useState('');
    const [promotions, setPromotions] = useState([]);
    const { param } = useParams();
    console.log(param);
    useEffect(() => {
        async function getPromotionByParam() {
            try {
                const requestUrl = `${process.env.REACT_APP_SERVER_URL}/promotions/${param}`;
                const response = await fetch(requestUrl);
                const data = await response.json();
                console.log(data);
                setPromotion(data);
            } catch (error) {
                console.log(error.message);
                return;
            }
        }
        async function getPromotionsByServiceType() {
            try {
                const requestUrl = `${process.env.REACT_APP_SERVER_URL}/promotions/type/`;
                const response = await fetch(requestUrl);
                const data = await response.json();
                console.log(data);
                setPromotions(data);
            } catch (error) {
                console.log(error.message);
                return;
            }
        }
        getPromotionByParam();
        getPromotionsByServiceType();
    }, [param]);
    if (!promotion || !promotions) {
        return <div>Loading...</div>;
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-header')}>
                <div className={cx('header')}>
                    <h2 className={cx('title')}>Khuyến mãi</h2>
                    <div className={cx('wrap-service')}>
                        <ul className={cx('navbar')}>
                            {promotions &&
                                promotions.map((promotion, index) => (
                                    <li key={index}>
                                        <Link
                                            to={promotion.linkToCategory}
                                            className={cx(
                                                'navbar-link',
                                                window.location.pathname === promotion.linkToCategory ? 'selected' : '',
                                            )}
                                        >
                                            <span className={cx('span-item')}>
                                                {promotion.serviceType.name === 'Tiệc sự kiện'
                                                    ? 'Sự kiện'
                                                    : promotion.serviceType.name}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
            {promotion && <h2 className={cx('title', 'pb-20')}>{promotion.name}</h2> && (
                <div className={cx('grid')}>
                    <div className={cx('row')}>
                        <div className={cx('col l-4')}>
                            <div className={cx('sidebar')}>
                                <Link className={cx('link')} to={promotion.linkTo}>
                                    {promotion.name}
                                </Link>
                                <p className={cx('paragraph')}>{promotion.description}</p>
                                <span className={cx('span')}>Cảm ơn quý khách</span>
                            </div>
                        </div>
                        <div className={cx('col l-8')}>
                            <img className={cx('img')} src={promotion.image} alt="Ảnh minh họa" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Promotion;
