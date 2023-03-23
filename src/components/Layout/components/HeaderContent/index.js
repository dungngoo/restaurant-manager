import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './HeaderContent.module.scss';

const cx = classNames.bind(styles);

function HeaderContent({ title, li1, li2, li3, li4 }) {
    const listService = [{ name: `${li1}` }, { name: `${li2}` }, { name: `${li3}` }, { name: `${li4}` }];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h2 className={cx('title')}>{title}</h2>
                <div className={cx('wrap-service')}>
                    <nav className={cx('navbar')}>
                        {listService.map((service, index) => (
                            <Link className={cx('navbar-link')} to="./abcd" key={index}>
                                <span className={cx('span-item')}>{service.name}</span>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default HeaderContent;
