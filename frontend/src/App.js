import React from 'react';
import Layout from './hoc/Layout/Layout';
import { Route, BrowserRouter } from 'react-router-dom'
import { Switch } from 'react-router-dom';
import Home from './components/Navigation/Home/Home'
import PostDetails from './components/Navigation/PostDetails/PostDetails';
import EditPost from './components/Navigation/EditPost/EditPost';



const App = () => {
  return (
    <BrowserRouter>
    <Layout>                      
      <Switch>            
        <Route path='/post/:post_id' component={EditPost} />
        <Route 
          path='/:category/:postId' component={PostDetails} />
        />
        <Route path='/'  render={ ({ history }) => (
          <Home />            
          )} />                     
      </Switch>
  </Layout>      
 </BrowserRouter>
  )
}

export default App;
