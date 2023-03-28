import classNames from 'classnames/bind';
import styles from './Docs.module.scss';
const cx = classNames.bind(styles);

function Docs() {
    return (
        <div className={cx('wrapper-doc')}>
            <h1>Hello Docs</h1>
        </div>
    );
}

export default Docs;
export { default as Doc1 } from './Doc1';
export { default as Doc2 } from './Doc2';
export { default as Doc3 } from './Doc3';
export { default as Doc4 } from './Doc4';
export { default as Doc5 } from './Doc5';
