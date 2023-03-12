import classNames from 'classnames/bind';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);

function Home({ home }) {
    return (
        <>
            <div className="grid">
                <div className={cx('row', 'home-banner-up')}>
                    <div className="col l-8">
                        <a>
                            <img
                                className={cx('img', 'img-1')}
                                src="https://theme.hstatic.net/200000582249/1001012174/14/slide_5_img.jpg?v=121"
                                alt="Ảnh banner chính của trang home"
                            />
                        </a>
                    </div>
                    <div className="col l-4">
                        <a>
                            <img
                                className={cx('img')}
                                src="https://theme.hstatic.net/200000582249/1001012174/14/right_banner_2.jpg?v=121"
                                alt="Ảnh banner phải"
                            />
                        </a>
                    </div>
                </div>
                <div className={cx('row', 'home-banner-down')}>
                    <div className="col l-4">
                        <a>
                            <img
                                className={cx('img')}
                                src="https://theme.hstatic.net/200000582249/1001012174/14/bottom_banner_1.jpg?v=121"
                                alt="Tin tức 1"
                            />
                        </a>
                    </div>
                    <div className="col l-4">
                        <a>
                            <img
                                className={cx('img')}
                                src="https://theme.hstatic.net/200000582249/1001012174/14/bottom_banner_2.jpg?v=121"
                                alt="Tin tức 2"
                            />
                        </a>
                    </div>
                    <div className="col l-4">
                        <a>
                            <img
                                className={cx('img')}
                                src="https://theme.hstatic.net/200000582249/1001012174/14/bottom_banner_3.jpg?v=121"
                                alt="Tin tức 3"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
