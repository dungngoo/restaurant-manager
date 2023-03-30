import classNames from 'classnames/bind';
import styles from './ContentLibrary.module.scss';

const cx = classNames.bind(styles);

function ContentLibrary() {
    return (
        <div className={cx('row')}>
            <div className={cx('col6')}>
                <a href="" className={cx('h-100')}>
                    <div className={cx('card')}>
                        <img
                            className={cx('img')}
                            src="https://luxurypalace.vn/wp-content/uploads/2019/12/IMG_1144-scaled.jpg"
                        ></img>
                        <div className={cx('cardOverlay')}>
                            <h5 className={cx('cardTitle')}>1. Món ăn</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div className={cx('col6')}>
                <a href="" className={cx('h-100')}>
                    <div className={cx('card')}>
                        <img
                            className={cx('img')}
                            src="	https://luxurypalace.vn/wp-content/uploads/2020/01/LUL02306.jpg"
                        ></img>
                        <div className={cx('cardOverlay')}>
                            <h5 className={cx('cardTitle')}>2. Sự kiện cưới</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div className={cx('col6')}>
                <a href="" className={cx('h-100')}>
                    <div className={cx('card')}>
                        <img
                            className={cx('img')}
                            src="https://luxurypalace.vn/wp-content/uploads/2019/12/8288fe19db363c686527.jpg"
                        ></img>
                        <div className={cx('cardOverlay')}>
                            <h5 className={cx('cardTitle')}>3. Sự kiện công ty</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div className={cx('col6')}>
                <a href="" className={cx('h-100')}>
                    <div className={cx('card')}>
                        <img className={cx('img')} src="https://luxurypalace.vn/wp-content/uploads/2021/12/6.jpg"></img>
                        <div className={cx('cardOverlay')}>
                            <h5 className={cx('cardTitle')}>4. Sự kiện cá nhân khác</h5>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default ContentLibrary;
