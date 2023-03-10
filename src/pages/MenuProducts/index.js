import classNames from 'classnames/bind';
import styles from './MenuProducts.module.scss';
const cx = classNames.bind(styles);

function MenuProducts() {
    return (
        <div className="grid">
            <div className="row">
                <div className="col l-12">
                    <div className={cx('title-menu-products')}>Thực đơn hôm nay</div>
                </div>
            </div>
            <div className="grid">
                <div className="row">
                    <div className="col l-3">
                        <div className={cx('banner-menu-products')}>Banner</div>
                    </div>
                    <div className="col l-9">
                        <div className="row">
                            <div className="col l-2-4">Sản phẩm 1</div>
                            <div className="col l-2-4">Sản phẩm 2</div>
                            <div className="col l-2-4">Sản phẩm 3</div>
                            <div className="col l-2-4">Sản phẩm 4</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col l-12">
                    <div className={cx('title-see-all')}>Xem tất cả Thực đơn trong hôm nay</div>
                </div>
            </div>
        </div>
    );
}

export default MenuProducts;
