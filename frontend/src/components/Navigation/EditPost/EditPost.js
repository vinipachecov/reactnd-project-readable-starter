import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';

import { getPostById } from '../../../actions/PostActions'
import classes from './EditPost.css'
import { Button } from '@material-ui/core';

export class EditPost extends Component {  

  state = {
    author: '',    
    postContent: '',
    postTitle: '',
    category: ''    
  };

  async componentDidMount() {
    const { currentPost } = this.props;
    if (currentPost) {
      this.setState({
        postContent: currentPost.body,
        postTitle: currentPost.title,
        author: currentPost.author,
        category: currentPost.category
      });
    } else {
      console.log(this);
      const { postId } = this.props.match.params;
      const post = await this.props.getPostById(postId);                
      this.setState({
        postContent: post.body,
        postTitle: post.title,
        author: post.author,
        category: post.category
      });
    }    
  }

  onPostContentChange = (event) => {
    this.setState({ postContent: event.target.value });
  } 

  onPostTitleChange = (event) => {
    this.setState({ postTitle: event.target.value });
  } 


  render() {
    
    const { author, postContent, postTitle, category } = this.state;
    
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
            onChange={event => this.onPostTitleChange(event)}
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
            onChange={event => this.onPostContentChange(event)}
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
  getPostById  
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)
