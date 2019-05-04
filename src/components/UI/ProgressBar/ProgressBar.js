import React from 'react';

import './ProgressBar.css';

const progressBar = props => (
    <div className="ProgressBar">
        <div 
            className="ProgressBar__done"
            style={{ width: props.doneWidth + '%' }}
        ></div>
        <div 
            className="ProgressBar__left"
            style={{ width: props.leftWidth + '%' }}
        ></div>
    </div>
);

export default progressBar;