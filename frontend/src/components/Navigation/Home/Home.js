import React, { Component } from 'react'
import classes from './Home.css'
import PostGrid from '../../PostGrid/PostGrid';

export default class Home extends Component {
  render() {
    return (
      <div className={classes.container}>
        <PostGrid />
      </div>
    )
  }
}
