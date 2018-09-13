import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classes from './Layout.css'
import Header from '../../components/Header/Header';


import Aux from '../Aux/Aux';
import Footer from '../../components/Footer/Footer';

export default class Layout extends Component {
  render() {
    return (      
      <Aux>        
          <Header />        
          <main className={classes.Content}>
              {this.props.children}                
         </main>    
        {/* <Footer/>        */}
      </Aux>
      
    )  }
}


