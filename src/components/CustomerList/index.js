import React from 'react';
import styles from './CustomerList.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function CustomerList({ customers }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên khách hàng</th>
                    <th>Địa chỉ</th>
                    <th>Email</th>
                    <th>SĐT</th>
                </tr>
            </thead>
            <tbody>
                {customers.map((customer) => (
                    <tr key={customer.id}>
                        <td>{customer.id}</td>
                        <td>{customer.name}</td>
                        <td>{customer.address}</td>
                        <td>{customer.email}</td>
                        <td>{customer.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default CustomerList;
