import React from 'react';

import ListItem from './ListItem/ListItem';
import './ListItems.css';

const listItems = props => {
    const tasks = props.tasks.map(task => {
        return <ListItem 
            key={task.id}
            taskName={task.taskName} />
    });

    return (
        <ul className="ListItems">
           {tasks}
        </ul>
    );
}

export default listItems;