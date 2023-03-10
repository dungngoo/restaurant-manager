import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './FeatureProducts.module.scss';
const cx = classNames.bind(styles);

function FeatureProducts() {
    return (
        <div className="grid">
            <div className="row">
                <div className="col l-12">
                    <div className={cx('title-feature-products')}>
                        Sản phẩm nổi bật tại nhà hàng
                        <div className={cx('title-icon')}>
                            <FontAwesomeIcon icon={faChevronCircleLeft} />
                            <FontAwesomeIcon icon={faChevronCircleRight} />
                        </div>
                    </div>
                </div>
                <div className="col l-2-4">Sản phẩm 1</div>
                <div className="col l-2-4">Sản phẩm 2</div>
                <div className="col l-2-4">Sản phẩm 3</div>
                <div className="col l-2-4">Sản phẩm 4</div>
                <div className="col l-2-4">Sản phẩm 5</div>
                <div className="col l-12">
                    <div className={cx('title-see-all')}>Xem tất cả</div>
                </div>
            </div>
        </div>
    );
}

export default FeatureProducts;
