import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from '../Button';
import styles from './Modal.module.scss';
import classNames from 'classnames/bind';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function Modal1({ show, handleClose, staff, refreshData, setShowModal }) {
    const [isPaid, setIsPaid] = useState(false);
    const [numMonths, setNumMonths] = useState(0);
    const [error, setError] = useState('');
    const [monthlySalary, setMonthlySalary] = useState(
        staff.job_type === 'Nhân viên bán thời gian' ? 200000 : 10000000,
    );
    const [isLoading, setIsLoading] = useState(false);
    function handleCalculateSalary() {
        setIsLoading(true);
        const data = {
            numMonths: numMonths,
            monthlySalary: monthlySalary * numMonths,
            isPaid: isPaid,
            _id: staff._id,
        };
        fetch(`${process.env.REACT_APP_SERVER_URL}/staff/calculateSalary`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((result) => {
                // Xử lý kết quả trả về từ backend
                setIsLoading(false);
                setShowModal(false);
                refreshData();
            })
            .catch((error) => {
                // Xử lý lỗi
                setError(error);
                setIsLoading(false);
                return;
            });
    }

    useEffect(() => {
        console.log(numMonths);
        console.log(monthlySalary);
    }, [numMonths, monthlySalary]);
    return (
        <Modal show={show} onHide={handleClose} backdropClassName={cx('bd')}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <h4>Tính lương</h4>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {error && <span style={{ color: 'red' }}>{error}</span>}
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        {staff.job_type === 'Nhân viên bán thời gian' ? (
                            <>
                                <p className={cx('p')}>Nhập số ca làm</p>
                                <input
                                    className={cx('input')}
                                    type="number"
                                    value={numMonths}
                                    onChange={(e) => setNumMonths(e.target.value)}
                                />
                                <p className={cx('p')}>Giá tiền ca làm</p>
                                <input
                                    disabled
                                    className={cx('input')}
                                    type="number"
                                    value={monthlySalary}
                                    onChange={(e) => setMonthlySalary(e.target.value)}
                                />
                            </>
                        ) : (
                            <>
                                <p className={cx('p')}>Nhập số tháng làm</p>
                                <input
                                    className={cx('input')}
                                    type="number"
                                    value={numMonths}
                                    onChange={(e) => setNumMonths(e.target.value)}
                                />
                                <p className={cx('p')}>Tiền lương một tháng</p>
                                <input
                                    disabled
                                    className={cx('input')}
                                    type="number"
                                    value={monthlySalary}
                                    onChange={(e) => setMonthlySalary(e.target.value)}
                                />
                            </>
                        )}
                        <p className={cx('p')}>Trạng thái đã trả lương</p>
                        <select className={cx('input')} value={isPaid} onChange={(e) => setIsPaid(e.target.value)}>
                            <option value={false}>Chưa trả lương</option>
                            <option value={true}>Đã trả lương</option>
                        </select>

                        <p className={cx('p')}>
                            Tiền lương: {numMonths} {staff.job_type === 'Nhân viên bán thời gian' ? 'ca' : 'tháng'} x
                            {monthlySalary.toLocaleString()} =
                            <span style={{ color: 'red' }}> {(numMonths * monthlySalary).toLocaleString()}</span>
                        </p>
                    </>
                )}
            </Modal.Body>
            <Modal.Footer style={{ justifyContent: 'flex-start' }}>
                <Button lightgreen small onClick={handleCalculateSalary}>
                    Lưu
                </Button>
                <Button pink small onClick={handleClose}>
                    Hủy bỏ
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Modal1;
