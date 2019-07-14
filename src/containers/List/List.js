import React, { Component } from 'react';
import getKey from '../../helpers/getKey';
import axios from '../../axios-lists';

import ListInfo from '../../components/List/ListInfo/ListInfo';
import ListItems from '../../components/List/ListItems/ListItems';
import AddItem from '../../components/List/AddItem/AddItem';
import Button from '../../components/UI/Button/Button';
import SaveButton from '../../components/UI/Button/SaveButton/SaveButton';
import ListStatsWidget from '../../components/List/ListStatsWidget/ListStatsWidged';
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
        inputError: false,
        listIsSaving: false
    }

    checkInputValidity() {
        if (!this.state.currentTask) {
            this.setState({ inputError: true });
            return false;
        }

        return true;
    }

    inputChangeHandler = (event) => {
        this.setState({
            currentTask: event.target.value,
            inputError: false
        });
    }

    addListItemHandler = event => {
        if (event.key && event.key !== 'Enter') return;

        if (!this.checkInputValidity()) return;

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
    deleteTaskHandler = (taskId) => {
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
    tasksToDisplayHandler = (filterButtonChosen) => {
        this.setState({ tasksToDisplay: filterButtonChosen })
    }

    saveListHandler = () => {
        this.setState({ listIsSaving: true });

        const todoList = {
            listId: this.props.listData.id,
            title: this.props.listData.title,
            date: this.props.listData.date,
            listItems: this.state.listItems
        }

        axios.post('/lists.json', todoList)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                this.setState({ listIsSaving: false });
            });
    }

    render() {
        return (
            <div className="List">
                <ListStatsWidget 
                    tasks={this.state.listItems}
                    filterTasks={this.tasksToDisplayHandler}
                    tasksToDisplay={this.state.tasksToDisplay} />
                <ListInfo 
                    date={this.props.listData.date}
                    title={this.props.listData.title} />
                <Button 
                    clicked={this.props.deleteList}
                    className="ListButton Delete"
                >Delete</Button>
                <ListItems 
                    tasks={this.state.listItems}
                    tasksToDisplay={this.state.tasksToDisplay}
                    onTaskCompletion={this.completeTaskHandler}
                    onTaskDeletion={this.deleteTaskHandler}
                    onTaskClick={this.toggleButtonsClassHandler} />
                <AddItem
                    onInputChange={this.inputChangeHandler}
                    onAddListItem={this.addListItemHandler}
                    value={this.state.currentTask}
                    inputError={this.state.inputError} />
                <SaveButton 
                    onSave={this.saveListHandler}
                    isSaving={this.state.listIsSaving} />
            </div>
        );
    }
}

export default List;