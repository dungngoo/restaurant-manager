import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import queryString from 'query-string';
import styles from './News.module.scss';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Pagination from '~/components/Pagination';

const cx = classNames.bind(styles);

function News() {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [count, setCount] = useState(0);
    const [filters, setFilters] = useState({
        _limit: 6,
        _page: 1,
    });
    // Chức năng chuyển trang
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 1,
        _totalRows: 1,
    });

    useEffect(() => {
        async function getCurrentPage() {
            // ....
            // _limit=10&_page=2
            try {
                const paramsString = queryString.stringify(filters);
                const requestUrl = `${process.env.REACT_APP_SERVER_URL}/news?${paramsString}`;
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();
                const { data, pagination } = responseJSON;
                setNews(data);
                setPagination(pagination);
                setIsLoading(false);
            } catch (error) {
                {
                    console.log('Faied to fetch news: ' + error.message);
                }
            }
        }
        console.log('Getting news');
        getCurrentPage();
    }, [filters]);
    useEffect(() => {
        console.log(news);
    }, [news]);
    if (isLoading) {
        return (
            <div className={cx('wrap-loading')}>
                <i className="fas fa-spinner fa-pulse"></i>
            </div>
        );
    }

    function handlePageChange(newPage) {
        console.log('New page ' + newPage);
        setFilters({
            ...filters,
            _page: newPage,
        });
    }
    const renderNews = () => {
        let tempCount = count;
        let rows = [];
        let row = [];
        if (!news) {
            return null;
        }
        news.forEach((item, index) => {
            tempCount++;
            if (tempCount > 3) {
                rows.push(
                    <div className={cx('row-col')} key={index}>
                        {row}
                    </div>,
                );
                tempCount = 1;
                row = [];
            }
            row.push(
                <div className={cx('col l-4')} key={index}>
                    <div className={cx('border-black')}>
                        <Link to={`/news/${item.news_id}`} className={cx('a')}>
                            <div className={cx('div')}>
                                <img className={cx('imgCol')} src={item.image} alt={item.title}></img>
                            </div>

                            <div className={cx('bodyCol')}>
                                <a className={cx('titleCol')}>{item.title}</a>
                                <p className={cx('paragraph')}>{item.content}</p>
                            </div>
                            <div className={cx('footerCol')}>
                                <button type="submit" className={cx('btnRead')}>
                                    Đọc ngay
                                </button>
                            </div>
                        </Link>
                    </div>
                </div>,
            );
        });
        if (row.length > 0) {
            rows.push(
                <div className={cx('row-col')} key={rows.length}>
                    {row}
                </div>,
            );
        }
        return rows;
    };

    return (
        <div className={cx('grid wide container')}>
            <div className={cx('row')}>
                <div className={cx('col-12')}>
                    <h1 className={cx('titlePage')}>TIN TỨC</h1>
                </div>
            </div>
            <div className={cx('grid wide container')}>{renderNews()}</div>
            <div className={cx('row')}>
                <Pagination pagination={pagination} onPageChange={handlePageChange} paginationKey="news" />
            </div>
        </div>
    );
}

export default News;
