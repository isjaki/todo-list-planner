import React, { Component } from 'react';
import getKey from '../../helpers/getKey';

import ListItems from '../List/ListItems/ListItems';
import AddItem from '../List/AddItem/AddItem';
import Button from '../UI/Button/Button';
import ListStatsWidget from './ListStatsWidget/ListStatsWidged';
import './List.css';

class List extends Component {
    state = {
        currentTask: '',
        listItems: [],
        tasksToDisplay: 'all',
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

    // delete a task
    deleteListItemHandler = (taskId) => {
        const updatedListItems = this.state.listItems
            .filter(listItem => listItem.id !== taskId)

        this.setState({
            listItems: updatedListItems
        });
    }

    // toggle the status of a task (ListItem): active or completed
    completeTaskHandler = (taskId) => {
        const updatedListItems = this.state.listItems
            .map(listItem => {
                if (listItem.id === taskId) {
                    listItem.completed = !listItem.completed;
                    listItem.buttonsHidden = !listItem.buttonsHidden;
                }
                return listItem;
            });

        this.setState({
            listItems: updatedListItems,
        });
    }

    // hide or show buttons in the ListItem component
    toggleButtonsClassHandler = (taskId) => {
        const updatedListItems = this.state.listItems
            .map(listItem => {
                if (listItem.id === taskId) {
                    listItem.buttonsHidden = !listItem.buttonsHidden;
                }
                return listItem;
            });

        this.setState({
            listItems: updatedListItems
        });
    }

    // set which listItems to render, based on which button 
    // user clicked in the ListsStatsWidget component
    tasksToDisplayHandler = (tasksToDisplay) => {
        this.setState({ tasksToDisplay: tasksToDisplay })
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
                <ListStatsWidget 
                    tasks={this.state.listItems}
                    filterTasks={this.tasksToDisplayHandler}
                    tasksToDisplay={this.state.tasksToDisplay} />
                <div className="List__Date"><i className="far fa-clock"></i>{this.props.date}</div>
                <div className="List__Title">{this.props.title}</div>
                <Button 
                    clicked={this.props.deleteList}
                    className="ListButton Delete"
                >Delete</Button>
                <ListItems 
                    tasks={this.state.listItems}
                    tasksToDisplay={this.state.tasksToDisplay}
                    onTaskCompletion={this.completeTaskHandler}
                    onListItemDeletion={this.deleteListItemHandler}
                    onTaskNameClick={this.toggleButtonsClassHandler} />
                <AddItem
                    onTaskNameInput={this.inputTaskNameHandler}
                    onInputFocus={this.inputFocusHandler}
                    onAddListItem={this.addListItemHandler}
                    value={this.state.currentTask}
                    hasError={this.state.inputError} />
            </div>
        );
    }
}

export default List;