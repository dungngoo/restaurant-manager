import styles from './LoginLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function LoginLayout({ children }) {
    return <div className={cx('content')}>{children}</div>;
}

export default LoginLayout;
