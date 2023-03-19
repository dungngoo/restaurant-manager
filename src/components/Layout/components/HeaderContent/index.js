import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './HeaderContent.module.scss';

const cx = classNames.bind(styles);

function HeaderContent({ title }) {
    const listService = [{ name: 'Hội nghị' }, { name: 'Tiệc cưới' }, { name: 'Tiệc outside' }, { name: 'Sự kiện' }];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h2 className={cx('title')}>{title}</h2>
                <div className={cx('wrap-service')}>
                    <nav className={cx('navbar')}>
                        {listService.map((service, index) => (
                            <Link className={cx('navbar-link')} to="./partyoutside" key={index}>
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
