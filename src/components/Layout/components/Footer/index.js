import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <>
            <h1 className={cx('wrapper')}>Footer</h1>
        </>
    );
}

export default Footer;
