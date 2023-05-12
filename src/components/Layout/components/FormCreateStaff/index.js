import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Button from '~/components/Button';
import axios from 'axios';
import Example from '~/components/Modal';
import HeaderDoc from '../HeaderDoc';
import styles from './FormCreateStaff.module.scss';
const cx = classNames.bind(styles);

function FormCreateStaff() {
    const [state, setState] = useState({
        fullName: '',
        email: '',
        address: '',
        date: '',
        birth: '',
        birthPlace: '',
        dateOfPlace: '',
        phoneNumber: '',
        identify: '',
        sex: '',
        job: '',
        staff_img: undefined,
    });
    const [formErrors, setFormErrors] = useState({});
    // Error trùng lợp
    const [existErrors, setExistErrors] = useState('');
    const [isSubmit, setIsSubmit] = useState(false);
    const [show, setShow] = useState(false);

    // Hàm formatDate đổi kiểu dữ liệu date
    function changeFormat(val) {
        const myArr = val.split('-');

        let year = myArr[0];
        let month = myArr[1];
        let day = myArr[2];

        let formatDate = day + '/' + month + '/' + year;
        return formatDate;
    }

    // bắt sự kiện nhập dữ liệu từ bàn phím
    const handleChangeInput = (evt) => {
        setState({
            ...state,
            [evt.target.name]: evt.target.value,
        });
        if (evt.target.name === 'staff_img') {
            setState({
                ...state,
                staff_img: evt.target.files[0],
            });
        }
        console.log(state);
    };

    const handlesubbmitForm = (event) => {
        event.preventDefault();
        setFormErrors(validate(state));
        setIsSubmit(true);
    };

    // async function uploadToS3(file) {
    //     const formData = new FormData();
    //     formData.append('file', file);
    //     try {
    //         const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/upload`, formData, {
    //             headers: { 'Content-Type': 'multipart/form-data' },
    //         });

    //         return res.data.Location;
    //     } catch (err) {
    //         console.error(err);
    //     }
    // }
    async function createStaff() {
        // const staffImg = await uploadToS3(state.staff_img);
        // console.log(staffImg);
        const formData = new FormData();
        formData.append('fullname', state.fullName);
        formData.append('email', state.email);
        formData.append('address', state.address);
        formData.append('birth', changeFormat(state.birth).toString());
        formData.append('birthPlace', state.birthPlace);
        formData.append('date', changeFormat(state.date).toString());
        formData.append('dateOfPlace', state.dateOfPlace);
        formData.append('phonenumber', state.phoneNumber.toString());
        formData.append('identify', state.identify);
        formData.append('job_type', state.job);
        formData.append('sex', state.sex.toString());
        formData.append('staffImg', state.staff_img);

        axios
            .post(`${process.env.REACT_APP_SERVER_URL}/staff/`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            })
            .then(async function redirect() {
                await window.location.replace('/admin/4');
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err.response);
                    setExistErrors(Object.values(err?.response?.data?.err));
                }
                console.log(existErrors);
            });
    }
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            createStaff();
        }
    }, [formErrors]);

    //  Hàm validate form xử lí các dữ liệu nhập từ phía người dùng
    const validate = (values) => {
        const errors = {};
        // Regex theo dữ liệu mong muốn
        // fullName: '',
        // email: '',
        // address: '',
        // date: '',
        // birth: '',
        // birthPlace: '',
        // dateOfPlace: '',
        // phoneNumber: '',
        // identify: '',
        // staff_img: undefined,
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // var adate = values.birth.getDate();
        // var amonth = values.birth.getMonth() + 1;
        // var ayear = values.birth.getFullYear();
        // console.log(ayear + '-' + adate + '-' + amonth);

        // regex mã căn cước công dân
        const numberOnly = /^\d*$/;
        const phoneNumberOnly = /^0\d{9,10}$/;
        const identifyRegex = /0(1|2|4|6|8)[0-9]{10}$/;
        const identifyRegex1 =
            /0(10|11|12|14|15|17|19|20|22|23|25|26|27|30|31|33|34|35|36|37|38|40|42|43|44|45|46|48|49|51|52|54|56|58|60|62|64|66|67|68|70|72|74|75|77|79|80|82|83|84|86|87|89|91|92|93|94|95|96)[0-9]{9}$/;

        const birthDate = new Date(values.birth);
        const dtDOB = new Date();
        const date = new Date(values.date);
        if (!values.fullName) {
            errors.fullName = 'Họ tên không được để trống!';
        }
        if (!values.email) {
            errors.email = 'Email không được để trống!';
        } else if (!regex.test(values.email)) {
            errors.email = 'Email này không hợp lệ!';
        }
        if (!values.address) {
            errors.address = 'Địa chỉ không được để trống!';
        }
        if (!values.phoneNumber) {
            errors.phoneNumber = 'Số điện thoai không được để trống!';
        } else if (!numberOnly.test(values.phoneNumber)) {
            errors.phoneNumber = 'Số điện thoai không được nhập chữ!';
        } else if (!phoneNumberOnly.test(values.phoneNumber)) {
            errors.phoneNumber = 'Số điện thoai không hợp lệ!';
        }
        if (!values.birth) {
            errors.birth = 'Ngày sinh không được để trống!';
        } else if (values.birth) {
            if (birthDate >= dtDOB) {
                errors.birth = 'Ngày sinh không được lớn hơn ngày hiện tại!';
            } else if (dtDOB.getFullYear() - birthDate.getFullYear() < 18) {
                errors.birth = 'Nhân viên không được dưới 18 tuổi.';
            }

            if (dtDOB.getFullYear() - birthDate.getFullYear() === 18) {
                //CD: 11/06/2018 and DB: 15/07/2000. Will turned 18 on 15/07/2018.
                if (dtDOB.getMonth() < birthDate.getMonth()) {
                    errors.birth = 'Nhân viên không được dưới 18 tuổi.';
                }
                if (dtDOB.getMonth() === birthDate.getMonth()) {
                    //CD: 11/06/2018 and DB: 15/06/2000. Will turned 18 on 15/06/2018.
                    if (dtDOB.getDate() < birthDate.getDate()) {
                        errors.birth = 'Nhân viên không được dưới 18 tuổi.';
                    }
                }
            }
        }
        if (!values.birthPlace) {
            errors.birthPlace = 'Nơi sinh không được để trống!';
        }
        if (!values.identify) {
            errors.identify = 'Chứng minh nhân dân không được để trống!';
        } else if (!identifyRegex.test(values.identify) && !identifyRegex1.test(values.identify))
            errors.identify = 'Chứng minh nhân dân không hợp lệ!';
        if (!values.date) {
            errors.date = 'Ngày cấp không được để trống!';
        } else if (values.date) {
            if (date.getFullYear() - birthDate.getFullYear() < 16) {
                errors.date = 'Ngày cấp không hợp lệ!';
            }

            if (date.getFullYear() - birthDate.getFullYear() === 16) {
                //CD: 11/06/2018 and DB: 15/07/2000. Will turned 18 on 15/07/2018.
                if (date.getMonth() < birthDate.getMonth()) {
                    errors.date = 'Ngày cấp không hợp lệ!';
                }
                if (date.getMonth() === birthDate.getMonth()) {
                    //CD: 11/06/2018 and DB: 15/06/2000. Will turned 18 on 15/06/2018.
                    if (date.getDate() < birthDate.getDate()) {
                        errors.date = 'Ngày cấp không hợp lệ!';
                    }
                }
            }
        }
        if (!values.dateOfPlace) {
            errors.dateOfPlace = 'Nơi cấp không được để trống!';
        }

        if (!values.staff_img) {
            errors.staff_img = 'Ảnh thẻ 3x4 không được để trống!';
        }
        return errors;
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className={cx('wrapper-doc')}>
            <div className={cx('header-clock')}>
                <HeaderDoc text="Danh sách nhân viên / Thêm nhân viên" />
            </div>
            <div className={cx('content-doc')}>
                <h5 className={cx('h5')}>Tạo mới nhân viên</h5>
                <div className={cx('wrap-btn', 'pt10')}>
                    <Button green onClick={handleShow} variant="primary">
                        <i className="fa-solid fa-plus"></i>
                        Tạo chức vụ mới
                    </Button>
                    <Example show={show} handleClose={handleClose} keyboard={true} />
                </div>
                {existErrors && <h2 className={cx('errors', 'text-align')}>Dữ liệu đã tồn tại: {existErrors}</h2>}
                <form className={cx('wrap-content')} onSubmit={handlesubbmitForm}>
                    <div className={cx('row')}>
                        <div className={cx('col l-4')}>
                            <p className={cx('p')}>Họ và tên</p>
                            <input
                                name="fullName"
                                className={cx('input')}
                                type="text"
                                value={state.fullName}
                                onChange={handleChangeInput}
                            />
                            <p className={cx('errors')}>{formErrors.fullName}</p>
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
                            <p className={cx('errors')}>{formErrors.email}</p>
                        </div>
                        <div className={cx('col l-4')}>
                            <p className={cx('p')}>Địa chỉ thường trú</p>
                            <input
                                name="address"
                                className={cx('input')}
                                type="text"
                                value={state.address}
                                onChange={handleChangeInput}
                            />
                            <p className={cx('errors')}>{formErrors.address}</p>
                        </div>
                    </div>

                    <div className={cx('row', 'pb20')}>
                        <div className={cx('col l-3')}>
                            <p className={cx('p')}>Số điện thoại</p>
                            <input
                                name="phoneNumber"
                                className={cx('input')}
                                type="text"
                                value={state.phoneNumber}
                                onChange={handleChangeInput}
                            />
                            <p className={cx('errors')}>{formErrors.phoneNumber}</p>
                        </div>
                        <div className={cx('col l-3')}>
                            <p className={cx('p')}>Ngày sinh</p>
                            <input
                                id="birth"
                                name="birth"
                                className={cx('input')}
                                type="date"
                                value={state.birth}
                                onChange={handleChangeInput}
                            />
                            <p className={cx('errors')}>{formErrors.birth}</p>
                        </div>
                        <div className={cx('col l-3')}>
                            <p className={cx('p')}>Nơi sinh</p>
                            <input
                                name="birthPlace"
                                className={cx('input')}
                                type="text"
                                value={state.birthPlace}
                                onChange={handleChangeInput}
                            />
                            <p className={cx('errors')}>{formErrors.birthPlace}</p>
                        </div>
                        <div className={cx('col l-3')}>
                            <p className={cx('p')}>Số CMND</p>
                            <input
                                name="identify"
                                className={cx('input')}
                                type="number"
                                value={state.identify}
                                onChange={handleChangeInput}
                            />
                            <p className={cx('errors')}>{formErrors.identify}</p>
                        </div>
                    </div>

                    {/* //////////////////// Row col l-3 */}
                    <div className={cx('row', 'pb20')}>
                        <div className={cx('col l-3')}>
                            <p className={cx('p')}>Ngày cấp</p>
                            <input
                                name="date"
                                className={cx('input')}
                                type="date"
                                value={state.date}
                                onChange={handleChangeInput}
                            />
                            <p className={cx('errors')}>{formErrors.date}</p>
                        </div>
                        <div className={cx('col l-3')}>
                            <p className={cx('p')}>Nơi cấp</p>
                            <input
                                name="dateOfPlace"
                                className={cx('input')}
                                type="text"
                                value={state.dateOfPlace}
                                onChange={handleChangeInput}
                            />
                            <p className={cx('errors')}>{formErrors.dateOfPlace}</p>
                        </div>
                        <div className={cx('col l-3')}>
                            <p className={cx('p')}>Giới tính</p>
                            <select
                                name="sex"
                                className={cx('input')}
                                value={state.sex}
                                onChange={handleChangeInput}
                                required
                            >
                                <option value="">-- Chọn giới tính --</option>
                                <option value="Nam">Nam</option>
                                <option value="Nữ">Nữ</option>
                            </select>
                        </div>
                        <div className={cx('col l-3')}>
                            <p className={cx('p')}>Chức vụ</p>
                            <select
                                name="job"
                                className={cx('input')}
                                value={state.job}
                                onChange={handleChangeInput}
                                required
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
                        <input id="file" type="file" onChange={handleChangeInput} name="staff_img" />
                        <p className={cx('errors')}>{formErrors.staff_img}</p>
                    </div>
                    {state.staff_img && (
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
                    <div className={cx('wrap-btn', 'no-border')}>
                        <Button primary onClick={handlesubbmitForm}>
                            Gửi
                        </Button>
                        <Button pink>Hủy</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormCreateStaff;
