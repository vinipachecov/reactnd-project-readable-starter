import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import { Route } from 'react-router-dom'
import Home from './components/Navigation/Home/Home'

class App extends Component {

  render() {
    return (
      <Layout>        
        <Route path='/' render={ ({ history }) => (
          <Home />            
          )} />                           
      </Layout>      
    );
  }
}

export default App;
