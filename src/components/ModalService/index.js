import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from '../Button';
import styles from './ModalService.module.scss';
import classNames from 'classnames/bind';
import { useEffect } from 'react';

const cx = classNames.bind(styles);
const ModalService = ({ show, handleClose }) => {
    const [serviceName, setServiceName] = useState('');
    const [description, setDescription] = useState('');

    const handleSave = () => {
        // Thực hiện logic lưu dữ liệu
        console.log('Tên dịch vụ:', serviceName);
        console.log('Mô tả:', description);

        // Đóng modal
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} backdropClassName={cx('bd')}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <h4>Tạo dịch vụ mới</h4>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className={cx('p')}>Nhập tên dịch vụ</p>
                <input
                    className={cx('input')}
                    type="text"
                    value={serviceName}
                    onChange={(e) => setServiceName(e.target.value)}
                />
                <p className={cx('p')}>Mô tả</p>
                <textarea
                    className={cx('input')}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <p className={cx('p')}>Mô tả</p>
                <select className={cx('input')} value={description} onChange={(e) => setDescription(e.target.value)}>
                    <option>Sự kiện</option>
                </select>
            </Modal.Body>
            <Modal.Footer style={{ justifyContent: 'flex-start' }}>
                <Button variant="lightgreen" size="sm" onClick={handleSave}>
                    Lưu
                </Button>
                <Button variant="pink" size="sm" onClick={handleClose}>
                    Hủy bỏ
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalService;
