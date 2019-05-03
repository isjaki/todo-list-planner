import React, { Component } from 'react';
import getKey from '../../helpers/getKey';

import ListItems from '../List/ListItems/ListItems';
import AddItem from '../List/AddItem/AddItem';
import Button from '../UI/Button/Button';
import './List.css';

class List extends Component {
    state = {
        currentTask: '',
        listItems: [],
        inputError: false
    }

    inputTaskNameHandler = (event) => {
        this.setState({
            currentTask: event.target.value
        });
    }

    addListItemHandler = () => {
        if (!this.state.currentTask) {
            this.setState({ inputError: true });
            return;
        }

        const newListItem = {
            id: getKey(this.state.currentTask),
            taskName: this.state.currentTask,
            completed: false,
            buttonsHidden: false
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

    inputFocusHandler = () => {
        if (this.state.inputError) {
            this.setState({
                inputError: false
            });
        }
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
                    onTaskNameClick={this.toggleButtonsClassHandler} />
                <AddItem
                    onTaskNameInput={this.inputTaskNameHandler}
                    onInputFocus={this.inputFocusHandler}
                    clicked={this.addListItemHandler}
                    value={this.state.currentTask}
                    hasError={this.state.inputError} />
            </div>
        );
    }
}

export default List;