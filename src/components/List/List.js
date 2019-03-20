import React, { Component } from 'react';
import getKey from '../../functions/getKey';

import ListItems from '../List/ListItems/ListItems';
import AddItem from '../List/AddItem/AddItem';
import Button from '../UI/Button/Button';
import './List.css';

class List extends Component {
    state = {
        currentTask: '',
        listItems: []
    }

    changeTaskNameHandler = (event) => {
        this.setState({
            currentTask: event.target.value
        });
    }

    addListItemHandler = () => {
        const newListItem = {
            id: getKey(this.state.currentTask),
            taskName: this.state.currentTask,
            completed: false
        }

        const updatedListItems = [
            ...this.state.listItems
        ];

        updatedListItems.push(newListItem);

        this.setState({
            listItems: updatedListItems
        });
    }

    render() {
        return (
            <div className="List">
                <div className="List__Date"><i class="far fa-clock"></i>{this.props.date}</div>
                <div className="List__Title">{this.props.title}</div>
                <Button 
                    onClick={this.props.deleteList}
                    className="ListButton Delete"
                >Delete</Button>
                <ListItems />
                <AddItem
                    onTaskNameChange={this.changeTaskNameHandler} />
            </div>
        );
    }
}

export default List;