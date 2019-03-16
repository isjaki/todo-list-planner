import React, { Component } from 'react';
import getKey from './functions/getKey';
import './App.css';

import AddList from './components/AddList/AddList';
import Lists from './components/Lists/Lists';

class App extends Component {
  state = {
    currentListTitle: '',
    currentListDate: '',
    lists: []
  }

  titleChangeHandler = (event) => {
    this.setState({ currentListTitle: event.target.value });
  }

  dateChangeHandler = (event) => {
    this.setState({ currentListDate: event.target.value });
  }

  addNewListHandler = () => {
    const newList = {
      id: getKey(this.state.currentListTitle),
      title: this.state.currentListTitle,
      date: this.state.currentListDate
    }

    const updatedLists = [
      ...this.state.lists
    ];

    updatedLists.push(newList);

    this.setState({
      currentListTitle: '',
      currentListDate: '',
      lists: updatedLists
    });
  }

  render() {
    return (
      <div className="App">
          <h1>TODO LIST PLANNER</h1>
          <AddList
            onTitleChange={this.titleChangeHandler}
            onDateChange={this.dateChangeHandler}
            addNewList={this.addNewListHandler}
            title={this.state.currentListTitle}
            date={this.state.currentListDate} />
          <Lists todoLists={this.state.lists} />
      </div>
    );
  }
}

export default App;
