import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './TimeRangeForm.module.scss';
import Button from '../Button';

const cx = classNames.bind(styles);

function TimeRangeForm(props) {
    const [selectedMonth, setSelectedMonth] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        // Gọi hàm onSubmit từ props và truyền tháng đã chọn
        props.onSubmit(selectedMonth);
    }

    function handleMonthChange(event) {
        setSelectedMonth(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit} className={cx('form')}>
            <div className={cx('span')}>
                <label>
                    <span className={cx('text')}>Chọn tháng:</span>
                    <input
                        type="month"
                        value={selectedMonth}
                        onChange={handleMonthChange}
                        className={cx('input-month')}
                    />
                </label>
            </div>
            <span className={cx('span')}>
                <Button className={cx('btn')}>Submit</Button>
            </span>
        </form>
    );
}

export default TimeRangeForm;
