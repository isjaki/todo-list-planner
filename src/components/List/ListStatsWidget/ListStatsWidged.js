import React from 'react';

import Button from '../../UI/Button/Button';
import './ListStatsWidget.css';

const listStatsWidget = props => {

    return (
        <div className="ListStatsWidget">
            <div>Active: 0</div>
            <div>Completed: 0</div>
            <div>
                Sort by:
                <Button>All</Button>
                <Button>Active</Button>
                <Button>Completed</Button>
            </div>
        </div>
    );
}

export default listStatsWidget;