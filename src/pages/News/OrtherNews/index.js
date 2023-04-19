import classNames from 'classnames/bind';
import { Link, useParams } from 'react-router-dom';
import styles from './OrtherNews.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

function OrtherNews() {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/news?limit=4`)
            .then((res) => res.data)
            .then((data) => {
                console.log(data);
                setTimeout(() => {
                    setIsLoading(false);
                    setNews(data);
                }, 1000); // set time out 1 giây
            })
            .catch((err) => console.log(err));
    }, []);
    console.log(news);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-footer')}>
                <div className={cx('footer')}>
                    <h2 className={cx('title')}>TIN LIÊN QUAN</h2>
                </div>
            </div>
            <div className={cx('wrapper-newsOrther')}>
                <div className={cx('row')}>
                    {news.map((item, index) => {
                        return (
                            <div className={cx('col l-3')}>
                                <div className={cx('news')}>
                                    <Link to={`/news/${item.news_id}`} className={cx('wrapper-imgNewsOrther')}>
                                        <img className={cx('imgNewsOrther')} src={item.image}></img>
                                    </Link>
                                    <Link to={`/news/${item.news_id}`} className={cx('titleNewsOrther')}>
                                        {item.title}
                                    </Link>
                                    <p className={cx('pShort')}>{item.content}</p>
                                    <button className={cx('btnRead')}>
                                        <Link className={cx('link')} to={`/news/${item.news_id}`}>
                                            Đọc ngay
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default OrtherNews;
