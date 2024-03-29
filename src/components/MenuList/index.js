import classNames from 'classnames/bind';
import styles from './MenuList.module.scss';
import Button from '~/components/Button';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import ComponentSearch from '../ComponentSearch';
const cx = classNames.bind(styles);

function MenuList() {
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * 10 + 1;
    const [pageSize, setPageSize] = useState(10);
    const [items, setItems] = useState([]);
    const [itemsPrice, setItemsPrice] = useState([]);

    async function getMenus() {
        fetch(`${process.env.REACT_APP_SERVER_URL}/menus?limit=${pageSize}&page=${currentPage}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                const itemsPrice = data.map((menu) => {
                    const totalPrice = menu.items.reduce((total, item) => total + item.price, 0);
                    return totalPrice;
                });
                console.log(itemsPrice);
                setItems(data);
                setItemsPrice(itemsPrice);
            })
            .catch((err) => console.error(err.message));
    }
    // useEffect(() => {
    //     deletePendingBookings();
    // }, []);

    useEffect(() => {
        getMenus();
    }, [currentPage, pageSize]);

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };
    async function handleClick(item) {
        console.log(item);
        const items = item.items;
        const courses = items.map((item) => `${item.name} - ${item.price}`);
        console.log(courses);
        await confirmAlert({
            title: `Các món ăn của ${item.name}`,
            message: courses.map((i, index) => <li key={index}>{i}</li>),
            buttons: [
                {
                    label: 'Tắt',
                },
            ],
        });
    }
    return (
        <div className={cx('content-doc')}>
            <div className={cx('wrap-btn')}>
                <Button green>
                    <i className="fa-solid fa-plus"></i>
                    Thêm thực đơn
                </Button>
                <Button purple>
                    <i className="fa-solid fa-clone"></i>
                    Tải từ file
                </Button>
                <Button pink>
                    <i className="fa-solid fa-print"></i>
                    Sao chép
                </Button>
                <Button grey>
                    <i className="fa-solid fa-file-excel"></i>
                    Xóa tất cả
                </Button>
            </div>
            <ComponentSearch />
            <div className={cx('wrap-content')}>
                <div className={cx('table')}>
                    <table className={cx('text-align')}>
                        <thead>
                            <tr>
                                <th width="10">
                                    <input type="checkbox" id="checkbox-all" />
                                </th>
                                <th>Thứ tự</th>
                                <th width="400" className={cx('text-align-left')}>
                                    Tên thực đơn
                                </th>
                                <th width="800">Mô tả</th>
                                <th className={cx('text-align-center')}>Tổng giá tiền</th>
                                <th className={cx('text-align-center')} width="120">
                                    Tính năng
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {items &&
                                items.map((item, i) => (
                                    <tr key={i}>
                                        <td>
                                            <input className={cx('checkbox')} type="checkbox" name="checkBoxItem" />
                                        </td>
                                        <td>
                                            <p>{i + startIndex}</p>
                                        </td>
                                        <td>
                                            <p
                                                className={cx('text-align-left')}
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => handleClick(item)}
                                            >
                                                {item.name}
                                            </p>
                                        </td>
                                        <td>
                                            <p className={cx('text-align-left', 'text-solong')}>{item.description}</p>
                                        </td>
                                        <td>
                                            <p className={cx('text-align-center')}>{itemsPrice[i]}</p>
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

export default MenuList;
