import React from 'react'
import classes from './Post.css'
import moment from 'moment';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import { IconButton, Button } from '@material-ui/core';
import Link from 'react-router-dom/Link';

const Post = (props) => {
  const {     
    body, 
    voteScore,
    title,
    author,
    timestamp,
    id
  } = props.data;
  const { onVotePost, setCurrentPost } = props;
  return (
    <div className={classes.PostDetailContainer}>
      <div className={classes.PostTitle}>
        {title}
      </div>        
      <div className={classes.postContent}>              
          <div className={classes.voteStatusContainer}>        
          <IconButton onClick={() => {
            console.log('votando');
              onVotePost(id, 'upVote');            
            }}
          >
            <KeyboardArrowUp />             
          </IconButton>        
          {voteScore}  
          <IconButton onClick={() => {
              onVotePost(id, 'downVote');
            }}
          >
            <KeyboardArrowDown />        
          </IconButton>          
        </div>   
        <div className={classes.postBody}>
          {body}
        </div>                              
      </div>
      <div className={classes.userPostDetails}>

        <div>
          <Link
             to={`/post/${id}`}
          >
            <Button onClick={() => props.onEditPost(props.data)}>
              Edit
            </Button>
          </Link>
          Posted in {moment(timestamp).format('LLLL')}        
        </div>
        <div>
        <Button onClick={() => props.onDeletePost(id)}>
          Delete
        </Button>      
          {author}          
        </div>
      </div>      
    </div>
  )
}

export default Post
