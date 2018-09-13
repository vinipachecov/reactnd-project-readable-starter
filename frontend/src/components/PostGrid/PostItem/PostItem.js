import React from 'react'
import PropTypes from 'prop-types'
import classes from './PostItem.css';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';


const PostItem = (props) => {
  const { postName, commentsNumber, overallScore } = props;

  return (
    <div className={classes.postContainer}>
      <div className={classes.postLeftBar}>
        <div className={classes.Arrow}>        
          <KeyboardArrowUp classes={classes.Arrow}/>
        </div>        
        {overallScore}      
        <div>
        <KeyboardArrowDown />
        </div>
      </div>
      <div className={classes.postContent}>        
        <div>
          {postName}
        </div>        
        <div>
          Número de comentários: {commentsNumber}
        </div>
      </div>      
    </div>
  )
}

PostItem.propTypes = {

}

export default PostItem

