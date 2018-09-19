import React from 'react'
import classes from './PostItem.css';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';


const PostItem = (props) => {
  const { postName, commentsNumber, overallScore } = props;

  return (
    <div className={classes.postContainer}>
      <div className={classes.postLeftBar}>
        <div className={classes.Arrow}>        
          <KeyboardArrowUp />
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
          Comments: {commentsNumber}
        </div>
      </div>      
    </div>
  )
}

PostItem.propTypes = {

}

export default PostItem

