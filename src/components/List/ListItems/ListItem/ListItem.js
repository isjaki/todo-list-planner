import React, { Component } from 'react';

import Button from '../../../UI/Button/Button';
import './ListItem.css';

class ListItem extends Component {

    mouseDownHandler = (event) => {
        event.preventDefault();
    }

    render() {
        const completedButtonClasses = ['ListItemButton', 'Completed'];
        const deleteButtonClasses = ['ListItemButton', 'Delete'];

        if (this.props.buttonsHidden) {
            completedButtonClasses.push('Hidden');
            deleteButtonClasses.push('Hidden');
        }

        return (
            <li className="ListItem">
                {this.props.completed ? <i className="fas fa-check-square"></i> : <i className="fas fa-clock"></i>}
                <span
                    className="ListItem__TaskName"
                    onClick={this.props.onTaskNameClick}
                    onMouseDown={this.mouseDownHandler}
                >{this.props.taskName}</span>
                <Button
                    className={completedButtonClasses.join(' ')}
                    clicked={this.props.onTaskCompletion}
                >
                    {this.props.completed ? <i className="fas fa-redo-alt"></i> : <i className="fas fa-check"></i>}
                </Button>
                <Button
                    className={deleteButtonClasses.join(' ')}
                    clicked={this.props.onListItemDeletion}
                >
                    <i className="fas fa-times"></i>
                </Button>
            </li>
        );
    }
}

export default ListItem;