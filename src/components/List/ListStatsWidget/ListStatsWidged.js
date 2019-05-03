import React from 'react';

import Button from '../../UI/Button/Button';
import './ListStatsWidget.css';

const listStatsWidget = props => {
    return (
        <div className="ListStatsWidget">
            <div className="ListStatsWidget__item">Active: 0</div>
            <div className="ListStatsWidget__item">Completed: 0</div>
            <div className="ListStatsWidget__item ListStatsWidget__item-sort">
                <span>Sort by:</span>
                <Button className="ListStatsWidget__Button">All</Button>
                <Button className="ListStatsWidget__Button">Active</Button>
                <Button className="ListStatsWidget__Button">Completed</Button>
            </div>
        </div>
    );
}

export default listStatsWidget;