import React from 'react';

import './ProgressBar.css';

const progressBar = ({ doneWidth, leftWidth }) => (
    <div className="ProgressBar">
        <div 
            className="ProgressBar__done"
            style={{ width: doneWidth + '%' }}
        ></div>
        <div 
            className="ProgressBar__left"
            style={{ width: leftWidth + '%' }}
        ></div>
    </div>
);

export default progressBar;