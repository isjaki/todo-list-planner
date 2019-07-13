import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import ListsManager from './components/ListsManager/ListsManager';
import MyLists from './components/MyLists/MyLists';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/" exact component={ListsManager} />
            <Route path="/my-lists" component={MyLists} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
