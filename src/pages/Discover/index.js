import classNames from 'classnames/bind';
import styles from './Discover.module.scss';

// Ảnh sảnh ruby
import Rubyimg1 from '~/assets/imgs/discover/ruby/img1.jpg';
import Rubyimg2 from '~/assets/imgs/discover/ruby/img2.jpg';
import Rubyimg3 from '~/assets/imgs/discover/ruby/img3.jpg';
import Rubyimg4 from '~/assets/imgs/discover/ruby/img4.jpg';
import Rubyimg5 from '~/assets/imgs/discover/ruby/img5.jpg';

// Ảnh sảnh Topaz
import Topazimg1 from '~/assets/imgs/discover/topaz/img1.jpg';
import Topazimg2 from '~/assets/imgs/discover/topaz/img2.jpg';
import Topazimg3 from '~/assets/imgs/discover/topaz/img3.jpg';
import Topazimg4 from '~/assets/imgs/discover/topaz/img4.jpg';
import Topazimg5 from '~/assets/imgs/discover/topaz/img5.jpg';
import Topazimg6 from '~/assets/imgs/discover/topaz/img5.jpg';
import Topazimg7 from '~/assets/imgs/discover/topaz/img5.jpg';
import Topazimg8 from '~/assets/imgs/discover/topaz/img5.jpg';

// Ảnh sảnh Diamond
import Diamondimg1 from '~/assets/imgs/discover/diamond/img1.jpg';
import Diamondimg2 from '~/assets/imgs/discover/diamond/img2.png';
import Diamondimg3 from '~/assets/imgs/discover/diamond/img3.jpg';
import Diamondimg4 from '~/assets/imgs/discover/diamond/img4.png';
import Diamondimg5 from '~/assets/imgs/discover/diamond/img5.jpg';
import Diamondimg6 from '~/assets/imgs/discover/diamond/img6.jpg';
import Diamondimg7 from '~/assets/imgs/discover/diamond/img7.jpg';
import Diamondimg8 from '~/assets/imgs/discover/diamond/img8.jpg';
import Diamondimg9 from '~/assets/imgs/discover/diamond/img9.jpg';
import Diamondimg10 from '~/assets/imgs/discover/diamond/img10.jpg';

// Ảnh sảnh Platinum
import Platinumimg1 from '~/assets/imgs/discover/platinum/img1.jpg';
import Platinumimg2 from '~/assets/imgs/discover/platinum/img2.jpg';
import Platinumimg3 from '~/assets/imgs/discover/platinum/img3.jpg';
import Platinumimg4 from '~/assets/imgs/discover/platinum/img4.jpg';
import Platinumimg5 from '~/assets/imgs/discover/platinum/img5.jpg';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

export const Ruby = () => {
    const photos = [`${Rubyimg1}`, `${Rubyimg2}`, `${Rubyimg3}`, `${Rubyimg4}`, `${Rubyimg5}`];

    return <Discover photos={photos} title="Ruby" />;
};

export const Topaz = () => {
    const photos = [
        `${Topazimg1}`,
        `${Topazimg2}`,
        `${Topazimg3}`,
        `${Topazimg4}`,
        `${Topazimg5}`,
        `${Topazimg6}`,
        `${Topazimg7}`,
        `${Topazimg8}`,
    ];

    return <Discover photos={photos} title="Topaz" />;
};

export const Diamond = () => {
    const photos = [
        `${Diamondimg1}`,
        `${Diamondimg2}`,
        `${Diamondimg3}`,
        `${Diamondimg4}`,
        `${Diamondimg5}`,
        `${Diamondimg6}`,
        `${Diamondimg7}`,
        `${Diamondimg8}`,
        `${Diamondimg9}`,
        `${Diamondimg10}`,
    ];

    return <Discover photos={photos} title="Diamond" />;
};

export const Platinum = () => {
    const photos = [`${Platinumimg1}`, `${Platinumimg2}`, `${Platinumimg3}`, `${Platinumimg4}`, `${Platinumimg5}`];

    return <Discover photos={photos} title="Platinum" />;
};

function Discover(props) {
    const { photos, title } = props;
    const [lobby, setLobby] = useState('');

    const lobbyToPath = {
        ruby: '/discover/ruby/',
        topaz: '/discover/topaz',
        diamond: '/discover/diamond',
        platinum: '/discover/platinum',
    };

    const handleClick = (lob) => {
        setLobby(lob);
    };

    useEffect(() => {
        const currentPath = window.location.pathname;
        for (const [key, value] of Object.entries(lobbyToPath)) {
            if (currentPath === value) {
                setLobby(key);
                break;
            }
        }
        return () => {
            setLobby(null);
        };
    }, [lobby]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-header')}>
                <div className={cx('header')}>
                    <h2 className={cx('title')}>Khám phá</h2>
                    <div className={cx('wrap-service')}>
                        <ul className={cx('navbar')}>
                            <li>
                                <Link
                                    to={lobbyToPath.ruby}
                                    className={cx(
                                        'navbar-link',
                                        window.location.pathname === lobbyToPath.ruby ? 'selected' : '',
                                    )}
                                >
                                    <span className={cx('span-item')} onClick={() => handleClick('ruby')}>
                                        Ruby
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={lobbyToPath.topaz}
                                    className={cx(
                                        'navbar-link',
                                        window.location.pathname === lobbyToPath.topaz ? 'selected' : '',
                                    )}
                                >
                                    <span className={cx('span-item')} onClick={() => handleClick('topaz')}>
                                        Topaz
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={lobbyToPath.diamond}
                                    className={cx(
                                        'navbar-link',
                                        window.location.pathname === lobbyToPath.diamond ? 'selected' : '',
                                    )}
                                >
                                    <span className={cx('span-item')} onClick={() => handleClick('diamond')}>
                                        Diamond
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={lobbyToPath.platinum}
                                    className={cx(
                                        'navbar-link',
                                        window.location.pathname === lobbyToPath.platinum ? 'selected' : '',
                                    )}
                                >
                                    <span className={cx('span-item')} onClick={() => handleClick('platinum')}>
                                        Platinum
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <h2 className={cx('title', 'p-20')}>Sảnh {title}</h2>
            <Carousel thumbWidth={150} autoPlay showStatus={false} infiniteLoop onSwipeMove>
                {photos.map((photo, index) => (
                    <div className={cx('div')} key={index}>
                        <img src={photo} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
export default Discover;
