import React from 'react';

import Button from '../../UI/Button/Button';
import './ListStatsWidget.css';

const listStatsWidget = props => {
    const activeTasksArray = props.tasks.filter(task => !task.completed);

    const completedTasksArray = props.tasks.filter(task => task.completed);

    const activeTasks = activeTasksArray.length;
    const completedTasks = completedTasksArray.length;
    const allTasks = activeTasks + completedTasks;

    const progressBarDone = Math.round(completedTasks * 100 / allTasks);
    const progressBarLeft = Math.round(activeTasks * 100 / allTasks);

    return (
        <div className="ListStatsWidget">
            <div className="ListStatsWidget__wrap">
                <div className="ListStatsWidget__item">Active: {activeTasks}</div>
                <div className="ListStatsWidget__item">Completed: {completedTasks}</div>
                <div className="ListStatsWidget__item ListStatsWidget__item-sort">
                    <span>Filter by:</span>
                    <Button 
                        className="ListStatsWidget__Button"
                        clicked={() => props.sortTasks('all')}
                    >All</Button>
                    <Button 
                        className="ListStatsWidget__Button"
                        clicked={() => props.sortTasks('active')}
                    >Active</Button>
                    <Button 
                        className="ListStatsWidget__Button"
                        clicked={() => props.sortTasks('completed')}
                    >Completed</Button>
                </div>
            </div>
            <div className="ProgressBar">
                <div 
                    className="ProgressBar__done"
                    style={{ width: progressBarDone + '%' }}
                ></div>
                <div 
                    className="ProgressBar__left"
                    style={{ width: progressBarLeft + '%' }}
                ></div>
            </div>
        </div>
    );
}

export default listStatsWidget;