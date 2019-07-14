import React from 'react';

import Button from '../../../UI/Button/Button';
import './ListItem.css';

const listItem = ({
    buttonsHidden,
    completed,
    taskName,
    onTaskClick,
    onTaskCompletion,
    onTaskDeletion
}) => {

    const mouseDownHandler = event => {
        event.preventDefault();
    }

    const completedButtonClasses = ['ListItemButton', 'Completed'];
    const deleteButtonClasses = ['ListItemButton', 'Delete'];

    if (buttonsHidden) {
        completedButtonClasses.push('Hidden');
        deleteButtonClasses.push('Hidden');
    }

    return (
        <li className="ListItem">
            {completed ? <i className="fas fa-check-square"></i> : <i className="fas fa-clock"></i>}
            <span
                className="ListItem__TaskName"
                onClick={onTaskClick}
                onMouseDown={mouseDownHandler}
            >{taskName}</span>
            <Button
                className={completedButtonClasses.join(' ')}
                clicked={onTaskCompletion}
            >
                {completed ? <i className="fas fa-redo-alt"></i> : <i className="fas fa-check"></i>}
            </Button>
            <Button
                className={deleteButtonClasses.join(' ')}
                clicked={onTaskDeletion}
            >
                <i className="fas fa-times"></i>
            </Button>
        </li>
    );
}

export default listItem;