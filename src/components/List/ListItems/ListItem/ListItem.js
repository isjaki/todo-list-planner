import React, { Component } from 'react';

import Button from '../../../UI/Button/Button';
import './ListItem.css';

class ListItem extends Component {
    state = {
        buttonsHidden: true
    }

    toggleButtonsClassHandler = () => {
        this.setState(prevState => ({
            buttonsHidden: !prevState.buttonsHidden
        }));
    }

    mouseDownHandler = (event) => {
        event.preventDefault();
    }

    render() {
        const completedButtonClasses = ['ListItemButton', 'Completed'];
        const deleteButtonClasses = ['ListItemButton', 'Delete'];

        if (this.state.buttonsHidden) {
            completedButtonClasses.push('Hidden');
            deleteButtonClasses.push('Hidden');
        }

        return (
            <li className="ListItem">
                {this.props.completed ? <i className="fas fa-check-square"></i> : <i className="fas fa-clock"></i>}
                <span
                    className="ListItem__TaskName"
                    onClick={this.toggleButtonsClassHandler}
                    onMouseDown={this.mouseDownHandler}
                >{this.props.taskName}</span>
                <Button
                    className={completedButtonClasses.join(' ')}
                    clicked={this.props.onTaskCompletion}
                >
                    {this.props.completed ? <i class="fas fa-redo-alt"></i> : <i className="fas fa-check"></i>}
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