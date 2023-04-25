import classNames from 'classnames/bind';
import { Link, useParams } from 'react-router-dom';
import styles from './NewsData.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

function NewsData(props) {
    const { id } = useParams();
    const [selectedNews, setSelectedNews] = useState();
    console.log(id);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/news/${id}`)
            .then((res) => res.data)
            .then((data) => {
                console.log(data);
                setTimeout(() => {
                    setIsLoading(false);
                    setSelectedNews(data);
                }, 1000); // set time out 1 giây
            })
            .catch((err) => console.log(err));
    }, []);
    if (isLoading) {
        return (
            <div className={cx('wrap-loading')}>
                <i className="fas fa-spinner fa-pulse"></i>
            </div>
        );
    }
    function MySectionComponent(props) {
        return (
            <>
                <section>
                    <div className={cx('wrapper-header')}>
                        {selectedNews.title && (
                            <div className={cx('header')}>
                                <h2 className={cx('title')}>{selectedNews.title}</h2>
                            </div>
                        )}
                    </div>
                </section>
                <section>
                    {props.content && <p>{props.content}</p>}
                    {props.list_title_header[0] && <h1>{props.list_title_header[0]}</h1>}
                    {props.list_paragraph[0] && <p>{props.list_paragraph[0]}</p>}

                    {props.list_title_header[1] && <h1>{props.list_title_header[1]}</h1>}
                    {props.list_paragraph[1] && <p>{props.list_paragraph[1]}</p>}

                    {props.list_title_header[2] && <h1>{props.list_title_header[2]}</h1>}
                    {props.list_paragraph[2] && <p>{props.list_paragraph[2]}</p>}

                    {props.list_title_header[3] && <h1>{props.list_title_header[3]}</h1>}
                    {props.list_paragraph[3] && <p>{props.list_paragraph[3]}</p>}

                    {selectedNews.imgs[0] && (
                        <div className={cx('wrapper-img')}>
                            <img className={cx('img')} src={selectedNews.imgs[0]} alt="Ảnh bị lỗi"></img>
                        </div>
                    )}

                    {props.list_title_header[4] && <h1>{props.list_title_header[4]}</h1>}
                    {props.list_paragraph[4] && <p>{props.list_paragraph[4]}</p>}
                    {props.list_paragraph[5] && <p>{props.list_paragraph[5]}</p>}
                    {props.list_paragraph[6] && <p>{props.list_paragraph[6]}</p>}

                    {selectedNews.imgs[1] && (
                        <div className={cx('wrapper-img')}>
                            <img className={cx('img')} src={selectedNews.imgs[1]} alt="Ảnh bị lỗi"></img>
                        </div>
                    )}

                    {props.list_title_header[5] && <h1>{props.list_title_header[5]}</h1>}
                    {props.list_paragraph[7] && <p>{props.list_paragraph[7]}</p>}
                    {props.list_paragraph[8] && <p>{props.list_paragraph[8]}</p>}

                    {selectedNews.imgs[2] && (
                        <div className={cx('wrapper-img')}>
                            <img className={cx('img')} src={selectedNews.imgs[2]} alt="Ảnh bị lỗi"></img>
                        </div>
                    )}

                    {props.list_title_header[6] && <h1>{props.list_title_header[6]}</h1>}
                    {props.list_paragraph[9] && <p>{props.list_paragraph[9]}</p>}
                    {props.list_paragraph[10] && <p>{props.list_paragraph[10]}</p>}
                    {props.list_paragraph[11] && <p>{props.list_paragraph[11]}</p>}
                </section>
            </>
        );
    }
    function SectionChonHoa1Component(props) {
        return (
            <>
                <section>
                    <div className={cx('wrapper-header')}>
                        {selectedNews.title && (
                            <div className={cx('header')}>
                                <h2 className={cx('title')}>{selectedNews.title}</h2>
                            </div>
                        )}
                    </div>
                </section>
                <section>
                    {props.content && <p>{props.content}</p>}
                    {props.list_title_header[0] && <h1>{props.list_title_header[0]}</h1>}
                    {props.list_paragraph[0] && <p>{props.list_paragraph[0]}</p>}
                    {props.list_paragraph[1] && <p>{props.list_paragraph[1]}</p>}
                    {props.list_paragraph[2] && <p>{props.list_paragraph[2]}</p>}

                    {props.list_title_header[1] && <h1>{props.list_title_header[1]}</h1>}
                    {props.list_title_header[2] && <h1>{props.list_title_header[2]}</h1>}
                    {props.list_paragraph[3] && <p>{props.list_paragraph[3]}</p>}
                    {props.list_paragraph[4] && <p>{props.list_paragraph[4]}</p>}

                    {props.list_title_header[3] && <h1>{props.list_title_header[3]}</h1>}
                    {props.list_paragraph[5] && <p>{props.list_paragraph[5]}</p>}

                    {selectedNews.imgs[0] && (
                        <div className={cx('wrapper-img')}>
                            <img className={cx('img')} src={selectedNews.imgs[0]} alt="Ảnh bị lỗi"></img>
                        </div>
                    )}

                    {props.list_title_header[4] && <h1>{props.list_title_header[4]}</h1>}
                    {props.list_paragraph[6] && <p>{props.list_paragraph[6]}</p>}

                    {selectedNews.imgs[1] && (
                        <div className={cx('wrapper-img')}>
                            <img className={cx('img')} src={selectedNews.imgs[1]} alt="Ảnh bị lỗi"></img>
                        </div>
                    )}

                    {props.list_title_header[5] && <h1>{props.list_title_header[5]}</h1>}
                    {props.list_paragraph[7] && <p>{props.list_paragraph[7]}</p>}

                    {selectedNews.imgs[2] && (
                        <div className={cx('wrapper-img')}>
                            <img className={cx('img')} src={selectedNews.imgs[2]} alt="Ảnh bị lỗi"></img>
                        </div>
                    )}

                    {props.list_title_header[6] && <h1>{props.list_title_header[6]}</h1>}
                    {props.list_paragraph[8] && <p>{props.list_paragraph[8]}</p>}

                    {selectedNews.imgs[3] && (
                        <div className={cx('wrapper-img')}>
                            <img className={cx('img')} src={selectedNews.imgs[3]} alt="Ảnh bị lỗi"></img>
                        </div>
                    )}

                    {props.list_paragraph[9] && <p>{props.list_paragraph[9]}</p>}
                </section>
            </>
        );
    }
    function SectionChonHoa2Component(props) {
        return (
            <>
                <section>
                    <div className={cx('wrapper-header')}>
                        {selectedNews.title && (
                            <div className={cx('header')}>
                                <h2 className={cx('title')}>{selectedNews.title}</h2>
                            </div>
                        )}
                    </div>
                </section>
                <section>
                    {props.content && <p>{props.content}</p>}
                    {props.list_title_header[0] && <h1>{props.list_title_header[0]}</h1>}
                    {props.list_paragraph[0] && <p>{props.list_paragraph[0]}</p>}
                    {props.list_paragraph[1] && <p>{props.list_paragraph[1]}</p>}
                    {props.list_paragraph[2] && <p>{props.list_paragraph[2]}</p>}
                    {selectedNews.imgs[0] && (
                        <div className={cx('wrapper-img')}>
                            <img className={cx('img')} src={selectedNews.imgs[0]} alt="Ảnh bị lỗi"></img>
                        </div>
                    )}
                    {props.list_title_header[1] && <h1>{props.list_title_header[1]}</h1>}
                    {props.list_paragraph[3] && <p>{props.list_paragraph[3]}</p>}
                    {selectedNews.imgs[1] && (
                        <div className={cx('wrapper-img')}>
                            <img className={cx('img')} src={selectedNews.imgs[1]} alt="Ảnh bị lỗi"></img>
                        </div>
                    )}
                    {props.list_title_header[2] && <h1>{props.list_title_header[2]}</h1>}
                    {props.list_paragraph[4] && <p>{props.list_paragraph[4]}</p>}
                    {props.list_paragraph[5] && <p>{props.list_paragraph[5]}</p>}
                    {selectedNews.imgs[2] && (
                        <div className={cx('wrapper-img')}>
                            <img className={cx('img')} src={selectedNews.imgs[2]} alt="Ảnh bị lỗi"></img>
                        </div>
                    )}
                    {props.list_title_header[3] && <h1>{props.list_title_header[3]}</h1>}
                    {props.list_paragraph[6] && <p>{props.list_paragraph[6]}</p>}
                    {props.list_paragraph[7] && <p>{props.list_paragraph[7]}</p>}
                    {selectedNews.imgs[3] && (
                        <div className={cx('wrapper-img')}>
                            <img className={cx('img')} src={selectedNews.imgs[3]} alt="Ảnh bị lỗi"></img>
                        </div>
                    )}
                    {props.list_title_header[4] && <h1>{props.list_title_header[4]}</h1>}
                    {props.list_paragraph[8] && <p>{props.list_paragraph[8]}</p>}
                    {props.list_paragraph[9] && <p>{props.list_paragraph[9]}</p>}
                    {selectedNews.imgs[4] && (
                        <div className={cx('wrapper-img')}>
                            <img className={cx('img')} src={selectedNews.imgs[4]} alt="Ảnh bị lỗi"></img>
                        </div>
                    )}
                    {props.list_title_header[5] && <h1>{props.list_title_header[5]}</h1>}
                    {props.list_paragraph[10] && <p>{props.list_paragraph[10]}</p>}
                    {props.list_paragraph[11] && <p>{props.list_paragraph[11]}</p>}
                    {props.list_paragraph[12] && <p>{props.list_paragraph[12]}</p>}
                    {selectedNews.imgs[5] && (
                        <div className={cx('wrapper-img')}>
                            <img className={cx('img')} src={selectedNews.imgs[5]} alt="Ảnh bị lỗi"></img>
                        </div>
                    )}
                    {props.list_paragraph[13] && <p>{props.list_paragraph[13]}</p>}
                </section>
            </>
        );
    }
    function SectionTiecCuoiComponent(props) {
        return (
            <>
                <section>
                    <div className={cx('wrapper-header')}>
                        {selectedNews.title && (
                            <div className={cx('header')}>
                                <h2 className={cx('title')}>{selectedNews.title}</h2>
                            </div>
                        )}
                    </div>
                </section>
                <section>
                    {props.content && <p>{props.content}</p>}
                    {props.list_title_header[0] && <h1>{props.list_title_header[0]}</h1>}
                    {props.list_paragraph[0] && <p>{props.list_paragraph[0]}</p>}
                    {props.list_paragraph[1] && <p>{props.list_paragraph[1]}</p>}

                    {selectedNews.imgs[0] && (
                        <div className={cx('wrapper-img')}>
                            <img className={cx('img')} src={selectedNews.imgs[0]} alt="Ảnh bị lỗi"></img>
                        </div>
                    )}
                    {props.list_title_header[1] && <h1>{props.list_title_header[1]}</h1>}
                    {props.list_paragraph[2] && <p>{props.list_paragraph[2]}</p>}

                    {props.list_title_header[2] && <h1>{props.list_title_header[2]}</h1>}
                    {props.list_paragraph[3] && <p>{props.list_paragraph[3]}</p>}
                    {props.list_paragraph[4] && <p>{props.list_paragraph[4]}</p>}

                    {props.list_title_header[3] && <h1>{props.list_title_header[3]}</h1>}
                    {props.list_paragraph[5] && <p>{props.list_paragraph[5]}</p>}
                    {props.list_paragraph[6] && <p>{props.list_paragraph[6]}</p>}
                    {props.list_paragraph[7] && <p>{props.list_paragraph[7]}</p>}
                    {props.list_title_header[4] && <h1>{props.list_title_header[4]}</h1>}
                    {props.list_paragraph[8] && <p>{props.list_paragraph[8]}</p>}
                    {props.list_paragraph[9] && <p>{props.list_paragraph[9]}</p>}
                    {selectedNews.imgs[1] && (
                        <div className={cx('wrapper-img')}>
                            <img className={cx('img')} src={selectedNews.imgs[1]} alt="Ảnh bị lỗi"></img>
                        </div>
                    )}

                    {props.list_title_header[5] && <h1>{props.list_title_header[5]}</h1>}
                    {props.list_paragraph[10] && <p>{props.list_paragraph[10]}</p>}
                    {props.list_paragraph[11] && <p>{props.list_paragraph[11]}</p>}
                    {selectedNews.imgs[2] && (
                        <div className={cx('wrapper-img')}>
                            <img className={cx('img')} src={selectedNews.imgs[2]} alt="Ảnh bị lỗi"></img>
                        </div>
                    )}
                </section>
            </>
        );
    }
    function SectionTiecVinhDanhComponent(props) {
        return (
            <>
                <section>
                    <div className={cx('wrapper-header')}>
                        {selectedNews.title && (
                            <div className={cx('header')}>
                                <h2 className={cx('title')}>{selectedNews.title}</h2>
                            </div>
                        )}
                    </div>
                </section>
                <section>
                    {props.content && <p>{props.content}</p>}
                    {props.list_title_header[0] && <h1>{props.list_title_header[0]}</h1>}
                    {props.list_paragraph[0] && <p>{props.list_paragraph[0]}</p>}
                    {props.list_paragraph[1] && <p>{props.list_paragraph[1]}</p>}

                    {selectedNews.imgs[0] && (
                        <div className={cx('wrapper-img')}>
                            <img className={cx('img')} src={selectedNews.imgs[0]} alt="Ảnh bị lỗi"></img>
                        </div>
                    )}
                    {props.list_title_header[1] && <h1>{props.list_title_header[1]}</h1>}
                    <ul>{props.list_paragraph[2] && <p>{props.list_paragraph[2]}</p>} </ul>
                    <li className={cx('li')}>{props.list_li[0] && <span>{props.list_li[0]}</span>}</li>
                    <li className={cx('li')}>{props.list_li[1] && <span>{props.list_li[1]}</span>}</li>
                    <li className={cx('li')}>{props.list_li[2] && <span>{props.list_li[2]}</span>}</li>
                    <li className={cx('li')}> {props.list_li[3] && <span>{props.list_li[3]}</span>}</li>
                    <li className={cx('li')}> {props.list_li[4] && <span>{props.list_li[4]}</span>}</li>
                    <li className={cx('li')}> {props.list_li[5] && <span>{props.list_li[5]}</span>}</li>

                    <p style={{ fontWeight: '700' }}>
                        Bạn có thể xem thêm:{' '}
                        {props.list_href[0] && (
                            <a style={{ textDecoration: 'none' }} href="/">
                                {props.list_href[0]}
                            </a>
                        )}
                    </p>
                    {props.list_title_header[2] && <h1>{props.list_title_header[2]}</h1>}
                    {props.list_paragraph[3] && <p>{props.list_paragraph[3]}</p>}
                    {props.list_paragraph[4] && <p>{props.list_paragraph[4]}</p>}
                    {props.list_paragraph[5] && <p>{props.list_paragraph[5]}</p>}
                    {selectedNews.imgs[1] && (
                        <div className={cx('wrapper-img')}>
                            <img className={cx('img')} src={selectedNews.imgs[1]} alt="Ảnh bị lỗi"></img>
                        </div>
                    )}
                    {props.list_title_header[3] && <h1>{props.list_title_header[3]}</h1>}
                    <ul> {props.list_paragraph[6] && <p>{props.list_paragraph[6]}</p>}</ul>
                    <li className={cx('li')}>{props.list_li[6] && <span>{props.list_li[6]}</span>}</li>
                    <li className={cx('li')}>{props.list_li[7] && <span>{props.list_li[7]}</span>}</li>
                    <li className={cx('li')}>{props.list_li[8] && <span>{props.list_li[8]}</span>}</li>
                    <li className={cx('li')}>{props.list_li[9] && <span>{props.list_li[9]}</span>}</li>
                    {props.list_paragraph[7] && <p>{props.list_paragraph[7]}</p>}
                </section>
            </>
        );
    }
    function SectionLeLaiMatComponent(props) {
        return (
            <>
                <section>
                    <div className={cx('wrapper-header')}>
                        {selectedNews.title && (
                            <div className={cx('header')}>
                                <h2 className={cx('title')}>{selectedNews.title}</h2>
                            </div>
                        )}
                    </div>
                </section>
                <section>
                    {props.content && <p>{props.content}</p>}
                    {props.list_title_header[0] && <h1>{props.list_title_header[0]}</h1>}
                    {props.list_paragraph[0] && <p>{props.list_paragraph[0]}</p>}
                    {props.list_paragraph[1] && <p>{props.list_paragraph[1]}</p>}
                    {props.list_paragraph[2] && <p>{props.list_paragraph[2]}</p>}

                    {selectedNews.imgs[0] && (
                        <div className={cx('wrapper-img')}>
                            <img className={cx('img')} src={selectedNews.imgs[0]} alt="Ảnh bị lỗi"></img>
                        </div>
                    )}
                    {props.list_title_header[1] && <h1>{props.list_title_header[1]}</h1>}
                    {props.list_paragraph[3] && <p>{props.list_paragraph[3]}</p>}
                    {props.list_title_header[2] && <h1>{props.list_title_header[2]}</h1>}
                    {props.list_paragraph[4] && <p>{props.list_paragraph[4]}</p>}
                    {props.list_title_header[3] && <h1>{props.list_title_header[3]}</h1>}
                    {props.list_paragraph[5] && <p>{props.list_paragraph[5]}</p>}
                    {props.list_paragraph[6] && (
                        <p>
                            {props.list_paragraph[6]}{' '}
                            <a href="/" className={cx('a')}>
                                {props.link_home}
                            </a>
                            {props.list_paragraph[7] && (
                                <span>
                                    {props.list_paragraph[7]}
                                    <a href="/" className={cx('a')}>
                                        {props.link_home}
                                    </a>
                                </span>
                            )}
                            {props.list_paragraph[8] && <span>{props.list_paragraph[8]}</span>}
                        </p>
                    )}
                </section>
            </>
        );
    }
    function SectionLeBaoHyComponent(props) {
        return (
            <>
                <section>
                    <div className={cx('wrapper-header')}>
                        {selectedNews.title && (
                            <div className={cx('header')}>
                                <h2 className={cx('title')}>{selectedNews.title}</h2>
                            </div>
                        )}
                    </div>
                </section>
                <section>
                    {props.content && <p>{props.content}</p>}
                    {props.list_title_header[0] && <h1>{props.list_title_header[0]}</h1>}
                    {props.list_paragraph[0] && <p>{props.list_paragraph[0]}</p>}
                    {props.list_paragraph[1] && <p>{props.list_paragraph[1]}</p>}
                    {selectedNews.imgs[0] && (
                        <div className={cx('wrapper-img')}>
                            <img className={cx('img')} src={selectedNews.imgs[0]} alt="Ảnh bị lỗi"></img>
                        </div>
                    )}
                    {props.list_title_header[1] && <h1>{props.list_title_header[1]}</h1>}
                    {props.list_title_header[2] && <h2>{props.list_title_header[2]}</h2>}
                    {props.list_paragraph[2] && <p>{props.list_paragraph[2]}</p>}
                    {props.list_title_header[3] && <h2>{props.list_title_header[3]}</h2>}
                    {props.list_paragraph[3] && <p>{props.list_paragraph[3]}</p>}
                    {props.list_paragraph[4] && <p>{props.list_paragraph[4]}</p>}
                    {props.list_title_header[4] && <h2>{props.list_title_header[4]}</h2>}
                    {props.list_paragraph[5] && <p>{props.list_paragraph[5]}</p>}
                    <ul> {props.list_paragraph[6] && <p>{props.list_paragraph[6]}</p>}</ul>
                    <li className={cx('li')}>{props.list_li[0] && <span>{props.list_li[0]}</span>}</li>
                    <li className={cx('li')}>{props.list_li[1] && <span>{props.list_li[1]}</span>}</li>
                    <li className={cx('li')}>{props.list_li[2] && <span>{props.list_li[2]}</span>}</li>
                    <li className={cx('li')}>{props.list_li[3] && <span>{props.list_li[3]}</span>}</li>
                    <li className={cx('li')}>{props.list_li[4] && <span>{props.list_li[4]}</span>}</li>
                    <p>
                        <span style={{ fontWeight: '700' }}>*Lưu ý:</span>{' '}
                        {props.list_paragraph[7] && <span>{props.list_paragraph[7]}</span>}
                    </p>

                    {props.list_title_header[5] && <h1>{props.list_title_header[5]}</h1>}
                    {props.list_paragraph[8] && <span>{props.list_paragraph[8]}</span>}
                    {selectedNews.imgs[1] && (
                        <div className={cx('wrapper-img')}>
                            <img className={cx('img')} src={selectedNews.imgs[1]} alt="Ảnh bị lỗi"></img>
                        </div>
                    )}
                    <p style={{ fontWeight: '700' }}>
                        Bạn có thể xem thêm:
                        {props.list_paragraph[9] && (
                            <a style={{ textDecoration: 'none' }} href="/">
                                {props.list_paragraph[9]}
                            </a>
                        )}
                    </p>
                    {props.list_title_header[6] && <h1>{props.list_title_header[6]}</h1>}
                    {props.list_title_header[7] && <h2>{props.list_title_header[7]}</h2>}
                    {props.list_paragraph[10] && <p>{props.list_paragraph[10]}</p>}
                    {props.list_paragraph[11] && <p>{props.list_paragraph[11]}</p>}
                    {props.list_title_header[8] && <h2>{props.list_title_header[8]}</h2>}
                    {props.list_paragraph[12] && <p>{props.list_paragraph[12]}</p>}
                    {props.list_paragraph[13] && <p>{props.list_paragraph[13]}</p>}
                    {props.list_title_header[9] && <h2>{props.list_title_header[9]}</h2>}
                    {props.list_paragraph[14] && <p>{props.list_paragraph[14]}</p>}
                    {props.list_paragraph[15] && (
                        <p>
                            {props.list_paragraph[15]}{' '}
                            <a href="/" className={cx('a')}>
                                {props.link_home}
                            </a>
                            {props.list_paragraph[16] && (
                                <span>
                                    {props.list_paragraph[16]}
                                    <a href="/" className={cx('a')}>
                                        {props.link_home}
                                    </a>
                                </span>
                            )}
                            {props.list_paragraph[17] && <span>{props.list_paragraph[17]}</span>}
                        </p>
                    )}
                </section>
            </>
        );
    }
    console.log(window.location.pathname);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-body')}>
                {window.location.pathname === '/news/luu-y-khi-to-chuc-tiec-cuoi-mua-he' &&
                    MySectionComponent(selectedNews)}
                {window.location.pathname === '/news/cach-chon-hoa-cuoi-phu-hop-mua-he-2023-1' &&
                    SectionChonHoa1Component(selectedNews)}
                {window.location.pathname === '/news/tiec-cuoi-xanh-hot-trend-he-2023' &&
                    SectionTiecCuoiComponent(selectedNews)}
                {window.location.pathname === '/news/top-dieu-can-biet-khi-to-chuc-le-vinh-danh' &&
                    SectionTiecVinhDanhComponent(selectedNews)}
                {window.location.pathname === '/news/cach-chon-hoa-cuoi-phu-hop-mua-he-2023-2' &&
                    SectionChonHoa2Component(selectedNews)}
                {window.location.pathname === '/news/cac-nghi-le-dam-cuoi-tai-viet-nam-le-lai-mat' &&
                    SectionLeLaiMatComponent(selectedNews)}
                {window.location.pathname === '/news/cac-nghi-le-dam-cuoi-tai-viet-nam-le-bao-hy' &&
                    SectionLeBaoHyComponent(selectedNews)}
            </div>
        </div>
    );
}
export default NewsData;
