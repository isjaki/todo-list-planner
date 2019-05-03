import React from 'react';

import Button from '../../UI/Button/Button';
import './ListStatsWidget.css';

const listStatsWidget = props => {
    return (
        <div className="ListStatsWidget">
            <div>Active: 0</div>
            <div>Completed: 0</div>
            <div>
                <span>Sort by:</span>
                <Button className="ListStatsWidget__Button">All</Button>
                <Button className="ListStatsWidget__Button">Active</Button>
                <Button className="ListStatsWidget__Button">Completed</Button>
            </div>
        </div>
    );
}

export default listStatsWidget;