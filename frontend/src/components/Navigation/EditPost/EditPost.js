import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';

import classes from './EditPost.css'
import { Button } from '@material-ui/core';

export class EditPost extends Component {  

  state = {
    author: '',    
    postContent: '',
    postTitle: ''
  };

  componentDidMount() {
    const { currentPost } = this.props;
    this.setState({
      postContent: currentPost.body,
      postTitle: currentPost.title,
      author: currentPost.author
    });
  }

  render() {
    const { category } = this.props.currentPost;
    const { author, postContent, postTitle } = this.state;
    
    return (
      <div className={classes.container}>

        <div className={classes.pageTitle}>
          Edit Post          
        </div>       
        
        <div className={classes.categoryText}>
          Category: {category}
        </div>

        <div className={classes.textFieldsContainer}>
          <TextField          
          
            className={classes.textBox}
            id="outlined-name"
            label="Author"          
            value={'Nome do autor'}          
            value={author}
            disabled={true}
            margin="normal"
            variant="outlined"
          />
          <TextField
            className={classes.textBox}            
            id="outlined-name"
            label="Title"                      
            value={postTitle}          
            margin="normal"
            variant="outlined"
          />
          <TextField
            className={classes.textFieldContent}
            id="outlined-name"
            label="Content"          
            value={'Message of this post'}          
            margin="normal"
            value={postContent}
            variant="outlined"
            multiline       
            rows='4'  
          />

        </div>      
        <div className={classes.saveButton}>
          <Button  
            className={classes.saveButton}
            variant="contained"
            color="primary"
            >
            Save
          </Button>
        </div > 
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentPost: state.postData.currentPost,  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)
