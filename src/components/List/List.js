import React, { Component } from 'react';
import getKey from '../../functions/getKey';

import ListItems from '../List/ListItems/ListItems';
import AddItem from '../List/AddItem/AddItem';
import Button from '../UI/Button/Button';
import './List.css';

class List extends Component {
    state = {
        currentTask: '',
        listItems: [
            {id: '3432', taskName: 'to do something', completed: true, buttonsHidden: true},
            {id: '8799', taskName: 'to do something', completed: true, buttonsHidden: true},
            {id: '43534', taskName: 'to do something', completed: false, buttonsHidden: true},
            {id: '3424', taskName: 'to do something', completed: false, buttonsHidden: true},
            {id: '13143', taskName: 'to do something', completed: false, buttonsHidden: true}
        ],
        inputError: false
    }

    inputTaskNameHandler = (event) => {
        this.setState({
            currentTask: event.target.value
        });
    }

    addListItemHandler = () => {
        const newListItem = {
            id: getKey(this.state.currentTask),
            taskName: this.state.currentTask,
            completed: false,
            buttonsHidden: true
        }

        const updatedListItems = [
            ...this.state.listItems
        ];

        updatedListItems.push(newListItem);

        this.setState({
            currentTask: '',
            listItems: updatedListItems
        });
    }

    deleteListItemHandler = (listItemIndex) => {
        const updatedListItems = [
            ...this.state.listItems
        ];

        updatedListItems.splice(listItemIndex, 1);

        this.setState({
            listItems: updatedListItems
        });
    }

    completeTaskHandler = (listItemIndex) => {
        const updatedListItems = [
            ...this.state.listItems
        ];

        updatedListItems[listItemIndex].completed = !updatedListItems[listItemIndex].completed;
        updatedListItems[listItemIndex].buttonsHidden = !updatedListItems[listItemIndex].buttonsHidden;

        this.setState({
            listItems: updatedListItems,
        });
    }

    toggleButtonsClassHandler = (listItemIndex) => {
        const updatedListItems = [
            ...this.state.listItems
        ];

        updatedListItems[listItemIndex].buttonsHidden = !updatedListItems[listItemIndex].buttonsHidden;

        this.setState({
            listItems: updatedListItems
        });
    }

    render() {
        return (
            <div className="List">
                <div className="List__Date"><i className="far fa-clock"></i>{this.props.date}</div>
                <div className="List__Title">{this.props.title}</div>
                <Button 
                    clicked={this.props.deleteList}
                    className="ListButton Delete"
                >Delete</Button>
                <ListItems 
                    tasks={this.state.listItems}
                    onTaskCompletion={this.completeTaskHandler}
                    onListItemDeletion={this.deleteListItemHandler}
                    onTaskNameClick={this.toggleButtonsClassHandler}
                     />
                <AddItem
                    onTaskNameInput={this.inputTaskNameHandler}
                    clicked={this.addListItemHandler}
                    value={this.state.currentTask} />
            </div>
        );
    }
}

export default List;