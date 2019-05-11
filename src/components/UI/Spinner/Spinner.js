import React from 'react';

const spinner = props => {
    let spinner = null;

    switch (props.type) {
        case 'bounce':
            spinner = (
                <div class="spinner">
                    <div class="double-bounce1"></div>
                    <div class="double-bounce2"></div>
                </div>
            );
            break;
        default:
            spinner = (
                <div class="loader">Loading...</div>
            );
            break;
    }

    return spinner;
}

export default spinner;