import classNames from 'classnames/bind';
import { Link, useParams } from 'react-router-dom';
import styles from './OrtherNews.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

function OrtherNews({ title }) {
    const [news, setNews] = useState([]);
    useEffect(() => {
        async function getNews() {
            axios
                .get(`${process.env.REACT_APP_SERVER_URL}/news?_limit=5`)
                .then((res) => res.data)
                .then((data) => {
                    console.log(data);
                    setNews(data);
                })
                .catch((err) => console.log(err));
        }
        getNews();
    }, []);
    console.log(news);
    const { id } = useParams();
    const newsSplice = news.filter((news) => id !== news.news_id).splice(0, 4);
    console.log(newsSplice);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-footer')}>
                <div className={cx('footer')}>
                    <h2 className={cx('title')}>{title}</h2>
                </div>
            </div>
            <div className={cx('wrapper-newsOrther')}>
                <div className={cx('row')}>
                    {newsSplice.map((item, index) => {
                        return (
                            <div className={cx('col l-3')}>
                                <div className={cx('news')}>
                                    <a href={`/news/${item.news_id}`} className={cx('wrapper-imgNewsOrther')}>
                                        <img className={cx('imgNewsOrther')} src={item.image}></img>
                                    </a>
                                    <a href={`/news/${item.news_id}`} className={cx('titleNewsOrther')}>
                                        {item.title}
                                    </a>
                                    <p className={cx('pShort')}>{item.content}</p>
                                    <button className={cx('btnRead')}>
                                        <a className={cx('link')} href={`/news/${item.news_id}`}>
                                            Đọc ngay
                                        </a>
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
