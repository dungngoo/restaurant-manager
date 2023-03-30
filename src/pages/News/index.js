import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './News.module.scss';
const cx = classNames.bind(styles);

function News() {
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
