import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './Clock.module.scss';

const cx = classNames.bind(styles);

function formateDate(date) {
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    var weekday = new Array(7);
    weekday[0] = 'Chủ Nhật';
    weekday[1] = 'Thứ Hai';
    weekday[2] = 'Thứ Ba';
    weekday[3] = 'Thứ Tư';
    weekday[4] = 'Thứ Năm';
    weekday[5] = 'Thứ Sáu';
    weekday[6] = 'Thứ Bảy';
    var day = weekday[date.getDay()];
    const today = date.getDate();
    // giờ - phút - giây
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);

    return `${day}, ${today}/${month}/${year} - ${hours} giờ ${minutes} phút ${seconds} giây`;
}

function Clock() {
    const [timeString, setTimeString] = useState('');

    useEffect(() => {
        const clockInterval = setInterval(() => {
            const now = new Date();
            const newTimeString = formateDate(now);

            setTimeString(newTimeString);
        }, 1000);

        return () => {
            // cleanup
            console.log('Clock cleanup');
            clearInterval(clockInterval);
        };
    }, []);
    return <div className={cx('clock')}>{timeString}</div>;
}

export default Clock;
