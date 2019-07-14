import React from 'react';
import classNames from 'classnames';

import Button from '../../UI/Button/Button';
import ProgressBar from '../../UI/ProgressBar/ProgressBar';
import './ListStatsWidget.css';

const listStatsWidget = ({
    tasks,
    tasksToDisplay,
    filterTasks
}) => {
    const activeTasksArray = tasks.filter(task => !task.completed);
    const completedTasksArray = tasks.filter(task => task.completed);

    const activeTasks = activeTasksArray.length;
    const completedTasks = completedTasksArray.length;
    const allTasks = activeTasks + completedTasks;

    let tasksDone = Math.round(completedTasks * 100 / allTasks);
    let tasksLeft = Math.round(activeTasks * 100 / allTasks);

    if (isNaN(tasksLeft) && isNaN(tasksDone)) {
        tasksDone = 0;
        tasksLeft = 0;
    }

    return (
        <div className="ListStatsWidget">
            <div className="ListStatsWidget__wrap">
                <div className="ListStatsWidget__item">
                    Active: {`${activeTasks} (${tasksLeft + '%'})`}
                </div>
                <div className="ListStatsWidget__item">
                    Completed: {`${completedTasks} (${tasksDone + '%'})`}
                </div>
                <div className="ListStatsWidget__item ListStatsWidget__item-sort">
                    <span>Filter by:</span>
                    <Button 
                        className={classNames(
                            'ListStatsWidget__Button', {active: tasksToDisplay === 'all'}
                            )}
                        clicked={() => filterTasks('all')}
                    >All</Button>
                    <Button 
                        className={classNames(
                            'ListStatsWidget__Button', {active: tasksToDisplay === 'active'}
                            )}
                        clicked={() => filterTasks('active')}
                    >Active</Button>
                    <Button 
                        className={classNames(
                            'ListStatsWidget__Button', {active: tasksToDisplay === 'completed'}
                            )}
                        clicked={() => filterTasks('completed')}
                    >Completed</Button>
                </div>
            </div>
            <ProgressBar 
                doneWidth={tasksDone}
                leftWidth={tasksLeft}
            />
        </div>
    );
}

export default listStatsWidget;