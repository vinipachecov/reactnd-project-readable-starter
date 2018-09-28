import React from 'react'
import classes from './PostItem.css';
import { Link } from 'react-router-dom';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import { IconButton, Button } from '@material-ui/core';


const PostItem = (props) => {
  const { title, commentCount, voteScore, category, id } = props.post;  
  console.log(props);    
  return (
    <div className={classes.postContainer}>
      <div className={classes.postLeftBar}>
        <div className={classes.Arrow}>        
          <IconButton onClick={() => {
            props.onUpdateVote(id, { voteScore: voteScore + 1 })
          }}>
            <KeyboardArrowUp />
          </IconButton>
        </div>        
        {voteScore}      
        <div>
        <IconButton onClick={() => {
          props.onUpdateVote(id, { id, voteScore: voteScore - 1 })
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
      </div>      
    </div>
  )
}



export default PostItem

