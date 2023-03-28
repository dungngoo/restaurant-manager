import Header from '~/components/Layout/components/Header';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

import Footer from '../components/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="grid wide container ">
                <div className="row">
                    <div className="col l-12">
                        <div className={cx('content')}>{children}</div>
                    </div>
                </div>
            </div>
            <Footer className={cx('footer')} />
        </div>
    );
}

export default DefaultLayout;
