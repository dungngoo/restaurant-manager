import React, { useState } from 'react';
import Button from '../Button';

import styles from './TimeRangeForm.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function TimeRangeForm(props) {
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        // pass startTime and endTime to the parent component for further processing
        props.onSubmit(startTime, endTime);
    }

    function handleStartTimeChange(event) {
        setStartTime(event.target.value);
    }

    function handleEndTimeChange(event) {
        setEndTime(event.target.value);
    }

    return (
        <p>
            <form onSubmit={handleSubmit} className={cx('form')}>
                <span className={cx('span')}>
                    <label>
                        <span className={cx('text')}> Từ ngày:</span>
                        <input type="date" value={startTime} onChange={handleStartTimeChange} />
                    </label>
                </span>
                <span className={cx('span')}>
                    <label>
                        <span className={cx('text')}> Đến ngày:</span>
                        <input type="date" value={endTime} onChange={handleEndTimeChange} />
                    </label>
                </span>
                <span className={cx('span')}>
                    <Button className={cx('btn')}>Submit</Button>
                </span>
            </form>
            <h4>Thống kê theo:</h4>
            <select>
                <option>Doanh thu</option>
                <option>Tổng số hóa đơn</option>
                <option>Số đơn đặt tiệc</option>
                <option>Tổng số khách hàng</option>
            </select>
        </p>
    );
}

export default TimeRangeForm;
