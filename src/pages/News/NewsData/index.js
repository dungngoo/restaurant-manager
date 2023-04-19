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
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-header')}>
                {selectedNews.header && (
                    <div className={cx('header')}>
                        <h2 className={cx('title')}>{selectedNews.header}</h2>
                    </div>
                )}
            </div>
            <div className={cx('wrapper-body')}>
                {selectedNews.p1 && <p className={cx('p')}>{selectedNews.p1}</p>}
                {selectedNews.h1 && <h1 className={cx('h2')}>{selectedNews.h1}</h1>}
                {selectedNews.p2 && <p className={cx('p')}>{selectedNews.p2}</p>}
                {selectedNews.h2 && <h2 className={cx('h2')}>{selectedNews.h2}</h2>}
                {selectedNews.p3 && <p className={cx('p')}>{selectedNews.p3}</p>}
                {selectedNews.h3 && <h2 className={cx('h2')}>{selectedNews.h3}</h2>}
                {selectedNews.p4 && <p className={cx('p')}>{selectedNews.p4}</p>}
                {selectedNews.h4 && <h2 className={cx('h2')}>{selectedNews.h4}</h2>}
                {selectedNews.p5 && <p className={cx('p')}>{selectedNews.p5}</p>}
                {selectedNews.img1 && (
                    <div className={cx('wrapper-img')}>
                        <img className={cx('img')} src={selectedNews.img1} alt="Ảnh bị lỗi"></img>
                    </div>
                )}
                {selectedNews.h5 && <h2 className={cx('h2')}>{selectedNews.h5}</h2>}
                {selectedNews.p6 && <p className={cx('p')}>{selectedNews.p6}</p>}
                {selectedNews.p7 && <p className={cx('p')}>{selectedNews.p7}</p>}
                {selectedNews.p8 && <p className={cx('p')}>{selectedNews.p8}</p>}
                {selectedNews.img2 && (
                    <div className={cx('wrapper-img')}>
                        <img className={cx('img')} src={selectedNews.img2} alt="Ảnh bị lỗi"></img>
                    </div>
                )}
                {selectedNews.h6 && <h2 className={cx('h2')}>{selectedNews.h6}</h2>}
                {selectedNews.p9 && <p className={cx('p')}>{selectedNews.p9}</p>}
                {selectedNews.p10 && <p className={cx('p')}>{selectedNews.p10}</p>}
                {selectedNews.img3 && (
                    <div className={cx('wrapper-img')}>
                        <img className={cx('img')} src={selectedNews.img3} alt="Ảnh bị lỗi"></img>
                    </div>
                )}
                {selectedNews.h7 && <h2 className={cx('h2')}>{selectedNews.h7}</h2>}
                {selectedNews.p13 && <p className={cx('p')}>{selectedNews.p13}</p>}
                {selectedNews.p11 && <p className={cx('p')}>{selectedNews.p11}</p>}
                {selectedNews.p12 && <p className={cx('p')}>{selectedNews.p12}</p>}
            </div>
        </div>
    );
}
export default NewsData;
