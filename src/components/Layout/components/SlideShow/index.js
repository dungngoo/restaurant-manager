import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from './SlideShow.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function SlideShow({ img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, title, paragraph }) {
    const urls = [
        `${img1}`,
        `${img2}`,
        `${img3}`,
        `${img4}`,
        `${img5}`,
        `${img6}`,
        `${img7}`,
        `${img8}`,
        `${img9}`,
        `${img10}`,
        `${img11}`,
        `${img12}`,
    ];
    return (
        <>
            <p>{title}</p>
            <p>{paragraph}</p>
            <Carousel
                thumbWidth={200}
                autoPlay
                showStatus={false}
                infiniteLoop
                interval={2000}
                onSwipeMove
                showIndicators={false}
            >
                {urls.map((url) => (
                    <div className={cx('div')}>
                        <img src={url} />
                    </div>
                ))}
            </Carousel>
        </>
    );
}

export default SlideShow;
