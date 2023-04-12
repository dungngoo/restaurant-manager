import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import styles from './ModalUpdateStaff.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function ModalUpdateStaff({ handleClose, show, selectedStaff }) {
    // Chuyển hướng navigate

    const [showNewImage, setShowNewImage] = useState(false);

    // Error selection
    const [selectionError, setSelectionError] = useState('');

    const [state, setState] = useState({
        staff_id: selectedStaff.staff_id,
        fullname: selectedStaff.fullname,
        email: selectedStaff.email,
        address: selectedStaff.address,
        date: changeFormat(selectedStaff.date),
        birth: changeFormat(selectedStaff.birth),
        birthPlace: selectedStaff.birthPlace,
        dateOfPlace: selectedStaff.dateOfPlace,
        phoneNumber: selectedStaff.phonenumber,
        identify: selectedStaff.identify,
        sex: selectedStaff.sex,
        job: selectedStaff.job_type,
        staff_img: selectedStaff.staffImg,
    });
    const [isSubmit, setIsSubmit] = useState(false);
    // Thay đổi dữ liệu birth, date từ dd/mm/yyyy thành yyyy-mm-dd
    function changeFormat(val) {
        const myArr = val.split('/');

        let year = myArr[2];
        let month = myArr[1];
        let day = myArr[0];

        let formatDate = year + '-' + month + '-' + day;
        return formatDate;
    }

    const handleChangeInput = (evt) => {
        setState({
            ...state,
            [evt.target.name]: evt.target.value,
        });
        console.log(state.job);
    };

    // Xử lý sự kiện cập nhật
    const handleUpdate = (event) => {
        // Tạo dữ liệu và dùng axios để put vào server: localhost:3001/staff
        event.preventDefault();
        if (state.job === '' || state.sex === '') {
            setSelectionError('Chưa chọn');
            return;
        }
        const dataContent = {
            staff_id: state.staff_id,
            fullname: state.fullname,
            email: state.email,
            address: state.address,
            date: changeFormat(state.date),
            birth: changeFormat(state.birth),
            birthPlace: state.birthPlace,
            dateOfPlace: state.dateOfPlace,
            phoneNumber: state.phonenumber,
            identify: state.identify,
            sex: state.sex,
            job_type: state.job,
            staff_img: state.staffImg,
        };
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataContent),
        };

        // formData.append('email', state.email);
        // formData.append('address', state.address);
        // formData.append('birth', changeFormat(state.birth).toString());
        // formData.append('birthPlace', state.birthPlace);
        // formData.append('date', changeFormat(state.date).toString());
        // formData.append('dateOfPlace', state.dateOfPlace);
        // formData.append('phonenumber', state.phoneNumber.toString());
        // formData.append('identify', state.identify);
        // formData.append('job_type', state.job);
        // formData.append('sex', state.sex.toString());
        // formData.append('staffImg', state.staff_img);
        // `${process.env.REACT_APP_SERVER_URL}/staff/${selectedStaff.staff_id}`
        fetch(`${process.env.REACT_APP_SERVER_URL}/staff/${selectedStaff._id}`, requestOptions)
            .then((res) => res.json())
            .then(async (data) => {
                console.log(data);
                await window.location.replace('/docs/1');
            })
            .catch((err) => console.log(err));
    };

    return (
        <form onSubmit={handleUpdate}>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h4>Cập nhật nhân viên</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={cx('row')}>
                        <div className={cx('col l-4')}>
                            <p className={cx('p')}>ID Nhân viên</p>
                            <input
                                name="staffId"
                                className={cx('input')}
                                type="text"
                                value={state.staff_id}
                                disabled
                                readOnly
                            />
                            <p className={cx('errors')}></p>
                        </div>
                        <div className={cx('col l-4')}>
                            <p className={cx('p')}>Họ và tên</p>
                            <input
                                name="fullname"
                                className={cx('input')}
                                type="text"
                                value={state.fullname}
                                onChange={handleChangeInput}
                            />

                            <p className={cx('errors')}>{}</p>
                        </div>
                        <div className={cx('col l-4')}>
                            <p className={cx('p')}>Địa chỉ email</p>
                            <input
                                name="email"
                                className={cx('input')}
                                type="text"
                                value={state.email}
                                onChange={handleChangeInput}
                            />

                            <p className={cx('errors')}></p>
                        </div>
                    </div>

                    <div className={cx('row')}>
                        <div className={cx('col l-4')}>
                            <p className={cx('p')}>Địa chỉ thường trú</p>
                            <input
                                name="address"
                                className={cx('input')}
                                type="text"
                                value={state.address}
                                onChange={handleChangeInput}
                            />

                            <p className={cx('errors')}></p>
                        </div>
                        <div className={cx('col l-4')}>
                            <p className={cx('p')}>Số điện thoại</p>
                            <input
                                name="phoneNumber"
                                className={cx('input')}
                                type="text"
                                value={state.phoneNumber}
                                onChange={handleChangeInput}
                            />

                            <p className={cx('errors')}></p>
                        </div>
                        <div className={cx('col l-4')}>
                            <p className={cx('p')}>Ngày sinh</p>
                            <input
                                id="birth"
                                name="birth"
                                className={cx('input')}
                                type="date"
                                value={state.birth}
                                onChange={handleChangeInput}
                            />

                            <p className={cx('errors')}></p>
                        </div>
                    </div>

                    {/* //////////////////// Row col l-4 */}
                    <div className={cx('row')}>
                        <div className={cx('col l-4')}>
                            <p className={cx('p')}>Nơi sinh</p>
                            <input
                                name="birthPlace"
                                className={cx('input')}
                                type="text"
                                value={state.birthPlace}
                                onChange={handleChangeInput}
                            />
                            <p className={cx('errors')}></p>
                        </div>
                        <div className={cx('col l-4')}>
                            <p className={cx('p')}>Số CMND</p>
                            <input
                                name="identify"
                                className={cx('input')}
                                type="number"
                                value={state.identify}
                                onChange={handleChangeInput}
                            />

                            <p className={cx('errors')}></p>
                        </div>
                        <div className={cx('col l-4')}>
                            <p className={cx('p')}>Ngày cấp</p>
                            <input
                                name="date"
                                className={cx('input')}
                                type="date"
                                value={state.date}
                                onChange={handleChangeInput}
                            />

                            <p className={cx('errors')}></p>
                        </div>
                    </div>
                    <div className={cx('row')}>
                        <div className={cx('col l-4')}>
                            <p className={cx('p')}>Nơi cấp</p>
                            <input
                                name="dateOfPlace"
                                className={cx('input')}
                                type="text"
                                value={state.dateOfPlace}
                                onChange={handleChangeInput}
                            />

                            <p className={cx('errors')}></p>
                        </div>
                        <div className={cx('col l-4')}>
                            <p className={cx('p')}>
                                Giới tính
                                {state.sex === '' && <span style={{color: 'red',paddingLeft: '4px'}}>{selectionError}</span>}
                            </p>
                            <select
                                name="sex"
                                className={cx('input')}
                                required
                                value={state.sex}
                                onChange={handleChangeInput}
                            >
                                <option value="">-- Chọn giới tính --</option>
                                <option value="Nam">Nam</option>
                                <option value="Nữ">Nữ</option>
                            </select>
                        </div>
                        <div className={cx('col l-4')}>
                            <p className={cx('p')}>
                                Chức vụ
                                {state.job === '' && <span style={{color: 'red',paddingLeft: '4px'}}>{selectionError}</span>}
                            </p>
                            <select
                                name="job"
                                className={cx('input')}
                                required
                                value={state.job}
                                onChange={handleChangeInput}
                            >
                                <option value="">-- Chọn chức vụ --</option>
                                <option value="Nhân viên thời vụ">Nhân viên thời vụ</option>
                                <option value="Nhân viên bán thời gian">Nhân viên bán thời gian</option>
                            </select>
                        </div>
                    </div>
                    <div className={cx('row')}>
                        <p className={cx('p')}>Ảnh thẻ 3x4</p>
                    </div>
                    <div className={cx('row')}>
                        <input
                            id="file"
                            type="file"
                            name="staff_img"
                            onChange={(e) => {
                                setState({ ...state, staff_img: e.target.files[0] });
                                setShowNewImage(true);
                            }}
                        />
                    </div>
                    <div className={cx('row')}>
                        <div className={cx('wrap-img')}>
                            {showNewImage && state.staff_img && (
                                <div className={cx('row')}>
                                    <div className={cx('wrap-img')}>
                                        <img
                                            alt="not found"
                                            width={'350px'}
                                            height={'100%'}
                                            src={URL.createObjectURL(state.staff_img)}
                                        />
                                    </div>
                                </div>
                            )}
                            {!showNewImage && selectedStaff.staffImg && (
                                <img src={`http://localhost:3001/${selectedStaff?.staffImg}`} alt="Img not found" />
                            )}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer style={{ justifyContent: 'flex-start' }}>
                    <Button lightgreen small onClick={handleUpdate}>
                        Lưu lại
                    </Button>
                    <Button pink small onClick={handleClose}>
                        Hủy bỏ
                    </Button>
                </Modal.Footer>
            </Modal>
        </form>
    );
}

export default ModalUpdateStaff;
