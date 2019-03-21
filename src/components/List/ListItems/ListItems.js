import React from 'react';

import ListItem from './ListItem/ListItem';
import './ListItems.css';

const listItems = props => {
    const tasks = props.tasks.map((task, index) => {
        return <ListItem 
            key={task.id}
            taskName={task.taskName}
            completed={task.completed}
            onTaskCompletion={props.onTaskCompletion.bind(this, index)}
            onListItemDeletion={props.onListItemDeletion.bind(this, index)} />
    });

    return (
        <ul className="ListItems">
           {tasks}
        </ul>
    );
}

export default listItems;