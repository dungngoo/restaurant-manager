import classNames from 'classnames/bind';
import styles from './Service.module.scss';

import SlideShow from '~/components/Layout/components/SlideShow';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
const cx = classNames.bind(styles);

function Service() {
    const [services, setServices] = useState([]);
    const [service, setService] = useState('');
    const { name } = useParams();

    useEffect(() => {
        // Lấy ra 4 loại dịch vụ
        async function getServiceTypes() {
            const requestUrl = `${process.env.REACT_APP_SERVER_URL}/serviceTypes/type`;
            const response = await fetch(requestUrl);
            const data = await response.json();
            console.log('Services', data);
            setServices(data);
        }
        // Lấy loại dịch vụ theo tên
        async function getServiceByName() {
            const requestUrl = `${process.env.REACT_APP_SERVER_URL}/serviceTypes/${name}`;
            const response = await fetch(requestUrl);
            const data = await response.json();
            console.log('Service', data);
            setService(data);
        }
        getServiceTypes();
        getServiceByName();
    }, [name]);

    const layout1 = (service) => {
        return service.description.map((item, index) => <p key={index}>{item}</p>);
    };

    const layout2 = (service) => {
        const serviceSliced = service.description.slice(1, 7);
        return (
            <>
                <p> {service.description[0]}</p>
                <ul style={{ padding: '0 30px', fontSize: '18px' }}>
                    {serviceSliced.map((item, index) => (
                        <li key={index} className={cx('li')}>
                            {item}
                        </li>
                    ))}
                </ul>
                <p> {service.description[7]}</p>
            </>
        );
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-header')}>
                <div className={cx('header')}>
                    <h2 className={cx('title')}>Dịch vụ</h2>
                    <div className={cx('wrap-service')}>
                        <ul className={cx('navbar')}>
                            {services.map((service, index) => (
                                <li key={index}>
                                    <Link
                                        to={`/services/${service.type}`}
                                        className={cx(
                                            'navbar-link',
                                            window.location.pathname === `/services/${service.type}` ? 'selected' : '',
                                        )}
                                    >
                                        <span className={cx('span-item')}>{service.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {service &&
                (window.location.pathname === '/services/tiec-su-kien/' ? layout2(service[0]) : layout1(service[0]))}
            {service && (
                <Carousel thumbWidth={150} autoPlay showStatus={false} infiniteLoop onSwipeMove>
                    {service[0].imgs.map((item, index) => (
                        <div className={cx('div')} key={index}>
                            <img src={item} />
                        </div>
                    ))}
                </Carousel>
            )}
        </div>
    );
}

export default Service;
