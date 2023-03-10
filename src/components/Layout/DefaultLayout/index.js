import Header from '~/components/Layout/components/Header';
import Sidebar from '~/components/Layout/components/Sidebar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

import MenuProductsToday from '~/pages/MenuProducts';
import FeatureProducts from '~/pages/FeatureProducts';
import News from '~/pages/News';
import Footer from '../components/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="grid wide container ">
                <div className="row">
                    <h3 className={cx('category')}>Danh mục sản phẩm</h3>
                </div>
                <div className="row">
                    <div className="col l-3">
                        <Sidebar />
                    </div>
                    <div className="col l-9">
                        <div className={cx('content')}>{children}</div>
                    </div>
                </div>
                <div className="row">
                    <FeatureProducts />
                </div>
                <div className="row">
                    <MenuProductsToday />
                </div>
                <div className="row">
                    <News />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
