import classNames from 'classnames/bind';
import styles from './Doc2.module.scss';
import Clock from '~/components/Clock';
import HeaderDoc from '~/components/Layout/components/HeaderDoc';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

function Doc2() {
    const listLobbys = [
        {
            id: '#RUBY1',
            name: 'Sảnh Ruby',
            description: 'Sảnh tiệc cưới sang trọng và đầy cảm giác hiện đại',
        },
    ];
    return (
        <div className={cx('wrapper-doc')}>
            <div className={cx('header-clock')}>
                <HeaderDoc text="Quản lí tiệc" />
                <Clock />
            </div>
            <div className={cx('content-doc')}>
                <div className={cx('wrap-btn')}>
                    <Button green>
                        <i class="fa-solid fa-plus"></i>
                        Thêm sảnh
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
                                    <th> ID sảnh</th>
                                    <th width="300" className={cx('text-align-left')}>
                                        Tên sảnh
                                    </th>

                                    <th width="640" className={cx('text-align-left')}>
                                        Mô tả
                                    </th>
                                    <th width="140">Tính năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Hiện từng nhân viên cụ thể */}
                                {listLobbys.map((lobby, index) => (
                                    <tr key={index}>
                                        <td>
                                            <input className={cx('checkbox')} type="checkbox" name="check1" value="1" />
                                        </td>
                                        <td>
                                            <p>{lobby.id}</p>
                                        </td>
                                        <td>
                                            <p className={cx('text-align-left')}>{lobby.name}</p>
                                        </td>
                                        {/* <td>
                                            <img className={cx('img-person')} src={lobby.description} alt="" />
                                        </td> */}
                                        <td>
                                            <p className={cx('text-align-left')}>{lobby.description}</p>
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

export default Doc2;
