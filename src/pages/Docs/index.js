import classNames from 'classnames/bind';
import styles from './Docs.module.scss';

const cx = classNames.bind(styles);

function Docs() {
    return (
        <div className={cx('wrapper-doc')}>
            <div className={cx('img-wrapper')}>
                <img
                    src="https://www.thereveriesaigon.com/wp-content/uploads/2021/11/DVS-interior-4.jpg"
                    alt="Ảnh minh họa"
                    className={cx('img')}
                />
                <div className={cx('text-wrapper')}>
                    <h3>CHÀO MỪNG BẠN ĐÃ ĐẾN VỚI HỆ THỐNG QUẢN LÝ CỦA NHÀ HÀNG TIỆC CƯỚI DH PALACE</h3>
                </div>
            </div>
        </div>
    );
}

export default Docs;
export { default as Doc1 } from './Doc1';
export { default as Doc2 } from './Doc2';
export { default as Doc3 } from './Doc3';
export { default as Doc4 } from './Doc4';
export { default as Doc5 } from './Doc5';
export { default as Doc6 } from './Doc6';
