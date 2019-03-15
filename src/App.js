import React, { Component } from 'react';
import './App.css';

import AddList from './components/AddList/AddList';
import Lists from './components/Lists/Lists';

class App extends Component {
  state = {
    currentListName: '',
    currentListDate: '',
    lists: []
  }

  render() {
    return (
      <div className="App">
          <h1>TODO LIST PLANNER</h1>
          <AddList />
          <Lists />
      </div>
    );
  }
}

export default App;
