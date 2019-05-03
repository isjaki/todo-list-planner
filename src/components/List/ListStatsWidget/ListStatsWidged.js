import React from 'react';

import Button from '../../UI/Button/Button';
import './ListStatsWidget.css';

const listStatsWidget = props => {
    const activeTasksArray = props.tasks.filter(task => {
        return !task.completed;
    });

    const completedTasksArray = props.tasks.filter(task => {
        return task.completed;
    });

    const activeTasks = activeTasksArray.length;
    const completedTasks = completedTasksArray.length;

    return (
        <div className="ListStatsWidget">
            <div className="ListStatsWidget__item">Active: {activeTasks}</div>
            <div className="ListStatsWidget__item">Completed: {completedTasks}</div>
            <div className="ListStatsWidget__item ListStatsWidget__item-sort">
                <span>Sort by:</span>
                <Button className="ListStatsWidget__Button">All</Button>
                <Button className="ListStatsWidget__Button">Active</Button>
                <Button className="ListStatsWidget__Button">Completed</Button>
            </div>
            <div className="ProgressBar">
                <div className="ProgressBar__Done"></div>
                <div className="ProgressBar__Left"></div>
            </div>
        </div>
    );
}

export default listStatsWidget;