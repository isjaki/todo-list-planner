import React, { Component } from 'react';
import './App.css';

import AddList from './components/AddList/AddList';
import Lists from './components/Lists/Lists';

class App extends Component {
  state = {
    currentListTitle: '',
    currentListDate: '',
    lists: []
  }

  titleChangeHandler = () => {

  }

  dateChangeHandler = () => {

  }

  addNewListHandler = () => {

  }

  render() {
    return (
      <div className="App">
          <h1>TODO LIST PLANNER</h1>
          <AddList
            onTitleChange={this.titleChangeHandler}
            onDateChange={this.dateChangeHandler}
            addNewList={this.addNewListHandler} />
          <Lists />
      </div>
    );
  }
}

export default App;
