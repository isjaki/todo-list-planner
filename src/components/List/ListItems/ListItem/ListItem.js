import React, { Component } from 'react';

import Button from '../../../UI/Button/Button';
import './ListItem.css';

class ListItem extends Component {
    render() {
        return (
            <li className="ListItem">
                {this.props.completed ? <i className="fas fa-check-square"></i> : <i className="fas fa-clock"></i>}
                <span className="ListItem__TaskName">{this.props.taskName}</span>
                <Button
                    className="ListItemButton Completed Hidden"
                >
                    <i className="fas fa-check"></i>
                </Button>
                <Button
                    className="ListItemButton Delete Hidden"
                >
                    <i className="fas fa-times"></i>
                </Button>
            </li>
        );
    }
}

export default ListItem;