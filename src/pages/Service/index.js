import classNames from 'classnames/bind';
import styles from './Service.module.scss';

import SlideShow from '~/components/Layout/components/SlideShow';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
const cx = classNames.bind(styles);

function Service(props) {
    const [services, setServices] = useState([]);
    const [service, setService] = useState('');
    const { type } = useParams();

    useEffect(() => {
        async function getServiceByServiceType() {
            const requestUrl = `${process.env.REACT_APP_SERVER_URL}/services/${type}`;
            const response = await fetch(requestUrl);
            const data = await response.json();
            console.log('Service:', data);
            setService(data);
        }
        async function getAllService() {
            const requestUrl = `${process.env.REACT_APP_SERVER_URL}/services/`;
            const response = await fetch(requestUrl);
            const data = await response.json();
            console.log('Services', data);
            setServices(data);
        }
        getServiceByServiceType();
        getAllService();
    }, [type]);
    if (!service || !service.description || !service.imgs) {
        <div>Loading...</div>;
    }
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
                                        to={service.link}
                                        className={cx(
                                            'navbar-link',
                                            window.location.pathname === service.link ? 'selected' : '',
                                        )}
                                    >
                                        <span className={cx('span-item')}>{service.serviceType}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {service && (window.location.pathname === '/services/tiec-su-kien/' ? layout2(service) : layout1(service))}
            {service && (
                <Carousel thumbWidth={150} autoPlay showStatus={false} infiniteLoop onSwipeMove>
                    {service.imgs.map((item, index) => (
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
