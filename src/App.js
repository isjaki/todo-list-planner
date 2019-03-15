import React, { Component } from 'react';
import './App.css';

import AddList from './components/AddList/AddList';

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
          <div>Lists</div>
      </div>
    );
  }
}

export default App;
