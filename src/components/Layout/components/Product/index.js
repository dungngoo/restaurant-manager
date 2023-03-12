import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import Footer from '../Footer';

const cx = classNames.bind(styles);

function Product() {
    return (
        <>
            <div className={cx('row')}>
                <div className={cx('colLeft')}>
                    <h1>Nth</h1>
                </div>
                <div className={cx('colRight')}></div>
            </div>
        </>
    );
}

export default Product;
