import classNames from 'classnames/bind';
import styles from './SlideShow.module.scss';

const cx = classNames.bind(styles);

function SlideShow({
    paragraphContent,
    introduceParagraph,
    imgTop,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
}) {
    const imgs = [
        {
            src: `${img1}`,
        },
        {
            src: `${img2}`,
        },
        {
            src: `${img3}`,
        },
        {
            src: `${img4}`,
        },
        {
            src: `${img5}`,
        },
        {
            src: `${img6}`,
        },
        {
            src: `${img7}`,
        },
        {
            src: `${img8}`,
        },
        {
            src: `${img9}`,
        },
        {
            src: `${img10}`,
        },
    ];
    const sliderMain = document.querySelectorAll('#sliderMain');
    console.log(sliderMain);
    const sliderItems = document.querySelectorAll('#sliderItem');
    const sliderLength = sliderItems.length;
    // const sliderItemWidth = sliderItems.offsetWidth;
    // sliderMain.style.width = `${sliderItemWidth * sliderLength}`;
    // console.log(sliderItemWidth);
    function handleClickNextSlider() {
        handleChangeSlide(1);
    }
    function handleClickPrevSlider() {
        handleChangeSlide(-1);
    }
    let positionX = 0;
    function handleChangeSlide(dir) {
        if (dir === 1) {
            console.log(positionX);
            console.log('next slide');
            sliderMain.style = `transform: translateX(${positionX}px)`;
        } else if (dir === -1) {
            console.log('prev slide');
        }
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-content')}>
                <p className={cx('title-content')}>{paragraphContent}</p>
                <p className={cx('introduce-content')}>{introduceParagraph}</p>
            </div>
            <div className={cx('wrapper-img-content')}>
                <div className={cx('img-top')}>
                    <i className={cx('icon-top', 'fa-solid fa-chevron-left')} onClick={handleClickPrevSlider} />
                    {imgs.map((img, index) => (
                        <img key={index} src={img.src} alt="" className={cx('slider-item')} />
                    ))}
                    {/* <img className={cx('slider-item')} src={imgTop} alt="" /> */}
                    <i
                        className={cx('icon-top', 'fa-solid fa-chevron-right', 'right-0')}
                        onClick={handleClickNextSlider}
                    />
                </div>
                <i className={cx('icon-bottom', 'fa-solid fa-chevron-left', 'transform-left-bottom')} />

                <div className={cx('imgs')}>
                    {imgs.map((img, index) => (
                        <img key={index} className={cx('img-item')} src={img.src} alt="" />
                    ))}
                </div>

                {/* <i
                        className={cx('icon-bottom', 'fa-solid fa-chevron-right', 'transform-right-bottom', 'right')}
                    ></i> */}
            </div>
        </div>
    );
}

export default SlideShow;
