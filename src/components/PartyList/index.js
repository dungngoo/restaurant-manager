import classNames from 'classnames/bind';
import styles from './PartyList.module.scss';
import Clock from '~/components/Clock';
import HeaderDoc from '~/components/Layout/components/HeaderDoc';
import Button from '~/components/Button';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ExcelJS from 'exceljs';
import Modal1 from '../Modal';
import 'jspdf-autotable';
import jsPDF from 'jspdf';
const cx = classNames.bind(styles);

function PartyList() {
    // const [table, setTable] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * 10 + 1;
    const [pageSize, setPageSize] = useState(10);
    const [items, setItems] = useState([]);

    async function getServices() {
        fetch(`${process.env.REACT_APP_SERVER_URL}/parties?limit=${pageSize}&page=${currentPage}`)
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
                console.log(formattedBookings);
                setItems(formattedBookings);
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
    const handleExportPDF = () => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/parties/`)
            .then(async (response) => {
                const listParty = response.data;

                // Create a new PDF document
                const doc = new jsPDF();

                // Set font size and style for the document
                doc.setFontSize(12);
                await doc.addFont('../fonts/tiengviet.ttf', 'SVN-Times New Roman 2', 'normal');
                doc.setFont('SVN-Times New Roman 2');

                // Define column headers
                const headers = [
                    'Tên khách hàng',
                    'Số điện thoại',
                    'Tên sảnh',
                    'Số bàn',
                    'Tên thực đơn',
                    'Loại dịch vụ',
                ];

                // Define table data
                const data = listParty.map((party) => [
                    party.customerId.name,
                    party.customerId.phone,
                    party.lobbyId.name,
                    party.tableQuantity,
                    party.menuId.name,
                    party.serviceTypeId.name,
                ]);

                // Set table column width
                const columnWidths = [40, 40, 20, 40, 30, 30, 30];

                // Add table to the document
                doc.autoTable({
                    head: [headers],
                    body: data,
                    startY: 20,
                    columnStyles: {
                        0: { cellWidth: columnWidths[0] },
                        1: { cellWidth: columnWidths[1] },
                        2: { cellWidth: columnWidths[2] },
                        3: { cellWidth: columnWidths[3] },
                        4: { cellWidth: columnWidths[4] },
                        5: { cellWidth: columnWidths[5] },
                        6: { cellWidth: columnWidths[6] },
                    },
                    theme: 'grid',
                    styles: {
                        fontSize: 10,
                    },
                });

                // Save the PDF file
                doc.save('danh_sach_don_dat_tiec.pdf');
            })
            .catch((error) => {
                console.error('Error fetching staff data:', error);
            });
    };
    return (
        <div className={cx('content-doc')}>
            <div className={cx('wrap-btn')}>
                <Button purple onClick={handleExportPDF}>
                    <i className="fa-solid fa-print"></i>
                    In dữ liệu
                </Button>
            </div>

            <div className={cx('wrap-content')}>
                <div className={cx('table')}>
                    <table className={cx('text-align')}>
                        <thead>
                            <tr>
                                <th>Thứ tự</th>
                                <th width="200" className={cx('text-align-left')}>
                                    Tên khách hàng - SĐT
                                </th>
                                <th width="100" className={cx('text-align-center')}>
                                    Ngày đặt tiệc
                                </th>
                                <th width="150" className={cx('text-align-center')}>
                                    Tên sảnh
                                </th>
                                <th width="80" className={cx('text-align-center')}>
                                    Số bàn
                                </th>
                                <th width="200" className={cx('text-align-center')}>
                                    Tên thực đơn
                                </th>
                                <th className={cx('text-align-center')}>Loại dịch vụ</th>
                                <th className={cx('text-align-center')}>Dịch vụ khác</th>
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
                                            <ul>
                                                <p className={cx('text-align-left')}>
                                                    {item.services &&
                                                        item.services.map((service, j) => (
                                                            <li key={j} className={cx('li')}>
                                                                {service.service.serviceName}
                                                            </li>
                                                        ))}
                                                </p>
                                            </ul>
                                            {/* <p className={cx('text-align-center')}>{item.serviceTypeId.name}</p> */}
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

export default PartyList;
