import classNames from 'classnames/bind';
import styles from './ServiceList.module.scss';
import Clock from '~/components/Clock';
import HeaderDoc from '~/components/Layout/components/HeaderDoc';
import Button from '~/components/Button';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ModalService from '../ModalService';
import { Modal } from 'react-bootstrap';
const cx = classNames.bind(styles);

function ServiceList() {
    // const [table, setTable] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const startIndex = (currentPage - 1) * 10 + 1;
    const [pageSize, setPageSize] = useState(10);
    const [items, setItems] = useState([]);
    // async function deletePendingBookings() {
    //     try {
    //         const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/bookings/deletePendingBookings`);
    //         alert(response.data.message);
    //     } catch (error) {
    //         console.error(error.message);
    //     }
    // }
    async function getServices() {
        fetch(`${process.env.REACT_APP_SERVER_URL}/services?limit=${pageSize}&page=${currentPage}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setItems(data);
            })
            .catch((err) => console.error(err.message));
    }
    // useEffect(() => {
    //     deletePendingBookings();
    // }, []);

    useEffect(() => {
        getServices();
    }, [currentPage, pageSize]);

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <div className={cx('content-doc')}>
            {showModal && <ModalService show={showModal} handleClose={handleCloseModal} />}
            <div className={cx('wrap-content')}>
                <div className={cx('table')}>
                    <table className={cx('text-align')}>
                        <thead>
                            <tr>
                                <th>Thứ tự</th>
                                <th width="350" className={cx('text-align-left')}>
                                    Tên dịch vụ
                                </th>
                                <th width="600">Mô tả</th>
                                <th className={cx('text-align-center')}>Loại dịch vụ</th>
                                <th className={cx('text-align-center')}>Giá tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Hiện từng nhân viên cụ thể */}
                            {items &&
                                items.map((item, i) => (
                                    <tr key={i}>
                                        <td>
                                            <p>{i + startIndex}</p>
                                        </td>
                                        <td>
                                            <p className={cx('text-align-left')}>{item.serviceName}</p>
                                        </td>
                                        <td>
                                            <p className={cx('text-align-left')}>{item.description}</p>
                                        </td>
                                        <td>
                                            <p className={cx('text-align-center')}>{item.serviceTypeId[0].name}</p>
                                        </td>
                                        <td>
                                            <p className={cx('text-align-center')}>{item.price}</p>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                </div>
                <div className={cx('footer')}>
                    <p></p>
                    <div className={cx('change-table')}>
                        <button onClick={handlePrevPage}>Lùi</button>
                        <button className={cx('active')}>{currentPage}</button>
                        <button onClick={handleNextPage}>Tiếp</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceList;
