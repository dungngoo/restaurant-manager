import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from '../Button';
import styles from './Modal.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Modal1({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose} backdropClassName={cx('bd')}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <h4>Tạo chức vụ mới</h4>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className={cx('p')}>Nhập tên chức vụ mới</p>
                <input className={cx('input')} type="text" />
            </Modal.Body>
            <Modal.Footer style={{ justifyContent: 'flex-start' }}>
                <Button lightgreen small onClick={handleClose}>
                    Thêm
                </Button>
                <Button pink small onClick={handleClose} s>
                    Hủy bỏ
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Modal1;
