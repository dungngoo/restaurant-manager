import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Button from '~/components/Button';
import Clock from '~/components/Clock';
import HeaderDoc from '~/components/Layout/components/HeaderDoc';
import styles from './Doc1.module.scss';
import ModalUpdateStaff from '~/components/Layout/ModalUpdateStaff';
import ModalDeleteStaff from '~/components/Layout/components/ModalDelete';
import StaffList from '~/components/StaffList';
const cx = classNames.bind(styles);

function Doc1() {
    // Xử lý DOM CHECKBOX ALL
    const [isCheckedAll, setIsCheckedAll] = useState(false);
    const [resizedImage, setResizedImage] = useState(null);
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
            <StaffList />
        </div>
    );
}

export default Doc1;
