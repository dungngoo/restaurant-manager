import React, { useEffect, useState } from 'react';
import styles from './EventDetail.module.scss';
import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import NavbarContent from '../Layout/components/NavbarContent';

const cx = classNames.bind(styles);

function EventDetail() {
    const [event, setEvent] = useState('');
    const { name } = useParams();
    useEffect(() => {
        async function getEventByName() {
            try {
                const requestUrl = `${process.env.REACT_APP_SERVER_URL}/events/name/${name}`;
                const response = await fetch(requestUrl);
                const { event } = await response.json();
                console.log(event);
                setEvent(event);
            } catch (error) {
                console.log(error.message);
            }
        }
        getEventByName();
    }, [name]);
    return (
        <React.Fragment>
            {event && (
                <div className={cx('wrapper')}>
                    <div className={cx('wrapper-header')}>
                        <div className={cx('header')}>
                            <h2 className={cx('title')}>{event.type}</h2>
                        </div>
                    </div>
                    <h2 className={cx('description')}>{event.description}</h2>

                    <Carousel thumbWidth={150} autoPlay showStatus={false} infiniteLoop onSwipeMove>
                        {event &&
                            event.imgs.length > 1 &&
                            event.imgs.map((item, index) => (
                                <div className={cx('div')} key={index}>
                                    <img src={item} />
                                </div>
                            ))}
                    </Carousel>
                </div>
            )}
        </React.Fragment>
    );
}

export default EventDetail;
