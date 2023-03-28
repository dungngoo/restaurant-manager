import classNames from 'classnames/bind';
import Button from '~/components/Button';
import Clock from '~/components/Clock';
import HeaderDoc from '~/components/Layout/components/HeaderDoc';
import styles from './Doc1.module.scss';
const cx = classNames.bind(styles);

function Doc1() {
    const listMembers = [
        {
            id: '#CD3125',
            name: 'Ngô Quốc Dũng',
            img: 'https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-1/331787224_851102829289025_5870547377214840913_n.jpg?stp=dst-jpg_s320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ZDCxySxYszEAX8wcdmp&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfAq67RuqhUvGAhmGK1YttMIdXDnxKoeDC994GrNJQ7xQw&oe=6424090C',
            address: ' 155-157 Trần Quốc Thảo, Quận 3, Hồ Chí Minh',
            bird: '04/10/2001',
            sex: 'Nam',
            phone: '0328038817',
            job: 'Bán xe',
        },
        {
            id: '#CD3125',
            name: 'Ngô Quốc Dũng',
            img: 'https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-1/331787224_851102829289025_5870547377214840913_n.jpg?stp=dst-jpg_s320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ZDCxySxYszEAX8wcdmp&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfAq67RuqhUvGAhmGK1YttMIdXDnxKoeDC994GrNJQ7xQw&oe=6424090C',
            address: ' 155-157 Trần Quốc Thảo, Quận 3, Hồ Chí Minh',
            bird: '04/10/2001',
            sex: 'Nam',
            phone: '0328038817',
            job: 'Bán xe',
        },
        {
            id: '#CD3125',
            name: 'Ngô Quốc Dũng',
            img: 'https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-1/331787224_851102829289025_5870547377214840913_n.jpg?stp=dst-jpg_s320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ZDCxySxYszEAX8wcdmp&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfAq67RuqhUvGAhmGK1YttMIdXDnxKoeDC994GrNJQ7xQw&oe=6424090C',
            address: ' 155-157 Trần Quốc Thảo, Quận 3, Hồ Chí Minh',
            bird: '04/10/2001',
            sex: 'Nam',
            phone: '0328038817',
            job: 'Bán xe',
        },
    ];

    return (
        <div className={cx('wrapper-doc')}>
            <div className={cx('header-clock')}>
                <HeaderDoc text="Quản lí tài khoản" />
                <Clock />
            </div>
            <div className={cx('content-doc')}>
                <div className={cx('wrap-btn')}>
                    <Button green>
                        <i class="fa-solid fa-plus"></i>
                        Tạo mới nhân viên
                    </Button>
                    <Button green>
                        <i class="fa-solid fa-file-arrow-up"></i>
                        Tải từ file
                    </Button>
                    <Button purple>
                        <i class="fa-solid fa-print"></i>
                        In dữ liệu
                    </Button>
                    <Button pink>
                        <i class="fa-solid fa-clone"></i>
                        Sao chép
                    </Button>
                    <Button grey>
                        <i class="fa-solid fa-file-excel"></i>
                        Xuất file
                    </Button>
                    <Button yellow>
                        <i class="fa-solid fa-file-pdf"></i>
                        Xuất PDF
                    </Button>
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
                                    <th> ID nhân viên</th>
                                    <th width="250" className={cx('text-align-left')}>
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
                                    <th width="80">Giới tính</th>
                                    <th>SĐT</th>
                                    <th width="100">Chức vụ</th>
                                    <th width="130">Tính năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Hiện từng nhân viên cụ thể */}
                                {listMembers.map((member, index) => (
                                    <tr key={index}>
                                        <td>
                                            <input className={cx('checkbox')} type="checkbox" name="check1" value="1" />
                                        </td>
                                        <td>
                                            <p>{member.id}</p>
                                        </td>
                                        <td>
                                            <p className={cx('text-align-left')}>{member.name}</p>
                                        </td>
                                        <td>
                                            <img className={cx('img-person')} src={member.img} alt="" />
                                        </td>
                                        <td>
                                            <p className={cx('text-align-left')}>{member.address}</p>
                                        </td>
                                        <td>
                                            <p>{member.bird}</p>
                                        </td>
                                        <td>
                                            <p>{member.sex}</p>
                                        </td>
                                        <td>
                                            <p>{member.phone}</p>
                                        </td>
                                        <td>
                                            <p>{member.job}</p>
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
