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
        listItems: [
            {id: '3432', taskName: 'to do something', completed: true, buttonsHidden: true},
            {id: '8799', taskName: 'to do something', completed: true, buttonsHidden: true},
            {id: '43534', taskName: 'to do something', completed: false, buttonsHidden: true},
            {id: '3424', taskName: 'to do something', completed: false, buttonsHidden: true},
            {id: '13143', taskName: 'to do something', completed: false, buttonsHidden: true}
        ],
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

    deleteListItemHandler = (taskId) => {
        const updatedListItems = this.state.listItems
            .filter(listItem => listItem.id !== taskId)

        this.setState({
            listItems: updatedListItems
        });
    }

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
                    sortTasks={this.tasksToDisplayHandler} />
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
                    clicked={this.addListItemHandler}
                    value={this.state.currentTask}
                    hasError={this.state.inputError} />
            </div>
        );
    }
}

export default List;