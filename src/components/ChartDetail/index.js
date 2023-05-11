import classNames from 'classnames/bind';
import styles from './ChartDetail.module.scss';

const cx = classNames.bind(styles);

function ChartDetail({ title, data, color }) {
    const iconClasses = cx({
        [styles.red]: color === 'red',
        [styles.blue]: color === 'blue',
        [styles.green]: color === 'green',
    });
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrap-chart')}>
                <div className={cx('wrap-top')}>
                    <h3>{title}</h3>
                </div>
                <div className={cx('wrap-under')}>
                    <h3 className={iconClasses}>
                        <i className="fa-solid fa-chart-simple"></i>
                        <i className="fa-solid fa-chart-simple"></i>
                        <i className="fa-solid fa-chart-simple"></i>
                    </h3>

                    <h3 className={cx('text-right')}>{data}</h3>
                </div>
            </div>
        </div>
    );
}

export default ChartDetail;
