import classNames from 'classnames/bind';
import Button from '~/components/Button';
import Clock from '~/components/Clock';
import HeaderDoc from '~/components/Layout/components/HeaderDoc';
import styles from './Doc1.module.scss';
const cx = classNames.bind(styles);

function Doc1() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-clock')}>
                <HeaderDoc text="Quản lí tài khoản" />
                <Clock />
            </div>
            <div className={cx('content-doc')}>
                <div className={cx('wrap-btn')}>
                    <Button>
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
            </div>
        </div>
    );
}

export default Doc1;
