import React from 'react'
import classes from './PostItem.css';
import { Link } from 'react-router-dom';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import { IconButton, Button } from '@material-ui/core';
import moment from 'moment';


const PostItem = (props) => {
  const { title, commentCount, voteScore, category, id, timestamp, author } = props.post;    
  return (
    <div className={classes.postContainer}>   
      <div className={classes.postLeftBar}>
        <div className={classes.Arrow}>        
          <IconButton onClick={() => {            
            props.onUpdateVote(id, 'upVote')
          }}>
            <KeyboardArrowUp />
          </IconButton>
        </div>        
        {voteScore}      
        <div>
        <IconButton onClick={() => {
          props.onUpdateVote(id, 'downVote')
        }}>
          <KeyboardArrowDown />
        </IconButton>
        </div>
      </div>      
      <div 
        onClick={() => props.onPress(props.post)}
        className={classes.postContent}
      >        
        <Link
          to={`/${category}/post/${id}`}          
        >
          {title}
        </Link>
        <div>
          Comments: {commentCount}
        </div>
        <div className={classes.userPostDetails}>
          <div className={classes.postUserData}>
            <div>
            answered in {moment(timestamp).format('LLLL')}        
            </div>
            <div>
            {author}       
            </div>         
          </div>
          <div>    
          <Button>
            Delete
          </Button>      
          <Button>
              Edit
            </Button>
          </div>
         
        </div>  
      </div>          
    </div>
  )
}



export default PostItem

