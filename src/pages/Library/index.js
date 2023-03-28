import classNames from 'classnames/bind';
import { useState } from 'react';
import ContentLibrary from '~/components/Layout/components/ContentLibrary';
import HeaderContent from '~/components/Layout/components/HeaderContent';
import styles from './Library.module.scss';
const cx = classNames.bind(styles);

function Libary() {
    return (
        <div className={cx('container')}>
            <HeaderContent
                title="Hình ảnh"
                li1="1. Món ăn"
                li2="2. Sự kiện cưới"
                li3="3. Sự kiện công ty"
                li4="4. Sự kiện cá nhân khác"
            />
            <div className={cx('wrapper')}>
                <ContentLibrary />
            </div>
        </div>
    );
}

export default Libary;
