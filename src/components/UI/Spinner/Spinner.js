import React from 'react';

import './Spinner.css';

const spinner = props => {
    let spinner = null;

    switch (props.type) {
        case 'bounce':
            spinner = (
                <div className="spinner">
                    <div className="double-bounce1"></div>
                    <div className="double-bounce2"></div>
                </div>
            );
            break;
        default:
            spinner = (
                <div className="loader">Loading...</div>
            );
            break;
    }

    return spinner;
}

export default spinner;