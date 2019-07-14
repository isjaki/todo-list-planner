import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import ListsManager from './containers/ListsManager/ListsManager';
import MyLists from './containers/MyLists/MyLists';
import Layout from './containers/Layout/Layout';

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
