import React from 'react';

import ListItem from './ListItem/ListItem';
import './ListItems.css';

const listItems = props => {
    let filteredTasks = null;

    switch (props.tasksToDisplay) {
        case 'all':
            filteredTasks = props.tasks;
            break;
        case 'active':
            filteredTasks = props.tasks.filter(task => !task.completed);
            break;
        case 'completed':
            filteredTasks = props.tasks.filter(task => task.completed);
            break;
        default:
            filteredTasks = props.tasks;
            break;
    }

    const tasks = filteredTasks.map(task => {
        return <ListItem 
            key={task.id}
            taskName={task.taskName}
            completed={task.completed}
            buttonsHidden={task.buttonsHidden}
            onTaskNameClick={() => props.onTaskNameClick(task.id)}
            onTaskCompletion={() => props.onTaskCompletion(task.id)}
            onListItemDeletion={() => props.onListItemDeletion(task.id)} />
    });

    return (
        <ul className="ListItems">
           {tasks}
        </ul>
    );
}

export default listItems;