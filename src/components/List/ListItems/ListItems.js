import React from 'react';

import ListItem from './ListItem/ListItem';
import './ListItems.css';

const listItems = ({
    tasks,
    tasksToDisplay,
    onTaskClick,
    onTaskCompletion,
    onTaskDeletion
}) => {
    let filteredTasks = null;

    switch (tasksToDisplay) {
        case 'all':
            filteredTasks = tasks;
            break;
        case 'active':
            filteredTasks = tasks.filter(task => !task.completed);
            break;
        case 'completed':
            filteredTasks = tasks.filter(task => task.completed);
            break;
        default:
            filteredTasks = tasks;
            break;
    }

    return (
        <ul className="ListItems">
           {filteredTasks.map(task => {
                return <ListItem 
                    key={task.id}
                    taskName={task.taskName}
                    completed={task.completed}
                    buttonsHidden={task.buttonsHidden}
                    onTaskClick={() => onTaskClick(task.id)}
                    onTaskCompletion={() => onTaskCompletion(task.id)}
                    onListItemDeletion={() => onTaskDeletion(task.id)} />
            })}
        </ul>
    );
}

export default listItems;