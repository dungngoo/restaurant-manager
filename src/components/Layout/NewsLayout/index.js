import Header from '~/components/Layout/components/Header';
import styles from './NewsLayout.module.scss';
import classNames from 'classnames/bind';

import Footer from '../components/Footer';
import OrtherNews from '~/pages/News/OrtherNews';

const cx = classNames.bind(styles);

function NewsLayout({ children }) {
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
            <OrtherNews />
            <Footer className={cx('footer')} />
        </div>
    );
}

export default NewsLayout;
