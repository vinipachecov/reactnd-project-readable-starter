import React, { Component } from 'react'
import classes from './Layout.css'
import Header from '../../components/Header/Header';


import Aux from '../Aux/Aux';
import Footer from '../../components/Footer/Footer';

const Layout = (props) => {
  return (    
    <Aux>        
        <Header />        
        <main className={classes.Content}>
            {props.children}                
        </main>    
      {/* <Footer/>        */}
    </Aux>  
  )
}

export default Layout;

