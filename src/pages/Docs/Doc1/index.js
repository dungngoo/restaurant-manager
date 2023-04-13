import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Button from '~/components/Button';
import Clock from '~/components/Clock';
import HeaderDoc from '~/components/Layout/components/HeaderDoc';
import styles from './Doc1.module.scss';
import ModalUpdateStaff from '~/components/Layout/ModalUpdateStaff';
import { Modal } from 'bootstrap';
import Example from '~/components/Modal';
import ModalDeleteStaff from '~/components/Layout/components/ModalDeleteStaff';
import axios from 'axios';
const cx = classNames.bind(styles);

function Doc1() {
    // Xử lý DOM CHECKBOX ALL
    const [isCheckedAll, setIsCheckedAll] = useState(false);

    const [staffs, setStaffs] = useState([]);
    // useState chỉ định nhân viên được chọn trong checkbox
    const [isCheckedStaffs, setIsCheckedStaffs] = useState([]);

    const [selectedStaff, setSelectedStaff] = useState(null);
    const [deleteStaff, setDeleteStaff] = useState(null);
    const [deleteManyStaff, setDeleteManyStaff] = useState(null);


    // handle error
    const [deleteManyError, setDeleteManyError] = useState('');

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/staff`)
            .then((res) => res.json())
            .then((data) => setStaffs(data))
            .catch((err) => console.log(err.message));
    }, []);

    // handle sự kiện khi check vào nút checkbox All

    const handleCheckboxAll = (event) => {
        setIsCheckedAll(event.target.checked);
        const checkboxes = document.getElementsByName('staffCheckBox');

        if (event.target.checked) {
            setIsCheckedStaffs(staffs.map((staff) => staff._id));
            for (let i = 0; i < checkboxes.length; i++) {
                checkboxes[i].checked = true;
            }
        } else {
            setIsCheckedStaffs([]);
            for (let i = 0; i < checkboxes.length; i++) {
                checkboxes[i].checked = false;
            }
        }
    };
    // handle sự kiện khi check vào từng item checkbox
    const handleCheckItem = (event, staff) => {
        if (event.target.checked) {
            setIsCheckedStaffs([...isCheckedStaffs, staff._id]);
        } else {
            setIsCheckedStaffs(isCheckedStaffs.filter((isCheckedStaff) => isCheckedStaff !== staff._id));
            setIsCheckedAll(false); // uncheck "select all" if at least one checkbox is unchecked
        }

        // if (
        //     isCheckedStaffs.length + 1 === staffs.length &&
        //     isCheckedStaffs.length + 1 === document.getElementsByName('staffCheckBox').length
        // ) {
        //     setIsCheckedAll(true);
        // } else {
        //     setIsCheckedAll(false);
        // }

        const checkboxes = document.getElementsByName('staffCheckBox');
        let count = 0;
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                count++;
            }
        }

        if (count === staffs.length) {
            setIsCheckedAll(true);
        } else {
            setIsCheckedAll(false);
        }
    };
    useEffect(() => {
        console.log('all ' + isCheckedAll);
        console.log('item ' + isCheckedStaffs);
    }, [isCheckedStaffs]);
    // handle sự kiện nút sửa
    const handleShowUpdateStaff = (staff) => {
        setSelectedStaff(staff);
    };
    // handle sự kiện nút xóa
    const handleShowDeleteStaff = (id) => {
        setDeleteStaff(id);
    };
    const handleShowDeleteManyStaff = (id) => {
        if (isCheckedStaffs === '' || !isCheckedAll) {
            setDeleteManyError('Xin mời chọn nhân viên');
            return;
        }
        else {
            setDeleteManyError('');
        }
        setDeleteManyStaff(id);
    };
    const handleClose = () => {
        setSelectedStaff(null);
        setDeleteStaff(null);
        setDeleteManyStaff(null);
    };

    // API delete một nhân viên theo id
    const handleDelete = () => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/staff/${deleteStaff}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                window.location.reload();
            })
            .catch((err) => console.log(err));
    };

    //API delete nhiều nhân viên theo checkbox đã chọn
    // isCheckedStaffs = 642d7b3e534c58b54dc047cf,642e41f44f74334a40561abd
    const handleDeleteMany = async () => {
       
        await fetch(`${process.env.REACT_APP_SERVER_URL}/staff/delete-many/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ids: isCheckedStaffs.toString().split(',') }),
        })
            .then((res) => {
                console.log(res.message);
                window.location.reload();
            })
            .catch((err) => console.log(err));
    };
    return (
        <div className={cx('wrapper-doc')}>
            <div className={cx('header-clock')}>
                <HeaderDoc text="Quản lí nhân viên" />
                <Clock />
            </div>
            <div className={cx('content-doc')}>
                <div className={cx('wrap-btn')}>
                    <Button green to="./create">
                        <i className="fa-solid fa-plus"></i>
                        Tạo mới nhân viên
                    </Button>
                    <Button green>
                        <i className="fa-solid fa-file-arrow-up"></i>
                        Tải từ file
                    </Button>
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
                    <Button grey onClick={handleShowDeleteManyStaff}>
                        <i className="fa-solid fa-file-excel"></i>
                        Xóa tất cả
                    </Button>
                    {deleteManyStaff && (
                        <ModalDeleteStaff
                            show={deleteManyStaff !== null}
                            handleClose={handleClose}
                            onClick={() => setDeleteManyStaff(true)}
                            save={handleDeleteMany}
                            header="Xóa các nhân viên đã chọn?"
                            body="Bạn có chắc chắn muốn xóa những nhân viên này không?"
                        />
                    )}
                </div>

                <div className={cx('wrap-content')}>
                    <div className={cx('header')}>
                        <div className={cx('wrap-select')}>
                            Hiện
                            <select className={cx('select')}>
                                <option>10</option>
                                <option>25</option>
                                <option>30</option>
                                <option>40</option>
                            </select>
                            danh mục
                        </div>
                        {deleteManyError && <p style={{ color: 'red' }}>{deleteManyError}</p>}
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
                                        <input
                                            type="checkbox"
                                            id="checkbox-all"
                                            checked={isCheckedAll}
                                            onChange={handleCheckboxAll}
                                        />
                                    </th>
                                    <th> ID nhân viên</th>
                                    <th width="200" className={cx('text-align-left')}>
                                        Họ và tên
                                    </th>
                                    <th width="20" className={cx('text-align')}>
                                        Ảnh thẻ
                                    </th>
                                    <th width="400" className={cx('text-align-left')}>
                                        Địa chỉ
                                    </th>
                                    <th width="100" className={cx('text-align')}>
                                        Ngày sinh
                                    </th>
                                    <th width="100">Giới tính</th>
                                    <th>SĐT</th>
                                    <th width="120">Chức vụ</th>
                                    <th width="130">Tính năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Hiện từng nhân viên cụ thể */}
                                {staffs.map((staff) => (
                                    <tr className={cx('tr')} key={staff.staff_id}>
                                        <td>
                                            <input
                                                className={cx('checkbox')}
                                                type="checkbox"
                                                name="staffCheckBox"
                                                checked={isCheckedStaffs.includes(staff._id)}
                                                onChange={(event) => handleCheckItem(event, staff)}
                                            />
                                        </td>
                                        <td>
                                            <p>{staff.staff_id}</p>
                                        </td>
                                        <td>
                                            <p className={cx('text-align-left')}>{staff.fullname}</p>
                                        </td>
                                        <td>
                                            <div>
                                                <img
                                                    className={cx('img-person')}
                                                    src={`http://localhost:3001/${staff?.staffImg}`}
                                                    alt=""
                                                />
                                            </div>
                                        </td>
                                        <td>
                                            <p className={cx('text-align-left')}>{staff.address}</p>
                                        </td>
                                        <td>
                                            <p>{staff.birth}</p>
                                        </td>
                                        <td>
                                            <p>{staff.sex}</p>
                                        </td>
                                        <td>
                                            <p>{staff.phonenumber}</p>
                                        </td>
                                        <td>
                                            <p>{staff.job_type}</p>
                                        </td>
                                        <td className={cx('table-data')}>
                                            <Button
                                                small
                                                pink
                                                title="Xóa"
                                                onClick={() => handleShowDeleteStaff(staff._id)}
                                            >
                                                <i className="fas fa-trash-alt"></i>
                                            </Button>
                                            {deleteStaff && (
                                                <ModalDeleteStaff
                                                    show={deleteStaff !== null}
                                                    handleClose={handleClose}
                                                    onClick={() => setDeleteStaff(true)}
                                                    save={handleDelete}
                                                    header="Xóa nhân viên?"
                                                    body="Bạn có chắc chắn muốn xóa nhân viên này không?"
                                                />
                                            )}
                                            <Button
                                                small
                                                lightorange
                                                title="Sửa"
                                                id="show-emp"
                                                data-toggle="modal"
                                                data-target="#ModalUP"
                                                onClick={() => handleShowUpdateStaff(staff)}
                                            >
                                                <i className="fas fa-edit"></i>
                                            </Button>
                                            {selectedStaff && (
                                                <ModalUpdateStaff
                                                    show={selectedStaff !== null}
                                                    handleClose={handleClose}
                                                    selectedStaff={selectedStaff}
                                                />
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot></tfoot>
                        </table>
                    </div>
                    <div className={cx('footer')}>
                        <p>Hiện 1 đến 7 của 7 danh mục</p>
                        <div className={cx('change-table')}>
                            <button>Lùi</button>
                            <button className={cx('active')}>1</button>
                            <button>Tiếp</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Doc1;
