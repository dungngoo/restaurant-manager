import classNames from 'classnames/bind';
import styles from './Doc2.module.scss';
import Clock from '~/components/Clock';
import HeaderDoc from '~/components/Layout/components/HeaderDoc';
import Button from '~/components/Button';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ExcelJS from 'exceljs';
const cx = classNames.bind(styles);

function Doc2() {
    // const [table, setTable] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * 10 + 1;
    const [pageSize, setPageSize] = useState(10);
    const [items, setItems] = useState([]);
    const [confirm, setConfirm] = useState(false);
    const [error, setError] = useState('');
    const data = [];
    const [flag, setFlag] = useState(false);
    const [selectAll, setSelectAll] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState('');

    const handleCheckAll = () => {
        setSelectAll(!selectAll);
        setSelectedItems(selectAll ? [] : [...items]);
    };

    const handleCheckItem = (index, item) => {
        const updatedSelectedItems = [...selectedItems];

        if (updatedSelectedItems.includes(item)) {
            updatedSelectedItems.splice(updatedSelectedItems.indexOf(item), 1);
            setSelectedItem('');
        } else {
            updatedSelectedItems.push(item);
            setSelectedItem(item);
        }

        setSelectedItems(updatedSelectedItems);
    };

    useEffect(() => {
        console.log(selectedItems);
        console.log(selectedItem);
        if (selectedItems.length === items.length) {
            setSelectAll(true);
        } else {
            setSelectAll(false);
        }
    }, [selectedItems, items]);
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

    const handleExportExcel = () => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/bookings/`)
            .then((response) => {
                const orders = response.data;

                const workbook = new ExcelJS.Workbook();
                const worksheet = workbook.addWorksheet('Danh sách đơn đặt tiệc');

                // Add column headers
                worksheet.addRow([
                    'ID',
                    'Tên khách hàng - SĐT',
                    'Ngày tổ chức tiệc',
                    'Tên sảnh',
                    'Số bàn',
                    'Tên thực đơn',
                    'Loại dịch vụ',
                    'Trạng thái',
                ]);

                // Add data rows
                orders.forEach((order) => {
                    worksheet.addRow([
                        order._id, // Thứ tự
                        `${order.customerId.name} - ${order.customerId.phone}`, // Tên khách hàng - SĐT
                        order.eventDate, // Ngày đặt tiệc
                        order.lobbyId.name, // Tên sảnh
                        order.tableQuantity, // Số bàn
                        order.menuId.name, // Tên thực đơn
                        order.serviceTypeId.name, // Loại dịch vụ
                        order.status, // Trạng thái
                    ]);
                });

                // Generate Excel file
                workbook.xlsx.writeBuffer().then((buffer) => {
                    const blob = new Blob([buffer], {
                        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                    });
                    const fileName = 'danh_sach_don_dat_tiec.xlsx';

                    if (navigator.msSaveBlob) {
                        // For IE browser
                        navigator.msSaveBlob(blob, fileName);
                    } else {
                        // For other browsers
                        const link = document.createElement('a');
                        if (link.download !== undefined) {
                            const url = URL.createObjectURL(blob);
                            link.setAttribute('href', url);
                            link.setAttribute('download', fileName);
                            link.style.visibility = 'hidden';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }
                    }
                });
            })
            .catch((error) => {
                console.error('Error fetching order data:', error);
            });
    };
    const handleExportInvoice = () => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/bookings/exportInvoiceToPDF`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(selectedItem), // Truyền dữ liệu booking dưới dạng JSON
        })
            .then((response) => {
                // Kiểm tra mã trạng thái của response
                if (!response.ok) {
                    setError('Xin mời chọn đơn đặt tiệc!');
                    return;
                }
                // Trả về dữ liệu PDF dưới dạng Blob
                setError('');
                return response.blob();
            })
            .then((blob) => {
                // Tạo URL đại diện cho Blob
                console.log(blob);
                const url = URL.createObjectURL(blob);

                // Tạo một thẻ <a> để download file
                const link = document.createElement('a');
                link.href = url;
                link.download = `invoice.pdf`;

                // Simulate click vào thẻ <a> để bắt đầu tải xuống
                link.click();

                // Xóa URL và thẻ <a> sau khi tải xuống hoàn tất
                URL.revokeObjectURL(url);
                link.remove();
            })
            .catch((error) => {
                // Xử lý lỗi (nếu có)
                console.error('Error exporting invoice:', error);
            });
    };

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
    }, [currentPage, pageSize]);

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
                            try {
                                const response = await axios.put(
                                    `${process.env.REACT_APP_SERVER_URL}/bookings/updateBooking/${item._id}`,
                                    {
                                        status: 'paid',
                                    },
                                );
                                console.log(response.data.message);
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
        <div className={cx('wrapper-doc')}>
            <div className={cx('header-clock')}>
                <HeaderDoc text="Quản lí đơn đặt tiệc" />
                <Clock />
            </div>
            <div className={cx('content-doc')}>
                <div className={cx('wrap-btn')}>
                    <Button purple onClick={handleExportInvoice}>
                        <i class="fa-solid fa-print"></i>
                        Xuất hóa đơn
                    </Button>
                    <Button pink onClick={handleExportExcel}>
                        <i class="fa-solid fa-print"></i>
                        Xuất file excel
                    </Button>
                </div>

                <div className={cx('wrap-content')}>
                    <div className={cx('header')}>
                        <div className={cx('wrap-select')}>{error && <span style={{fontSize:'20px',color:'red'}}>{error}</span>}</div>
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
                                        <input type="checkbox" id="all" onChange={handleCheckAll} checked={selectAll} />
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
                                                    onChange={() => handleCheckItem(i, item)}
                                                    checked={selectedItems.includes(item)}
                                                />
                                            </td>
                                            <td>
                                                <p>{i + startIndex}</p>
                                            </td>
                                            <td>
                                                <p className={cx('text-align-left')}>
                                                    {item.customerId.name} - {item.customerId.phone}
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
        </div>
    );
}

export default Doc2;
