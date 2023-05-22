import classNames from 'classnames/bind';
import styles from './PartyList.module.scss';
import Clock from '~/components/Clock';
import HeaderDoc from '~/components/Layout/components/HeaderDoc';
import Button from '~/components/Button';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
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

    return (
        <div className={cx('content-doc')}>
            <div className={cx('wrap-btn')}>
                <Button purple>
                    <i className="fa-solid fa-print"></i>
                    In dữ liệu
                </Button>
                <Button pink>
                    <i className="fa-solid fa-clone"></i>
                    Sao chép
                </Button>
                <Button yellow>
                    <i className="fa-solid fa-file-pdf"></i>
                    Xuất PDF
                </Button>
                <Button grey>
                    <i className="fa-solid fa-file-excel"></i>
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
                                                <p className={cx('text-align-center')}>
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

export default PartyList;
