import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('wrapper')}>
            <h1>Trang liên hệ</h1>
        </div>
    );
}

export default Contact;
