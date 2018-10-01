import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import uuid from 'uuid';
import moment from 'moment';
import { Redirect } from 'react-router-dom';

import { getPostById, updatePost, createNewPost } from '../../../actions/PostActions'
import { getCategories } from '../../../actions/CategoryActions';
import classes from './EditPost.css'
import { Button } from '@material-ui/core';

export class EditPost extends Component {  

  state = {
    author: '',    
    postContent: '',
    postTitle: '',
    category: '',
    edit: true    
  };

  async componentDidMount() {
    console.log(this);
    const { currentPost } = this.props;
    if (currentPost) {
      this.setState({
        postContent: currentPost.body,
        postTitle: currentPost.title,
        author: currentPost.author,
        category: currentPost.category,
        edit: true
      });
    } else {
      console.log(this);      
      const { postId } = this.props.match.params;
      if (postId !== 'newPost') {
        const post = await this.props.getPostById(postId);                
        this.setState({
          postContent: post.body,
          postTitle: post.title,
          author: post.author,
          category: post.category,
          edit: true
        });
      } else {
        // get all categories
        await this.props.getCategories();
        const { categoryList } = this.props;
        this.setState({ 
          edit: false,
          category: categoryList[0].name          
         });
      }      
    }    
  }

  onPostContentChange = (event) => {
    this.setState({ postContent: event.target.value });
  } 

  onChangeCategory = (event) => {
    this.setState({ category: event.target.value });
  }

  onPostTitleChange = (event) => {
    this.setState({ postTitle: event.target.value });
  } 

  onPostAuthorChange = (event) => {
    this.setState({ author: event.target.value });
  }

  onButtonClick = async () => {
    const { author, postContent, postTitle, category, edit } = this.state;
    const { updatePost, currentPost, createNewPost } = this.props;
    if (edit) {
      if (author !== '' && postContent !== '' && postTitle !== '') {
        const newPostData = {
          author,
          title: postTitle,
          body: postContent
        };
        await updatePost(currentPost.id, newPostData);
        this.props.history.goBack();
      }
    } else {
      // create new Post
      const newPost = {
        id: uuid.v4(),  
        author,
        title: postTitle,
        body: postContent,
        timestamp: moment.now(),
        category
      };
      await createNewPost(newPost);
      this.props.history.goBack();
    }
  }


  render() {
    
    const { 
      author, 
      postContent, 
      postTitle, 
      category, 
      edit 
    } = this.state;
    const {  categoryList } = this.props;
    return (
      <div className={classes.container}>

        <div className={classes.pageTitle}>
          {
            edit ?
            'Edit'
            :
            'Create'
            } Post          
        </div>       
        
        <div className={classes.categoryText}>
          Category: {
            edit ? 
            category
            :
            <select             
            onChange={(event) => {                
              this.onChangeCategory(event)}                               
            }                            
            value={category}
          >                     
          {
            categoryList.length > 0 ?
            categoryList.map(categoryItem => {
              if (categoryItem.name !== 'all') {
                return (
                  <option key={categoryItem.name} value={categoryItem.name}>{categoryItem.name}</option>
                );
              }
              return null;
            })
            :
            null
          }
          </select>       
            }
        </div>

        <div className={classes.textFieldsContainer}>
          <TextField          
          
            className={classes.textBox}
            id="outlined-name"
            label="Author"                      
            value={author}                       
            onChange={event => this.onPostAuthorChange(event)} 
            disabled={edit}
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
            onClick={() => this.onButtonClick()}
            variant="contained"
            color="primary"
            >
            {
              edit ?
              'Save'
              :
              'Create'
            }
          </Button>
        </div > 
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentPost: state.postData.currentPost,  
  categoryList: state.categoryData.categoryList,
})

const mapDispatchToProps = {  
  getPostById,
  updatePost,
  getCategories,
  createNewPost  
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)
