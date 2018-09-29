import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout';
import { Route, BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Switch } from 'react-router-dom';
import Home from './components/Navigation/Home/Home'
import PostDetails from './components/Navigation/PostDetails/PostDetails';
import EditPost from './components/Navigation/EditPost/EditPost';


export class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Layout>                      
          <Switch>
            {/* <Route path='/' component={EditPost} /> */}
            <Route path='/post/:postId' component={EditPost} />
            <Route 
              path='/:category/post/:postId' component={PostDetails} />
            />
            <Route path='/'  render={ ({ history }) => (
              <Home />            
              )} />                     
          </Switch>
      </Layout>      
     </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
