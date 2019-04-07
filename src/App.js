import React, { Component } from 'react';
import getKey from './helpers/getKey';
import activateSmoothScroll from './helpers/activateSmoothScroll';
import './App.css';

import AddList from './components/AddList/AddList';
import Lists from './components/Lists/Lists';

class App extends Component {
  constructor(props) {
    super(props);
    this.listsRef = React.createRef();
  }

  state = {
    currentListTitle: '',
    pickedDate: null,
    lists: [
      { id: '5865', title: 'Test list', date: 'March 21, 2019' }
    ],
    calendarOpened: false
  }

  titleChangeHandler = (event) => {
    this.setState({ currentListTitle: event.target.value });
  }

  addNewListHandler = () => {
    const newList = {
      id: getKey(this.state.currentListTitle),
      title: this.state.currentListTitle,
      date: this.state.pickedDate
    }

    const updatedLists = [
      ...this.state.lists
    ];

    updatedLists.push(newList);

    this.setState({
      currentListTitle: '',
      lists: updatedLists
    });

    activateSmoothScroll(this.listsRef.current);
  }

  deleteListHandler = (listIndex) => {
    const updatedLists = [
      ...this.state.lists
    ];

    updatedLists.splice(listIndex, 1);

    this.setState({ lists: updatedLists });
  }

  render() {
    return (
      <div className="App">
          <AddList
            onTitleChange={this.titleChangeHandler}
            addNewList={this.addNewListHandler}
            title={this.state.currentListTitle}
            date={this.state.currentListDate} />
          <Lists
            ref={this.listsRef} 
            todoLists={this.state.lists}
            onListRemove={this.deleteListHandler} />
      </div>
    );
  }
}

export default App;
