import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Pagination.module.scss';
import classNames from 'classnames/bind';
import { Link, useLocation, useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
    paginationKey: PropTypes.string.isRequired,
};

Pagination.defaultProps = {
    onPageChange: null,
};

function Pagination(props) {
    const { pagination, onPageChange, paginationKey } = props;
    const { _page, _limit, _totalRows } = pagination;
    const totalPages = Math.ceil(_totalRows / _limit);
    const location = useLocation();
    const { type } = useParams();
    useEffect(() => {
        window.scroll(0, 0);
    }, [onPageChange]);

    function handlePageChange(event, newPage) {
        event.preventDefault();
        if (onPageChange) {
            onPageChange(newPage);
        }
    }
    console.log(type);
    return (
        <ul className={cx('pagination')}>
            <li onClick={(event) => handlePageChange(event, 1)} className={cx('paginationItem')}>
                {paginationKey === 'library' ? (
                    <Link
                        to={`/libraries/${type}`}
                        className={cx('paginationItemLink', {
                            active: location.pathname && location.search === '',
                        })}
                    >
                        1
                    </Link>
                ) : (
                    <Link
                        to={`/news/`}
                        className={cx('paginationItemLink', {
                            active: location.pathname && location.search === '',
                        })}
                    >
                        1
                    </Link>
                )}
            </li>
            {Array.from({ length: totalPages - 1 }, (_, i) => (
                <li key={i} onClick={(event) => handlePageChange(event, i + 2)} className={cx('paginationItem')}>
                    {paginationKey === 'library' ? (
                        <Link
                            to={`/libraries/${type}?_page=${i + 2}&_limit=${_limit}`}
                            className={cx('paginationItemLink', {
                                active: location.search.includes(`_page=${i + 2}`),
                            })}
                        >
                            {i + 2}
                        </Link>
                    ) : (
                        <Link
                            to={`/news/?_page=${i + 2}&_limit=${_limit}`}
                            className={cx('paginationItemLink', {
                                active: location.search.includes(`_page=${i + 2}`),
                            })}
                        >
                            {i + 2}
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default Pagination;
