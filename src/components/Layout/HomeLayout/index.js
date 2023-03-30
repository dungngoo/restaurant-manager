import Header from '~/components/Layout/components/Header';
import styles from './HomeLayout.module.scss';
import classNames from 'classnames/bind';

import Footer from '../components/Footer';

const cx = classNames.bind(styles);

function HomeLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={cx('content')}>{children}</div>
            <Footer className={cx('footer')} />
        </div>
    );
}

export default HomeLayout;
