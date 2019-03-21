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
                >{this.props.taskName}</span>
                <Button
                    className={completedButtonClasses.join(' ')}
                >
                    <i className="fas fa-check"></i>
                </Button>
                <Button
                    className={deleteButtonClasses.join(' ')}
                >
                    <i className="fas fa-times"></i>
                </Button>
            </li>
        );
    }
}

export default ListItem;