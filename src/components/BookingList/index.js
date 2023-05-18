import React, { useEffect, useState } from 'react';
import Button from '../Button';
import styles from './BookingList.module.scss';
import classNames from 'classnames/bind';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';

const cx = classNames.bind(styles);
function BookingList() {
    // const [table, setTable] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [items, setItems] = useState([]);

    const startIndex = (currentPage - 1) * 10 + 1;
    const [pageSize, setPageSize] = useState(10);
    const [confirm, setConfirm] = useState(false);
    const [flag, setFlag] = useState(false);
    useEffect(() => {
        async function deletePendingBookings() {
            try {
                const response = await axios.delete(
                    `${process.env.REACT_APP_SERVER_URL}/bookings/deletePendingBookings`,
                );
                alert(response.data.message);
            } catch (error) {
                console.error(error.message);
            }
        }

        deletePendingBookings();
    }, []);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/bookings?limit=${pageSize}&page=${currentPage}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                const formattedBookings = data.map((item) => {
                    const date = new Date(item.eventDate);
                    const day = date.getDate();
                    const month = date.getMonth() + 1;
                    const year = date.getFullYear();
                    const formattedDate = `${day}/${month}/${year}`;
                    return {
                        ...item,
                        eventDate: formattedDate,
                    };
                });
                setItems(formattedBookings);
            })
            .catch((err) => console.error(err.message));
    }, [currentPage, pageSize, flag]);

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePaymentConfirmation = async (item) => {
        if (item.status === 'pending') {
            await confirmAlert({
                title: 'Xác nhận thanh toán',
                message: 'Bạn có chắc chắn muốn xác nhận đã thanh toán?',
                buttons: [
                    {
                        label: 'Đồng ý',
                        onClick: async () => {
                            // Kiểm tra giá trị confirmed để xác nhận thanh toán
                            console.log('a');
                            try {
                                const response = await axios.put(
                                    `${process.env.REACT_APP_SERVER_URL}/bookings/updateBooking/${item._id}`,
                                    {
                                        status: 'paid',
                                    },
                                );
                                setFlag(true);
                                // Cập nhật trạng thái trong danh sách hiển thị
                                const updatedItems = items.map((i) =>
                                    i._id === item._id ? { ...i, status: 'paid' } : i,
                                );
                                setItems(updatedItems);
                            } catch (error) {
                                console.error(error.message);
                            }
                        },
                        // Trả về giá trị confirmed là true
                    },
                    {
                        label: 'Hủy bỏ',
                        onClick: () => false,
                    },
                ],
            });
        }
    };
    return (
        <div className={cx('content-doc')}>
            <div className={cx('wrap-btn')}>
                <Button purple>
                    <i class="fa-solid fa-print"></i>
                    Xuất hóa đơn
                </Button>
                <Button pink>
                    <i class="fa-solid fa-print"></i>
                    Xóa tất cả
                </Button>
            </div>

            <div className={cx('wrap-content')}>
                <div className={cx('header')}>
                    <div className={cx('wrap-select')}></div>
                    <div className={cx('search')}>
                        Tìm kiếm:
                        <input type="text" className={cx('input')} />
                    </div>
                </div>
                <div className={cx('table')}>
                    <table className={cx('text-align')}>
                        <thead>
                            <tr>
                                <th width="10">
                                    <input type="checkbox" id="all" />
                                </th>
                                <th>Thứ tự</th>
                                <th width="400" className={cx('text-align-left')}>
                                    Tên khách hàng - SĐT
                                </th>
                                <th className={cx('text-align-center')}>Ngày đặt tiệc</th>
                                <th className={cx('text-align-center')}>Tên sảnh</th>
                                <th className={cx('text-align-center')}>Số bàn</th>
                                <th className={cx('text-align-center')}>Tên thực đơn</th>
                                <th className={cx('text-align-center')}>Loại dịch vụ</th>
                                <th className={cx('text-align-center')}>Trạng thái</th>
                                <th width="140">Tính năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Hiện từng nhân viên cụ thể */}
                            {items &&
                                items.map((item, i) => (
                                    <tr key={i}>
                                        <td>
                                            <input
                                                className={cx('checkbox')}
                                                type="checkbox"
                                                name={`check${i}`}
                                                value={i}
                                            />
                                        </td>
                                        <td>
                                            <p>{i + startIndex}</p>
                                        </td>
                                        <td>
                                            <p className={cx('text-align-left')}>
                                                {item.customerId.name} - {item.customerId.phone[0]}
                                            </p>
                                        </td>

                                        <td>
                                            <p className={cx('text-align-center')}>{item.eventDate}</p>
                                        </td>
                                        <td>
                                            <p className={cx('text-align-center')}>{item.lobbyId.name}</p>
                                        </td>
                                        <td>
                                            <p className={cx('text-align-center')}>{item.tableQuantity}</p>
                                        </td>
                                        <td>
                                            <p className={cx('text-align-center')}>{item.menuId.name}</p>
                                        </td>
                                        <td>
                                            <p className={cx('text-align-center')}>{item.serviceTypeId.name}</p>
                                        </td>
                                        <td>
                                            <p
                                                className={cx('text-align-center')}
                                                onClick={() => handlePaymentConfirmation(item)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                {item.status === 'pending' ? (
                                                    <i
                                                        className="fa-solid fa-xmark"
                                                        style={{
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            color: 'red',
                                                            fontSize: '30px',
                                                        }}
                                                    ></i>
                                                ) : (
                                                    <i
                                                        className="fa-solid fa-circle-check"
                                                        style={{
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            color: 'green',
                                                            fontSize: '30px',
                                                        }}
                                                    ></i>
                                                )}
                                            </p>
                                        </td>
                                        <td className={cx('table-data')}>
                                            <Button small pink title="Xóa">
                                                <i className="fas fa-trash-alt"></i>
                                            </Button>
                                            <Button
                                                small
                                                lightorange
                                                title="Sửa"
                                                id="show-emp"
                                                data-toggle="modal"
                                                data-target="#ModalUP"
                                            >
                                                <i className="fas fa-edit"></i>
                                            </Button>
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

export default BookingList;
