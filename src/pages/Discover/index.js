import classNames from 'classnames/bind';
import HeaderContent from '~/components/Layout/components/HeaderContent';
import SlideShow from '~/components/Layout/components/SlideShow';
import styles from './Discover.module.scss';
import img1 from '~/assets/imgs/discover/ruby/img1.jpg';
import img2 from '~/assets/imgs/discover/ruby/img2.jpg';
import img3 from '~/assets/imgs/discover/ruby/img3.jpg';
import img4 from '~/assets/imgs/discover/ruby/img4.jpg';
import img5 from '~/assets/imgs/discover/ruby/img5.jpg';
import { Carousel } from 'react-responsive-carousel';
const cx = classNames.bind(styles);

function Discover() {
    const urls = [`${img1}`, `${img2}`, `${img3}`, `${img4}`, `${img5}`];
    return (
        <div className={cx('wrapper')}>
            <HeaderContent title="Khám phá" li1="Ruby" li2="Topaz" li3="Diamond" li4="Platinum" />

            <h2 className={cx('title', 'p-20')}>Sảnh Ruby</h2>
            <Carousel
                thumbWidth={300}
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
        </div>
    );
}

export default Discover;
