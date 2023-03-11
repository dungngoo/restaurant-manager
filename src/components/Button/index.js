import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    children,
    primary,
    outline,
    text,
    disabled,
    rouded,
    small,
    large,
    onClick,
    className,
    passProps,
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        disabled,
        rouded,
        small,
        large,
    });

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
