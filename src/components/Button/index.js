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
    green,
    yellow,
    purple,
    pink,
    type,
    grey,
    lightgreen,
    lightorange,
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
        type,
        disabled,
        rouded,
        small,
        large,
        green,
        yellow,
        purple,
        pink,
        grey,
        lightgreen,
        lightorange,
    });

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    } else if (type) {
        props.type = type;
        Comp = 'input';
    }

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
