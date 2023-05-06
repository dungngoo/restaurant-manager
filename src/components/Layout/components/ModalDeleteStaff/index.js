import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import styles from './ModalDeleteStaff.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function ModalDeleteStaff({ show, handleClose, header, body, save }) {
    return (
        <Modal show={show} onHide={handleClose} backdropClassName={cx('bd')} centered>
            <Modal.Header closeButton>{header}</Modal.Header>
            <Modal.Body>
                <h3 style={{ color: 'red' }}>{body}</h3>
            </Modal.Body>
            <Modal.Footer style={{ justifyContent: 'center' }}>
                <Button lightgreen small onClick={save}>
                    Xóa
                </Button>
                <Button pink small onClick={handleClose} s>
                    Hủy bỏ
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalDeleteStaff;
