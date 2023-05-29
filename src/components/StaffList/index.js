import React, { useEffect, useState } from 'react';
import Button from '../Button';
import styles from './StaffList.module.scss';
import classNames from 'classnames/bind';
import ModalUpdateStaff from '~/components/Layout/ModalUpdateStaff';
import { changeFormat, handleCheckItem, handleCheckboxAll } from '~/utils';
import ModalDelete from '~/components/Layout/components/ModalDelete';
import CalculateSalaryModal from '../CalculateSalaryModal';
import ExcelJS from 'exceljs';
import Modal1 from '../Modal';
import axios from 'axios';
import 'jspdf-autotable';
import jsPDF from 'jspdf';
import ComponentSearch from '../ComponentSearch';

const cx = classNames.bind(styles);

function StaffList() {
    const [isCheckedAll, setIsCheckedAll] = useState(false);
    const [staffs, setStaffs] = useState([]);
    const [isCheckedStaffs, setIsCheckedStaffs] = useState([]);
    const [isCheckedStaff, setIsCheckedStaff] = useState('');
    const [selectedStaff, setSelectedStaff] = useState(null);
    const [salaryStaff, setSalaryStaff] = useState('');
    const [deleteStaff, setDeleteStaff] = useState(null);
    const [deleteManyStaff, setDeleteManyStaff] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [error, setError] = useState('');
    const [showNewImage, setShowNewImage] = useState(false);

    // handle error
    const [deleteManyError, setDeleteManyError] = useState('');
    const fetchData = () => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/staff?limit=${pageSize}&page=${currentPage}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setStaffs(data);
            })
            .catch((err) => console.log(err.message));
    };
    // Gọi API để lấy ra tất cả nhân viên có trong cơ sở dữ liệu
    useEffect(() => {
        fetchData();
    }, [pageSize, currentPage]);
    // ------ sự kiện checkbox all và checkbox iten -----
    const checkboxes = document.getElementsByName('staffCheckBox');

    //  ----------------Kiểm tra checkbox All và checkbox từng item------------------------
    useEffect(() => {
        console.log('all ' + isCheckedAll);
        console.log('item ' + isCheckedStaffs);

        if (isCheckedStaffs.length === staffs.length && staffs.length > 0) {
            setIsCheckedAll(true);
        }
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
        } else {
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
    const handleDelete = (staffId) => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/staff/${staffId}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                window.location.reload();
            })
            .catch((err) => console.log(err));
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    //API delete nhiều nhân viên theo checkbox đã chọn
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
    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };
    const handleCalculateSalary = (staffId) => {
        const selectedStaffs = staffs.filter((staff) => staff._id === staffId[0]);
        if (staffId.length > 1) {
            setError('Chỉ được chọn 1 nhân viên để tính lương!');
            return;
        } else if (staffId.length === 0) {
            setError('Xin mời chọn nhân viên để tính lương');
            return;
        }
        setSalaryStaff(selectedStaffs[0]);
        setError('');
        // Thực hiện tính lương cho nhân viên được chọn
        setShowModal(true);
    };
    useEffect(() => {
        console.log(error);
    }, [error]);
    const handleExportExcel = () => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/staff/`)
            .then((response) => {
                const staffList = response.data;

                const workbook = new ExcelJS.Workbook();
                const worksheet = workbook.addWorksheet('Danh sách nhân viên');

                // Add column headers
                worksheet.addRow([
                    'ID',
                    'Họ và tên',
                    'Email',
                    'Địa chỉ',
                    'Ngày sinh',
                    'Nơi sinh',
                    'Ngày cấp CMND',
                    'Nơi cấp CMND',
                    'Số điện thoại',
                    'CMND',
                    'Ảnh nhân viên',
                    'Giới tính',
                    'Loại công việc',
                    'Số tháng làm việc',
                    'Lương theo số tháng làm việc',
                    'Trạng thái lương đã được trả',
                ]);

                // Add data rows
                staffList.forEach((staff) => {
                    worksheet.addRow([
                        staff.staff_id,
                        staff.fullname,
                        staff.email,
                        staff.address,
                        staff.birth,
                        staff.birthPlace,
                        staff.date,
                        staff.dateOfPlace,
                        staff.phonenumber,
                        staff.identify,
                        staff.staffImg,
                        staff.sex,
                        staff.job_type,
                        staff.months_worked,
                        staff.monthly_wage,
                        staff.isSalaryPaid,
                    ]);
                });

                // Generate Excel file
                workbook.xlsx.writeBuffer().then((buffer) => {
                    const blob = new Blob([buffer], {
                        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                    });
                    const fileName = 'danh_sach_nhan_vien.xlsx';

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
    const handleExportPDF = () => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/staff/`)
            .then((response) => {
                const staffList = response.data;

                // Create a new PDF document
                const doc = new jsPDF();

                // Set font size and style for the document
                doc.setFontSize(12);
                doc.setFont('Arial', 'normal');

                // Define column headers
                const headers = [
                    'Họ và tên',
                    'Số điện thoại',
                    'Giới tính',
                    'Loại công việc',
                    'Lương theo số tháng làm việc',
                ];

                // Define table data
                const data = staffList.map((staff) => [
                    staff.fullname,
                    staff.phonenumber,
                    staff.sex,
                    staff.job_type,
                    staff.monthly_wage,
                ]);

                // Set table column width
                const columnWidths = [40, 40, 20, 40, 30];

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
                    },
                    theme: 'grid',
                    styles: {
                        fontSize: 10,
                    },
                });

                // Save the PDF file
                doc.save('danh_sach_nhan_vien.pdf');
            })
            .catch((error) => {
                console.error('Error fetching staff data:', error);
            });
    };

    return (
        <div className={cx('content-doc')}>
            <div className={cx('wrap-btn')}>
                <Button green to="./create">
                    <i className="fa-solid fa-plus"></i>
                    Tạo mới nhân viên
                </Button>
                <Button purple onClick={handleExportExcel}>
                    <i className="fa-solid fa-print"></i>
                    In dữ liệu excel
                </Button>
                <Button pink onClick={() => handleCalculateSalary(isCheckedStaffs)}>
                    <i className="fa-solid fa-clone"></i>
                    Tính lương
                </Button>
                {showModal && (
                    <Modal1
                        show={showModal}
                        handleClose={handleCloseModal}
                        staff={salaryStaff}
                        refreshData={fetchData}
                        setShowModal={setShowModal}
                    />
                )}
                <Button yellow onClick={handleExportPDF}>
                    <i className="fa-solid fa-file-pdf"></i>
                    Xuất PDF
                </Button>
                <Button grey onClick={handleShowDeleteManyStaff}>
                    <i className="fa-solid fa-file-excel"></i>
                    Xóa tất cả
                </Button>
                {deleteManyStaff && (
                    <ModalDelete
                        show={deleteManyStaff !== null}
                        onDelete={() => handleDeleteMany(deleteManyStaff)}
                        handleClose={handleClose}
                        header="Xóa các nhân viên đã chọn?"
                        body="Bạn có chắc chắn muốn xóa những nhân viên này không?"
                    />
                )}
            </div>
            <ComponentSearch />
            <div className={cx('header')}>
                {deleteManyError && <p style={{ color: 'red' }}>{deleteManyError}</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
            <div className={cx('wrap-content')}>
                <div className={cx('table')}>
                    <table className={cx('text-align')}>
                        <thead>
                            <tr>
                                <th width="10">
                                    <input
                                        type="checkbox"
                                        id="checkbox-all"
                                        checked={isCheckedAll}
                                        onChange={(e) =>
                                            handleCheckboxAll(
                                                e,
                                                checkboxes,
                                                staffs,
                                                setIsCheckedAll,
                                                setIsCheckedStaffs,
                                            )
                                        }
                                    />
                                </th>
                                <th> ID nhân viên</th>
                                <th width="200" className={cx('text-align-left')}>
                                    Họ và tên
                                </th>
                                <th width="20" className={cx('text-align')}>
                                    Ảnh thẻ
                                </th>
                                <th width="200" className={cx('text-align-left')}>
                                    Lương
                                </th>
                                <th width="200" className={cx('text-align-left')}>
                                    Trạng thái lương
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
                                            onChange={(event) =>
                                                handleCheckItem(
                                                    event,
                                                    staff,
                                                    checkboxes,
                                                    setIsCheckedAll,
                                                    isCheckedStaffs,
                                                    setIsCheckedStaffs,
                                                )
                                            }
                                        />
                                    </td>
                                    <td>
                                        <p>{staff.staff_id}</p>
                                    </td>
                                    <td>
                                        <p className={cx('text-align-left')}>{staff.fullname}</p>
                                    </td>
                                    <td>
                                        <div style={{ width: '65px', height: '65px' }}>
                                            <img
                                                className={cx('img-person')}
                                                src={`https://website-restaurant.s3.ap-southeast-1.amazonaws.com/${staff.staffImg}`}
                                                alt="Ảnh không tìm thấy"
                                                style={{
                                                    width: '75%',
                                                    height: '100%',
                                                }}
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <p className={cx('text-align-left')}>
                                            {staff.monthly_wage ? `${staff.monthly_wage.toLocaleString()} VNĐ` : 0}
                                        </p>
                                    </td>
                                    <td>
                                        <p className={cx('text-align-left')}>
                                            {staff.isSalaryPaid ? 'Đã trả lương' : 'Chưa trả lương'}
                                        </p>
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
                                        <Button small pink title="Xóa" onClick={() => handleShowDeleteStaff(staff._id)}>
                                            <i className="fas fa-trash-alt"></i>
                                        </Button>
                                        {deleteStaff === staff._id && (
                                            <ModalDelete
                                                show={deleteStaff !== null}
                                                handleClose={handleClose}
                                                onDelete={() => handleDelete(deleteStaff)}
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
                                                showNewImage={showNewImage}
                                                setShowNewImage={setShowNewImage}
                                                changeFormat={changeFormat}
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

export default StaffList;
