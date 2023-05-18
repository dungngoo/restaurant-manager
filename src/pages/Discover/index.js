import classNames from 'classnames/bind';
import styles from './Discover.module.scss';

import { Carousel } from 'react-responsive-carousel';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function Discover() {
    const { constant } = useParams();
    const [lobby, setLobby] = useState([]);
    const [lobbies, setLobbies] = useState([]);
    useEffect(() => {
        async function getLobbyByName() {
            console.log(constant);
            try {
                const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/lobbies/${constant}`);
                const data = await response.json();
                console.log('Lobby:', data);
                setLobby(data);
            } catch (error) {
                console.log(error.message);
            }
        }
        async function getLobbies() {
            console.log(constant);
            try {
                const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/lobbies/`);
                const data = await response.json();
                console.log('Lobbies: ', data);
                setLobbies(data);
            } catch (error) {
                console.log(error.message);
            }
        }
        getLobbyByName();
        getLobbies();
    }, [constant]);

    if (!lobby || !lobby.imgs) {
        return <div>Loading...</div>;
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-header')}>
                <div className={cx('header')}>
                    <h2 className={cx('title')}>Khám phá</h2>
                    <div className={cx('wrap-service')}>
                        <ul className={cx('navbar')}>
                            {lobbies.map((lobby, index) => (
                                <li key={index}>
                                    <Link
                                        to={lobby.link}
                                        className={cx(
                                            'navbar-link',
                                            window.location.pathname === lobby.link ? 'selected' : '',
                                        )}
                                    >
                                        <span className={cx('span-item')}>{lobby.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <h2 className={cx('title', 'p-20')}>Sảnh {lobby.name}</h2>
            <p>{lobby.description}</p>
            <Carousel thumbWidth={150} autoPlay showStatus={false} infiniteLoop onSwipeMove>
                {lobby.imgs.map((photo, index) => (
                    <div className={cx('div')} key={index}>
                        <img src={photo} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
export default Discover;
