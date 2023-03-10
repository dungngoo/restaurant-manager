import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './News.module.scss';
const cx = classNames.bind(styles);

function News() {
    return (
        <div className="grid">
            <div className="row">
                <div className="col l-9">
                    <div className="row">
                        <div className={cx('title-news')}>
                            Tin tức nổi bật
                            <FontAwesomeIcon icon={faChevronCircleLeft} />
                            <FontAwesomeIcon icon={faChevronCircleRight} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col l-4">Tin tức 1</div>
                        <div className="col l-4">Tin tức 2</div>
                        <div className="col l-4">Tin tức 3</div>
                    </div>
                </div>
                <div className="col l-3">
                    <div className={cx('banner-news')}>Banner tin tức</div>
                </div>
            </div>
        </div>
    );
}

export default News;
