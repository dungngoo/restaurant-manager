import Footer from '../components/Footer';
import Header from '../components/Header';

import styles from './HeaderFooterLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function HeaderFooterLayout({ children }) {
    return (
        <>
            <Header />
            <div className="children">{children}</div>
            <Footer />
        </>
    );
}

export default HeaderFooterLayout;
