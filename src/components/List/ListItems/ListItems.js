import React from 'react';

import ListItem from './ListItem/ListItem';

const listItems = props => {
    const tasks = props.tasks.map(task => {
        return <ListItem 
            key={task.id}
            taskName={task.taskName} />
    });

    return (
        <ul>
           {tasks}
        </ul>
    );
}

export default listItems;