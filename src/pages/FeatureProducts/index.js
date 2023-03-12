import { faCartFlatbed, faChevronCircleLeft, faChevronCircleRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import CardProduct from '~/components/Layout/components/CartProduct';
import styles from './FeatureProducts.module.scss';
const cx = classNames.bind(styles);

function FeatureProducts() {
    const featureProducts = {
        product1: {
            img: '',
            title: '',
            sold: '',
            price: '',
            promotion: '',
            discount: '',
        },
    };
    return (
        <div className="grid">
            <div className={cx('wrapper')}>
                <div className={cx('row')}>
                    <div className="col l-12">
                        <h1 className={cx('title-feature-products')}>
                            Sản phẩm nổi bật tại nhà hàng
                            <div className={cx('title-icon')}>
                                <FontAwesomeIcon icon={faChevronCircleLeft} className={cx('icon')} />
                                <FontAwesomeIcon icon={faChevronCircleRight} className={cx('icon')} />
                            </div>
                        </h1>
                    </div>
                    <div className="col l-2-4">
                        <CardProduct />
                    </div>
                    <div className="col l-2-4">
                        <CardProduct />
                    </div>
                    <div className="col l-2-4">
                        <CardProduct />
                    </div>
                    <div className="col l-2-4">
                        <CardProduct />
                    </div>
                    <div className="col l-2-4">
                        <CardProduct />
                    </div>
                    <div className={cx('col', 'l-12', 'wrapper-btn-see-all')}>
                        <Button className={cx('title-see-all')}>Xem tất cả</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeatureProducts;
