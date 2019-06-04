import React, { Component } from 'react';

import './App.css';

import ListsManager from './components/ListsManager/ListsManager';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <ListsManager />
        </Layout>
      </div>
    );
  }
}

export default App;
