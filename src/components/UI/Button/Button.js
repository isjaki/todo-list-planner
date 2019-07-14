import React from 'react';

import './Button.css';

const button = ({
    className,
    disabled,
    children,
    clicked
}) => (
    <button
        onClick={clicked}
        className={className}
        disabled={disabled}
    >{children}</button>
);

export default button;