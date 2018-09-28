import React from 'react'
import TextField from '@material-ui/core/TextField';
import defaultClasses from './AnswerBox.css';
import { Button } from '@material-ui/core';
import moment from 'moment';
import uuid from 'uuid'

const AnswerBox = (props) => {
  const { 
    onAuthorChange,
    onMessageChange,
    createComment,
    author,
    message,    
    currentPost,
   } = props;   

  return (
    <div className={defaultClasses.boxContainer}>
    <div>
      Add or Edit Comment: 
    </div>
    <form>
    <TextField
      id="outlined-name"
      label="Author Name"     
      value={author}   
      onChange={event => onAuthorChange(event)}
      margin="normal"
      variant="outlined"
    />
      
      <TextField           
        id="filled-multiline-flexible"                                   
        variant="filled"         
        className={defaultClasses.textBox}                                
        placeholder={"Type your comment here."}
        value={message}
        onChange={event => onMessageChange(event)}
        multiline       
        rows='8'             
        margin="normal"          
      />
    </form>
    <Button 
      onClick={() => {
        createComment({        
          id: uuid.v4(),  
          body: message,
          author,
          parentId: currentPost.id,
          timestamp: moment.now(),
          parentDeleted: false,
          voteScore: 0      
        })
      }}
      variant="contained"
      color="primary"
    >
      Post Message
    </Button>
  </div>
  )
}

export default AnswerBox

