import React from 'react'
import classes from './Comment.css';
import moment from 'moment';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import { IconButton, Button } from '@material-ui/core';

const Comment = (props) => {
  const { author, timestamp, voteScore, body, id } = props.data;  
  return (
    <div className={classes.commentContainer}>    
      <div className={classes.commentContent}>      
        <div className={classes.voteCommentStatus}>
          <IconButton onClick={() => 
              props.onVoteComment(id, 'upVote')
            }
          >
            <KeyboardArrowUp />             
          </IconButton>
            {voteScore}            
          <IconButton onClick={() => 
              props.onVoteComment(id, 'downVote')
            }
          >
            <KeyboardArrowDown />   
          </IconButton>
        </div>      
        <div className={classes.commentBody}>
          {body}
        </div>
      </div>
      <div className={classes.userCommentDetails}>

        <div>
          <Button onClick={() => props.onSelectComment(props.data)}>
            Edit
          </Button>
            
          answered in {moment(timestamp).format('LLLL')}        
        </div>
        <div>
        <Button onClick={() => props.onDeleteComment(id)}>
          Delete
        </Button>      
          {author}          
        </div>
      </div>
    </div>
  )
}

export default Comment
