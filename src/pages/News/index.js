import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './News.module.scss';
const cx = classNames.bind(styles);

function News() {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/news/`)
            .then((res) => res.data)
            .then((data) => {
                console.log(data);
                setIsLoading(false);
                setNews(data);
            })
            .catch((err) => console.log(err));
    }, []);
    if (isLoading) {
        return <p>Loading...</p>;
    }

    const renderNews = () => {
        let tempCount = count;
        let rows = [];
        let row = [];
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
                        <a href="">
                            <img className={cx('imgCol')} src={item.image} alt={item.title}></img>
                        </a>
                        <div className={cx('bodyCol')}>
                            <a className={cx('titleCol')}>{item.title}</a>
                            <p className={cx('paragraph')}>{item.content}</p>
                        </div>
                        <div className={cx('footerCol')}>
                            <button type="submit" className={cx('btnRead')}>
                                Đọc ngay
                            </button>
                        </div>
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
            <div className={cx('grid wide container')}>
                <div className={cx('row-col')}>
                    <div className={cx('col l-4')}>
                        <div className={cx('border-black')}>
                            <a href="" className={''}>
                                <img
                                    className={cx('imgCol')}
                                    src="https://luxurypalace.vn/wp-content/uploads/2023/03/rrtt.jpg"
                                ></img>
                            </a>
                            <div className={cx('bodyCol')}>
                                <a className={cx('titleCol')}>NHỮNG ĐIỀU CẦN BIẾT LẦN ĐẦU ĐẶT TIỆC</a>
                                <p className={cx('paragraph')}>
                                    Việc đặt các trung tâm hội nghị đã không còn quá xa lạ với những booker hoặc những
                                    công ty acency. Thế nhưng, đối với những khách hàng riêng lẻ lần đầu đặt tiệc thì
                                    đây là một vấn đề mới, có phần xa lạ và khó khăn. Để tránh bỡ ngỡ cùng phạm phải…
                                </p>
                            </div>
                            <div className={cx('footerCol')}>
                                <button type="submit" className={cx('btnRead')}>
                                    Đọc ngay
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* /////////////////////// */}

                    <div className={cx('col l-4')}>
                        <div className={cx('border-black')}>
                            <a href="" className={''}>
                                <img
                                    className={cx('imgCol')}
                                    src="https://luxurypalace.vn/wp-content/uploads/2023/03/rrtt.jpg"
                                ></img>
                            </a>
                            <div className={cx('bodyCol')}>
                                <a className={cx('titleCol')}>NHỮNG ĐIỀU CẦN BIẾT LẦN ĐẦU ĐẶT TIỆC</a>
                                <p className={cx('paragraph')}>
                                    Việc đặt các trung tâm hội nghị đã không còn quá xa lạ với những booker hoặc những
                                    công ty acency. Thế nhưng, đối với những khách hàng riêng lẻ lần đầu đặt tiệc thì
                                    đây là một vấn đề mới, có phần xa lạ và khó khăn. Để tránh bỡ ngỡ cùng phạm phải…
                                </p>
                            </div>
                            <div className={cx('footerCol')}>
                                <button type="submit" className={cx('btnRead')}>
                                    Đọc ngay
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* ///////////////////////////////// */}

                    <div className={cx('col l-4')}>
                        <div className={cx('border-black')}>
                            <a href="" className={''}>
                                <img
                                    className={cx('imgCol')}
                                    src="https://luxurypalace.vn/wp-content/uploads/2023/03/rrtt.jpg"
                                ></img>
                            </a>
                            <div className={cx('bodyCol')}>
                                <a className={cx('titleCol')}>NHỮNG ĐIỀU CẦN BIẾT LẦN ĐẦU ĐẶT TIỆC</a>
                                <p className={cx('paragraph')}>
                                    Việc đặt các trung tâm hội nghị đã không còn quá xa lạ với những booker hoặc những
                                    công ty acency. Thế nhưng, đối với những khách hàng riêng lẻ lần đầu đặt tiệc thì
                                    đây là một vấn đề mới, có phần xa lạ và khó khăn. Để tránh bỡ ngỡ cùng phạm phải…
                                </p>
                            </div>
                            <div className={cx('footerCol')}>
                                <button type="submit" className={cx('btnRead')}>
                                    Đọc ngay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* row-col 2 */}

                <div className={cx('row-col')}>
                    <div className={cx('col l-4')}>
                        <div className={cx('border-black')}>
                            <a href="" className={''}>
                                <img
                                    className={cx('imgCol')}
                                    src="https://luxurypalace.vn/wp-content/uploads/2023/03/rrtt.jpg"
                                ></img>
                            </a>
                            <div className={cx('bodyCol')}>
                                <a className={cx('titleCol')}>NHỮNG ĐIỀU CẦN BIẾT LẦN ĐẦU ĐẶT TIỆC</a>
                                <p className={cx('paragraph')}>
                                    Việc đặt các trung tâm hội nghị đã không còn quá xa lạ với những booker hoặc những
                                    công ty acency. Thế nhưng, đối với những khách hàng riêng lẻ lần đầu đặt tiệc thì
                                    đây là một vấn đề mới, có phần xa lạ và khó khăn. Để tránh bỡ ngỡ cùng phạm phải…
                                </p>
                            </div>
                            <div className={cx('footerCol')}>
                                <button type="submit" className={cx('btnRead')}>
                                    Đọc ngay
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* /////////////////////// */}

                    <div className={cx('col l-4')}>
                        <div className={cx('border-black')}>
                            <a href="" className={''}>
                                <img
                                    className={cx('imgCol')}
                                    src="https://luxurypalace.vn/wp-content/uploads/2023/03/rrtt.jpg"
                                ></img>
                            </a>
                            <div className={cx('bodyCol')}>
                                <a className={cx('titleCol')}>NHỮNG ĐIỀU CẦN BIẾT LẦN ĐẦU ĐẶT TIỆC</a>
                                <p className={cx('paragraph')}>
                                    Việc đặt các trung tâm hội nghị đã không còn quá xa lạ với những booker hoặc những
                                    công ty acency. Thế nhưng, đối với những khách hàng riêng lẻ lần đầu đặt tiệc thì
                                    đây là một vấn đề mới, có phần xa lạ và khó khăn. Để tránh bỡ ngỡ cùng phạm phải…
                                </p>
                            </div>
                            <div className={cx('footerCol')}>
                                <button type="submit" className={cx('btnRead')}>
                                    Đọc ngay
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* ///////////////////////////////// */}

                    <div className={cx('col l-4')}>
                        <div className={cx('border-black')}>
                            <a href="">
                                <img
                                    className={cx('imgCol')}
                                    src="https://luxurypalace.vn/wp-content/uploads/2023/03/rrtt.jpg"
                                ></img>
                            </a>
                            <div className={cx('bodyCol')}>
                                <a className={cx('titleCol')}>NHỮNG ĐIỀU CẦN BIẾT LẦN ĐẦU ĐẶT TIỆC</a>
                                <p className={cx('paragraph')}>
                                    Việc đặt các trung tâm hội nghị đã không còn quá xa lạ với những booker hoặc những
                                    công ty acency. Thế nhưng, đối với những khách hàng riêng lẻ lần đầu đặt tiệc thì
                                    đây là một vấn đề mới, có phần xa lạ và khó khăn. Để tránh bỡ ngỡ cùng phạm phải…
                                </p>
                            </div>
                            <div className={cx('footerCol')}>
                                <button type="submit" className={cx('btnRead')}>
                                    Đọc ngay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('row')}>
                <ul className={cx('pagination')}>
                    <li className={cx('paginationItem')}>
                        <a className={cx('paginationItemLink', 'active')}>1</a>
                    </li>
                    <li className={cx('paginationItem')}>
                        <a className={cx('paginationItemLink')}>2</a>
                    </li>
                    <li className={cx('paginationItem')}>
                        <a className={cx('paginationItemLink')}>3</a>
                    </li>
                    <li className={cx('paginationItem')}>
                        <a className={cx('paginationItemLink')}>...</a>
                    </li>
                    <li className={cx('paginationItem')}>
                        <a className={cx('paginationItemLink')}>18</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default News;
