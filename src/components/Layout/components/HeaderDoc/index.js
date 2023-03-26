import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './HeaderDoc.module.scss';

const cx = classNames.bind(styles);

function HeaderDoc({ text }) {
    return <span className={cx('span')}>{text}</span>;
}

export default HeaderDoc;
