import React from 'react';

import Button from '../../../UI/Button/Button';
import './ListItem.css';

const listItem = props => {

    const mouseDownHandler = event => {
        event.preventDefault();
    }

    const completedButtonClasses = ['ListItemButton', 'Completed'];
    const deleteButtonClasses = ['ListItemButton', 'Delete'];

    if (props.buttonsHidden) {
        completedButtonClasses.push('Hidden');
        deleteButtonClasses.push('Hidden');
    }

    return (
        <li className="ListItem">
            {props.completed ? <i className="fas fa-check-square"></i> : <i className="fas fa-clock"></i>}
            <span
                className="ListItem__TaskName"
                onClick={props.onTaskNameClick}
                onMouseDown={mouseDownHandler}
            >{props.taskName}</span>
            <Button
                className={completedButtonClasses.join(' ')}
                clicked={props.onTaskCompletion}
            >
                {props.completed ? <i className="fas fa-redo-alt"></i> : <i className="fas fa-check"></i>}
            </Button>
            <Button
                className={deleteButtonClasses.join(' ')}
                clicked={props.onListItemDeletion}
            >
                <i className="fas fa-times"></i>
            </Button>
        </li>
    );
}

export default listItem;