import classNames from 'classnames/bind';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);

function Home() {
    return (
        <>
            <div className="grid">
                <div className="row">
                    <div className="col l-7">
                        <h1 className={cx('banner-a')}>Banner A</h1>
                    </div>
                    <div className="col l-5">Banner B</div>
                </div>
                <div className="row">
                    <div className="col l-4">
                        <h1 className={cx('news-1')}>Tin tức 1</h1>
                    </div>
                    <div className="col l-4">Tin tức 2</div>
                    <div className="col l-4">Tin tức 3</div>
                </div>
            </div>
        </>
    );
}

export default Home;
